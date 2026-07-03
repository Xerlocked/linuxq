# LinuxQ

리눅스마스터 문제은행 기반 학습 및 모의시험 웹앱입니다.

## 실행

별도 설치 없이 `index.html`을 열거나 정적 서버로 실행합니다.

```powershell
python -m http.server 4173
```

브라우저에서 `http://127.0.0.1:4173`에 접속합니다.

## GitHub Pages 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy-pages.yml`이 사이트를 자동 배포합니다.

1. GitHub에서 빈 저장소를 생성합니다.
2. 저장소의 **Settings → Pages → Build and deployment → Source**를
   **GitHub Actions**로 설정합니다.
3. 로컬 저장소에 GitHub 원격을 연결하고 푸시합니다.

```powershell
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git add .
git commit -m "Deploy LinuxQ"
git push -u origin main
```

배포 주소는 일반 프로젝트 저장소 기준으로
`https://USERNAME.github.io/REPOSITORY/`입니다.

## 문제 데이터 다시 추출

```powershell
node scripts/extract-questions.mjs "C:\Users\xhous\Desktop\Linux.md" questions.js
```
