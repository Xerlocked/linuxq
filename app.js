(() => {
  const questions = window.LINUX_QUESTIONS ?? [];
  const app = document.querySelector("#app");
  const toast = document.querySelector("#toast");
  const STORAGE_KEY = "linuxq-state-v1";
  const symbols = ["①", "②", "③", "④"];

  const emptyState = () => ({
    view: "home",
    mode: null,
    current: 0,
    practiceAnswers: {},
    practiceRevealed: {},
    practiceNotes: {},
    examIds: [],
    examAnswers: {},
    result: null,
  });

  const loadState = () => {
    try {
      return { ...emptyState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
    } catch {
      return emptyState();
    }
  };

  let state = loadState();

  const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const notify = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(notify.timer);
    notify.timer = setTimeout(() => toast.classList.remove("show"), 1800);
  };

  const shuffle = (values) => {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const activeQuestions = () =>
    state.mode === "exam"
      ? state.examIds.map((id) => questions.find((question) => question.id === id))
      : questions;

  const scrollTop = () => {
    app.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const splitQuestion = (question) => {
    const [title, ...contextLines] = question.split("\n");
    const context = contextLines.join("\n").trim();
    const nonEmptyLines = contextLines.filter((line) => line.trim()).length;
    const looksLikeCode =
      nonEmptyLines > 1 ||
      /(^|\n)\s*(?:[$#]|\[[^\]]+@[^\]]+\]|-[rwx-]{3}|[\w-]+:[*!$x:]|Server\s*:|Address\s*:)/m.test(
        context,
      );
    return {
      title: title.replace(/^\d+(?:-\d+)?\.\s*/, "").trim(),
      context,
      looksLikeCode,
    };
  };

  const renderHome = () => {
    const practiceCount = Object.keys(state.practiceAnswers).length;
    const examCount = Object.keys(state.examAnswers).length;
    const noteCount = Object.keys(state.practiceNotes).length;
    app.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Linux Master Study</p>
        <h1>명령어는 외우고,<br />실력은 확인하세요.</h1>
        <p class="hero-copy">
          총 ${questions.length}개의 문제은행으로 개념을 익히고,
          50문제 모의시험으로 실제 점수를 확인할 수 있습니다.
        </p>
      </section>

      <section class="mode-grid" aria-label="학습 모드 선택">
        <button class="mode-card" data-action="start-practice">
          <span class="mode-number">01 · LEARN</span>
          <h2>정답 보기 모드</h2>
          <p>문제마다 정답과 상세 해설을 바로 확인합니다.</p>
        </button>
        <button class="mode-card accent" data-action="start-exam">
          <span class="mode-number">02 · TEST</span>
          <h2>실전 모드</h2>
          <p>무작위 50문제 · 문제당 2점 · 최종 채점</p>
        </button>
      </section>

      <div class="home-tools">
        <span class="saved-state">
          저장된 답안: 학습 ${practiceCount}개 · 실전 ${examCount}개 · 메모 ${noteCount}개
        </span>
        <button class="text-button" data-action="reset">저장된 선택지 초기화</button>
      </div>
    `;
  };

  const renderOptions = (question, selected, revealed) =>
    question.options
      .map((option, index) => {
        const isSelected = selected === index;
        const isCorrect = revealed && question.answer === index;
        const isWrong = revealed && isSelected && question.answer !== index;
        const classes = [
          "option",
          isSelected ? "selected" : "",
          isCorrect ? "correct" : "",
          isWrong ? "wrong" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return `
          <button
            class="${classes}"
            data-action="select-option"
            data-index="${index}"
            ${revealed ? "disabled" : ""}
            aria-pressed="${isSelected}"
          >
            <span class="option-key">${index + 1}</span>
            <span>${escapeHtml(option)}</span>
          </button>
        `;
      })
      .join("");

  const renderSidebar = (list, answers) => `
    <aside class="exam-sidebar" aria-label="문제 이동">
      <div class="sidebar-head">
        <h2>문제 목록</h2>
        <span>${Object.keys(answers).length} / ${list.length} 완료</span>
      </div>
      <select class="question-select" data-action="jump-select" aria-label="문제 번호 선택">
        ${list
          .map(
            (_, index) =>
              `<option value="${index}" ${index === state.current ? "selected" : ""}>
                ${index + 1}번 문제 ${answers[index] !== undefined ? "· 완료" : ""}
              </option>`,
          )
          .join("")}
      </select>
      <div class="number-grid">
        ${list
          .map(
            (_, index) => `
              <button
                class="number-button ${answers[index] !== undefined ? "answered" : ""} ${
                  index === state.current ? "current" : ""
                }"
                data-action="jump"
                data-index="${index}"
                aria-label="${index + 1}번 문제로 이동"
              >${index + 1}</button>
            `,
          )
          .join("")}
      </div>
      <p class="sidebar-note">답안은 선택 즉시 자동 저장됩니다.</p>
    </aside>
  `;

  const renderMemo = (question) => {
    const note = state.practiceNotes[question.id] ?? "";
    return `
      <aside class="memo-sidebar" aria-label="문제 메모">
        <div class="memo-head">
          <div>
            <span class="memo-eyebrow">MY NOTE</span>
            <h2>문제 메모</h2>
          </div>
          <span class="memo-saved" data-memo-status>${note ? "저장됨" : ""}</span>
        </div>
        <textarea
          class="memo-input"
          data-action="memo-input"
          data-question-id="${question.id}"
          placeholder="헷갈린 개념이나 외울 내용을 적어두세요."
          aria-label="문제 ${state.current + 1} 메모"
        >${escapeHtml(note)}</textarea>
        <div class="memo-footer">
          <span>문제별로 자동 저장됩니다.</span>
          <button
            class="memo-clear"
            data-action="clear-memo"
            ${note ? "" : "disabled"}
          >메모 지우기</button>
        </div>
      </aside>
    `;
  };

  const renderQuestion = () => {
    const list = activeQuestions();
    if (!list.length) {
      state = emptyState();
      save();
      renderHome();
      return;
    }

    state.current = Math.min(Math.max(state.current, 0), list.length - 1);
    const question = list[state.current];
    const isPractice = state.mode === "practice";
    const answers = isPractice ? state.practiceAnswers : state.examAnswers;
    const revealed = isPractice && Boolean(state.practiceRevealed[state.current]);
    const selected = answers[state.current];
    const isLast = state.current === list.length - 1;
    const allAnswered = Object.keys(answers).length === list.length;
    const prompt = splitQuestion(question.question);

    app.innerHTML = `
      <div class="exam-layout">
        <section class="question-card">
          <div class="question-meta">
            <span class="mode-pill">${isPractice ? "정답 보기 모드" : "실전 모드"}</span>
            <span class="question-count">${state.current + 1} / ${list.length}</span>
          </div>
          <div class="progress-track" aria-hidden="true">
            <span style="width: ${((state.current + 1) / list.length) * 100}%"></span>
          </div>

          <div class="question-heading">
            <span class="question-order">문제 ${state.current + 1}</span>
            <h1 class="question-title">${escapeHtml(prompt.title)}</h1>
          </div>
          ${
            prompt.context
              ? prompt.looksLikeCode
                ? `<pre class="question-code"><code>${escapeHtml(prompt.context)}</code></pre>`
                : `<div class="question-context">${escapeHtml(prompt.context)}</div>`
              : ""
          }
          <div class="options">${renderOptions(question, selected, revealed)}</div>

          ${
            revealed
              ? `
                <div class="explanation">
                  <h3>정답 ${symbols[question.answer]} · ${escapeHtml(
                    question.options[question.answer],
                  )}</h3>
                  <p>${escapeHtml(question.explanation)}</p>
                </div>
              `
              : ""
          }

          <div class="question-actions">
            <button
              class="button secondary"
              data-action="previous"
              ${state.current === 0 ? "disabled" : ""}
            >이전 문제</button>
            ${
              isPractice && !revealed
                ? `<button class="button primary" data-action="reveal" ${
                    selected === undefined ? "disabled" : ""
                  }>정답 확인</button>`
                : isLast && !isPractice
                  ? `<button class="button primary" data-action="grade" ${
                      allAnswered ? "" : "disabled"
                    }>최종 채점${allAnswered ? "" : ` (${Object.keys(answers).length}/${list.length})`}</button>`
                  : `<button class="button primary" data-action="next" ${
                      selected === undefined || (isPractice && !revealed) ? "disabled" : ""
                    }>${isLast ? "학습 완료" : "다음 문제"}</button>`
            }
          </div>
        </section>
        ${isPractice ? renderMemo(question) : renderSidebar(list, answers)}
      </div>
    `;
  };

  const gradeExam = () => {
    const list = activeQuestions();
    const wrong = [];
    let correct = 0;
    list.forEach((question, index) => {
      const selected = state.examAnswers[index];
      if (selected === question.answer) correct += 1;
      else wrong.push({ question, selected, number: index + 1 });
    });
    state.result = { score: correct * 2, correct, wrong };
    state.view = "result";
    save();
    renderResult();
    scrollTop();
  };

  const renderResult = () => {
    if (!state.result) {
      state.view = "home";
      renderHome();
      return;
    }

    const { score, correct, wrong } = state.result;
    app.innerHTML = `
      <section class="result-hero">
        <div>
          <p class="eyebrow">Test Complete</p>
          <h1>채점이 완료되었습니다.</h1>
          <p>50문제 중 ${correct}문제 정답 · ${wrong.length}문제 오답</p>
          <div class="result-actions">
            <button class="button primary" data-action="home">홈으로</button>
            <button class="button secondary" data-action="restart-exam">새 시험 시작</button>
          </div>
        </div>
        <div class="score" aria-label="${score}점">${score}<small>점</small></div>
      </section>

      <section class="review-section">
        <h2>오답 해설 ${wrong.length}</h2>
        ${
          wrong.length
            ? `<div class="review-list">
                ${wrong
                  .map(
                    ({ question, selected, number }) => `
                      <article class="review-card">
                        <h3>${number}. ${escapeHtml(
                          question.question.replace(/^\d+(?:-\d+)?\.\s*/, ""),
                        )}</h3>
                        <p class="answer-line">내 답: <strong>${
                          selected === undefined
                            ? "미응답"
                            : `${symbols[selected]} ${escapeHtml(question.options[selected])}`
                        }</strong></p>
                        <p class="answer-line">정답: <strong>${symbols[question.answer]} ${escapeHtml(
                          question.options[question.answer],
                        )}</strong></p>
                        <p class="review-explanation">${escapeHtml(question.explanation)}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>`
            : `<div class="empty-review">모든 문제를 맞혔습니다. 오답 해설이 없습니다.</div>`
        }
      </section>
    `;
  };

  const startPractice = () => {
    state.view = "question";
    state.mode = "practice";
    state.current = 0;
    save();
    renderQuestion();
    scrollTop();
  };

  const startExam = () => {
    const hasActiveExam =
      state.examIds.length === 50 &&
      Object.keys(state.examAnswers).length > 0 &&
      !state.result;
    if (!hasActiveExam) {
      state.examIds = shuffle(questions.map((question) => question.id)).slice(0, 50);
      state.examAnswers = {};
    }
    state.view = "question";
    state.mode = "exam";
    state.current = 0;
    state.result = null;
    save();
    renderQuestion();
    scrollTop();
  };

  const goHome = () => {
    state.view = "home";
    save();
    renderHome();
    scrollTop();
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    const index = Number(target.dataset.index);

    if (action === "home") goHome();
    if (action === "start-practice") startPractice();
    if (action === "start-exam" || action === "restart-exam") {
      if (action === "restart-exam") {
        state.examAnswers = {};
        state.examIds = [];
        state.result = null;
      }
      startExam();
    }
    if (action === "reset") {
      const notes = state.practiceNotes;
      state = { ...emptyState(), practiceNotes: notes };
      save();
      renderHome();
      notify("저장된 선택지를 초기화했습니다.");
    }
    if (action === "select-option") {
      const answers = state.mode === "practice" ? state.practiceAnswers : state.examAnswers;
      answers[state.current] = index;
      save();
      renderQuestion();
    }
    if (action === "reveal") {
      state.practiceRevealed[state.current] = true;
      save();
      renderQuestion();
    }
    if (action === "previous") {
      state.current -= 1;
      save();
      renderQuestion();
      scrollTop();
    }
    if (action === "next") {
      const list = activeQuestions();
      if (state.current < list.length - 1) {
        state.current += 1;
        save();
        renderQuestion();
        scrollTop();
      } else {
        goHome();
        notify("전체 학습을 완료했습니다.");
      }
    }
    if (action === "jump") {
      state.current = index;
      save();
      renderQuestion();
      scrollTop();
    }
    if (action === "grade") gradeExam();
    if (action === "clear-memo") {
      const question = activeQuestions()[state.current];
      delete state.practiceNotes[question.id];
      save();
      renderQuestion();
      notify("현재 문제의 메모를 삭제했습니다.");
    }
  });

  document.addEventListener("input", (event) => {
    if (!event.target.matches('[data-action="memo-input"]')) return;
    const questionId = event.target.dataset.questionId;
    const value = event.target.value;
    if (value) state.practiceNotes[questionId] = value;
    else delete state.practiceNotes[questionId];
    save();

    const status = document.querySelector("[data-memo-status]");
    if (status) {
      status.textContent = "저장됨";
      clearTimeout(status.timer);
      status.timer = setTimeout(() => {
        status.textContent = value ? "저장됨" : "";
      }, 900);
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches('[data-action="jump-select"]')) {
      state.current = Number(event.target.value);
      save();
      renderQuestion();
      scrollTop();
    }
  });

  if (!questions.length) {
    app.innerHTML = "<p>문제 데이터를 불러오지 못했습니다.</p>";
  } else if (state.view === "result" && state.result) {
    renderResult();
  } else {
    renderHome();
  }
})();
