window.LINUX_QUESTIONS = [
  {
    "id": 1,
    "sourceLabel": "1.",
    "question": "다음 중 리눅스 기본 디렉터리에 대한 설명으로 틀린 것은?",
    "options": [
      "/bin에는 기본 실행파일들, 즉 사용자 명령어들이 있다.",
      "/etc에는 시스템 관리시 필요한 설정파일들이 있다.",
      "/opt에는 각 장치에 필요한 socket 및 log파일들이 있다.",
      "/proc에는 시스템 관리를 목적으로 메모리상에 만들어 놓은 가상 디렉터리로서, 디렉터리내의 파일들은 현재 시스템 설정을 보여준다."
    ],
    "answer": 2,
    "explanation": "/opt\n응용프로그램 설치를 위한 폴더\n\nAdd-On (응용)소프트웨어 패키지가 설치됩니다. 레드햇 리눅스는 이 디렉토리를 구성하지 않습니다. 패키지 매니저가 설치와 삭제를 수행.\n\n대부분의 로그 파일은 /var/log 파일에 저장됩니다.\n\n리눅스 디렉터리\n\n/dev [Device : 장치] – 마운트 지점을 제공\n시스템에 장착되어 있는 주변 장치(마우스, 키보드, 모니터,그래픽카드, CD롬, 하드디스크 등)을 파일로 처리하여 저장하고 있습니다.(드라이버)\n\n/etc [Etcetera : 기타, 여러가지, 잡동사니]\n시스템 설정 파일이 들어 있는 폴더 입니다.\n사용자 정보를 가지고 있는 passwd (/etc/shadow에 저장됨), 그룹정의 파일인 group, 프린터 목록파일 printcap, 자동으로 마운트 되는 파일 시스템을 등록해 두는 파일 시스템 테이블 fstab, 각종 네트워크관련 파일과 기본적인 시스템 환경 결정 파일들이 있습니다.\n\n/bin [Binary : 2진법의] – 외부명령어 위치( 명령어 실행 전에 fork(서브프로세스)가 실행됨.)\n(/bin/bash) 기본적인 파일처리 명령, 텍스트 처리 명령, 네트워크 처리 명령 등 여러 가지의 명령어들이 실행 파일의 형태로 저장되어 있습니다. 이 안에 있는 명령어들은 어떠한 경로에 있던지 실행되게 되어 있으므로 꼭 이 경로로 와서 실행할 필요는 없습니다.\n\n/lib [Library : 도서관, 서재등]\n시스템과 응용프로그램에서 사용하는 대부분의 라이브러리가 들어 있는 디렉터리 입니다.\n이 폴더는 중요한 부분이므로 임의 조작을 하지 않는 것이 좋습니다.\n\n/home\n사용자 계정을 만들면 사용자 계정의 이름과 동일한 디렉터리가  /home 디렉터리 아래에 만들어 집니다.\n이 디렉터리는 사용자 계정마다 기본적으로 제공되는 것으로, 새로 등록한 사용자는 이 디렉터리 안에서만 컴퓨터를 사용할 수 있습니다.\n다른 디렉터리의 이동 시 허가 받지 않은 경로는 이용이 제한됩니다.\n허가와 금지는 “시스템 관리자”가 지정할 수 있습니다.\n개인용 공간으로 이해 하시면 되겠습니다.\n\n/root\n이곳은 root 사용자만 사용이 가능합니다.\n일반 사용자들의 출입이 엄격하게 금지되어 있는 공간입니다.\n\n/proc [Process]\n커널과 프로세스를 위한 가상 파일 시스템 디렉터리, ‘가상파일시스템’에 메모리에 존재하는 작업들이 파일 형태로 존재함.\n이 디렉터리는 시스템의 CPU정보가 있는 cpuinfo파일과 사용중인 인터럽트 목록과 인터럽트 발생 번호가 나오는 interrupts파일, 사용중인 I/o주소 목록을 확인하는 ioports파일, PCI BIOS정보를 보여주는 pci파일, 시스템 통계를 보여주는 stat파일 등이 있습니다.\n\n/boot\n리눅스 계열에서 OS 부팅에 사용되는 파일을 담는 폴더, GRUB[부트로더), lost+found [fsck등에서 발견된 결함이 있는 파일에 대한 정보를 보관]\n\n/sbin [System Binary]\n파일 시스템 처리 명령, 네트워크 인터페이스 설정 명령, 시스템 초기화 명령, 커널 모듈의 관리 명령 등 시스템의 전반적인 관리 명령어들이 있는 디렉터리 입니다.\n이 디렉터리 파일의 사용은 root 계정 에게만 허가되어 있습니다.\n\n/tmp [Temporary : 일시적인, 임시](기본적으로 Sticky-bit가 설정됨)\n어떤 작업을 위해서 임시로 파일을 생성하는 공간입니다.\n주로 사용자들의 프로그램에서 임시로 읽어 들여야 하는 입,출력 파일들을 저장하는 곳입니다.\n\n/var [Variable Data]\n시스템을 가동하면서 생기는 각종 임시 파일을 저장하는 디렉터리 입니다.(/var/log 대부분의 로그파일, 전자 메일, 프린트 관련 파일 저장)\n커널 메시지를 기록하는 파일, 그리고 각종 스풀링이 필요한 파일들\n*스풀링은 프린터 인쇄 명령 시 프린터와 CPU간 속도 차이를 극복하고자 생긴 기능으로 CPU에서 일정 저장공간에 인쇄할 목록을 쌓아두고 프린터는 해당 목록의 인쇄를 순서대로 진행하는 것을 말합니다.\n\n/usr[Universal System Resources]\n시스템, 응용프로그램에서 필요한 파일들이 저장되어 있는 디렉터리입니다.\n설치 할 때 하드디스크에서 가장 많은 용량을 지정해 주어야 하는 디렉터리 입니다.\n\n/opt [OPeraTion]\nAdd-On (응용)소프트웨어 패키지가 설치됩니다. 레드햇 리눅스는 이 디렉터리를 구성하지 않습니다.\n패키지 매니저가 설치와 삭제를 수행.\n\n/lost+found\n파일 시스템 복구를 위한 fsck의 링크 디렉터리"
  },
  {
    "id": 2,
    "sourceLabel": "1-1.",
    "question": "다음 중 사용자 추가 시에 기본적으로 제공되는 파일이나 디렉터리를 추가하려고 할 때 이용하는 디렉터리로 알맞은 것은?",
    "options": [
      "/etc/default/useradd",
      "/etc/skel",
      "/etc/login.defs",
      "/var/spool"
    ],
    "answer": 1,
    "explanation": "/etc/login.defs : 전체 사용자 계정의 기본정책이 설정된 파일\n\n/etc/default/useradd : 계정 생성 시 적용되는 기본 정책\n\n/etc/skel : 계정의 홈 디렉토리에 제공 할 기본 환경설정 파일\n\n사용자 계정을 생성 했을 때 skel 디렉터리에 있는 파일들이 자동으로 사용자 홈 디렉터리로 복사됨\n\n/var/spool : 프린터 작업처리를 기다라는 파일이 임시로 저장되는 공간"
  },
  {
    "id": 3,
    "sourceLabel": "2.",
    "question": "다음 중 콘솔 모드나 터미널 창에서 로그아웃하는 방법으로 틀린 것은?",
    "options": [
      "logout",
      "exit",
      "[Ctrl]+[c]",
      "[Ctrl]+[d]"
    ],
    "answer": 2,
    "explanation": "Ctrl + c는 로그아웃이 되지 않습니다.\n로그아웃과 정상적인 시스템 종료는 차이가 있습니다.\n정상적인 종료를 말 그대로 리눅스 시스템을 종료한다는 의미 즉 전원이 off 됨을 의미하구요.\n\n리눅스 시스템은 ON 되어 있는 상태에서 현 사용자만 로그아웃(연결종료)을 한다는 의미입니다.\nlogout, exit, Ctrl + d는 모두 로그아웃과 같은 결과를 냅니다.\n\nctrl + c는 주로 리눅스 명령어를 실행하다 \"중지\"시킬 때 사용합니다.\n\n프로세스 시그널에서 SIGINT 즉 Interrupt신호(현재 실행 중인 프로그램을 중지)에 사용됩니다."
  },
  {
    "id": 4,
    "sourceLabel": "3.",
    "question": "다음 (괄호) 안에 들어갈 명령으로 알맞은 것은?\n[kaituser@www ~]$(       )\n/home/kaituser",
    "options": [
      "which",
      "whereis",
      "pwd",
      "cd"
    ],
    "answer": 2,
    "explanation": "which 명령어는 특정 명령어의 위치를 찾아주는 명령어입니다.\n‘which [명령어]’와 같은 방식으로 사용됩니다.\n예)which find → /usr/bin/find\n\nwhereis는 명령어의 실행파일위치, 소스위치, man 페이지파일의 위치를 찾아주는 명령어입니다. 이 또한 whereis만 사용되지 않고 'whereis [명령어]' 와 같이 사용됩니다.\n예) whereis find\n\n참고로 위치를 찾는 명령어 중에 locate로 있습니다.\nlocate는 다양한 패턴의 파일들을 찾고자 할 때 매우 유용하게 사용되는 명령어입니다.\n\npwd는 print working directory의 약자로, 현재 작업 중인 디렉토리의 절대 경로를 출력하는 명령어입니다.\n\ncd는 change directory를 뜻하면, 디렉토리간 이동을 할 때 사용하는 명령어입니다."
  },
  {
    "id": 5,
    "sourceLabel": "3-1.",
    "question": "다음 중 man 명령 실행과 가장 관계가 깊은 명령어로 알맞은 것은?",
    "options": [
      "cat",
      "more",
      "less",
      "which"
    ],
    "answer": 2,
    "explanation": "man, cat, more, less는 문서 파일의 내용을 읽을 때 사용하는 명령어들 입니다.\n\nman과 less는 페이지 단위로 내용을 확인 해 볼 수 있습니다.\n\n그리고 man과 less는 이미 지나간 페이지도 다시 돌아와서 볼 수 있습니다.\n\n페이지 단위 출력이지만 한 줄씩 내용을 살펴 볼 수도 있습니다.\n\nwhich 명령어는 특정 명령어의 위치를 찾아주는 명령어입니다.\n\n‘which [명령어]’와 같은 방식으로 사용됩니다.\n예)which find → /usr/bin/find\n\nmore : 파일을 읽어 화면에 화면 단위로 끊어서 출력하는 명령어\n\ncat : 파일의 내용을 한 번에 모든내용을 출력\n\nless : 파일을 읽어 화면에 출력하는 명령어\n\nmore는 파일의 위에서 아래 방향으로만 출력 됩니다.\n\n그렇기 때문에 지나간 내용을 다시 볼 수 없습니다.\n\n반면 less는 한 번에 보여지는 만큼만 읽어서 출력하기 때문에 대용량의 파일을 열어 볼 때 빠르게 사용 할 수 있습니다.(man도 사용법이 유사합니다.)"
  },
  {
    "id": 6,
    "sourceLabel": "3-1.",
    "question": "다음 중 pwd 명령어에 대한 설명으로 알맞은 것은?",
    "options": [
      "사용자의 password를 수정하기 위한 명령이다.",
      "작업 중인 디렉터리의 경로를 알기 위한 명령이다.",
      "사용자의 홈 디렉터리를 알기 위한 명령이다.",
      "디렉터리에 존재하는 파일의 개수를 알기 위한 명령이다."
    ],
    "answer": 1,
    "explanation": "pwd는 print working directory의 줄임말로, 현재 작업 중인 디렉터리 즉 사용자가 현재 있는 위치를 파악하고자 할 때 사용하는 명령어입니다."
  },
  {
    "id": 7,
    "sourceLabel": "3-2.",
    "question": "다음중 which 명령 실행과 가장 관계가 깊은 환경변수로 알맞은 것은?",
    "options": [
      "TERM",
      "PS1",
      "PATH",
      "DISPLAY"
    ],
    "answer": 2,
    "explanation": "which 명령어는 특정 명령어의 위치를 찾아주는 명령어입니다.\n\n‘which [명령어]’와 같은 방식으로 사용됩니다.\n\n예)which find → /usr/bin/find\n\nTERM은 터미널 설정과 관련된 것이고, PS1은 명령 프롬포트, DISPLAY은 모니터 출력과 관련된 부분입니다. 위에서 which는 명령어의 위치와 관련된 것으로 경로(PATH) 환경 변수와 과련이 있습니다."
  },
  {
    "id": 8,
    "sourceLabel": "4.",
    "question": "userdel명령어로 계정을 삭제할 때, 해당 계정 홈 디렉터리의 하위 디렉터리까지 삭제하는 옵션은?",
    "options": [
      "-r",
      "-R",
      "-d",
      "-D"
    ],
    "answer": 1,
    "explanation": "userdel  :  계정삭제[계정만 삭제}\nuserdel -r  : 계정에 대한 모든 정보 삭제[계정+홈 디렉터리도 삭제]\nuserdel -f :  계정을 강제로 삭제\nuserdel -R : \n\nuseradd -D : 해당 계정의 기본 홈 디렉터리에 대한 정보 확인"
  },
  {
    "id": 9,
    "sourceLabel": "5.",
    "question": "다음 설명에 해당하는 명령으로 알맞은 것은?\n하나의 파일을 여러 개의 작은 파일로 분리하는 명령으로 옵션을 지정하지 않고 실행하면 1000줄 단위로 파일을 분리한다.",
    "options": [
      "cut",
      "sort",
      "split",
      "wc"
    ],
    "answer": 2,
    "explanation": "cut : 각 줄마다 필요한 부분만 잘라내어 반환해주는 명령어\n\n옵션\n-d: 구분자 설정(기본적으로 구분자를 tab 문자로 사용)\n-f: 추출할 위치 또는 구간 설정\n\nsort : 숫자순, 알파벳 순으로 정렬해주는 명령어\n\n옵션\n-r: 내림차순 정렬(기본적으로 오름차순)\n-t: 구분자 지정\n-k: 정렬할 열 지정\n-n: 숫자로 해석해서 값의 크기로 정렬\n-b: 포함된 공백 무시\n\nsplit : 큰 파일을 여러 작은 파일로 나눌때 사용하는 명령어\n옵션없이 사용하면 분할파일 뒤에 영문 2자리가 추가되어 구분됨.(파일명_aa,파일명_ab, 파일명_ac)\n분할 기준은 하나의 파일이 1,000라인으로 분할\n\n옵션\n-b : 분할 기준으로 바이트 단위로 지정\n-c : 라인을 기준으로 지정 다만 뒤에 바이트를 함께 사용하여 제한\n-l : 순수하게 라인수를 기준으로 파일분할\n-n : 파일을 균등하게 분할\n-d : 분할되는 파일의 뒤에 영문이 아닌 숫자로 지정(0부터시작)\n-a : 분할되는 파일의 뒤에 영문개수로 지정(aaa, aab,aac순)\n\nwc : 파일의 단어,문자, 라인 수를 세어주는 명령어\n사용법 : wc[옵션][파일명]\n\n-c : 문자 수만\n-m : 캐릭터 수만\n-l : 라인(줄) 수만\n-w :  단어 수만\n-L : 가장 긴 문장의 길이"
  },
  {
    "id": 10,
    "sourceLabel": "6.",
    "question": "오류 메시지를 파일로 저장하기 위한 방향 재지정 명령으로 알맞은 것은?",
    "options": [
      "cat nofile 0> error_log_file",
      "cat nofile 1> error_log_file",
      "cat nofile 2> error_log_file",
      "cat nofile > error_log_file"
    ],
    "answer": 2,
    "explanation": "리다이렉션 명령어는 한글로 풀어 보면 ‘방향 재지정 명령어’라고 합니다.\n화살표의 방향으로 명령어가 진행된다고 보시면 됩니다.\n\n예로 ls > ls.txt라고 하면 ls명령어를 실행하고 결과를 ls.txt 파일에 저장한다입니다.\n그럼 이것은 입력일까요? 아니면 출력일까요?\n기준은 왼쪽에 있는 명령어가 기준이 됩니다. 명령어에서 오른쪽으로 > 진행이 되면 출력, < 왼쪽으로 진행이 되면 입력이 됩니다.\n\n왜냐하면 ls라는 명령어의 결과를 ls.txt라는 파일로 출력을 한 것입니다.\n반대로  head < ls.txt를 하면 ls.txt 파일의 내용 중 10줄을 head로 보낸다는 내용이 됩니다. 고로 이것은 입력이 됩니다.\n\n그래서 리다이렉션 명령어라는 이름을 갖고 있습니다.\n또한 리다이렉션 은\n0은 표준입력이고, 1은 표준출력, 2는 표준에러로 정의되어 있습니다.\n\n오류 메시지를 파일로 저장하기 위한 것이므로 cat nofile 2> error_log_file이며, 해석하면 다음과 같습니다.\nnofile의 내용 중에서 표준오류(2>)를 error_log_file에 저장하시오.(출력)"
  },
  {
    "id": 11,
    "sourceLabel": "7.",
    "question": "다음 중 부트 매니저가 설치되는 영역으로 알맞은 것은?",
    "options": [
      "MBR",
      "Primary Partition",
      "Extend Partition",
      "Logical Partition"
    ],
    "answer": 0,
    "explanation": "부트 매니저가 필요한 이유는 멀티부팅이 필요할 때입니다.\n여러 개의 OS가 설치되어 있는 상황에서 어떤 OS로 부팅할지를 결졍해 주는 것이 바로 부트로더 또는 부트 매니저라고 부릅니다. 리눅스에서는 GRUB가 멀티부팅과 관련된 부트로더입니다.\n\n대체로 부트로더는 디스크에서 제일로 먼저 읽히게 되는 MBR에 설치를 하여 이용합니다.\n\n참고로 반드시 MBR에 설치해야 하는 것은 아닙니다.\n\n참고로 MBR는 Master Boot Record로 첫 번째 디스크의 첫 번째 섹터에 512바이트의 크기로 존재합니다."
  },
  {
    "id": 12,
    "sourceLabel": "8.",
    "question": "CD-ROM이 IDE 장치의 Secondary Slave로 연결되어 있을 때, 일반적으로 사용하는 장치 파일 이름은?",
    "options": [
      "/dev/h4d",
      "/dev/hdd",
      "/dev/hdd1",
      "/dev/hd4"
    ],
    "answer": 1,
    "explanation": "리눅스의 기본적인 하드디스크와 파티션에 대한 개념은 아래와 같습니다.\n- 규칙1 : 사용하는 하드디스크의 수를 a, b, c, d와 같이 사용합니다.\n- 규칙2 : 각 하드디스크에 파티션이 나뉜 수는 1,2,3,4와 같이 사용됩니다.\n\nIDE 하드디스크 : hda, hdb와 같이 표현(3개의 하드디스크)/파티션은 1,2,3과 같이 표현 (hda1, hda2) had에 2개의 파티션으로 나뉨\n\nSATA, SCSI 하드디스크 :  sda, sdb와 같이 표현/파티션은 1,2,3과 같이 표현(sda1, sda2)\n\nGRUB에서는 하드디스크가 IDE, SATA,SCSI방식을 구분하지 않으며, hd0, hd1, hd2와 같이 표현합니다.\n또한 파티션이 나뉠 때도 hd0,0   hd0,1  hd0,2와 같이 사용합니다.(hd0,0은 첫번째 하드디스크의 첫 번째 파티션을 뜻합니다.)\n\n문제에서는 IDE장치의 Secondary Slave라고 하였습니다.\nIDE케이블은 하나의 케이블에 2개를 연결할 수 있는데.....첫 번째 케이블을 Primary라고 부르며, 첫 번째로 연결되는 하드디스크를 Master, 두 번째 연결되는 것을 Slave라고 합니다.\n\n두 번째 케이블은 Secondary 라고 부르면 또한 첫 번째 장치를 Master, 두 번째 장치를 Slave라고 합니다.\n\n그러니 순서상 4번째 장치로 인식이 되면서 /dev/hdd로 표현이 됩니다.\n별도 파티션에 대한 내용은 없었으므로 끝에 숫자 표기는 없습니다."
  },
  {
    "id": 13,
    "sourceLabel": "8-1.",
    "question": "다음 중 E-IDE 타입의 디스크를 Secondary Slave에 연결했을 때 인식하는 장치 타입으로 알맞은 것은?",
    "options": [
      "/dev/hda",
      "/dev/hdb",
      "/dev/hdc",
      "/dev/hdd"
    ],
    "answer": 3,
    "explanation": "문제에서는 IDE장치의 Secondary Slave라고 하였습니다.\nIDE케이블은 하나의 케이블에 2개를 연결할 수 있는데.....첫 번째 케이블을 Primary라고 부르며, 첫 번째로 연결되는 하드디스크를 Master, 두 번째 연결되는 것을 Slave라고 합니다.\n\n두 번째 케이블은 Secondary 라고 부릅니다.\n\n또한 두번째 케이블의 첫 번째  연결되는 하드디스크를  Master, 두 번째 장치를 Slave라고 합니다.\n\n그러니 순서상 4번째 장치로 인식이 되면서 /dev/hdd로 표현이 됩니다.\n별도 파티션에 대한 내용은 없었으므로 끝에 숫자 표기는 없습니다."
  },
  {
    "id": 14,
    "sourceLabel": "9.",
    "question": "다음 중 특정 도메인이 사용하는 IP 주소를 조회하는 명령으로 틀린 것은?",
    "options": [
      "nslookup",
      "host",
      "hostname",
      "dig"
    ],
    "answer": 2,
    "explanation": "네임서버로 부터 정보를 가져올 수 있는 명령어는 nslookup, host, dig등이 있습니다.\n\nnslookup는 name server 관련한 조회를 할 수 있는 명령어입니다.\nnslookup도 아래의 dig처럼 query-type을 이용합니다.\n예)nslookup -type=ns ihd.or.kr\n\ndig는 Domain Information Groper의 약자로 네임서버로 부터 정보를 가져와 보여 줍니다.\ndig [@server] [domain] [query type]\n\nquery-type 옵션\na : 도메인의 아이피 정보\nany : 지정된 도메인의 모든 정보\nmx : 지정한 도메인의 메일서버 정보\nns : 네임서버 정보\nsoa : soa 정보\n\nhost는 도메인(호스트)명은 알고 있는데 ip주소를 모르거나 혹은 그 반대의 경우에 사용하는 명령어입니다.\nhost [옵션] [도메인 혹은 IP주소] [DNS서버]\n\nhostname은 말 그대로 host의 name을 뜻하며, 리눅스 시스템에 로그인 했을 때의 계정명이 호스트네임이 됩니다."
  },
  {
    "id": 15,
    "sourceLabel": "10.",
    "question": "다음 중 10분 후에 시스템을 종료하는 명령으로 알맞은 것은?",
    "options": [
      "shutdown -h +10",
      "shutdown -h 10m",
      "shutdown -h +10m",
      "shutdown -h 10minute"
    ],
    "answer": 0,
    "explanation": "리눅스시스템의 종료는 shutdown이라는 명령어를 사용합니다.\nshutdown\n시스템을 재시작하거나 전원을 종료하는 명령어이며, root권한자만 사용 가능합니다.\n\n shutdown [option] 시간 [경고메세지]\n -r  :  시스템을 재시작\n -P :  강제로 시스템 종료 (대문자)\n -h :  시스템을 종료\n -c :  예약된 종료 명령을 취소.\n -k :  실제로 종료 명령을 수행하지 않고 종료된다는 메시지만 출력.\n +m :  m분 후에 시스템을 종료(위의 다른 명령어들과 함께 사용됨)\n\n이외에도 시스템을 종료하는 명령어는 halt, poweroff, init 0이 있습니다.\n주의: 로그아웃이 아닌 시스템 종료라는 점을 명심\n\nshutdown -r, reboot와 init 6은 재부팅을 의미합니다.\n\n예로 shutdown -h +10을 하면 10분 후에 종료한다는 의미입니다.\nshutdown -h 20:00 를 하면 pm8시에 종료한다는 의미이구요."
  },
  {
    "id": 16,
    "sourceLabel": "11.",
    "question": "다음 중 상용판 리눅스로 알맞은 것은?",
    "options": [
      "CentOS",
      "Scientific Linux",
      "RHEL",
      "Fedora"
    ],
    "answer": 2,
    "explanation": "RHEL은 유료 라이선스로 판매되는 대신 레드햇 측이 기술지원을 제공하고 있습니다.\nRed Hat EnterPrise Linux의 약자로 RHEL로 불리고 있습니다.\n\n사이언티픽 리눅스(Scientific Linux, SL)는 페르미 국립 가속기 연구소가 만든 리눅스 배포판입니다. 레드햇 엔터프라이즈 리눅스 기반의 자유 및 오픈 소스 운영 체제로서이지만 상용 배포판에 근접하도록 만들어 졌다고 합니다."
  },
  {
    "id": 17,
    "sourceLabel": "12.",
    "question": "현재 접속되어 있는 모든 사용자들에게 메시지를 보낼 때 사용되는 명령어는?",
    "options": [
      "echo",
      "message",
      "talk",
      "wall"
    ],
    "answer": 3,
    "explanation": "echo는 문자열을 그대로 출력해 주는 명령어입니다.\nmessage는 메시지 응답 가능 및 불가를 설정하는 명령어입니다.\ntalk는 로그인한 사용자끼리 대화시에 사용하는 명령어입니다.\nwall은 시스템에 로그인한 모든 사용자에게 메시지 보내기 하는 명령어입니다."
  },
  {
    "id": 18,
    "sourceLabel": "13.",
    "question": "다음 중 슬랙웨어 계열 리눅스에 속하는 배포판으로 틀린 것은?",
    "options": [
      "Salix OS",
      "Vector Linux",
      "SUSE",
      "Knoppix"
    ],
    "answer": 3,
    "explanation": "③ SUSE (SUSE Linux Enterprise Server)\n\nSUSE는 RPM 패키지 형식을 사용하는 Red Hat 계열이 아닌, 데비안 계열(Debian/Ubuntu)과 함께 양대 산맥을 이루는 독자적인 계열의 상용 리눅스입니다.\n\n슬랙웨어계열 : Slax 또는 Slax OS,Vector Linux,DeLi Linux,Frugalware,Salix OS\n\n레드햇 계열 : Redhat Enterprise Linux,CentOS,Fedora,AnNyung Linux(안녕),Oracle Enterprise Linux,타이젠\n\n데비안계열 : 우분투, 민트, Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n④ Knoppix: CD나 USB로 부팅하여 설치 없이 사용할 수 있는 라이브(Live) CD이며, 슬랙웨어 기반(과거에는 데비안 기반)으로 만들어졌습니다\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 19,
    "sourceLabel": "14.",
    "question": "리눅스의 섀도우 패스워드(Shadow Password)에 대한 설명으로 맞는 것은?",
    "options": [
      "사용자의 패스워드를 한번 더 암호화하여 보안을 강화 시키는 기능",
      "UNIX 네트워크에서 일반적으로 사용되는 네트워크 인증기능",
      "방화벽을 이용하여 보안을 강화하는 기능",
      "웹 사이트의 패스워드를 기억하여 다음 방문시 자동으로 패스워드를 입력하는 기능"
    ],
    "answer": 0,
    "explanation": "사용자 계정이 만들어지면 /etc/passwd에  해당 계정에 대한 정보들이 저장됩니다.\n\n \n\n위의 정보에서 2필드 부분이 x로 표시되며 한번 더 암호화를 하여 보안을 강화합니다.\nx로 된 부분은 /etc/shadow 라는 곳에 아래와 같은 형태로 저장이 됩니다.\n\n2필드 패스워드 부분이 상당히 복잡하게 암호화 되어 있는 것을 볼 수 있습니다."
  },
  {
    "id": 20,
    "sourceLabel": "14-1.",
    "question": "섀도 패스워드(Shadow Password)를 사용할 때, /etc/passwd파일에 포함된 내용으로 틀린 것은?",
    "options": [
      "uid",
      "gid",
      "패스워드",
      "로그인 셸"
    ],
    "answer": 2,
    "explanation": "/etc/shadow를 사용하게 되면, /etc/passwd에 있는 필드 중 2번째 필드의 패스워드 부분이 표시되지 않습니다. 이유는 패스워드 부분만 따로 떼어서 /etc/shadow에 암호화 되어 저장이 된다는 의미입니다."
  },
  {
    "id": 21,
    "sourceLabel": "15.",
    "question": "다음 각 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "head : 파일의 처음 부분을 보여준다.",
      "tail : 파일의 마지막 부분을 보여준다.",
      "uniq : 파일의 내용을 줄 단위로 정렬하여 디스플레이 한다.",
      "file :  파일의 종류를 알고자 할 때 사용한다."
    ],
    "answer": 2,
    "explanation": "uniq : 중복된 내용의 행을 하나의 행으로 만들어 주는 명령어(중복을 제거)\nuniq -c를 하면 중복된 갯 수를 count함.\n\nhead : 파일의 앞 부분부터 확인하는 명령어\nhead -10 file.txt를 하면 file의 앞 부분 10줄에 대한 내용을 출력\n\ntail : 파일의 끝 부분을 확인하는 명령어\ntail -10 file.txt를 하면  file.txt의 끝 부분 10 줄에 대한 내용을 출력\n\nfile : file의 종류 확인 및 파일 속성 값을 확인하는 명령어"
  },
  {
    "id": 22,
    "sourceLabel": "15-1.",
    "question": "다음 (괄호) 안에 들어갈 파일명으로 알맞은 것은?\n[root@ihd~]head -5 (괄호)\n\nroot:$6$1T7Hv8nkt.36odEO$LfWk.4LOmvNCD7.DPOlZef55fCyCcTFrGmx1adDCiNReyn7qEmwXZTo77xsnkyR6sayqCSJWu.njOKgADMqac.::0:99999:7:::\n\nbin:*:19820:0:99999:7:::\n\ndaemon:*:19820:0:99999:7:::\n\nadm:*:19820:0:99999:7:::\n\nlp:*:19820:0:99999:7:::",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/profile"
    ],
    "answer": 1,
    "explanation": "head : 파일의 앞 부분부터 확인하는 명령어\n\nhead -10 file.txt를 하면 file의 앞 부분 10줄에 대한 내용을 출력"
  },
  {
    "id": 23,
    "sourceLabel": "16.",
    "question": "다음에서 설명하는 리눅스 배포판으로 알맞은 것은?\n데비안 기반으로 만들어진 리눅스 배포판으로 다양한 해킹 도구를 내장하고 있어 정보보안에 대해 학습할 때 매우 유용하다.",
    "options": [
      "BackTrack",
      "Kali Linux",
      "Scientific Linux",
      "Vector Linux"
    ],
    "answer": 1,
    "explanation": "Back Track : 보안 테스트를 위해 만든 오픈 소스 리눅스 배포판나 해킹관련 정보가 많아 별명이 해킹머신으로 불림.(우분투 기반)\n\nKali : Back track의 후속 배보판. 데비안 기반이며, 해킹도구, 해킹툴을 포함하여 해킹 교육용으로 많이 사용됩니다."
  },
  {
    "id": 24,
    "sourceLabel": "17.",
    "question": "mkdir .fileA와 같이 디렉토리를 생성하면 그 결과는?",
    "options": [
      "디렉토리가 생성되지 않으며 fileA라는 이름의 파일이 생성된다.",
      "cd 명령어를 이용하여 .fileA 디렉토리로 이동할 수 없다.",
      "ls 명령어에서 -a옵션을 이용하면 .fileA디렉토리를 찾을 수 있다.",
      ".fileA 디렉토리 내에서는 특수한 형태의 파일만을 저장하고 이용할 수 있다."
    ],
    "answer": 2,
    "explanation": "mkdir은 디렉터리를 생성하는 명령어입니다.\n.fileA 라고 하는 디렉터리가 만들어진 것을 ls -a로 확인할 수 있으며, cd 명령어를 통해서 .fileA라는 디렉토리 안으로 이동할 수도 있습니다."
  },
  {
    "id": 25,
    "sourceLabel": "17-1.",
    "question": "다음 중 디렉터리를 만들 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "mkdir",
      "mkdirectory",
      "mkfs",
      "mkfolder"
    ],
    "answer": 0,
    "explanation": "mkdir은 디렉터리를 생성하는 명령어입니다.\n\nmkfs는 파일시스템을 만들때 사용하는 명령어입니다."
  },
  {
    "id": 26,
    "sourceLabel": "18.",
    "question": "사용 중인 시스템의 도메인 네임을 출력하기 위해 사용할 수 있는 명령어로 가장 알맞은 것은?",
    "options": [
      "hostname",
      "cat /etc/fstab",
      "ping",
      "ifconfig"
    ],
    "answer": 0,
    "explanation": "hostname 명령어는 현재 사용 중인 시스템의 도메인 네임을 출력해 주는 명령어입니다.\n예)[root@localhost ~]hostname을 하면 localhost.localdomain 이라는 내용이 출력됩니다.\n\n/etc/fstab ←해당 파일에 등록해 놓으면 부팅할 때 마다 자동으로 마운트 됨.\n\nping은 네트워크로 연결되는 대상과 연결이 정확하게 되어 있는지를 테스트 할 때 사용하는 네트워크 명령어입니다. 예로 ping www.ihd.or.kr를 하면 현재 사용하는 시스템과 ihd.or.kr 간의 연결 상태를 확인해 볼 수 있습니다.\n\nifconfig는 현재 시스템의 네트워크 설정 상태등을 확인해 볼 수 있는 명령어입니다."
  },
  {
    "id": 27,
    "sourceLabel": "19.",
    "question": "다음 중 설치와 관련된 장치 선택에서 특별한 저장 장치를 선택하는 디스크 유형으로 틀린 것은?",
    "options": [
      "SCSI",
      "iSCSI",
      "FCoE",
      "SAN"
    ],
    "answer": 0,
    "explanation": "기본 또는 특별한 저장소 장치를 선택할 수 있도록 해 줍니다.\n\n기본 저장소 장치\n기본 저장소 장치를 선택해 Red Hat Enterprise Linux를 다음 저장소 장치 중 하나에 설치하십시오:\n로컬 시스템에 직접 연결된 하드드라이브나 SSD(solid state drive).\n\n특별한 저장소 장치\n특별한 저장소 장치를 다음 저장소 장치에 Red Hat Enterprise Linux를 설치하기 위해 지정하십시오:\n저장소 영역 네트워크 (SAN)\n직접 액세스 저장소 장치(DASD,Direct access storage device)\n펌웨어 RAID 장치\n멀티패스 장치\n\n특별한 저장소 장치를 사용해 Internet Small Computer System Interface(iSCSI)와 FCoE(Fiber Channel over Ethernet) 연결을 사용할 수 있습니다.\n\nSCSI[Small Computer System Interface]는 스카시를 뜻하며, 하드디스크나 SSD를 연결해 주는 인터페이스입니다."
  },
  {
    "id": 28,
    "sourceLabel": "20.",
    "question": "일반적으로 시스템 부팅에 필요한 파일이 있는 디렉토리는?",
    "options": [
      "/root",
      "/bin",
      "/boot",
      "/sbin"
    ],
    "answer": 2,
    "explanation": "/boot\n리눅스 계열에서 OS 부팅에 사용되는 파일을 담는 폴더, GRUB[부트로더), lost+found [fsck등에서 발견된 결함이 있는 파일에 대한 정보를 보관]\n\n/root\n이곳은 root 사용자만 사용이 가능합니다.\n일반 사용자들의 출입이 엄격하게 금지되어 있는 공간입니다.\n\n/bin [Binary]\n(/bin/bash) 기본적인 파일처리 명령, 텍스트 처리 명령, 네트워크 처리 명령 등 여러 가지의 명령어들이 실행 파일의 형태로 저장되어 있습니다. 이 안에 있는 명령어들은 어떠한 경로에 있던지 실행되게 되어 있으므로 꼭 이 경로로 와서 실행할 필요는 없습니다.\n\n/sbin [System Binary]\n파일 시스템 처리 명령, 네트워크 인터페이스 설정 명령, 시스템 초기화 명령, 커널 모듈의 관리 명령 등 시스템의 전반적인 관리 명령어들이 있는 디렉터리 입니다.\n이 디렉터리 파일의 사용은 root 계정 에게만 허가되어 있습니다."
  },
  {
    "id": 29,
    "sourceLabel": "20-1.",
    "question": "다음 중 부트로더인 GRUB  관련 파일들이 들어 있는 디렉터리로 알맞은 것은?",
    "options": [
      "/usr",
      "/etc",
      "/opt",
      "/boot"
    ],
    "answer": 3,
    "explanation": "/boot\n\n리눅스 계열에서 OS 부팅에 사용되는 파일을 담는 폴더, GRUB[부트로더), lost+found [fsck등에서 발견된 결함이 있는 파일에 대한 정보를 보관]\n\n/usr[Universal System Resources]\n\n시스템, 응용프로그램에서 필요한 파일들이 저장되어 있는 디렉터리입니다.\n\n설치 할 때 하드디스크에서 가장 많은 용량을 지정해 주어야 하는 디렉터리 입니다.\n\n/opt [OPeraTion]\n\nAdd-On (응용)소프트웨어 패키지가 설치됩니다. 레드햇 리눅스는 이 디렉터리를 구성하지 않습니다.\n\n패키지 매니저가 설치와 삭제를 수행.\n\n/etc [Etcetera : 기타, 여러가지, 잡동사니]\n\n시스템 설정 파일이 들어 있는 폴더 입니다.\n\n사용자 정보를 가지고 있는 passwd (/etc/shadow에 저장됨), 그룹정의 파일인 group, 프린터 목록파일 printcap, 자동으로 마운트 되는 파일 시스템을 등록해 두는 파일 시스템 테이블 fstab, 각종 네트워크관련 파일과 기본적인 시스템 환경 결정 파일들이 있습니다."
  },
  {
    "id": 30,
    "sourceLabel": "21.",
    "question": "다음(괄호) 안에 들어갈 명령어로 알맞은 것은?\n$ (     )\nkaituser ihduser root root",
    "options": [
      "who",
      "w",
      "id",
      "users"
    ],
    "answer": 3,
    "explanation": "who는 현재 시스템에 접속한 사용자를 확인하는 명령어이며,\n\nw는 현재 시스템에 접속한 사용자와 함께 서버 정보를 확인하는 명령어입니다.\n\nid는 현재 사용자의 실제 id와 유효 사용자 id, 그룹 id를 확인할 수 있는 명령어입니다.\n\nusers는 시스템에 접속해 있는 사용자의 ID를 확인하는 명령어입니다."
  },
  {
    "id": 31,
    "sourceLabel": "22.",
    "question": "다음 중 리눅스에서 패킷이 특정 호스트까지 전달되는 과정을 출력하는 명령으로 알맞은 것은?",
    "options": [
      "route",
      "tracert",
      "traceroute",
      "host"
    ],
    "answer": 2,
    "explanation": "윈도우즈에서는 tracert라는 명령어를 통해 목적지까지의 최적 경로를 찾아 줍니다.\n리눅스에서는 traceroute를 이용하여 목적지까지의 최적 경로를 찾아 줍니다.\n\nroute 명령어로 라우팅 테이블 추가 또는 제거(라우팅테이블 편집)\n이러한 라우팅 테이블이 제대로 설정되어 있지 않으면 외부의 네트워크와 통신할 수 없습니다.\n(라우팅테이블을 확인할수 있는 명령어는 netstat -r등이 있습니다.\n\nhost :도메인(호스트)명은 알고 있는데 ip주소를 모르거나 혹은 그 반대의 경우에 사용하는 명령어입니다."
  },
  {
    "id": 32,
    "sourceLabel": "23.",
    "question": "GNU프로젝트와 관련이 없는 것은?",
    "options": [
      "FSF(Free Software Foundation)",
      "Richard Stallman",
      "Linux",
      "Windows 2000"
    ],
    "answer": 3,
    "explanation": "리눅스(Linux)는 리누스(Lunus)+유닉스(Unix)의 합성어 입니다.(유닉스를 모델로 하여 리눅스가 개발됨)\n\n리누스 토발즈는 유닉스의 POSIX호환을 기반으로 하는 리눅스라는 커널(Kernel)을 개발하였고, “리차드 스톨만(Richard Stallman)” 이 주도하는 GNU 프로젝트에 참여하면서 수 많은 프로그래머들과 함께 현재의 보조프로그램과 응용 소프트웨어들을 만들어 현재의 리눅스가 되었습니다.\n\n“리차드스톨만”은 자유소프트웨어재단(Free Software Foundation, FSF)의 회장입니다.(프로그램의 변경 및 수정은 자유로워야 한다)\nGNU프로젝트는 각종 UNIX 상용 프로그램에 대항하여 수 많은 무료 공개 프로그램을 만들었습니다.\n리차드스톨만은 HURD라는 커널을 만들었지만 많이 미흡한 상태였으며, 토발즈의  리눅스를 만나면서 현재의 리눅스 운영체제가 만들어지는 계기가 되었습니다.\n\nWindows 2000은 마이크로소프트의 윈도우즈 운영체제 중 하나입니다."
  },
  {
    "id": 33,
    "sourceLabel": "24.",
    "question": "아래의 /etc/passwd파일에 대한 일반적인 설명으로 틀린 것은?\nlms:x:1000:1000::/home/lms:/bin/false",
    "options": [
      "lms 계정의 패스워드는 x로 암호화되어 /etc/pass파일에 저장되어 있다.",
      "lms 계정의 uid와 gid 각각 1000이다.",
      "lms 계정의 홈 디렉토리는 /home/lms이다.",
      "lms 계정은 이 시스템에 로그인할 수 없다."
    ],
    "answer": 0,
    "explanation": "문제에서 보면 2번째 필드는 암호(패스워드)에 대한 항목으로 x표시가 뜻하는 것은 암호화되어 별도로 /etc/shadow에 저장이 된 것을 의미합니다.\n\n위의 그림은 /etc/passwd의 내용\n\n위의 내용은 /etc/passwd의 내용\n\n/sbin/nologin\n\n로그인 불가능하고 메시지들은 반환됨. ssh는 사용불가능하며, ftp의 경우 사용이 가능합니다.\n\n/bin/false\n시스템의 로그인은 불가능, ftp 서버 프로그램 같은 프로그램 사용도 불가능합니다.\n셸이나 ssh와 같은 터널링(원격접속) 그리고 홈 디렉터리를 사용할 수 없음.\n\n/bin/bash\nbash 셸 파일을 이용한다는 의미이며, 보통 활성화된 계정을 뜻함."
  },
  {
    "id": 34,
    "sourceLabel": "25.",
    "question": "파일 비교와 관련이 없는 명령어는?",
    "options": [
      "gcc",
      "cmp",
      "comm",
      "diff"
    ],
    "answer": 0,
    "explanation": "gcc는 컴파일에 사용되는 명령어입니다.\n\ncmp는 유사한 두 파일을 비교하여 처음으로 틀린 문자가 나타나는 위치만을 출력하는 명령어입니다.\n\ncomm은 행 단위 파일 비교하는 명령어입니다.\n\ndiff는 두 파일의 차이점을 비교하는 명령어입니다."
  },
  {
    "id": 35,
    "sourceLabel": "26.",
    "question": "다음 설명으로 알맞은 것은?\n(   )은 TCP/IP 프로토콜을 사용하는 응용 프로그램으로 다른 호스트에 IP 데이터그램이 도착할 수 있는지를 검사하는 것을 의미한다. (   )을 수행하는 프로그램은 ICMP echo request라는 메시지를 원격 호스트로 보내 응답하는가를 기다린다. 즉 송신한 ICMP request를 받은 호스트가 동작 중이면 응답할 것이고 호스트가 동작하지 않으면 않을 것이기 때문이다. 이와 같이 ICMP echo reply가 돌아오는 지의 여부에 따라 원격 호스트가 동작 중인지 아닌 지를 검사할 수 있다.",
    "options": [
      "login",
      "route",
      "ping",
      "nslookup"
    ],
    "answer": 2,
    "explanation": "ICMP는 Internet Control Message Protocol로 주로 PING이나 PATHPING, Traceroute 등에서 사용합니다.\nnslookup은 도메인 네임 서버를 확인할 때 사용하는 명령어이며, route는 라우팅테이블을 편집할 수 있는 명령어이고, login은 말 그대로 시스템에 접속할 때 사용하는 인증을 위한 명령어입니다."
  },
  {
    "id": 36,
    "sourceLabel": "26-1.",
    "question": "다음 중 tracerte 명령과 가장 관련이 깊은 프로토콜로 알맞은 것은?",
    "options": [
      "TCp",
      "UDP",
      "ARP",
      "ICMP"
    ],
    "answer": 3,
    "explanation": "ICMP는 Internet Control Message Protocol로 주로 PING이나 PATHPING, Traceroute 등에서 사용합니다."
  },
  {
    "id": 37,
    "sourceLabel": "27.",
    "question": "다음 명령어의 실행 결과에 대한 설명으로 알맞은 것은?\n#cal",
    "options": [
      "올해의 달력이 전부 출력된다.",
      "오늘 날짜를 기준으로 속한 달이 출력된다.",
      "연도, 월, 일, 시간 순으로 출력된다.",
      "시간, 일, 월, 연도 순으로 출력된다."
    ],
    "answer": 1,
    "explanation": "cal 명령어는 달력을 출력하는 명령어입니다.\n특별한 옵션 없이 cal 만 실행하면 해당 년도의 월이 출력됩니다.\n만약 cal 2021를 하면 2021년도 달력이 출력되며, cal 10 2021를 하면 2021년의 10월 달력이 출력됩니다.\n예로 cal 9 2022을 하면 2022년 9월의 달력을 볼 수 있습니다.\n\n참고로 date명령어를 이용하면 현재의 년-월-일-시 순으로 확인이 가능합니다."
  },
  {
    "id": 38,
    "sourceLabel": "27-1.",
    "question": "다음 중 달력 정보를 출력하는 명령으로 알맞은 것은?",
    "options": [
      "date",
      "cal",
      "hwclock",
      "time"
    ],
    "answer": 1,
    "explanation": "cal 명령어는 달력 정보를 출력하는 명령어입니다.\n\n참고로 date명령어를 이용하면 현재의 년-월-일-시 순으로 확인이 가능하며, 리눅스 시스템에서는 소프트웨어 시간을 확인한다고 합니다.\n\nhwclock은 하드웨어 시간을 확인할 때 사용합니다.\n\ntime은 프로그램의 실행 시간을 확인할 때 사용합니다."
  },
  {
    "id": 39,
    "sourceLabel": "28.",
    "question": "다음은 특정 파일을 찾음과 동시에 삭제하는 과정이다. ( 괄호 ) 안에 들어갈 옵션으로 알맞은 것은?\n#find -name '*.txt' (     ) rm {} ＼;",
    "options": [
      "-pruneclea",
      "-run",
      "-comm",
      "-exec"
    ],
    "answer": 3,
    "explanation": "find [경로][-옵션][찾는파일명][action]\n\n예) find txt\n일반적으로 사용하는 옵션은 아래와 같습니다.\n-name : 이름으로 찾기\n-user : 소유자로 찾기\n-newer : 전, 후의 조건으로 찾기\n-perm : 퍼미션(permission\"으로 찾기(+와 -를 사용)\n-size : 크기(용량)으로 찾기\n-type : 파일 종류로 찾기(d는 디렉토리, f는 파일)\n\naction 종류\n-exec 명령 {} \\;  ← 검색된 파일에 명령을 실행한다.\n-ok 명령 {} \\;  ← 사용자의 확인을 받아서 명령을 실행한다.\n-print  ← 검색된 파일의 절대 경로명을 화면에 출력한다.(기본동작)\n-ls  ← 검색 결과를 긴 목록형식으로 출력한다."
  },
  {
    "id": 40,
    "sourceLabel": "29.",
    "question": "다음에서 설명하는 리눅스 배포판으로 알맞은 것은?\n레드햇 엔터프라이즈 리눅스의 소스 코드를 그대로 가져와 빌드해 내놓는 일종의 복제본(Clone)으로 비용 부담 없이 사용이 가능하고 자유롭게 배포 가능하다.",
    "options": [
      "Fedora",
      "Ubuntu",
      "CentOS",
      "Linux Mint"
    ],
    "answer": 2,
    "explanation": "CentOS (Community Enterprise Operation System)\n레드햇 엔터프라이즈 버전에 대한 커스터마이징을 거친 배포판으로 2003년 12월에 시작하였으며, 국내 리눅스서버 쪽에서 많이 사용하고 있는 배포판입니다.\n\n슬랙웨어계열 : Slax 또는 Slax OS,Vector Linux,DeLi Linux,Frugalware,Salix OS\n\n레드햇 계열 : Redhat Enterprise Linux,CentOS,Fedora,AnNyung Linux(안녕),Oracle Enterprise Linux,타이젠\n\n데비안계열 : 우분투, 민트, Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n***Knoppix: CD나 USB로 부팅하여 설치 없이 사용할 수 있는 라이브(Live) CD이며, 슬랙웨어 기반(과거에는 데비안 기반)으로 만들어졌습니다\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 41,
    "sourceLabel": "30.",
    "question": "다음 중 shutdown 명령으로 예약된 작업을 취소할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-c",
      "-r",
      "-d",
      "-x"
    ],
    "answer": 0,
    "explanation": "리눅스시스템의 종료는 shutdown이라는 명령어를 사용합니다.\n\nshutdown\n시스템을 재시작하거나 전원을 종료하는 명령어이며, root권한자만 사용 가능합니다.\n\n shutdown [option] 시간 [경고메세지]\n -r  :  시스템을 재시작\n -P :  강제로 시스템 종료 (대문자)\n -h :  시스템을 종료\n -c :  예약된 종료 명령을 취소.\n -k :  실제로 종료 명령을 수행하지 않고 종료된다는 메시지만 출력.\n +m :  m분 후에 시스템을 종료(위의 다른 명령어들과 함께 사용됨)\n\n이외에도 시스템을 종료하는 명령어는 reboot, halt, poweroff가 있습니다.\n주의: 로그아웃이 아닌 시스템 종료라는 점을 명심"
  },
  {
    "id": 42,
    "sourceLabel": "30-1.",
    "question": "shutdown명령어의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-c : 예약된 shutdown 명령을 취소한다.",
      "-h : shutdown 명령이 완료되면 시스템을 정지시킨다.",
      "-f : shutdown 전에 수행중인 모든 프로세스에게 kill 시그널을 보낸다.",
      "-r : shutdown 명령이 완료되면 시스템을 재부팅 한다."
    ],
    "answer": 2,
    "explanation": "제공된 원문에 별도의 해설이 없습니다."
  },
  {
    "id": 43,
    "sourceLabel": "31.",
    "question": "다음 ( 괄호 ) 안에 들어갈 옵션으로 알맞은 것은?\n[kaituser@www ~]$ ls (    ) /home\ndrwxr-xr-x 6  root root  4096  Jan 5 11:15 /home",
    "options": [
      "-l",
      "-d",
      "-ld",
      "-lr"
    ],
    "answer": 2,
    "explanation": "ls -[옵션]\nls -l ← 자세한 내용을 출력 (가장 많이 사용됨)\nls -a  ← a는 all을 뜻하며, 숨겨진 파일이나 디렉터리도 모두 출력\nls -d ← d는 디렉토리를 뜻하며 –d옵션을 사용하게 되면 디렉터리에 대한 정보만 출력\n         (ls –ld /디렉터리명 ← 특정 디렉터리의 퍼미션을 확인가능)\nls –F ← 파일이 디렉토리인 경우, 파일이 실행 가능한 경우, 파일이 소켓인 경우,파일이 FIFO인 경우에 이름 뒤에 @를 추가\nls -s  ← 파일 크기 순으로 정렬하여 출력(킬로바이트단위)\nls -r  ← 출력 결과를 알파벳 역순으로 정렬 (기본은 알파벳 순서로 정렬)\nls –R  ← 하위 디렉토리의 내용도 순차적으로 표시\nls -al  ← 모든 파일과 폴더를 출력하고 자세한 내용까지 함께 출력 ([명령어 -옵션 옵션 옵션] 과 같이 여러 개의 옵션을 함께 사용 가능)"
  },
  {
    "id": 44,
    "sourceLabel": "32.",
    "question": "다음 중 파일의 일부만을 출력하는 명령어로 틀린 것은?",
    "options": [
      "head",
      "more",
      "tail",
      "most"
    ],
    "answer": 3,
    "explanation": "head는 파일의 앞부분의 내용(행기준)을 출력\ntail은 파일의 뒷 부분의 내용(행기준)을 출력\nmore는 파일의 내용이 많을 때 페이지 단위로 출력\n\nmost는 사용하지 않는 명령어입니다."
  },
  {
    "id": 45,
    "sourceLabel": "33.",
    "question": "다음 설명에 해당하는 리눅스의 기술적인 특징으로 알맞은 것은?\n프로그램에서 특정한 기능을 하는 루틴(Routine)들을 실행 파일 내부에 넣어두지 않고, 프로그램을 실행할 때 가져다 사용하므로 효율성이 아주 높다.",
    "options": [
      "정적 라이브러리",
      "동적 라이브러리",
      "가상 메모리",
      "계층적인 파일 구조"
    ],
    "answer": 1,
    "explanation": "정적 라이브러리는 쉽게 말해 특정 프로그램 실행 시 해당 프로그램에 라이브러리를 모두 포함시키는 것입니다.\n\n동적 라이브러리는 프로그램 실행 시 필요한 부분만 그때 그때 가져다 쓴다는 것입니다.\n\n가상메모리는 하드디스크의 일정 부분을 메모리의 역할로 전환하여 사용한다는 의미입니다.\n\n계층적인 파일 구조는 리눅스의 기본적인 파일구조이며, 부모와 자식 관계와 같은 것을 말합니다."
  },
  {
    "id": 46,
    "sourceLabel": "34.",
    "question": "특정 호스트를 찾기 위해 사용하는 명령어로 호스트가 속한 네임서버에 질의하는 네임서버 질의 명령어는?",
    "options": [
      "ifconfig",
      "dig",
      "netstat",
      "hostname"
    ],
    "answer": 1,
    "explanation": "② dig (Domain Information Groper)\n\n네임서버에 직접 질의(Query)를 보내 도메인 이름에 대한 IP 주소나 MX 레코드 등 상세한 DNS 정보를 찾아내는 대표적인 명령어입니다.\n\nifconfig: 현재 시스템의 네트워크 인터페이스 설정(IP 주소, 서브넷 마스크 등)을 확인하거나 변경하는 명령어입니다.\n\nnetstat: 네트워크 연결 상태, 라우팅 테이블, 인터페이스 통계 등 네트워크 접속 현황을 확인하는 명령어입니다.\n\nhostname: 현재 사용 중인 시스템의 이름을 확인하거나 설정하는 명령어입니다."
  },
  {
    "id": 47,
    "sourceLabel": "35.",
    "question": "다음 중 데비안 계열 리눅스에 속하는 배포판으로 틀린 것은?",
    "options": [
      "Salix OS",
      "elementary OS",
      "Kali Linux",
      "Knoppix"
    ],
    "answer": 0,
    "explanation": "슬랙웨어계열 : Slax 또는 Slax OS,Vector Linux,DeLi Linux,Frugalware,Salix OS\n\n레드햇 계열 : Redhat Enterprise Linux,CentOS,Fedora,AnNyung Linux(안녕),Oracle Enterprise Linux,타이젠\n\n데비안계열 : 우분투, 민트, Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n***Knoppix: CD나 USB로 부팅하여 설치 없이 사용할 수 있는 라이브(Live) CD이며, 슬랙웨어 기반(과거에는 데비안 기반)으로 만들어졌습니다\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 48,
    "sourceLabel": "35-1.",
    "question": "다음 중 데비안 계열 리눅스에 속하는 배포판은?",
    "options": [
      "kali Linux",
      "Scientific Linux",
      "Vector Linux",
      "Mandriva Linux"
    ],
    "answer": 0,
    "explanation": "슬랙웨어계열 : Slax 또는 Slax OS,Vector Linux,DeLi Linux,Frugalware,Salix OS\n\n레드햇 계열 : Redhat Enterprise Linux,CentOS,Fedora,AnNyung Linux(안녕),Oracle Enterprise Linux,타이젠\n\n데비안계열 : 우분투, 민트, Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n***Knoppix: CD나 USB로 부팅하여 설치 없이 사용할 수 있는 라이브(Live) CD이며, 슬랙웨어 기반(과거에는 데비안 기반)으로 만들어졌습니다\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 49,
    "sourceLabel": "36.",
    "question": "root 사용자가 사용자 choi의 비밀번호를 변경하는데 사용하는 명령어는?",
    "options": [
      "info choi",
      "passwd choi",
      "vi /etc/passwd",
      "change password"
    ],
    "answer": 1,
    "explanation": "root 관리자 계정으로 일반사용자 choi의 패스워드를 변경하고자 한다면 passwd choi를 하면 됩니다.\n그러면 아래로 새로운 패스워드를 입력하라는 내용이 실행됩니다."
  },
  {
    "id": 50,
    "sourceLabel": "37.",
    "question": "다음 중 ihduser의 계정 만기일을 ‘2020-12-31“로 설정할 때 알맞은 것은?",
    "options": [
      "usermod -e 2020-12-31 ihduser",
      "usermod -E 2020-12-31 ihduser",
      "usermod -i 2020-12-31 ihduser",
      "usermod -I 2020-12-31 ihduser"
    ],
    "answer": 0,
    "explanation": "usermod를 이용하여 계정의 정보를 수정할 수 있습니다.\nusermod [옵션] [계정이름]\n-c  : 계정에 대한 설명을 지정 ← 설정된 내용은 /etc/passwd에서 확인 가능\n-d  :  계정의 홈 디렉터리 변경 ← 설정된 내용은 /etc/passwd 에서 확인 가능\n-m  : 사용자의 홈 디렉터리 변경 시 파일과 디렉터리도 함께 옮겨 줍니다. 위의 -d 옵션과 함께 사용해야 효과적입니다.\n-e  :  계정의 종료일을 지정 ← 설정된 내용은 /etc/shadow에서 확인 가능\n-g  : 계정의 GID(그룹)를 지정\n-G  : 계정의 보조 그룹을 지정\n-u  : 계정의 UID를 지정\n-s  : 계정의 로그인 셸 지정 ← usermod -s /bin/bash ihd1 ( ihd1의 로그인 셸을 /bin/bash로 변경)\n-l : 사용자 계정명 변경 ← usermod -l [변경 하고자 하는 계정명] [현재 사용 계정명] 과 같이 사용 (소문자L)\n-f  : 패스워드 만기일이 지난 후 패스워드 잠금을 설정할 유예기간을 지정합니다."
  },
  {
    "id": 51,
    "sourceLabel": "38.",
    "question": "다음은 원격지 타임 서버를 통해 시스템의 시간을 설정하는 과정이다. ( 괄호 ) 안에 들어갈 옵션으로 알맞은 것은?\n#rdate (   ) time.bora.net",
    "options": [
      "-s",
      "-t",
      "-e",
      "-p"
    ],
    "answer": 0,
    "explanation": "rdate는 remote date로 원격지의 타임서버에서 시간 정보를 가져와 로컬 시스템의 시간과 동기화 시켜주는 명령어입니다.\n\nrdate [옵션] [타임서버 주소]\n -4 : IPv4만 사용\n -6 : IPv6만 사용\n -o num : 지정한 포트(num)으로 연결\n -p : 호스트의 정보만 출력하고 설정은 안 함\n -s : 설정만 하고 내용은 출력 안 함\n -u : TCP 대신 UDP 사용\n -v :  상세한 정보 출력"
  },
  {
    "id": 52,
    "sourceLabel": "38-1.",
    "question": "다음 중 원격지 타임서버(NTP)서버를 이용해 시스템 시간을 설정할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "date",
      "rdate",
      "stty",
      "time"
    ],
    "answer": 1,
    "explanation": "rdate는 remote date로 원격지의 타임서버에서 시간 정보를 가져와 로컬 시스템의 시간과 동기화 시켜주는 명령어입니다."
  },
  {
    "id": 53,
    "sourceLabel": "39.",
    "question": "리눅스 설치 시에 나타나는 파일시스템 유형 중 마이크로소프트사의 윈도우와 관련 있는 유형으로 알맞은 것은?",
    "options": [
      "ext2",
      "ext4",
      "vfat",
      "swap"
    ],
    "answer": 2,
    "explanation": "리눅스시스템에서 지원되는 파일시스템은 ext, ext2, ext3, ext4, swap, xfs, iso9660, hpfs, ufs등이 있습니다.\n\n저널링 파일시스템 : ext3, ext4, JFS, XFS, ReiserFS\n사용목적 : 데이터의 복구가 용이하고 복구될 확률이 높음.\nvfat는 긴 이름의 디렉토리를 지원하는 타입으로 윈도우즈 타입의 파일시스템입니다.\n\n또한 NTFS나 FAT 같은 파일시스템을 윈도우즈에서는 사용합니다.\n\n참고:리눅스에서 지원하는 네트워크 파일시스템 유형 : SMB, NFS, CIFS"
  },
  {
    "id": 54,
    "sourceLabel": "40.",
    "question": "다음 ( 괄호 ) 안에 들어갈 명령으로 알맞은 것은?\n# (    ) find /-name '*.txt' 2>/dev/null > list\nreal 0m23.776s\nuser 0m0.283s\nsys 0m1.603s",
    "options": [
      "set",
      "time",
      "date",
      "rdate"
    ],
    "answer": 1,
    "explanation": "time find /-name '*.txt' 2>/dev/null > list을 실행하면, real, user, sys등의 결과와 시간 정보가 출력됩니다.\n\nuser의 경우 user영역에서 실행된 시간을 의미하며,\n\nsys의 경우 커널에서 실행된 시간,\n그리고 user와 sys를 합산한 총 실행 시간을 rea로 표현합니다.\n\ntime 명령어는 ‘time [명령어]’ 형식으로 사용합니다.\n명령어 실행 시간에 대한 자세한 통계를 보여줍니다."
  },
  {
    "id": 55,
    "sourceLabel": "41.",
    "question": "리눅스 배포판을 구성하고 있는 것으로 틀린 것은?",
    "options": [
      "셸(Shell)",
      "GNU 표준 유틸리티",
      "리눅스 커널",
      "허드(Hurd)"
    ],
    "answer": 3,
    "explanation": "리눅스(Linux)는 리누스(Lunus)+유닉스(Unix)의 합성어 입니다.(유닉스를 모델로 하여 리눅스가 개발됨)\n\n리누스 토발즈는 유닉스의 POSIX호환을 기반으로 하는 리눅스라는 커널(Kernel)을 개발하였고, “리차드 스톨만(Richard Stallman)” 이 주도하는 GNU 프로젝트에 참여하면서 수 많은 프로그래머들과 함께 현재의 보조프로그램과 응용 소프트웨어들을 만들어 현재의 리눅스가 되었습니다.\n\n“리차드스톨만”은 자유소프트웨어재단(Free Software Foundation, FSF)의 회장입니다.(프로그램의 변경 및 수정은 자유로워야 한다)\n\nGNU프로젝트는 각종 UNIX 상용 프로그램에 대항하여 수 많은 무료 공개 프로그램을 만들었습니다.\n\n리차드스톨만은 HURD라는 커널을 만들었지만 많이 미흡한 상태였으며, 토발즈의  리눅스를 만나면서 현재의 리눅스 운영체제가 만들어지는 계기가 되었습니다.\n\nHURD가 이후에 리눅스 커널이 됩니다."
  },
  {
    "id": 56,
    "sourceLabel": "42.",
    "question": "다음 중 최근에 추가한 파일이나 디렉터리를 locate 명령으로 찾지 못할 때 실행하는 명령으로 알맞은 것은?",
    "options": [
      "update",
      "locatedb",
      "updatedb",
      "search"
    ],
    "answer": 2,
    "explanation": "찾기 명령어의 대명사는 find입니다. 그렇지만 find는 너무 세세하게 찾기 때문에 시간이 오래 걸리는 문제가 있습니다. 그래서 이러한 문제를 해결하고자 locate라는 명령어를 많이 사용합니다.\nlocate라는 명령어가 find보다 빠르게 찾는 이유는 locate 명령어 사용 전에 sudo updatedb 명령어로 DB파일을 만들어 놓기 때문입니다.\n \n하지만 DB파일의 생성이후 새롭게 문제의 지문처럼 파일이나 디렉터리 추가하였다면 다시 updatedb를 해 주셔야만 locate 명령어 실행시 추가한 파일이나 디렉터리가 확인이 될 것입니다."
  },
  {
    "id": 57,
    "sourceLabel": "42-1.",
    "question": "크론 데몬(cron deamon)에 의해 갱신된 데이터베이스를 바탕으로 파일의 빠른 검색을 가능하게 하는 명령어는?",
    "options": [
      "locate",
      "grep",
      "find",
      "search"
    ],
    "answer": 0,
    "explanation": "패턴에 맞는 파일을 찾고자 할 때는 주로 locate명령어를 사용합니다.\n\nlocate라는 명령어가 find보다 빠르게 찾는 이유는 locate 명령어 사용 전에 sudo updatedb 명령어로 DB파일을 만들어 놓기 때문입니다."
  },
  {
    "id": 58,
    "sourceLabel": "43.",
    "question": "현재 시스템에 S-ATA 타입 디스크를 장착하여 사용 중이다. USB 메모리를 시스템에 연결했을 때 인식되는 장치 파일명으로 알맞은 것은?",
    "options": [
      "/dev/hda",
      "/dev/hdb",
      "/dev/sda",
      "/dev/sdb"
    ],
    "answer": 3,
    "explanation": "디스크 타입은 SATA, IDE정도로 구분이 됩니다.\nSATA방식으로 디스크를 연결하게 되면 sda, sdb, sdc와 같은 형태로 보여집니다.\nIDE방식으로 디스크를 연결하면 had, hdb, hdc와 같은 형태로 보여지구요.\n여기서 끝에 a,b,c와 같은 알파벳은 디스크의 숫자를 의미합니다. 한 개면 a, 두 개면 b, 세 개면 c로 나타납니다.\n\n그러면 문제에서 S-ATA 타입 디스크를 장착하여 사용중이고 여기에 USB메모리를 추가하였다고 하니 sdb로 usb메모리는 표시가 될 것 같습니다."
  },
  {
    "id": 59,
    "sourceLabel": "44.",
    "question": "다음 중 cut 명령으로 필드 구분자는 ‘:’으로 해서 /etc/passwd의 첫 번째의 및 세 번째 필드 출력하는 방법으로 알맞은 것은?",
    "options": [
      "cut -f: -d 1,3 /etc/passwd",
      "cut -d: -f 1,3 /etc/passwd",
      "cut -f: -d 1-3 /etc/passwd",
      "cut -d: -f 1-3 /etc/passwd"
    ],
    "answer": 1,
    "explanation": "cut이라는 명령어는 파일(내용)에서 원하는 부분을 잘라 출력합니다.\ncut [option] [file]\n-c [문자위치] : 잘라낼 곳의 글자 위치를 지정, 콤마나 하이픈을 사용하여 범위를 정할 수도 있으며, 이런 표현들을 혼합하여 사용할 수도 있습니다.\n예)lms:x:500:500::/home/lms:/bin/false에서 cut -c 1,3을 하면 결과가 l과 s가 출력됩니다. 그럼 cut -c 1-3을 하면 결과는 lms가 출력이 됩니다.\n \n-f [필드] : 잘라낼 필드를 정합니다.\n-d [구분자] : 필드를 구분하는 문자를 지정, 기본은 탭 문자입니다.\n예) lms:x:500:500::/home/lms:/bin/false에서 cut -d':' -f3을 하게 되면 ‘:’ 콜론을 기준으로 세 번째의 블록의 값을 잘라낸다는 의미이므로 결과 값은 500(앞부분)이 될 것 같습니다.\n참고로 -d옵션만으로는 사용이 안되며 보통 -f옵션과 함께 사용이 됩니다.\n\n자 그럼 문제에서 ‘-’ (하이픈)은 지정하는 곳부터 지정이 끝나는 부분까지 모두를 출력하는 것이고 ','는 지문에서처럼 첫 번째 및 세 번째 필드를 출력한다고 하였으니 ','을 사용할 것으로 보입니다.  또한 지문에서 필드 구분자는 ‘:’ 이라고 하였으니 -d':' 또는 -d: 으로 표현할 수 있을 것 같습니다.\n\n결과적으로 cut -d: -f 1,3 /etc/passwd를 실행하면 되며, 첫 번째 필드인 lms와 세 번째 피드인 500이 출력됩니다."
  },
  {
    "id": 60,
    "sourceLabel": "45.",
    "question": "다음 ( 괄호 ) 안에 들어갈 명령으로 알맞은 것은?\n#(     )\n/usr/local/share/man:/usr/share/man/overrides:/usr/share/man",
    "options": [
      "echo $PATH",
      "whereis",
      "manpath",
      "whatis"
    ],
    "answer": 2,
    "explanation": "echo $PATH를 하였을 때 PATH 환경변수로 지정된 경로를 나타내 주고 있습니다.\n/usr/bin:/bin:/usr/sbin:/usr/local/bin:/usr/x11/bin\n\n그런데 문제에서 보기로 제시된 내용은 조금 다른 특징이 있습니다.\n/usr/local/share/man:/usr/share/man/overrides:/usr/share/man\n뒤에 man이 붙어 있는 것들이 특징입니다.\n\n이는 manpath의 결과물로 매뉴얼 파일은 각 명령어들에 대한 도움말, 사용법등을 확인할 수 있기 때문에 중요한 파일이고 이 중요한 파일의 위치를 확인할 때는 manpath를 사용하여 확인합니다.\n\nwhereis 명령어를 사용하면 바이너리 파일의 위치뿐만 아니라 소스, 매뉴얼의 위치도 알 수 있습니다.\nwhatis 명령어의 설명을 간략하게 보여주는 명령어입니다.\n\n위의 두 명령어는 명령어 뒤에 대상이 나와야 합니다.\n예)whereis ls"
  },
  {
    "id": 61,
    "sourceLabel": "46.",
    "question": "다음 중 일정시간동안 작업을 하지 않는 사용자를 강제적으로 로그아웃 되도록 설정할 때 사용하는 환경변수로 알맞은 것은?",
    "options": [
      "LOGOUT",
      "EXIT",
      "TMOUT",
      "SESSION"
    ],
    "answer": 2,
    "explanation": "로그인 후에 일정시간 동안 동작이 감지되지 않으면 TMOUT(타임아웃)이라는 환경변수를 사용하여 로그아웃 시킬 수 있습니다.\n\n단위는 초 단위를 이용합니다. (0이면 무한대 종료하지 않겠다는 의미)"
  },
  {
    "id": 62,
    "sourceLabel": "47.",
    "question": "재부팅 했을 때 호출되는 런레벨 값을 확인하려고 한다. 다음 중 관련 정보를 담고 있는 파일로 알맞은 것은?",
    "options": [
      "/boot/grub/grub.conf",
      "/etc/runlevels",
      "/etc/inittab",
      "/boot/runlevels"
    ],
    "answer": 2,
    "explanation": "부팅 중 변경을 희망할 경우에는 init명령을 이용하여 변경합니다.\n사용법 : init [RunLevel 숫자]\n\n만약 기본 설정이 “다중 사용자 그래픽 모드”로 되어 있는 상태에서 다른 런레벨로 일시 변경할 수 있습니다.,\ninit 0 =  시스템을 종료합니다.\ninit 3 = 다중 사용자 텍스트 모드로 전환합니다.\ninit 6 = 시스템을 재 부팅합니다.\n\nCentOS7에서는 아래와 같이 런레벨 3과 5를 확인할 수 있습니다.\n\nmulti-user.target: analogous to runlevel 3\n\ngraphical.target: analogous to runlevel 5"
  },
  {
    "id": 63,
    "sourceLabel": "48.",
    "question": "GRUB 부트 메뉴에서 커널과 관련된 매개변수(parameter)를 추가하려고 할 때 가장 손쉬운 방법으로 알맞은 것은?",
    "options": [
      "[a]",
      "[b]",
      "[c]",
      "[e]"
    ],
    "answer": 0,
    "explanation": "GRUB의 멀티부트 메뉴 화면에서 [a], [c], [e] 키를 누르면 각각의 모드로 진입 할 수 있습니다.\n[a]는 kernel의 파라미터를 추가할 수 있게 하는 모드입니다.\n[e]는 멀티부트 메뉴의 리스트 항목을 직접 편집 할 수 있게 해주는 모드입니다.\n[c]는 상호대화식 모드입니다."
  },
  {
    "id": 64,
    "sourceLabel": "49.",
    "question": "다음 중 특정 사용자로부터 전달되는 메시지를 거부할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "talk",
      "mesg",
      "wall",
      "write"
    ],
    "answer": 1,
    "explanation": "talk 명령어는 동일한 시스템 이외에도 원격지에 있는 사용자와도 통신이 가능합니다.\n\nwrite 명령어는 특정 사용자에게 메시지를 보낼때 사용합니다.\n\nwall 명령어는 동일 시스템에 있는 모든 사용자에게 메시지를 보냅니다.\n\nmesg 명령어는 메시지 받기를 허용 또는 거부 할 수 있습니다.\n하지만 root관리자의 메시지는 거부를 해도 메시지 내용이 보입니다.\n\n사용방법은 아래와 같습니다.\n# mesg  : 현재 상태 확인\n# mesg y  : 허용\n# mesg n  : 거부"
  },
  {
    "id": 65,
    "sourceLabel": "50.",
    "question": "파일 또는 디렉토리와 관련된 명령으로 거리가 먼 것은?",
    "options": [
      "ls",
      "cp",
      "ps",
      "cat"
    ],
    "answer": 2,
    "explanation": "ls명령어는 현재 위치에 있는 파일과 디렉터리의 목록 정보로 확인해 줍니다.\n\ncp는 copy로 파일과 디렉터리를 복사할 수 있는 명령어입니다.\n\ncat은 파일과 디렉터리의 내용을 확인할 때 사용하는 명령어입니다.\n\nps는 프로세스 정보를 확인하는 명령어입니다."
  },
  {
    "id": 66,
    "sourceLabel": "51.",
    "question": "다음과 같은 형식이 저장되어 있는 파일로 알맞은 것은?\nadmin:X:1001:kaituser",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/gshadow"
    ],
    "answer": 2,
    "explanation": "admin:X:1001:kaituser에서 확인해 볼 수 있는 것은 아래와 같습니다.\n그룹이름은 admin이며, X는 비밀번호가 2중으로 암호화 되었다는 것, 그리고 1001는 GID값이 1001라는 것이며, admin이라는 그룹에 소속된 사용자는 kaituser라는 것입니다.\n\n/etc/shadow와 /etc/gshadow의 특징은 암호부분이 아래와 같이 알 수 없는 표시로 암호화 되어 있다는 것입니다.\n\nadmin:$1$KpIXVVkV$mZ4gDjTQXj2.Uk9op5UB0/:1001:kaituser"
  },
  {
    "id": 67,
    "sourceLabel": "51-1.",
    "question": "다음은 /etc/group 파일 내용 중 일부이다. 이에 대한 설명으로 틀린 것은?\n\nihd:21:kaituser,exam,linuxman",
    "options": [
      "그룹의 이름은 ihd이다.",
      "그룹의 멤버는 kaituser,exam,linuxman이다.",
      "그룹 관리자는 kaituser이다.",
      "그룹의 ID(GID)는 21이다."
    ],
    "answer": 2,
    "explanation": "/etc/group 파일의 내용은 “그룹명:GID:그룹에 포함된 계정들”입니다."
  },
  {
    "id": 68,
    "sourceLabel": "52.",
    "question": "다음 중 유닉스(UNIX) 운영체제를 개발한 인물로 알맞은 것은?",
    "options": [
      "리누스 토발스",
      "리처드 스톨만",
      "앤드루 스튜어트 타넨바움",
      "켄 톰슨"
    ],
    "answer": 3,
    "explanation": "유닉스(Unix)는 교육 및 연구 기관에서 즐겨 사용되는 범용 다중 사용자 방식의 시분할 운영 체제이며, 1970년대 초반 벨 연구소 직원인 켄 톰슨, 데니스 리치 등이 처음 개발하였습니다.\n\n이후 대부분의 운영체제의 모태가 됩니다."
  },
  {
    "id": 69,
    "sourceLabel": "53.",
    "question": "다음 중 1982년 6월의 달력 정보를 출력하는 명령으로 알맞은 것은?",
    "options": [
      "date 1982 6",
      "date 6 1982",
      "cal 1982 6",
      "cal 6 1982"
    ],
    "answer": 3,
    "explanation": "cal 명령어는 달력을 출력하는 명령어입니다.\n특별한 옵션 없이 cal 만 실행하면 해당 년도의 월이 출력됩니다.\n만약 cal 1982를 하면 1982년도 달력이 출력되며, cal 6 1982를 하면 1982년의 6월 달력이 출력됩니다.\n예로 cal 9 2022을 하면 2022년 9월의 달력을 볼 수 있습니다.\n\n참고로 date명령어를 이용하면 현재의 년-월-일-시 순으로 확인이 가능합니다."
  },
  {
    "id": 70,
    "sourceLabel": "54.",
    "question": "다음 중 주 파티션에 부여될 수 있는 최대 파티션 번호 값으로 알맞은 것은?",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "리눅스에는 세 가지 종류의 파티션이 있습니다.\n- Primary Partition (주 영역 파티션 또는 주 파티션이라고 부름) : 1개~4개까지 생성가능\n- Extended Partition (확장 영역 파티션) : 1개 ~4개까지 생성가능\n   Logical Partition (논리 영역 파티션)\n\n** 주 파티션은 최대 4개까지 생성가능\n** 확장 파티션을 논리 파티션으로 만들어 주어야 사용이 가능함.   (논리파티션은 12개까지 생성가능)"
  },
  {
    "id": 71,
    "sourceLabel": "55.",
    "question": "Bash쉘(Shell)에서 설정되어 있는 PATH 환경변수에 /usr/local/bin 이라는 새로운 값을 추가하기 위한 명령으로 알맞은 것은?",
    "options": [
      "export PATH=/usr/local/bin",
      "path=/usr/local/bin",
      "export PATH=$PATH:/usr/local/bin",
      "path=$PATH:/usr/local/bin"
    ],
    "answer": 2,
    "explanation": "PATH 경로를 확인, 추가 하는 방법\n설정된 PATH를 확인하는 방법 - # echo $PATH 또는 # export $PATH 2가지 방법이 주로 사용됩니다.\n\nPATH를 추가하는 방법(대소문자 구분)\nPATH=[$PATH]:[환경변수값]   또는 export PATH=$PATH:[환경변수값]\n예) PATH=$PATH:/usr/local/bin 예) export PATH=$PATH:/usr/local/bin\n\n - 변수명(PATH)와 환경변수값 사이는 : (콜론)으로 구분합니다.\n참고로 [MSDOS 즉 윈도우즈는 ; (세미콜론)으로 구분]\n예로 PATH를 여러 개 등록 시 :home:home/kkk 와 같이 세미콜론으로 구분하여 등록합니다. \n\n - bash에서 설정되는 환경변수는 변수명 앞에 $을 앞에 붙여 주어야 합니다.\n[MSDOS 즉 윈도우즈는 변수명 앞과 뒤에 %를 사용]\n - 보통 PATH 환경변수는 로그인시 자동 실행되는 profile에 저장하지 않으면 로그아웃되면 초기화가 되어 사라집니다."
  },
  {
    "id": 72,
    "sourceLabel": "56.",
    "question": "다음 중 나머지 셋과 결과가 다른 것은?",
    "options": [
      "shutdown -h now",
      "halt",
      "init 0",
      "reboot"
    ],
    "answer": 3,
    "explanation": "shutdown -h now와 halt, init 0은 즉시 시스템을 종료하는 명령업니다.\n\nshutdow은 종료 명령어이며, -h now를 하게 되면 즉시 종료를 진행한다는 의미입니다.\n\n/etc/rc.d/init.d/ halt  : halt는 중지를 뜻합니다. \n시스템이 런레벨(runlevel)0 또는 런레벨 6으로 실행이 될 때에 init 프로세스에 의해 실행되는 스크립트로서 현재 시스템에 실행된 모든 프로세스를 죽이고 모든 파일시스템의 마운트를 해제한 후에 시스템을 종료시키거나 재 부팅을 합니다.\n\ninit 0을 하게 되면 런레벨 0을 실행한다는 의미이며, 0을 종료를 의미합니다.\n\nreboot는 종료했다가 다시 실행하라는 의미입니다."
  },
  {
    "id": 73,
    "sourceLabel": "56-1.",
    "question": "다음 중 시스템을 종료하는 명령으로 틀린 것은?",
    "options": [
      "shutdown -h now",
      "halt",
      "init 6",
      "poweroff"
    ],
    "answer": 2,
    "explanation": "shutdown -h now와 halt, init 0, poweroff는 즉시 시스템을 종료하는 명령어입니다.\n\nreboot와 init 6 그리고 shutdown -r 옵션을 사용하면 재부팅을 한다는 의미입니다."
  },
  {
    "id": 74,
    "sourceLabel": "57.",
    "question": "다음 명령에 대한 설명으로 맞는 것은?\ngroupadd -g 1001 ihd",
    "options": [
      "ihd라는 파일을 그룹에 추가한다.",
      "ihd라는 그룹을 생성한다.",
      "ihd파일을 1001이라는 그룹에 추가한다.",
      "ihd라는 그룹을 1001 그룹에 추가한다."
    ],
    "answer": 1,
    "explanation": "group + add 즉 그룹을 추가한다는 명령어이며, -g즉 소문자 g는 GID를 뜻합니다.\n특정 GID를 별도로 지정하여 그룹을 만들고 싶다면 groupadd -g 1001 ihd라고 하면 GID값이 1001인 ihd 그룹이 생성됩니다."
  },
  {
    "id": 75,
    "sourceLabel": "58.",
    "question": "다음과 같은 형식이 저장되어 파일로 알맞은 것은?\nadmin:!:kaituser",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/gshadow"
    ],
    "answer": 3,
    "explanation": "/etc/passwd는 7개필드\nroot:x:0:0:root:/root:/bin/bash\n\n/etc/shadow는 9개 필드\nroot:$1$TErQdm91$ztAY7XUjU1dVRu2WelY22/:17360:0:99999:7:::\n\n/etc/group은 4개필드\nbin:x:1:root,bin,daemon\n\n/etc/gshadow는 3~4개 필드\nadmin:$1$KpIXVVkV$mZ4gDjTQXj2.Uk9op5UB0/:505:kaituser\n또는 admin:!:kaituser과 같이 표현됩니다. 힌트가 될 부분은 중간의 ! (느낌표)입니다."
  },
  {
    "id": 76,
    "sourceLabel": "59.",
    "question": "파티션에 대한 설명으로 틀린 것은?",
    "options": [
      "하나의 물리적 디스크에는 4개의 Primary 파티션으로 분할이 가능하다.",
      "파티션은 실린더를 기준으로 나뉘어 진다.",
      "1개의 Extended 파티션은 6개의 Primary 파티션으로 분할이 가능하다.",
      "하나의 물리적 디스크에 12개 이상의 파티션 생성도 가능하다."
    ],
    "answer": 2,
    "explanation": "- 교재 136 ~ 137 참조\n파티션(Partition): 하나의 물리적인 공간을 여러 개의 논리적인 디스크로 나누는 것을 말함.\n\n파티션의 종류: 주파티션(Praimary)와 확장파티션(Extended), 논리파티션(Logical)으로 나뉨.\n\n-주 파티션 : 디스크 하나당 주 파티션은 최대 4개까지 생성 가능.\n주로 운영체제를 설치 하는 곳을 ( / ) 루트 파티션이라고도 함.\n운영체제 설치 시 최소한 설치되어야 하는 파티션은 루트( / )파티션과 swap(스왑)파티션입니다.\n주파티션 중 하나는 확장파티션으로 나눌 수 있으며, 확장파티션은 최대 12개까지 논리파티션을 만들어 사용할 수 있습니다.\n\n스왑(swap)파티션은 물리적인 메모리의 부족현상을 대비하기 위해 설정합니다.\n(swap의 ID값은 82, 보통 데이터 파티션의 ID값은 83)\n\n주 파티션 한 개를 확장 파티션으로 나눌 수 있습니다.\n\n-확장파티션과 논리파티션 : 확장 파티션은 논리파티션으로 최대 12개까지 생성 가능\n(확장파티션은 논리파티션에 대한 정보를 저장),(논리파티션은 주로 데이터를 저장)      \n\n   \n\n쉽게 말해 확장파티션에 직접 데이터를 저장할 수는 없다는 말이며, 확장파티션을 나눠준 후에 다시 논리파티션으로 나눠 주어야 D드라이브, E드라이브 같이 드라이브문자를 할당해 사용할 수 있다는 말이 됩니다.\n\n파티션을 나눌 때 최적의 성능을 고려해 4개에 대한 파티션 배분을 권장하고 있습니다.\n/, swap, /usr, /home, /var ← 루트 ( / )를 포함하면 총 5개\n\nfdisk를 이용해 파티션을 나눌때는 “실린더”가 기준이 됩니다."
  },
  {
    "id": 77,
    "sourceLabel": "59-1.",
    "question": "다음 중 파티션에 대한 설명으로 틀린 것은?",
    "options": [
      "운영체제에서 사용하도록 논리적으로 나누어진 하드디스크의 각 구역을 말한다.",
      "Primary, extend, logical로 구분할 수 있다.",
      "하나의 하드디스크에 최대 세 개의 primary 파티션을 만들 수 있다.",
      "extend 파티션 내에 여러 개의 logical 파티션을 만들 수 있다."
    ],
    "answer": 2,
    "explanation": "- 교재 136 ~ 137 참조\n파티션(Partition): 하나의 물리적인 공간을 여러 개의 논리적인 디스크로 나누는 것을 말함.\n\n파티션의 종류: 주파티션(Praimary)와 확장파티션(Extended), 논리파티션(Logical)으로 나뉨.\n\n-주 파티션 : 디스크 하나당 주 파티션은 최대 4개까지 생성 가능.\n주로 운영체제를 설치 하는 곳을 ( / ) 루트 파티션이라고도 함.\n운영체제 설치 시 최소한 설치되어야 하는 파티션은 루트( / )파티션과 swap(스왑)파티션입니다.\n주파티션 중 하나는 확장파티션으로 나눌 수 있으며, 확장파티션은 최대 12개까지 논리파티션을 만들어 사용할 수 있습니다.\n\n스왑(swap)파티션은 물리적인 메모리의 부족현상을 대비하기 위해 설정합니다.\n(swap의 ID값은 82, 보통 데이터 파티션의 ID값은 83)\n\n주 파티션 한 개를 확장 파티션으로 나눌 수 있습니다.\n\n-확장파티션과 논리파티션 : 확장 파티션은 논리파티션으로 최대 12개까지 생성 가능\n(확장파티션은 논리파티션에 대한 정보를 저장),(논리파티션은 주로 데이터를 저장)      \n\n   \n\n쉽게 말해 확장파티션에 직접 데이터를 저장할 수는 없다는 말이며, 확장파티션을 나눠준 후에 다시 논리파티션으로 나눠 주어야 D드라이브, E드라이브 같이 드라이브문자를 할당해 사용할 수 있다는 말이 됩니다.\n\n파티션을 나눌 때 최적의 성능을 고려해 4개에 대한 파티션 배분을 권장하고 있습니다.\n/, swap, /usr, /home, /var ← 루트 ( / )를 포함하면 총 5개\n\nfdisk를 이용해 파티션을 나눌때는 “실린더”가 기준이 됩니다."
  },
  {
    "id": 78,
    "sourceLabel": "60.",
    "question": "다음 중 현재 사용 중인 가상 콘솔창 정보를 확인하는 명령으로 알맞은 것은?",
    "options": [
      "cal",
      "tty",
      "stty",
      "cls"
    ],
    "answer": 1,
    "explanation": "cal은 calendar의 줄임말입니다. 달력, 일정표 등으로 해석됩니다.\n\ntty는 TeleTYpewrite로 한 번에 한 개의 문자를 보내는 방식을 의미하기도 합니다.\n(주로 터미널이나 콘솔을 의미)\ntty는 아래와 같이 현재 사용 중인 터미널의 파일명(이름)을 보여줍니다.\n#tty\n\n/dev/pts/0\n\npts/0은 Pseudo Terminal Slave를 말하며, pseudo는 가상이라는 의미로 가상콘솔을 뜻합니다. 주로 tty0, tty1, tty2와 같이 표현합니다.\n\n이러한 가상 콘솔은 6개가 있으며, 7번째는 x-윈도우를 뜻합니다.\n이때는 tty/n 으로 표현하지 않고 pts/n으로 표현합니다.\n\n현재 사용중인 터미널 이외에 추가로 다른 터미널을 사용하고자 할 때는 ALT+F2 로 사용할 수 있습니다.\n\n(ctrl+alt+f1 ~ f6까지는 가상콘솔이며, →  tty1(f1선택 시), tty2(f2선택 시)과 같이 표현됨, ctrl+alt+f7은 x-window이며, pst/1과 같이 표현됨)\n\nstty(short for Set TeleTYpe)는 현재 사용하고 있는 가상터미널의 사용정보를 확인할 수도 있고 정보를 변경할 수도 있습니다.\n\n#stty\nspeed 38400 baud;  line = 0;\neol = M-＾?; eol2 = M-＾?; swtch = M-＾?;\nixany iutf8\n\n**speed : 터미널의 속도를 표시\n**baud : 정보 전송 속도단위\n**eol : 한 행의 끝\n**eol 2 : 한 행을 마치기 위한 별도의 문자\n**swtch : 다른 쉘 계층으로 스위칭\n**ixany : 어떤 문자든 출력을 다시 시작할 수 있게 허용한다.\n\ncls는 윈도우즈 환경(DOS)에서 사용하는 화면 지우기 명령어입니다.\n리눅스 시스템에서는 clear를 사용해야만 됩니다."
  },
  {
    "id": 79,
    "sourceLabel": "61.",
    "question": "다음 중 네트워크상에서 사용자 인증에 사용하는 시스템으로 틀린 것은?",
    "options": [
      "kerberos",
      "NFS",
      "LDAP",
      "NIS"
    ],
    "answer": 1,
    "explanation": "NFS (Network File System)\n\n네트워크상에서 원격 시스템의 파일 시스템을 로컬 시스템에 공유하고 마운트하기 위한 프로토콜 및 시스템입니다. 사용자 인증과는 직접적인 관계가 없습니다.\n\nkerberos\n분산 컴퓨팅 환경에서 대칭키 암호를 이용해서 사용자 인증을 제공하는 중앙 집중형 인증 방식입니다.\n\n1980년대 중반 Sun Microsystems에서 NFS와 NIS프로토콜을 발표(개발)하였습니다.\n\nNIS(Network Information Service)는 중요한 시스템 데이터베이스 파일들을 네트워크를 통하여 공유함으로써 관리자와 사용자들에게 일관성 있는 시스템 환경을 제공합니다.\n\nLDAP(Lightweight Directory Access Protocol)\n가벼운(간단한) 디렉터리 액세스 프로토콜로 TCP/IP 위에서 디렉터리 서비스를 조회하고 수정하는 응용 프로토콜을 말합니다.\n디렉터리는 논리, 계급 방식 속에서 조직화된, 비슷한 특성을 가진 객체들의 모임이라고 생각하시면 됩니다."
  },
  {
    "id": 80,
    "sourceLabel": "62.",
    "question": "다음과 같이 명령을 실행한 상태이다. (괄호) 안에 'cd'라고 실행했을 때 이동되는 디렉터리로 알맞은 것은?\n[kaituser@www /]$ cd /usr/local/src\n[kaituser@www src]$ (       )",
    "options": [
      "/",
      "/usr/local",
      "/usr/local/src",
      "/home/kaituser"
    ],
    "answer": 3,
    "explanation": "-\n. 은 현재 디렉터리를 의미하며,\n..은 상위 디렉터리를 의미합니다.\n/은 디렉터리를 구분해 주는 역할을 하며, 루트폴더를 의미합니다.\n~은 사용자 홈 디렉터리를 의미합니다.(cd 만 사용해도 동일)\n\n최종 경로는 /usr/local/src 이며, 이 위치에서 cd를 입력하게 되면 홈디렉터리로 이동하게 됩니다.\n[kaituser@www /]$ cd /usr/local/src\n[kaituser@www src]$ cd 혹은 cd ~\n[kaituser@www ~]$"
  },
  {
    "id": 81,
    "sourceLabel": "63.",
    "question": "다음 중 특정 명령을 주기적으로 실행시킬 때 사용하는 명령어로 알맞은 것은?",
    "options": [
      "time",
      "watch",
      "strings",
      "rdate"
    ],
    "answer": 1,
    "explanation": "[ihd@localhost ~]$ time ls -l\nreal   0m0.009s  → User + sys + ∝ = 합산된 총실행 시간\nuser  0m0.002s  → User 영역에서 실행된 시간\nsys   0m0.005s  → 시스템 즉 커널에서 실행된 시간\n\ntime 명령어는 다른 명령어들 앞에 사용되어 해당 명령어 실행에 소요되는 시간을 표시해 줍니다.\n\nwatch는 원하는 명령어의 결과를 원하는 시간에 맞게 주기적으로 리프레시(새로고침) 하여 결과를 보여주는 명령어입니다. 시스템의 자원 사용량을 모니터링 하거나, 특정 명령어를 반복적으로 입력해서 결과를 확인해야 할 때, 유용하게 사용할 수 있는 명령어 입니다.\n\n기본적인 사용방법은 아래와 같습니다.\n[root@localhost]# watch [-d] [-n seconds] 'command'\n종료는 ctrl + c를 하시면 됩니다.\n-d 옵션은 이전 출력결과와 비교하여 변경된 부분을 표시해 주는 기능\n-n 옵션은 입력한 명령어의 결과를 원하는 초 단위로 출력해 주는 기능(기본 값: 2초)\n사용 예) watch -d -n 10 명령어 → 명령어를 10초마다 실행하라는 의미\n\nstrings는 보통 프로그램 안에 있는 문자열을 출력할 때 사용합니다.\n보통 문서의 내용을 보는 것은 cat 명령어를 이용해서 보게 되지만 프로그램 안에 있는 문자열은 strings를 이용하는 것이 보통입니다.(물론 cat으로는 프로그램 파일의 내용 확인은 안 됩니다.)\n\n기본적인 사용방법은 아래와 같습니다.\nstrings <옵션> <파일명>\n\n사용 예) strings anaconda-ks.cfg → 아래에 해당 내용들이 출력됨.\n\nrdate(remote date)는 원격지의 타임서버에서 시간 정보를 가져와서 로컬 시스템의 시간과 동기화를 하는 명령어입니다.\n\n기본적인 사용방법은 아래와 같습니다.\nrdate [옵션]... [타임서버 주소]\n사용 예) rdate -p time.bora.net\n참고로 현재의 날짜와 시간정보를 확인하고자 할때는 #date라고 입력하면 확인이 가능합니다."
  },
  {
    "id": 82,
    "sourceLabel": "64.",
    "question": "다음 중 해킹과 관련된 도구 및 설명서들이 내장되어 있어서 정보보안을 공부하는 데 유용한 리눅스 배포판조합으로 알맞은 것은?",
    "options": [
      "kali Linux, Scientific Linux",
      "Vector Linux, Scientific Linux",
      "Back Track, Kali Linux",
      "Back Track, Vector Linux"
    ],
    "answer": 2,
    "explanation": "Back Track : 보안 테스트를 위해 만든 오픈 소스 리눅스 배포판이지만 해킹관련 정보가 많아 별명이 해킹머신으로 불림.(우분투 기반)\n\nKali : Back track의 후속 배포판. 데비안 기반이며, 해킹도구, 해킹 툴을 포함하여 해킹 교육용으로 많이 사용됩니다.\n\nScientific Linux는 페르미 국립 가속기 연구소가 만든 리눅스 배포판이며, 레드햇 엔터프라이즈 리눅스 기반의 자유 및 오픈 소스 운영 체제입니다.\n이름에서 유추해 볼 수 있듯이 주로 연구소나 대학교 등에서 사용합니다.\n\n벡터 리눅스(Vector Linux)는 로버트 S. 란게(Robert S. Lange)와 다렐 스타벰(Darell Stavem)이며 슬랙웨어 리눅스에서 분기한 리눅스입니다. 벡터 리눅스는 소호, 표준, 가벼운, 라이브 이렇게 4개의 판이 존재합니다."
  },
  {
    "id": 83,
    "sourceLabel": "65.",
    "question": "다음은 특정 명령어의 실행 결과 중 일부이다. 관련 명령으로 알맞은 것은?\nxxxx to www.ihd.or.kr (211.202.42.101), 30 hops max, 60 byte packets\n1. 203.247.40.1 (203.247.40.1)  4.218 ms   4.968 ms   5.576 ms\n2. 203.247.40.2 (203.247.40.2)  0.713 ms   1.199 ms   1.463 ms\n3. 202.30.54.169 (203.30.54.169)  0.999 ms   1.216 ms   1.450 ms",
    "options": [
      "traceroute",
      "route",
      "dig",
      "ping"
    ],
    "answer": 0,
    "explanation": "**ms(밀리세컨) : 시간을 표시하는 단위로 1밀리 세컨드는 1000분의 1초를 말합니다.\n**www.ihd.or.kr (211.202.42.101)는 최종 목적지의 주소를 뜻합니다.\n**30 hops max : 최대 홉은 30개까지라는 뜻입니다.(거쳐 가는 경로를 의미)\n \ntraceroute와 tracert는 인터넷에서 거치게 되는 경로를 표시하고 그 구간의 정보를 기록하고 인터넷 프로토콜 네트워크를 통해 패킷의 전송 지연을 측정하기 위한 컴퓨터 네트워크 진단 명령어입니다. tracert는 윈도우즈 계열에서 사용하고 traceroute는 리눅스 계열에서 사용합니다.\n\nroute는 라우팅테이블을 표시해 줍니다.\n[ihd@localhost ~]$route\nkernel IP routing table\nDestination Gateway Genmask flags   Metric   Ref   Use Iface\n192.168.200.0      *            255.255.255.0   U        1      0     0  eth0\ndefault         192.168.200.2   0.0.0.0          UG       0      0     0  eth0\n\ndig는 Domain Information Groper의 약자로 네임서버로 부터 정보를 가져올 수 있는 명령어입니다.\n\n사용방법은 아래와 같습니다.\ndig [@server] [domain] [query type]\ndig [domain]\n\n사용예) dig google.com\n\nping(Paket Internet Grope)은 컴퓨터 네트워크 상태를 점검, 진단하는 명령입니다.\n\n사용방법은 아래와 같습니다.\n\nping [목적지] [옵션]\n\n사용 예) ping 127.0.0.1\n\n위의 traceroute나 tracert와 다른 것은 거쳐가는 경로는 없고 보내는 쪽과 목적지의 주소간 통신이 원할 한지의 여부 등을 체크하게 됩니다.\n\n네트워크상태에 대한 결과는 ICMP 프로토콜(Internet Control Message Protocol)를 통해 볼 수 있는데 DDoS 공격에 주로 사용되다보니 현재는 ICMP 프로토콜을 막는 네트워크들이 많이 있습니다."
  },
  {
    "id": 84,
    "sourceLabel": "65-1.",
    "question": "다음 명령의 실행 결과에 대한 설명으로 가장 알맞은 것은?\n[root@ihd ~]#traceroute ihd.or.kr\n\ntraceroute to ihd.or.kr (211.202.42.101), 30 hops max, 60 byte packets\n1. 203.247.40.1 (203.247.40.1)  4.218 ms   4.968 ms   5.576 ms\n2. 203.247.40.2 (203.247.40.2)  0.713 ms   1.199 ms   1.463 ms\n--이하생략--",
    "options": [
      "ihd.or.kr 호스트가 속한 네임 서버에 IP주소를 질의하고 있다.",
      "ihd.or.kr까지 도달하기 위해 거쳐 가는 연결된 노드들을 확인하고 있다.",
      "ihd.or.kr 호스트가 살아있는지를 확인하고 있다.",
      "ihd.or.kr이 사용하는 네임 서버들의 접속 시간이 얼마나 되는지 확인하고 있다."
    ],
    "answer": 1,
    "explanation": "traceroute 명령어는 윈도우즈의 tracert와 같이 목적지까지의 최적의 경로를 확인할 때 사용되는 명령어입니다.\n\ntraceroute ihd.or.kr을 하게 되면 ihd.or.kr에 도달하기 위해 거쳐 가는 연결된 노드들을 확인할 수 있습니다.\n\n네임서버에 IP주소를 질의하는 명령어는 nslookup이 있으며, ihd.or.kr 호스트가 살아 있는지를 확인할 때는 ping을 사용하게 됩니다."
  },
  {
    "id": 85,
    "sourceLabel": "66.",
    "question": "패스워드 설정에 대한 설명으로 틀린 것은?",
    "options": [
      "명령과 로그인 이름(예 : passwd lms)을 입력하고 Enter키를 누른다.",
      "New Psssword : 프롬프트에서 암호를 입력하면, 화면 상에 입력한 암호가 그대로 표시된다.",
      "암호를 다시 입력하라는 프롬프트가 나오면 다시 입력한다.",
      "설정된 암호는 원하는 때에는 언제든 변경이 가능하다."
    ],
    "answer": 1,
    "explanation": "리눅스에서 패스워드를 설정하는 방법은 아래와 같습니다.\n[root@localhost ~]$passwd lim ← lim 이라는 계정은 이미 만들어져 있음.\nChanging password for user lim.\nNew password :         ← 지정 또는 변경하고자 하는 비밀번호를 입력해야 함.\n만약 지정한 패스워드가 단순하다면 좀더 복잡하게 입력하라고 뜸.\n하지만 그냥 지정하면 단순한 패스워드라도 사용이 가능함.\nRetype new password :       ← 지정 또는 변경하고자 하는 비밀번호를 입력해야 함.\npasswd : all authentication tokens updated successfully. ← 패스워드 생성이 완료됨.\n인증되어 토큰(개인식별코드)이 업데이트 성공했다는 메시지가 보임.\n\n패스워드가 화면상에 그대로 표시가 되면 보안상 노출의 위험이 있으므로 나타나면 안됩니다."
  },
  {
    "id": 86,
    "sourceLabel": "67.",
    "question": "일반적으로 각종 로그 파일과 사용자에게 전송된 전자 우편이 저장되는 위치는?",
    "options": [
      "/home",
      "/usr/local",
      "/var",
      "/etc"
    ],
    "answer": 2,
    "explanation": "/etc [Etcetera : 기타, 여러가지, 잡동사니]\n시스템 설정 파일이 들어 있는 폴더 입니다.\n사용자 정보를 가지고 있는 passwd (/etc/shadow에 저장됨), 그룹정의 파일인 group, 프린터 목록파일 printcap, 자동으로 마운트 되는 파일 시스템을 등록해 두는 파일 시스템 테이블 fstab, 각종 네트워크관련 파일과 기본적인 시스템 환경 결정 파일들이 있습니다.\n\n/home\n사용자 계정을 만들면 사용자 계정의 이름과 동일한 디렉터리가  /home 디렉터리 아래에 만들어 집니다.\n이 디렉터리는 사용자 계정마다 기본적으로 제공되는 것으로, 새로 등록한 사용자는 이 디렉터리 안에서만 컴퓨터를 사용할 수 있습니다.\n다른 디렉터리의 이동 시 허가 받지 않은 경로는 이용이 제한됩니다.\n허가와 금지는 “시스템 관리자”가 지정할 수 있습니다.\n개인용 공간으로 이해 하시면 되겠습니다.\n\n/var [Variable Data]\n시스템을 가동하면서 생기는 각종 임시 파일을 저장하는 디렉터리 입니다.(/var/log 대부분의 로그파일 및 전자메일, 프린트 관련 내용이 저장)\n커널 메시지를 기록하는 파일, 그리고 각종 스풀링이 필요한 파일들\n*스풀링은 프린터 인쇄 명령 시 프린터와 CPU간 속도 차이를 극복하고자 생긴 기능으로 CPU에서 일정 저장 공간에 인쇄할 목록을 쌓아두고 프린터는 해당 목록의 인쇄를 순서대로 진행하는 것을 말합니다.\n\n/usr[Universal System Resources]\n시스템, 응용프로그램에서 필요한 파일들이 저장되어 있는 디렉터리입니다.\n설치 할 때 하드디스크에서 가장 많은 용량을 지정해 주어야 하는 디렉터리 입니다.\n\nusr/local은 일반적으로 bin/, lib/, share/와 같은 서브 디렉토리를 가지고 있으며, 윈도우즈의 Program files와 유사합니다.(주로 새로운 프로그램들을 설치할 때 위치하는 곳입니다.)"
  },
  {
    "id": 87,
    "sourceLabel": "68.",
    "question": "FSF의 설립자로서 GNU를 이끌면서 리눅스의 발전에 핵심적인 역할을 한 사람은?",
    "options": [
      "리차드 스톨만(Richard Stallman)",
      "리누스 토발즈(Linus Torvalds)",
      "앤드류 타넨바움(Andrew Tanenbaum)",
      "빌 게이츠(Bill Gates)"
    ],
    "answer": 0,
    "explanation": "리눅스(Linux)는 리누스(Lunus)+유닉스(Unix)의 합성어 입니다.(유닉스를 모델로 하여 리눅스가 개발됨)\n\n리누스 토발즈는 유닉스의 POSIX호환을 기반으로 하는 리눅스라는 커널(Kernel)을 개발하였고, “리차드 스톨만(Richard Stallman)” 이 주도하는 GNU 프로젝트에 참여하면서 수 많은 프로그래머들과 함께 현재의 보조프로그램과 응용 소프트웨어들을 만들어 현재의 리눅스가 되었습니다.\n\n“리차드스톨만”은 자유소프트웨어재단(Free Software Foundation, FSF)의 설립자이자 회장입니다. (프로그램의 변경 및 수정은 자유로워야 한다)\n\nGNU프로젝트는 각종 UNIX 상용 프로그램에 대항하여 수 많은 무료 공개 프로그램을 만들었습니다.\n\n리차드스톨만은 HURD라는 커널을 만들었지만 많이 미흡한 상태였으며, 토발즈의  리눅스를 만나면서 현재의 리눅스 운영체제가 만들어지는 계기가 되었습니다."
  },
  {
    "id": 88,
    "sourceLabel": "69.",
    "question": "오픈소스 소프트웨어의 본질적인 의미로 틀린 것은?",
    "options": [
      "GPL 등의 라이선스를 따른다.",
      "Apache, GMP, PERL 등이 이에 해당한다.",
      "프로그램의 소유권이 자유로운 소프트웨어이다.",
      "프로그램의 소스 코드까지 공개되어 있는 소프트웨어이다."
    ],
    "answer": 2,
    "explanation": "오픈소스는 말 그대로 개발자가 개발된 프로그램의 원 소스를 공개한다는 의미입니다.\n또 공개된 소스를 사용할 때는 마찬가지 2차 저작물에 대한 소스도 공개되어야 한다는 것은 GPL(General Public License)의 기본 정신입니다.\n\n이러한 오픈소스기반의 운영체제, 프로그램은 매우 많습니다. 보기에서 제시한 아파치(Apache),GMP((GNU Multiple-Precision Library), 펄(PERL) 등도 모두 GPL 라이선스를 따르는 오픈소스입니다.\n\nGPL(GNU General Public License) – 일반 공중 사용허가서\n리차드스톨만이 소속된 자유소프트웨어 재단(Free Software Foundation. FSF)에서 만든 라이선스로 기본적인 개념은 아래와 같습니다.\n - 다른 사용자가 이미 개발한 프로그램을 언제든, 어떤 목적으로든 사용할 수 있다.\n - 개발된 프로그램의 복사 및 수정도 가능하며, 이를 재 가공하여 판매할 수도 있다.\n - 개발된 프로그램의 판매나 무료로 배포할 시에는 언제나 프로그램의 코드를 함께 배포하여야 하며, 재 가공된 경우도 마찬가지이다.\n\n이 라이선스로 프로그램을 만들게 되면, 모든 파생된 프로그램 역시 같은 라이선스를 가져야 한다.(쉽게 말해 완전한 공유의 정신을 말함)\n오해하면 안 되는 것은 GNU 프로그램이 공짜를 의미하는 것은 아니라는 점입니다. (개발자는 프로그램을 유료로 판매할 수도 있음)\n\n그러나 다른 사람들이 원래의 프로그램을 고쳐서 사용하는 것 까지는 막아서는 안 된다는  의미입니다.\n\n소유권이 자유로운 것이 아니라 공개된 프로그램 소스를 공개하여 해당 소스를 통해 추가 및 변경하여 사용할 수 있다는 것입니다."
  },
  {
    "id": 89,
    "sourceLabel": "69-1.",
    "question": "다음 설명에 해당하는 라이선스로 알맞은 것은?\n\n1991년 6월에 발표된 라이선스로 특허로 인하여 추가적으로 돈을 지불해야 하거나 소스 코드의 공개가 불가능하여 실행 바이너리 프로그램만 배포할 경우에 소스 코드뿐만 아니라 실행 바이너리 프로그램까지 배포할 수 없도록 하였다.",
    "options": [
      "GPL v1",
      "GPL v2",
      "GPL v3",
      "LGPL"
    ],
    "answer": 1,
    "explanation": "GPL v1은 1989년 1월에 발표\n\nGPL v2는 1991년 6월에 발표, LGPL과 관련됨\n\nGPL v3은 2007년 6월29일에 발표"
  },
  {
    "id": 90,
    "sourceLabel": "69-2.",
    "question": "다음 중 해당 라이선스가 적용된 프로그램의 소스 코드를 수정해서 사용할 경우에도 반드시 공개할 필요가 없는 조합으로 알맞은 것은?",
    "options": [
      "Apache       MIT",
      "Apache        MPL",
      "BSD        MPL",
      "BSD        GPL"
    ],
    "answer": 0,
    "explanation": "공개의무가 없음 : BSD, Apache, MIT\n\n일부공개의무없음 : LGPL, MPL"
  },
  {
    "id": 91,
    "sourceLabel": "70.",
    "question": "Sort명령어에서 셋째 항목을 숫자로 정렬하고 나서 첫째와 둘째 항목을 문자열의 역순으로 정렬하는 명령은?",
    "options": [
      "sort +2n -3 =0r -2 /etc/passwd",
      "sort -t: +2n -3 /etc/passwd",
      "sort -t: +6 =0f -1 /etc/passwd",
      "sort -r /etc/passwd"
    ],
    "answer": 0,
    "explanation": "sort [-옵션] [-o 저장될 파일명] 정렬할 파일명 [병합할 파일명\n -b : 앞 공백 무시\n -o : 저장할 파일 명시\n -r : 역순으로 표시\n -f : 대소문자 구분 하지 않음\n -t : 필드 구분자 지정\n -u :  중복행 제거\n -m :  정렬 파일 병합\n -n :  숫자만 비교\n\n+2n -3: 3번째 항목(인덱스 2번)부터 4번째 항목 직전까지 숫자(n) 정렬을 수행합니다.\n\n+0r -2: 그 다음 우선순위로 1번째와 2번째 항목(인덱스 0~1번)을 역순(r) 정렬합니다.\n\n② [틀림]: 단순히 3번째 항목을 숫자로 정렬하는 설정만 포함되어 있으며, 역순 정렬 조건이 누락되었습니다.\n\n③ [틀림]: 7번째 항목(+6)을 기준으로 하며, 문제의 조건과 일치하지 않습니다.\n\n④ [틀림]: 파일 전체 내용을 단순히 역순으로 정렬할 뿐, 특정 항목별 우선순위 지정이 없습니다.\n\n현대 리눅스(GNU Coreutils)에서는 더 직관적인 -k (key) 옵션을 권장합니다. 예: sort -t: -k3,3n -k1,2r /etc/passwd"
  },
  {
    "id": 92,
    "sourceLabel": "71.",
    "question": "다음은 /backup 디렉터리에 생성되는 파일을 모니터링 하는 과정이다. ( 괄호 ) 안에 들어갈 명령어로 알맞은 것은?\n#(     ) -n 10 ls -l /backup",
    "options": [
      "time",
      "date",
      "watch",
      "strings"
    ],
    "answer": 2,
    "explanation": "time 명령어는 다른 명령어들 앞에 사용되어 해당 명령어 실행에 소요되는 시간을 표시해 줍니다.\n\nwatch는 원하는 명령어의 결과를 원하는 시간에 맞게 주기적으로 리프레시(새로고침) 하여 결과를 보여주는 명령어입니다. 시스템의 자원 사용량을 모니터링 하거나, 특정 명령어를 반복적으로 입력해서 결과를 확인해야 할 때, 유용하게 사용할 수 있는 명령어 입니다.\n\n기본적인 사용방법은 아래와 같습니다.\n[root@localhost]# watch [-d] [-n seconds] 'command'\n종료는 ctrl + c를 하시면 됩니다.\n-d 옵션은 이전 출력결과와 비교하여 변경된 부분을 표시해 주는 기능\n-n 옵션은 입력한 명령어의 결과를 원하는 초 단위로 출력해 주는 기능(기본 값: 2초)\n사용 예) watch -d -n 10 명령어 → 명령어를 10초마다 실행하라는 의미\n\nstrings는 보통 프로그램 안에 있는 문자열을 출력할 때 사용합니다.\n보통 문서의 내용을 보는 것은 cat 명령어를 이용해서 보게 되지만 프로그램 안에 있는 문자열은 strings를 이용하는 것이 보통입니다.(물론 cat으로는 프로그램 파일의 내용 확인은 안 됩니다.)\n\n기본적인 사용방법은 아래와 같습니다.\nstrings <옵션> <파일명>\n\n사용 예) strings anaconda-ks.cfg → 아래에 해당 내용들이 출력됨.\n\nrdate(remote date)는 원격지의 타임서버에서 시간 정보를 가져와서 로컬 시스템의 시간과 동기화를 하는 명령어입니다.\n\n기본적인 사용방법은 아래와 같습니다.\nrdate [옵션]... [타임서버 주소]\n사용 예) rdate -p time.bora.net\n\n참고로 현재의 날짜와 시간정보를 확인하고자 할때는 #date라고 입력하면 확인이 가능합니다.\n\n문제에서 -n 10 이라고 지정하였으니 10초 간격으로 모니터링을 한다는 의미이며, /backup 파일의 내용을 ls -l 해서 보여준다는 의미입니다.\n\nwatch 명령어는 원하는 시간에 맞게 주기적으로 리프레시(새로고침) 하여 결과를 보여주는 명령어입니다. 시스템의 자원 사용량을 모니터링 하거나, 특정 명령어를 반복적으로 입력해서 결과를 확인해야 할 때, 유용하게 사용할 수 있는 명령어입니다."
  },
  {
    "id": 93,
    "sourceLabel": "72.",
    "question": "root 계정 및 GRUB 패스워드를 잊어버려서 root 패스워드를 복구할 수 없는 상황이다. 다음 중 리눅스 설치 디스크를 이용해서 복구하려고 할 때 선택하는 모드로 알맞은 것은?",
    "options": [
      "Install or upgrade an existing system",
      "Rescue installed system",
      "linux dd",
      "Boot from local drive"
    ],
    "answer": 1,
    "explanation": "우선 설치 시디를 넣고 부팅을 해주면 아래와 같은 내용이 나옵니다.\n\nInstall or upgrade an exitsting system\n→리눅스 설치나 이미 설치되어 있는 리눅스를 업그레이드 진행.\n\nInstall system with basic video driver\n→리눅스를 설치하면서 기본적인 비디오 드라이버를 같이 설치하는 경우 선택\n\nRescue installed system\n→설치되어 있는 리눅스에 문제가 생겻을 시 복구 시킬 때 선택\n\nBoot from local drive\n→리눅스 설치를 하지 않고 로컬 드라이브에 설치된 시스템으로 부팅하는 경우 선택"
  },
  {
    "id": 94,
    "sourceLabel": "73.",
    "question": "다음 (괄호) 안에 결과 값으로 알맞은 것은?\n$ ls\na a.txt aa ab.txt  ac b.txt  bb  bb.txt\n$ ls -l a? | wc -l\n(         )",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "우선 명령어가 2개가 사용이 되었습니다.\nls 명령어와 wc 명령어입니다.\n\nls는 디렉터리에 있는 내용(파일과 디렉터리)를 확인하는 명령어 입니다. 영어로는 list의 줄임말 정도로 이해하면 됩니다.\nls -[옵션]\nls -l ← 자세한 내용을 출력 (가장 많이 사용됨)\nls -a  ← a는 all을 뜻하며, 숨겨진 파일이나 디렉터리도 모두 출력\nls -d ← d는 디렉터리를 뜻하며 –d옵션을 사용하게 되면 디렉터리에 대한 정보만 출력 (ls –ld /디렉터리명 ← 특정 디렉터리의 퍼미션을 확인가능)\nls –F ← 파일이 디렉터리인 경우, 파일이 실행 가능한 경우, 파일이 소켓인 경우,파일이 FIFO인 경우에 이름 뒤에 @를 추가\nls -s  ← 파일 크기 순으로 정렬하여 출력(킬로바이트단위)\nls -r  ← 출력 결과를 알파벳 역순으로 정렬 (기본은 알파벳 순서로 정렬)\nls –R  ← 하위 디렉터리의 내용도 순차적으로 표시\nls -al  ← 모든 파일과 폴더를 출력하고 자세한 내용까지 함께 출력 ([명령어 -옵션 옵션 옵션] 과 같이 여러 개의 옵션을 함께 사용 가능)\n\nls -al > file.txt ← 리다이렉션 연산자를 사용하면, ls -al 이라는 명령어로 출력된 내용을 파일로 저장할 수 있습니다.\n** 리다이렉션 연산자는 > 을 사용합니다. (나머지 연산자에 대해서는 추후에 설명하겠습니다.)\n\nwc는 파일의 단어 수를 세어 보는 명령어입니다.\n파일의 단어, 문자, 라인 수를 세어주는 명령어이며, 사용방법은 아래와 같습니다.\n사용법 : wc[옵션][파일명]\n-c : 문자 수만\n-m : 캐릭터 수만\n-l : 라인(줄) 수만\n-w :  단어 수만\n-L : 가장 긴 문장의 길이\n\n$ ls -l a? | wc -l에서 와일드 카드는 ?(와일드카드)와  |(파이프라인 와일드카드)입니다.\n대체로 문자에서 사용되는 와일드카드는 *와 ?을 사용하는데 ?는 딱 한문자만 해당 됩니다.\n예로  $ ls -l a* | wc -l을 하게 되면 결과는 4개로 나올 것입니다.\n4개란.....a.txt aa ab.txt  ac을 말합니다.\n$ ls -l a? | wc -l을 하게 되면 aa ac 만 카운트 되어 2개로 나올 것입니다.\n\n리눅스에서 많이 사용되는 와일드카드의 의미는 아래와 같습니다.\n# : 주석\n~ : 홈 디렉터리\n$ : 셸 변수\n& : 백그라운드에서 작업\n* : 문자열 와일드 카드\n?  : 한 문자 와일드 카드\n[] : 문자의 범위를 지정\n| : 파이프로 or와 비슷한 의미\n< : 입력 재지정\n> : 출력 재지지어\n>> : 이어쓰기 (출력 재지정)\n; : 명령어 분리자로 한 명령어 라인에서 여러 개의 명령어를 사용할 수 있음.\n&& : 앞에 있는 명령어가 정상처리되어 정상종료인 0을 반환하면 다음 명령어가 실행됨.\n|| : 이전 명령어가 비정상 종료인 1을 반환할 경우 그 다음 명령어가 실행됨."
  },
  {
    "id": 95,
    "sourceLabel": "74.",
    "question": "리눅스 설치 시에 MySQL PostgreSQL 같은 프로그램을 사용하기 위해 선택하는 패키지 그룹으로 가장 알맞은 것은?",
    "options": [
      "Web Server",
      "Database Server",
      "Vritual Host",
      "Software Development Workstation"
    ],
    "answer": 1,
    "explanation": "포스트그레스큐엘(PostgreSQL)은 The PostgreSQL Global Development Group에서 개발하는 오픈 소스입니다.\n전 세계적으로 데이터 베이스(Database) 프로그램은 Oracle DB, MySQL, MSSQL(Microsoft SQL)이 사용되며, 4개를 꼽으라고 하면 여기에 PostgreSQL에 포함됩니다.\n\n완전 무료 개념이던 MySQL이 오라클로 넘어가면서 저작권 등에 문제가 생기기 시작하였습니다. 그래서 완전 무료 개념인 PostgreSQL을 요즘은 많이 사용하고 있는 편입니다."
  },
  {
    "id": 96,
    "sourceLabel": "74-1.",
    "question": "리눅스 설치 시에 Apache HTTP 프로그램을 사용하기 위해 선택하는 패키지 그룹으로 가장 알맞은 것은?",
    "options": [
      "Web Server",
      "Database Server",
      "Vritual Host",
      "Software Development Workstation"
    ],
    "answer": 0,
    "explanation": "리눅스 시스템에서 Apache HTTP는 웹 서버를 구축하기 위한 도구입니다.\n\n그렇기 때문에 Web Server 패키지 그룹을 선택하여 사용해야 합니다."
  },
  {
    "id": 97,
    "sourceLabel": "74-2.",
    "question": "리눅스 설치 시에 Xen 및 KVM을 사용하기 위해 선택하는 패키지 그룹으로 알맞은 것은?",
    "options": [
      "Web Server",
      "Database Server",
      "Virtual Host",
      "Software Development Workstation"
    ],
    "answer": 2,
    "explanation": "Virtual Host는 리눅스 시스템에서 가상화시스템 운영을 위한 패키지 그룹입니다.\n\nxen : 젠이라고 부르며, 하나의 컴퓨터에 여러개의 운영체제를 깔아서 사용할 수 있게 해주는 가상화 소프트웨어입니다.\n\nkvm : 커널 기반 가상 머신(Kernel-based Virtual Machine)은 여러개의 PC나 서버를 하나의 마우스,키도드, 모니터로 컨트롤 할 수 있게 해주는 가상화 프로그램입니다."
  },
  {
    "id": 98,
    "sourceLabel": "74-3.",
    "question": "리눅스 설치 시에 소스(source) 컴파일 도구를 기본적으로 포함하기 위해 선택하는 패키지 그룹으로 알맞은 것은?",
    "options": [
      "Web Server",
      "Database Server",
      "Virtual Host",
      "Software Development Workstation"
    ],
    "answer": 3,
    "explanation": "Software Development Workstation은 소프트웨어 설치할때 필요한 도구들이 포함된 패키지를 설치합니다.\n\n예) gcc(리눅스 소스 컴파일 프로그램)"
  },
  {
    "id": 99,
    "sourceLabel": "75.",
    "question": "다음 ( 괄호 ) 안에 들어갈 명령어 옵션으로 알맞은 것은?\n# passwd (      ) kaituser\nkaituser PS 2014-05-13 0 99999 7  -1  (Password set, SHA512 crypt.)",
    "options": [
      "-s",
      "-S",
      "-p",
      "-P"
    ],
    "answer": 1,
    "explanation": "위의 내용에서 kaituser 계정에 대한 상세한 내용들이 출력되는 것을 확인할 수 있습니다.\n이렇게 특정 계정의 상세한 설정 내용을 확인하고자 할 때는 -S(대문자) 옵션을 사용하면 됩니다.\n\npasswd 옵션의 종류\n계정 잠금 → #passwd -l [계정명]\n          → #usermod –L [계정명]\n\n계정 잠금 해제 → #passwd -u [계정명]\n               → #usermod –U [계정명]\n계정에 대한 상세 정보출력 → #passwd –S [계정명]\n계정에 대해 암호를 사용하지 못하게 함. → #passwd  –d [계정명]"
  },
  {
    "id": 100,
    "sourceLabel": "75-1.",
    "question": "다음 중 ihduser계정의 패스워드에 잠금을 설정하여 일시적으로 로그인을 막으려고 할 때의 명령으로 알맞은 것은?",
    "options": [
      "passwd -d ihduser",
      "passwd -u ihduser",
      "passwd -r ihduser",
      "passwd -l ihduser"
    ],
    "answer": 3,
    "explanation": "-l (lock) [정답]: 사용자의 비밀번호를 잠금(Lock) 처리하여 로그인을 차단합니다. \n\n내부적으로는 /etc/shadow 파일의 비밀번호 필드 맨 앞에 !!를 추가하여 인증이 불가능하게 만듭니다\n\n위의 내용에서 kaituser 계정에 대한 상세한 내용들이 출력되는 것을 확인할 수 있습니다.\n이렇게 특정 계정의 상세한 설정 내용을 확인하고자 할 때는 -S(대문자) 옵션을 사용하면 됩니다.\n\npasswd 옵션의 종류\n계정 잠금 → #passwd -l [계정명]\n          → #usermod –L [계정명]\n\n계정 잠금 해제 → #passwd -u [계정명]\n               → #usermod –U [계정명]\n계정에 대한 상세 정보출력 → #passwd –S [계정명]\n계정에 대해 암호를 사용하지 못하게 함. → #passwd  –d [계정명]"
  },
  {
    "id": 101,
    "sourceLabel": "76.",
    "question": "리눅스의 특징으로 틀린 것은?",
    "options": [
      "최초 버전에서부터 멀티프로세서(Multi Processor)를 지원하였다.",
      "초기부터 네트워크 기반으로 개발되었다.",
      "여러 명의 사용자가 동시에 사용할 수 있다.",
      "하드디스크를 가상메모리로 사용할 수 있어 효율적이다."
    ],
    "answer": 0,
    "explanation": "1991년 발표된 리눅스 커널 0.01 등 초기 버전은 단일 프로세서(Single Processor) 환경에서만 동작했습니다. 멀티프로세서(SMP) 지원은 1996년 발표된 리눅스 커널 2.0 버전부터 본격적으로 도입되었습니다."
  },
  {
    "id": 102,
    "sourceLabel": "76-1.",
    "question": "다음 중 리눅스가 최초로 일터넷에 공개된 년도로 알맞은 것은?",
    "options": [
      "1974년",
      "1987년",
      "1991년",
      "1998년"
    ],
    "answer": 2,
    "explanation": "1991년 9월 리눅스가 처음 공개될때는 네트워킹 기능이 지원되지 않았습니다.\n\n리눅스 커널에 처음으로 네트워크 코드를 기여한 사람은 로스 비로(Ross Biro)였으며. 1992년 10월 불완전한 TCP/IP 코드를 구현하였습니다.  리눅스 커널에 TCP/IP 알파버전으로 포함되었고 NET-1으로 알려졌습니다."
  },
  {
    "id": 103,
    "sourceLabel": "77.",
    "question": "다음 설명에 해당하는 명령으로 알맞은 것은?\n데이터의 열(Column)을 추출할 때 사용하는 명령으로 추출되는 데이터는 파일 각 줄의 글자(Character), 바이트(byte) 또는 필드(Field)가 된다.",
    "options": [
      "cut",
      "sort",
      "split",
      "wc"
    ],
    "answer": 0,
    "explanation": "cut은 데이터의 열을 추출할 때 사용합니다. 이 때 추출하는 데이터는 파일 각 줄의 글자, 바이트 또는 필드가 됩니다.\ncut [옵션] [파일]\n -b : 바이트를 기준으로 자르기\n -c : 문자를 기준으로 자르기\n -f : 파일의 필드를 기준으로 자르기\n -d : 필드 구분자를 지정\n사용 예) #cut -f 1 -d ':' /etc/passwd\n→ /etc/passwd 파일에서 첫 번째 필드의 열을 자른다. 첫 번째 필드의 기준 값은 ‘:’으로 한다.\n\ns\n\nort는 정렬에 사용하는 명령어이며, wc는 word cound로 글자의 수를 세어주는데 사용하는 명령어입니다.\n\nsplit 명령어는 큰 파일을 여러 개의 파일로 자를 때 사용하는 명령어입니다.\n\n이외에 문자열을 자르는데 사용하는 명령어는 awk, sed 등도 사용이 가능합니다."
  },
  {
    "id": 104,
    "sourceLabel": "78.",
    "question": "다음 중 파티션 분할에 대한 설명으로 틀린 것은?",
    "options": [
      "파티션을 분할하면 파티션 단위의 다양한 정책 설정이 가능하다.",
      "파티션을 분할하면 여러 운영체제의 부트로더의 사용이 가능하다.",
      "파티션을 분할하면 부팅이 빨라진다.",
      "파티션 분할을 통해 여러 개의 운영체제를 사용할 수 있다."
    ],
    "answer": 2,
    "explanation": "파티션 분할을 통해서 각각의 파티션에 여러 개의 운영체제를 설치할 수도 있고, 여러 개의 부트로더를 사용하는 것도 가능합니다.\n아울러 파티션별도 사용 용도에 따라 정책을 달리 설정할 수도 있습니다.\n\n하지만 파티션 분할을 한다고 해서 부팅이 빨라지지는 않습니다."
  },
  {
    "id": 105,
    "sourceLabel": "78-1.",
    "question": "다음 중 간단한 인터페이스에 적은 용량으로 막강한 기능을 가진 파티션 분할 명령으로 알맞은 것은?",
    "options": [
      "fdisk",
      "fsck",
      "pstree",
      "pine Composer"
    ],
    "answer": 0,
    "explanation": "fdisk : 파티션 분할 및 파일 시스템 지정과 삭제 할 수 있는 명령어\n\nfsck : 파일 시스템을 점검하고 복구하는 명령어\n\npstree : 프로세스(ps)를 트리 형태로 출력하는 명령어\n\npine Composer는 pico 문서 편집기를 의미"
  },
  {
    "id": 106,
    "sourceLabel": "79.",
    "question": "cal 명령 실행 시 올해의 달력 전체를 출력할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-a",
      "-m",
      "-s",
      "-y"
    ],
    "answer": 3,
    "explanation": "cal은 calendar는 달력을 뜻하며, 기본적으로 #calendar라고 입력하게 되면 리눅스 시스템에서 현재에 해당하는 월(달)을 출력해 줍니다.\n\n기본적인 사용방법은 $ cal [옵션] [일] [월] [년] 과 같습니다.\n-y : year(년) 단위로 출력\n-j : 율리우스력 달력이라고 하며, 서버의 시간을 기준으로 1월1일부터 현재까지 몇 일인지를 표시해 줍니다.\n-V : 버전 정보를 확인\n\n특정 연월을 출력하고 싶다면 cal 09 2009와 같이 하면 됩니다."
  },
  {
    "id": 107,
    "sourceLabel": "80.",
    "question": "다음 중 시스템에 로그인한 전체 사용자에게 메시지를 전달할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "write",
      "mesg",
      "message",
      "wall"
    ],
    "answer": 3,
    "explanation": "mesg\nwrite, talk, wall 유틸리티를 통하여 다른 사용자에게 메시지를 보낼 수 있습니다.\nmesg 명령어는 메시지를 받을 것인지(수신) 혹은 받지 않을 것인지(수신거부)를 설정하고 또 현재의 상태를 확인하는데 사용하는 명령어입니다.\n\n# mesg [옵션]\n-n : 메시지 수신 불가\n-y : 메시지 수신 가능\n\n# write [user_name] [terminal]\nwrite 명령어는 콘솔 상에서 간단하게 상대방에게 메시지를 보낼 수 있는 명령어입니다.\n\n# wall [Message]\nwall 명령어는 시스템에 접속해 있는 모든 사용자에게 메시지를 보낼 때 사용합니다.\n보통은 시스템 관리자가 점검을 위하여 접속해 있는 사용자들에게 메시지를 보낼 때 사용합니다."
  },
  {
    "id": 108,
    "sourceLabel": "81.",
    "question": "다음 중 cut 명령으로 필드 구분자는 ':'으로 해서 /etc/passwd의 첫 번째 및 세 번째 필드 출력하는 방법으로 알맞은 것은?",
    "options": [
      "cut -f: -d 1,3 /etc/passwd",
      "cut -d: -f 1,3 /etc/passwd",
      "cut -f: -d 1-3 /etc/passwd",
      "ctu -d: -f 1-3 /etc/passwd"
    ],
    "answer": 1,
    "explanation": "cut은 데이터의 열을 추출할 때 사용합니다.\n이 때 추출하는 데이터는 파일 각 줄의 글자, 바이트 또는 필드가 됩니다.\ncut [옵션] [파일]\n -b : 바이트를 기준으로 자르기\n -c : 문자를 기준으로 자르기\n -f : 파일의 필드를 기준으로 자르기\n -d : 필드 구분자를 지정\n\n문제에서 /etc/passwd 파일에서 첫 번째 및 세 번째의 필드를 자른다고 하였으니 -f 1,3 /etc/passwd를 사용해야 할 것 같습니다.\n만약 첫 번째부터 세 번째까지라고 문제가 출제되었다면 -f 1-3 /etc/passwd를 사용하면 됩니다."
  },
  {
    "id": 109,
    "sourceLabel": "82.",
    "question": "리눅스에 대한 설명으로 맞는 것은?",
    "options": [
      "GNU 정신에 입각한 쉐어웨어이다.",
      "상업적인 소프트웨어이다.",
      "POSIX 규격을 따르고 있다.",
      "유닉스를 업그레이드한 것이다."
    ],
    "answer": 2,
    "explanation": "리눅스는 핀란드 헬싱키 대학의 앤드류 타넨바움 교수가 만든 작은 수업용 운영체제 인 미닉스(minix)를  “리누스 토발즈(Linus Tovals)”라는 학생이 자신이 사용하던 PC(i386)에서 동작하게 만든 운영체제가 바로 리눅스(Linux)라고 합니다.\n\n리눅스(Linux)는 리누스(Lunus)+유닉스(Unix)의 합성어 입니다.(유닉스를 모델로 하여 리눅스가 개발됨)\n\n리누스 토발즈는 유닉스의 POSIX호환을 기반으로 하는 리눅스라는 커널(Kernel)을 개발하였고, “리차드 스톨만(Richard Stallman)” 이 주도하는 GNU 프로젝트에 참여하면서 수 많은 프로그래머들과 함께 현재의 보조프로그램과 응용 소프트웨어들을 만들어 현재의 리눅스가 되었습니다.\n\n“리차드스톨만”은 자유소프트웨어재단(Free Software Foundation, FSF)의 회장입니다.(프로그램의 변경 및 수정은 자유로워야 한다)\n\nGNU프로젝트는 각종 UNIX 상용 프로그램에 대항하여 수 많은 무료 공개 프로그램을 만들었습니다.\n리차드스톨만은 HURD라는 커널을 만들었지만 많이 미흡한 상태였으며, 토발즈의  리눅스를 만나면서 현재의 리눅스 운영체제가 만들어지는 계기가 되었습니다.\n\nPOSIX (Portable Operating System Interface for Computer Enviroment)\nPOSIX는 유닉스 운영체제에 기반을 두는 일련의 표준 운영체제 인터페이스라고 생각하시면 됩니다. 표준이라는 개념은 다른 회사의 다른 컴퓨터에 운영체제들을 매번 코딩하지 않고 어떤 장비든 동작할 수 있는 기본적인 개념을 표준화하여 만든 것을 말합니다.\n\n참고로 쉐어웨어는 “공개 소프트웨어”이기는 하지만 일부 기능에 제한이 있으며, 유료 구매를 유도하기 위한 샘플 소프트웨어를 쉐어웨어라고 합니다."
  },
  {
    "id": 110,
    "sourceLabel": "82-1.",
    "question": "다음 중 리눅스에 대한 설명으로 틀린 것은?",
    "options": [
      "프로그램의 소스가 공개되어 있다.",
      "1991년에 최초 버전이 인터넷에 공개되었다.",
      "배포판 회사에서는 개발 작업이 금지되어 있다.",
      "배포판의 종류로는 레드헷, 데비안, 슬랙웨어 등이 있다."
    ],
    "answer": 2,
    "explanation": "리눅스는 핀란드 헬싱키 대학의 앤드류 타넨바움 교수가 만든 작은 수업용 운영체제 인 미닉스(minix)를  “리누스 토발즈(Linus Tovals)”라는 학생이 자신이 사용하던 PC(i386)에서 동작하게 만든 운영체제가 바로 리눅스(Linux)라고 합니다.\n\n리눅스(Linux)는 리누스(Lunus)+유닉스(Unix)의 합성어 입니다.(유닉스를 모델로 하여 리눅스가 개발됨)\n\n1991년 리누스 토발즈는 유닉스의 POSIX호환을 기반으로 하는 리눅스라는 커널(Kernel)을 개발하였고, “리차드 스톨만(Richard Stallman)” 이 주도하는 GNU 프로젝트에 참여하면서 수 많은 프로그래머들과 함께 현재의 보조프로그램과 응용 소프트웨어들을 만들어 현재의 리눅스가 되었습니다.\n\n“리차드스톨만”은 자유소프트웨어재단(Free Software Foundation, FSF)의 회장입니다.(프로그램의 변경 및 수정은 자유로워야 한다)\n\nGNU프로젝트는 각종 UNIX 상용 프로그램에 대항하여 수 많은 무료 공개 프로그램을 만들었습니다.\n리차드스톨만은 HURD라는 커널을 만들었지만 많이 미흡한 상태였으며, 토발즈의  리눅스를 만나면서 현재의 리눅스 운영체제가 만들어지는 계기가 되었습니다.\n\nPOSIX (Portable Operating System Interface for Computer Enviroment)\nPOSIX는 유닉스 운영체제에 기반을 두는 일련의 표준 운영체제 인터페이스라고 생각하시면 됩니다. 표준이라는 개념은 다른 회사의 다른 컴퓨터에 운영체제들을 매번 코딩하지 않고 어떤 장비든 동작할 수 있는 기본적인 개념을 표준화하여 만든 것을 말합니다.\n\n참고로 쉐어웨어는 “공개 소프트웨어”이기는 하지만 일부 기능에 제한이 있으며, 유료 구매를 유도하기 위한 샘플 소프트웨어를 쉐어웨어라고 합니다."
  },
  {
    "id": 111,
    "sourceLabel": "83.",
    "question": "다음 중 명령 행에서 c라고 입력하면 clear라는 명령이 실행되도록 설정하려고 할 때 알맞은 것은?",
    "options": [
      "alias clear c",
      "alias c clear",
      "alias clear=c",
      "alias c=clear"
    ],
    "answer": 3,
    "explanation": "별명설정 : alias[별명]=‘실행해야 하는 명령어’  반대로 별명해제 : unalias [별명]과 같이 사용합니다.\n예) alias ls=‘ls –color=tty’  → 해제는 unalias 123  \n(단 ~/.bashrc나 /etc/profile에 설정한 것은 해당 내용을 지워야만 해제됨)"
  },
  {
    "id": 112,
    "sourceLabel": "84.",
    "question": "다음 중 rm 명령으로 .txt로 끝나는 파일들을 삭제하기 전에 삭제 여부를 하나씩 확인하려고 할 때 ( 괄호 ) 안에 들어갈 옵션으로 알맞은 것은?\n$ rm (      ) *.txt",
    "options": [
      "-I",
      "-y",
      "-q",
      "-r"
    ],
    "answer": 0,
    "explanation": "rm은 [remove) 파일을 삭제할 때 사용되는 명령어 입니다.\nrm [파일명]\nrm *.dat은 확장자가 dat인 것을 모두 삭제한다.\nrm *는 모든 파일을 삭제한다.\nrm명령어로 디렉터리를 삭제할 때는 -r 옵션(recursive)을 사용하여 삭제 합니다.\n(rm -f [디렉터리명] rmdir과 차이점은 파일이 들어있는 디렉터리도 삭제, \n\n-f 옵션을 사용하면 경고 없이 모두 강제로 삭제됩니다.f는 force를 의미\n-I(대문자i) 옵션은 interactive(대화식)으로 삭제여부를 일일이 물어보면서 삭제\n-v 옵션은 verbose로 삭제되는 내용을 보여 줍니다."
  },
  {
    "id": 113,
    "sourceLabel": "85.",
    "question": "/etc/passwd 파일의 7개 필드 관련 정보를 얻기 위한 명령으로 알맞은 것은?",
    "options": [
      "man passwd",
      "man 1 passwd",
      "man /etc/passwd",
      "man 5 passwd"
    ],
    "answer": 3,
    "explanation": "①②은 passwd 명령어에 대한 기본적인 사용방법을 볼 수 있습니다.\n④는 passwd명령어에 대한 섹션5의 내용을 볼 수 있습니다.\n\nman /etc/passwd를 이용하면 /etc/passwd 의 내용을 확인할 수 있습니다.\nman은 섹션(1~9)과 함께 사용해도 동일한 파일의 내용을 확인할 수 도 있습니다.\n예) man 1 /etc/passwd\n\nman 명령어의 섹션\n\nman  1 rm 과 같이 세션번호를 함께 사용함.\n리눅스의 man 명령어는 주제에 따라 '섹션'을 가지고 있으며, man rm을 했을 경우 오른쪽 상단에 있는 rm(1)과 같이 세션 번호가 표시됩니다.\n\n리눅스의 섹션 구분은 아래와 같다.\nSection 1 : = man 명령어와 동일한 결과(기본)\nSection 2 : 프로그래밍(시스템 호출)\nSection 3 : 프로그래밍(라이브러리(함수) 호출)\nSection 4 : 디바이스(/dev)\nSection 5 : 파일 형식(/etc/passwd)\nSection 6 : 게임\nSection 7 : 기타(매크로 패키지나 규약 같은 내용)\nSection 8 : 시스템관리(root권한)\nSection 9 : 커널관리(표준은 아님)\n\n예) man 1 rm\n예) man 3 printf\n예) man 5 /etc/passwd"
  },
  {
    "id": 114,
    "sourceLabel": "86.",
    "question": "bash 환경에서 아래 명령의 실행 결과에 대한 설명으로 가장 적절한 것은?\n#export PATH=$PATH:/etc",
    "options": [
      "기존의 경로(PATH)를 제거하고 새로운 경로를 추가하였다.",
      "기존의 경우(PATH)에 /etc라는 새로운 경로를 추가하였다.",
      "잘못된 명령으로, export$PATH=PATH:/etc로 실행하는 것이 옳다.",
      "잘못된 명령으로, exportPATH=PATH:/etc로 실행하는 것이 옳다."
    ],
    "answer": 1,
    "explanation": "환경변수의 설정과 확인 및 수정,삭제 등은 env, set, export, declare를 사용\nexport는 셸 변수를 환경 변수로 변경해 주는 명령어\n\ndeclare는 변수의 타입을 지정하는 명령어\n\n설정된 PATH를 확인하는 방법\n- # echo $PATH 또는 # export $PATH 2가지 방법이 주로 사용됩니다.\n\nPATH를 추가하는 방법\nPATH=[$PATH]:[환경변수값]   또는 export PATH=$PATH:[환경변수값]\n예) PATH=$PATH:home/txtfile\n예) export PATH=$PATH:home:home/kkk\n - 변수명(PATH)와 환경변수값 사이는 : (콜론)으로 구분합니다.\n[MSDOS 즉 윈도우즈는 ; (세미콜론)으로 구분]\n예로 PATH를 여러 개 등록시:home:home/kkk 와 같이 세미콜론으로 구분하여 등록합니다.\n-bash에서 설정되는 환경변수는 변수명 앞에 $을 앞에 붙여 주어야 합니다.\n[MSDOS 즉 윈도우즈는 변수명 앞과 뒤에 %를 사용]\n-보통 PATH 환경변수는 로그인시 자동 실행되는 profile에 저장하지 않으면 로그아웃 되면 초기화가 되어 사라집니다."
  },
  {
    "id": 115,
    "sourceLabel": "87.",
    "question": "/etc/shadow 파일에 지정되어 있지 않은 항목은?",
    "options": [
      "사용자명",
      "패스워드 만료 전 경고기간",
      "계정 만료기간",
      "로그인 쉘"
    ],
    "answer": 3,
    "explanation": "/etc/shadow의 필드 항목\n\n \n\n/etc/passwd의 필드 항목\n\n로그인 쉘 정보는 /etc/passwd의 7번 필드에 있는 정보입니다."
  },
  {
    "id": 116,
    "sourceLabel": "88.",
    "question": "다음 중 일정시간동안 작업을 하지 않는 사용자를 강제적으로 로그아웃되도록 설정할 때 사용하는 파일로 알맞은 것은?",
    "options": [
      "/etc/inittb",
      "/etc/profile",
      "/etc/issue",
      "/etc/motd"
    ],
    "answer": 1,
    "explanation": "/etc/inittab\n리눅스 시스템 런레벨 기본 설정 값을 확인할 수 있습니다.\nX윈도 실행 시 런 레벨은  /etc/inittab 에서는 id:5:initdefault: 으로 설정 ← 3은 텍스트 모드, 5는 그래픽 모드임\n\n/etc/profile ← 시스템 전체(모든 사용자)\n - 시스템 전체에 대한 설정파일(모든 사용자에게 해당되며, 부팅 후에 적용됨)\n - 전체 시스템의 환경변수와 시작관련 프로그램을 설정합니다.\n\nTMOUT 환경변수 확인 및 사용방법- TMOUT은 세션을 유지하는 시간을 뜻하기도 하고 로그인 후 동작이 감지안되면 자동으로 로그아웃 되는 시간을 의미하기도 합니다.(지정된 시간 동안 움직임이 감지 안되면 해당 세션을 종료시킴\n\n– 보안상 설정은 필수) TMOUT=[숫자]  ← 기본 단위는 초\n\n/etc/issue\n배포판의 버전을 가장 쉽게 확인할 수 있는 방법이다.\n보안 등의 이유로 다른 내용으로 바뀌어 있는 경우도 있다.\n예) $cat /etc/issue\nCentOS release 6.9 (Final)\nKernel ＼r on an ＼m\n\n/etc/motd\n로그인이 되었을 때 보여주는 내용입니다.\n대체로 /etc/motd는 서버에 대한 안내문이나 환영 텍스트를 보여주고자 할 때 작성하게 됩니다.\n참고로 원격접속할 때 접속이 되면 보여주는 파일은 /etc/issue.net입니다."
  },
  {
    "id": 117,
    "sourceLabel": "89.",
    "question": "교육용 유닉스로 리눅스 개발의 시발점이 된 운영체제는?",
    "options": [
      "Minix",
      "Windows 2000",
      "Mac OS X",
      "Solarls"
    ],
    "answer": 0,
    "explanation": "핀란드 헬싱키 대학의 앤드류 타넨바움 교수가 만든 작은 수업용 운영체제 인 미닉스(minix)를  “리누스 토발즈(Linus Tovals)”라는 학생이 자신이 사용하던 PC(i386)에서 동작하게 만든 운영체제가 바로 리눅스(Linux)라고 합니다.\n\nOS X는 Apple이 유닉스/다윈을 기반으로 개발한 Mac 전용 운영 체제입니다.\n2001년 3월 24일에 처음 출시 되었고, 2016년 6월 13일, WWDC에서 다음 버전 OS 시에라를 발표하며 명칭이 OS X에서 macOS로 바뀌었습니다.\n참고로 OS X에서 X는 10을 말합니다.\n\n솔라리스(Solaris)\n썬 마이크로시스템즈에서 1990년에 개발한 컴퓨터 운영 체제입니다.\n자유 소프트웨어 형태의 CDDL에 기반한 오픈솔라리스가 공개되었습니다.\n1990년대 초반 썬은 자신들의 운영 체제인 SunOS 4를 가지고 있었으며, 이후 솔라리스 2가 나오면서\n\nSunOS 4는 솔라리스1이라는 이름을 가지게 되었습니다.\n\n참고로 Windows 2000은 마이크로소프트의 운영체제입니다."
  },
  {
    "id": 118,
    "sourceLabel": "89-1.",
    "question": "다음 중 리눅스 개발에 영향을 준 미닉스(Minix)운영체제를 개발한 인물로 알맞은 것은?",
    "options": [
      "리누스 토발즈",
      "리처드 스톨만",
      "앤드루 스튜어트 타넨바움",
      "데니스 리치"
    ],
    "answer": 2,
    "explanation": "핀란드 헬싱키 대학의 앤드류 타넨바움 교수가 만든 작은 수업용 운영체제 인 미닉스(minix)를  “리누스 토발즈(Linus Tovals)”라는 학생이 자신이 사용하던 PC(i386)에서 동작하게 만든 운영체제가 바로 리눅스(Linux)라고 합니다.\n\nOS X는 Apple이 유닉스/다윈을 기반으로 개발한 Mac 전용 운영 체제입니다.\n2001년 3월 24일에 처음 출시 되었고, 2016년 6월 13일, WWDC에서 다음 버전 OS 시에라를 발표하며 명칭이 OS X에서 macOS로 바뀌었습니다.\n참고로 OS X에서 X는 10을 말합니다.\n\n솔라리스(Solaris)\n썬 마이크로시스템즈에서 1990년에 개발한 컴퓨터 운영 체제입니다.\n자유 소프트웨어 형태의 CDDL에 기반한 오픈솔라리스가 공개되었습니다.\n1990년대 초반 썬은 자신들의 운영 체제인 SunOS 4를 가지고 있었으며, 이후 솔라리스 2가 나오면서\n\nSunOS 4는 솔라리스1이라는 이름을 가지게 되었습니다.\n\n참고로 Windows 2000은 마이크로소프트의 운영체제입니다."
  },
  {
    "id": 119,
    "sourceLabel": "90.",
    "question": "파이프(pipe)에 대한 설명으로 틀린 것은?",
    "options": [
      "한 명령의 출력결과를 다른 명령으로 보내 주는 역할을 한다.",
      "여러 명령을 조합할 때 사용한다.",
      "command 1 | command 2 와 같이 \"|\" 기호를 사용한다.",
      "두 명령어를 연결할 때 임시파일이 생성된다."
    ],
    "answer": 3,
    "explanation": "리다이렉션은 쉽게 말해 명령어와 함께 사용하여 “방향을 지정”하거나 “방향을 변경”하는 기호를 말합니다.\n“표준입력, 출력”과 “파이프처리”로 나누어 볼 수 있습니다.\n\n파이프처리(“|”) 또는 파이프\n앞 명령의 출력을 다음 명령의 입력으로 연결시킬 때 사용하는 명령어입니다.\n예로 “A명령어 | B명령어”를 하게 되면 A명령어를 수행하고 이후에 A명령어를 바탕으로 B명령어를 수행한다.....라고 생각하시면 됩니다.\n\n표준입력, 출력은 “>, >>, <, < > ”이 있습니다.\n- 표준출력 “ > \"의 사용방법은 아래와 같습니다.명령어a > 파일a  : 명령어a의 결과로 나올 내용을 화면에 출력하지 않고 파일a에 저장.(덮어쓰기)\n\n**파일a가 없으면 파일a가 생성되며, 파일a가 있으면, 파일a의 내용을 지우고 새롭게 추가됩니다.다시 말하면 파일의 껍데기만 남고 내용물은 모두 새로운 것으로 바뀐다는 의미입니다.\n\n- 표준출력(추가) “ >> \"의 사용방법은 아래와 같습니다.\n명령어a >> 파일a : 이 기호 >>를 사용하게 되면 파일a의 내용의 끝에 명령어a의 결과물이 추가 됩니다.** 기존 파일이 있는 경우 파일 내용의 삭제하지 않고 그 내용의 끝에 “명령어a”의 내용을 추가함.\n\n- 표준입력 “ < \"의 사용방법은 아래와 같습니다.\n명령어a < 파일a : 명령어a는 실행이 되어 화면에 출력이 되지만 파일a에 저장이 되지는 않습니다.\n***만약 파일a가 없다면 명령어a도 실행이 되지 않습니다.\n\n- 표준출력 중 “ <  > \"의 사용방법은 아래와 같습니다."
  },
  {
    "id": 120,
    "sourceLabel": "90-1.",
    "question": "다음 중 파이프(pipe)에 대한 설명으로 알맞은 것은?",
    "options": [
      "실행된 명령의 입력을 다른 명령의 출력으로 보내는 도구이다.",
      "하나의 명령행에 여러 개의 파이프를 사용하는 것도 가능하다.",
      "파이프라인의 각 명령은 하나의 프로세스로 진행된다.",
      "파이프를 만드는 기호는 '>'이다."
    ],
    "answer": 1,
    "explanation": "리다이렉션은 쉽게 말해 명령어와 함께 사용하여 “방향을 지정”하거나 “방향을 변경”하는 기호를 말합니다.\n“표준입력, 출력”과 “파이프처리”로 나누어 볼 수 있습니다.\n\n파이프처리(“|”) 또는 파이프\n앞 명령의 출력을 다음 명령의 입력으로 연결시킬 때 사용하는 명령어입니다.\n예로 “A명령어 | B명령어”를 하게 되면 A명령어를 수행하고 이후에 A명령어를 바탕으로 B명령어를 수행한다.....라고 생각하시면 됩니다.\n\n파이프라인은 여러 개를 사용할 수 있습니다.\n\n예를들어 ls -l | sort | less 를 하게 되면 3개의 프로세스가 각기 따로 동작하게 됩니다.\n\n대시 첫 번째 출력이 다음의 입력이 되는 방식으로 동작합니다."
  },
  {
    "id": 121,
    "sourceLabel": "90-2.",
    "question": "다음 중 명령에 대한 출력이나 입력을 원하는 위치로 바꿀 때 사용되는 리다이렉션 기호로 틀린 것은?",
    "options": [
      ">",
      ">>",
      "<",
      "~"
    ],
    "answer": 3,
    "explanation": "리다이렉션은 쉽게 말해 명령어와 함께 사용하여 “방향을 지정”하거나 “방향을 변경”하는 기호를 말합니다.\n“표준입력, 출력”과 “파이프처리”로 나누어 볼 수 있습니다.\n\n파이프처리(“|”) 또는 파이프\n앞 명령의 출력을 다음 명령의 입력으로 연결시킬 때 사용하는 명령어입니다.\n예로 “A명령어 | B명령어”를 하게 되면 A명령어를 수행하고 이후에 A명령어를 바탕으로 B명령어를 수행한다.....라고 생각하시면 됩니다.\n\n표준입력, 출력은 “>, >>, <, < > ”이 있습니다."
  },
  {
    "id": 122,
    "sourceLabel": "91.",
    "question": "다음 중 일정시간동안 작업을 하지 않는 사용자를 강제적으로 로그아웃되도록 설정할 때 사용하는 환경변수로 알맞은 것은?",
    "options": [
      "LOGOUT",
      "EXIT",
      "TMOUT",
      "SESSION"
    ],
    "answer": 2,
    "explanation": "- 환경변수는 셸의 사용 환경을 정의하며, 셸은 정의된 환경대로 사용할 수 있습니다.\n\n- 환경에 대한 변수를 여러 개의 파일에 저장해 놓고 시스템 부팅과 함께 사용할 수 있게 한 것을 말합니다.\n 모든 셸에 적용되는 것이 아니라 특정한 셸을 지정하여 변수를 설정할 수 있습니다.\n bash의 경우 환경변수는 대문자로 표시됩니다.(예 – echo $SHELL )\n\n환경변수 선언은 \"변수명=변수값“ 형식으로 사용합니다. 예) TMOUT=3600\n환경변수 적용여부 확인 : 설정된 환경변수를 확인하는 방법은 대략적으로 4가지가 있습니다.\n\n- 로컬 사용자 개인의 환경변수 설정 확인 : set → 사용자의 홈 디렉터리에 숨김 파일 형태로 저장됨.\n\n- 전체사용자 환경변수 설정 확인 : env → 셸을 이용하는 모든 사용자에게 적용되는 설정이며, /etc 디렉터리에 저장됨.\n\n- 특정 환경변수별로 확인 : #echo $[변수이름]\n\n- 전체 환경변수 목록을 확인하거나 설정 : export 예) export SHELL=/bin/bash\n환경변수 해제는 unset을 이용하여 해제합니다. 예) unset [변수명] 즉 unset TMOUT 과 같이 사용함.\n\nTMOUT은 로그인 후에 아무런 변화(동작)가 없으면 강제로 로그아웃을 시키게 됩니다.\n지정은 초로 지정되며, 해당 시간 동안 마우스를 움직이거나 키보드의 입력이 발생해야 합니다. 아무런 변화가 없다면 자동으로 로그아웃(세션끊김)이 됩니다."
  },
  {
    "id": 123,
    "sourceLabel": "92.",
    "question": "리눅스 배포판에 대한 설명으로 맞는 것은?",
    "options": [
      "웹 브라우저만 패키지 형태로 만들어 놓은 것",
      "리눅스 유틸리티만 패키지 형태로 만들어 놓은 것",
      "서버용 프로그램만 패키지 형태로 만들어 놓은 것",
      "리눅스 전체 시스템을 구성하는 소프트웨어를 패키지 형태로 만들어 놓은 것"
    ],
    "answer": 3,
    "explanation": "리눅스 배포판은 리눅스의 일부 기능을 배포하는 것이 아닌 리눅스 전체 시스템을 구성하는 소프트웨어들을 패키지 형태로 만들어 배포하게 됩니다."
  },
  {
    "id": 124,
    "sourceLabel": "93.",
    "question": "시스템을 10분 후에 재시작하기 위한 명령은?",
    "options": [
      "shutdown -r +10",
      "shutdown -h +10",
      "shutdown -r 00:10",
      "shutdown -h 00:10"
    ],
    "answer": 0,
    "explanation": "shutdown\n시스템을 재 시작하거나 전원을 종료하는 명령어이며, root만 사용가능\n\n shutdown [option] 시간 [경고메세지]\n -r  :  시스템을 재시작\n -P :  강제로 시스템 종료 (대문자)\n -h :  시스템을 종료\n -c :  예약된 종료 명령을 취소.\n -k :  실제로 종료 명령을 수행하지 않고 종료된다는 메시지만 출력.\n +m :  m분 후에 시스템을 종료\n\nshutdown -r 10:00 →10시에 재부팅한다는 의미\nshutdown -r now → 즉시 재부팅한다는 의미\nshutdown -h +10 → 10분후에 종료한다는 의미\nshutdown -h now → 즉시 종료한다는 의미\n\n이외에도 시스템을 종료하는 명령어는 reboot, halt, poweroff가 있습니다.\n\n주의: 로그아웃이 아닌 시스템 종료라는 점을 명심"
  },
  {
    "id": 125,
    "sourceLabel": "94.",
    "question": "리눅스의 기본 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "내부명령어는 셸에 내장되어 있는 명령어로 셸(Shell)이 명령어를 이해한다.",
      "외부명령어는 보통 /bin 안에 파일의 형태로 존재한다.",
      "외부명령어는 실행 시 새로운 서브 프로세스를 fork하여 실행한다.",
      "내부명령어는 실행 시 새로운 서브 프로세스를 exec하여 실행한다."
    ],
    "answer": 3,
    "explanation": "셸(Shell)은 명령어 해석기라고 불리기도 합니다.\n\n내부명령어\n셸에 내장되어 있는 명령어\n특징 : 실행될 때 별도의 프로세스를 시작키지 않음.\n\n외부명령어\n\n/bin안에 파일의 형태로 존재하는 명령어\n특징 : 명령어를 실행 할 때 새로운 서브프로세스를 fork하고 실행함."
  },
  {
    "id": 126,
    "sourceLabel": "95.",
    "question": "다음 명령의 실행결과에 대한 설명으로 가장 적절한 것은?\nihd@ihd.or.kr./etc$ users\nihd ihd hong linux master",
    "options": [
      "/etc 디렉토리에 대한 접근권한이 있는 사용자들을 확인하고 있다.",
      "시스템에 로그인한 사용자 계정을 조회하고 있다.",
      "자신의 계정이 속해 있는 그룹들을 조회하고 있다.",
      "자신의 계정이 속해있는 그룹에 어떤 계정들이 있는지 조회하고 있다."
    ],
    "answer": 1,
    "explanation": "보기에서 제시한 users라는 명령어는 현재 리눅스 시스템에 로그인한 계정을 보여주게 됩니다. ihd ihd hog limux master를 각각의 계정들이 로그인되어 있음을 표시해 줍니다.\n\n해당 명령어의 경로는 /usr/bin/users입니다.\n현재 시스템에 접속한 사용자를 확인하고 할 때 는 “who\" 또는 \"w\"라는 명령어를 이용해 확인할 수 있습니다."
  },
  {
    "id": 127,
    "sourceLabel": "96.",
    "question": "아래의 설명에서 file B의 뒷 부분에 Fila A 파일의 내용을 추가하여 저장하는 명령은?",
    "options": [
      "cat fileA >> fileB",
      "cat fileA > fileB",
      "cat fileA << fileB",
      "cat fileA fileB"
    ],
    "answer": 0,
    "explanation": "리다이렉션중 표준입력, 출력은 “>, >>, <, < > ”이 있습니다.\n이중에서 >> 기호를 사용하면 2개의 파일을 하나로 묶을 수 있습니다.\n주로 지정하는 파일이 뒤에 추가되는 방식입니다.\n\n- 표준출력(추가) “ >> \"의 사용방법은 아래와 같습니다.\n명령어a >> 파일a : 이 기호 >>를 사용하게 되면 파일a의 내용의 끝에 명령어a의 결과물이 추가 됩니다.** 기존 파일이 있는 경우 파일 내용의 삭제하지 않고 그 내용의 끝에 “명령어a”의 내용을 추가함."
  },
  {
    "id": 128,
    "sourceLabel": "97.",
    "question": "다음 중 특정 도메인이 사용하는 IP 주소를 조회하는 명령으로 알맞은 것은?",
    "options": [
      "ip",
      "route",
      "hostname",
      "dig"
    ],
    "answer": 3,
    "explanation": "네임서버로 부터 정보를 가져올 수 있는 명령어는 nslookup, host, dig등이 있습니다.\n\nnslookup는 name server 관련한 조회를 할 수 있는 명령어입니다.\nnslookup도 아래의 dig처럼 query-type을 이용합니다.\n예)nslookup -type=ns ihd.or.kr\n\ndig는 Domain Information Groper의 약자로 네임서버로 부터 정보를 가져와 보여 줍니다.\ndig [@server] [domain] [query type]\n\nquery-type 옵션\na : 도메인의 아이피 정보\nany : 지정된 도메인의 모든 정보\nmx : 지정한 도메인의 메일서버 정보\nns : 네임서버 정보\nsoa : soa 정보\n\nhost는 도메인(호스트)명은 알고 있는데 ip주소를 모르거나 혹은 그 반대의 경우에 사용하는 명령어입니다.\nhost [옵션] [도메인 혹은 IP주소] [DNS서버]\n\nhostname은 말 그대로 host의 name을 뜻하며, 리눅스 시스템에 로그인 했을 때의 계정명이 호스트네임이 됩니다."
  },
  {
    "id": 129,
    "sourceLabel": "97-1.",
    "question": "다음은 ihd.or.kr의 메일 서버 관련 정보를 조회하는 과정이다. (괄호) 안에 들어 갈 옵션으로 알맞은 것은 ?\n#dig ihd.or.kr (   )",
    "options": [
      "mx",
      "mail",
      "type=mail",
      "type=mx"
    ],
    "answer": 0,
    "explanation": "dig는 Domain Information Groper의 약자로 네임서버로 부터 정보를 가져와 보여 줍니다.\n\ndig [@server] [domain] [query type]\n\nquery-type 옵션\na : 도메인의 아이피 정보\nany : 지정된 도메인의 모든 정보\nmx : 지정한 도메인의 메일서버 정보\nns : 네임서버 정보\nsoa : soa 정보"
  },
  {
    "id": 130,
    "sourceLabel": "98.",
    "question": "현재 시스템에 S-ATA 타입 디스크를 장착하여 사용중이다. USB 메모리를 시스템에 연결했을 때 인식되는 장치 파일명으로 알맞은 것은?",
    "options": [
      "/dev/hda",
      "/dev/hdb",
      "/dev/sda",
      "/dev/sdb"
    ],
    "answer": 3,
    "explanation": "USB는 SATA 타입으로 인식이 되며, 기존 SATA 하드디스크가 하나 연결되어 있으니 sda로 인식이 될 것이고 추가로 USB가 하나 더 인식이 되었으니 sdb로 인식이 될 것입니다."
  },
  {
    "id": 131,
    "sourceLabel": "98-1.",
    "question": "다음 중 파티션과 장치명에 대한 설명으로 알맞은 것은?",
    "options": [
      "hda 첫 번째 IDE HDD를 나타낸다.",
      "sd는 외장식 IDE HDD를 나타낸다.",
      "hdb1은 첫 번째 IDE HDD의 2번째 파티션을 나타낸다.",
      "sdb6은 두 번째 SCSI HDD의 extended 파티션을 나타낸다."
    ],
    "answer": 0,
    "explanation": "위의 98번 해설을 참고하시면 됩니다.\n\nhad는 IDE 방식의 첫 번째 HDD를 의미합니다."
  },
  {
    "id": 132,
    "sourceLabel": "99.",
    "question": "파일시스템의 일관성을 검사하고 손상된 파일시스템을 복원하는 명령은?",
    "options": [
      "df",
      "du",
      "fsck",
      "fdisk"
    ],
    "answer": 2,
    "explanation": "/etc/fstab ← 해당 파일에 등록해 놓으면 부팅할 때 마다 자동으로 마운트 됨.\n아래는 /etc/fstab에 등록된 항목에 대한 내용이며, 6번째 필드는 “파일점검옵션”이 들어있습니다.\n\n① 파일시스템 장치=볼륨레이블=UUID를 의미. 예로 /dev/sda는 장치명이고 장치에 대한 이름을 별도로 지정할 수 있습니다. (/boot)\n\n② 마운트 포인트는 시스템이 마운트 될 때의 위치를 설정합니다.\n\n③ 앞서 배운 파일시스템의 종류를 말합니다.  사용중인 리눅스에서 설정되어 있는 파일시스템에 대한 정보는 /proc/filesystems에서 확인 가능합니다.(CentOS7부터는 기본 파일시스템인 xfs임)    \n** 참고로 /proc/swaps에서는 리눅스를 설치하면서 설정한 스왑 파티션과 리눅스 시스템에서 사용하고 있는 스왑파일에 대한 정보도 확인 가능합니다.\n\n④ 마운트시 읽기 전용, 읽기/쓰기를 지정 → defaults : rw, suid, dev, exec, auto, nouser, async\n\n⑤ 덤프(dump)는 0 이나 1로 표현을 합니다. 0은 덤프할 수 없는 파일시스템, 1은 데이터백업 등을 위해 덤프할 수 있는 파일 시스템\n\n⑥ 파일점검옵션(FSCK)로 무결성 검사, 검사순서 지정(0,1,2로 표현)\n    0은 무결성 검사를 하지 않음.\n    1은 루트파일시스템을 의미\n    2는 루트파일시스템 이외의 파일시스템을 의미\n\nfsck → 파일 시스템을 점검하고 복구하는 명령어 → 실행 후 오류 파일은 /lost+found 디렉터리에 저장됩니다.\n\nfsck [옵션] [장치명]\n-A :  /etc/fstab에 등록된 내용을 참고해서 시스템에서 사용하는 모든 파일시스템에 대한 검사를 수행\n-V : 자세한 정보를 출력\n-f : 강제적으로 무조건 검사진행\n-y : 파일 시스템에 문제가 발견되면 자동으로 수정\n-n : 파일 시스템에 문제가 발견되면 수정하지 않고 내용을 출력함.\n-t [파일시스템] : 점검해야 할 파일 시스템의 타입을 지정\n예)fsck –t ext3 또는 fsck.ext3 ← ext3 파일 시스템을 점검하라.\n예)fsck –f –V /dev/sdb ← /dev/sdb를 강제로 점검하고 점검 내용들을 보여달라.\n\ne2fsck → 리눅스에서 사용하는 모든파일 시스템을 점검하고 복구하는 명령어\ne2fsck [옵션] [장치명]\n기본 검사항목 inodes 검사, blocks 검사, sizes 검사, 디렉터리 구조 검사, 디렉터리 연결 검사, 파일 링크 정보, 전체파일 개수 검사, 사용중인 블록 검사 등\n\ne2fsck를 실행한 후  종료가 되면 아래와 같은 코드가 출력됩니다. 출력된 결과 값을 보고 적절하게 대응하시면 됩니다.(e2fsck 종료코드라고 부름)\n0 : 에러 없음. 정상 종료상태\n1 : 파일 시스템을 복구\n2 : 파일 시스템 복구 후 재 부팅\n4 : 작업대상 파일시스템에 문제를 발견 그러나 복구하지 않은 상태임\n8 : 실행에러\n16 : 사용법 또는 문법에러\n32 : e2fsck작업이 사용자에 의해 취소됨\n128 : 공유 라이브러리 에러 발생\n\n[옵션]\n-p : 파일 시스템을 검사하고 자동으로 복구\n-n : 모든 질문에 대한 응답을 no로 취급\n-y : 모든 질문에 대한 응답을 yes로 취급\n-c : 배드블록을 체크\n-f : 정상적인 파일시스템도 포함하여 체크(강제체크)"
  },
  {
    "id": 133,
    "sourceLabel": "100.",
    "question": "SIGTERM 시그널의 의미는 ?",
    "options": [
      "프로세스를 강제 종료시킨다.",
      "프로세스에게 스스로 종료하라고 지시한다.",
      "프로세스에게 자식 프로세스가 종료되었음을 알려준다.",
      "프로세스를 제어하는 터미널이 종료되었음을 알려준다."
    ],
    "answer": 1,
    "explanation": "시그널은 특정 프로세스가 다른 프로세스에게 메시지(중지, 종료 등)를 보낼 때 사용합니다.\n\nSIGTERM 또는 TERM은 15번을 사용하고 실행중인 프로그램을 종료(안전한 종료)를 의미합니다. 즉 프로세스에게 스스로 종료하라는 지시를 하게 됩니다."
  },
  {
    "id": 134,
    "sourceLabel": "101.",
    "question": "하나의 하드 디스크를 몇 개의 영역 분할하여 사용할지 설정하는 것으로 그 용어와 툴(Tool)의 조합이 맞는 것은?",
    "options": [
      "MBR, FDISK",
      "MBR, GRUB",
      "파티션, Disk Druid",
      "파티션, GRUB"
    ],
    "answer": 2,
    "explanation": "수동 파티션 도구인 Disk Druid는 레드햇 엔터프라이즈에서 사용하는 파티션 분할 프로그램입니다."
  },
  {
    "id": 135,
    "sourceLabel": "102.",
    "question": "현재 시스템 접속자의 수를 숫자로 표시하는 명령은?",
    "options": [
      "who",
      "who | wc -c",
      "who | wc -l",
      "wc | who"
    ],
    "answer": 2,
    "explanation": "\"시스템 접속자의 수\"는 who로 검색했을 때 하나의 줄에 하나씩 표현이 되므로 -l 옵션을 사용하면 줄 단위로 표시를 해 줍니다. wc는 수를 세어주는 명령어이므로 2줄이 표시되는 것이 정확합니다."
  },
  {
    "id": 136,
    "sourceLabel": "103.",
    "question": "다음은 어떤 명령어의 실행결과이다. (  )안에 들어갈 명령어로서 가장 적절한 것은?\n\n$ (    ) com1.txt com2.txt\n\ncom1.txt com2.txt differ, char 3,line 1",
    "options": [
      "rm",
      "cmp",
      "mkdir",
      "ls"
    ],
    "answer": 1,
    "explanation": "cmp는 유사한 두 파일을 비교하여 처음으로 틀린 문자가 나타나는 위치만을 출력하는 명령어입니다.\n\ncom1.txt파일과 com2.txt파일을 비교해서 differ(다른) 것은 char 3,line1은 line1의 3번째 문자가 다르다는 의미입니다."
  },
  {
    "id": 137,
    "sourceLabel": "104.",
    "question": "다음 중 리눅스를 정상 설치했을 경우 기본적으로 생성되는 파일 시스템로 틀린 것은?",
    "options": [
      "Swap 파일 시스템",
      "하나 이상의 Ext3(혹은 Ext4 등의 Native) 파일 시스템",
      "Proc 파일 시스템(/proc)",
      "RamDrive 파일 시스템"
    ],
    "answer": 3,
    "explanation": "아래의 항목은 리눅스 설치시 기본으로 설치되는 파일시스템의 내용입니다.\n\n[root@ihd etc]# cat /etc/fstab  cat 명령어로 /etc/fstab의 내용을 확인합니다.\n\nLABEL=/                   /                      ext3        defaults            1 1\n\nLABEL=/boot              /boot                 ext3         defaults            1 2\n\ntmpfs                       /dev/shm            tmpfs       defaults            0 0\n\ndevpts                     /dev/pts             devpts  gid=5,mode=620    0 0\n\nsysfs                       /sys                  sysfs         defaults            0 0\n\nproc                        /proc                 proc         defaults            0 0\n\nLABEL=SWAP-sda3       swap                 swap        defaults            0 0\n\nRamDrive는 말 그대로 메모리(RAM)을 드라이브(Disk)로 설정해 사용하는 것을 말합니다."
  },
  {
    "id": 138,
    "sourceLabel": "105.",
    "question": "사용자 계정관리에 대한 설명으로 틀린 것은?",
    "options": [
      "일반적으로 사용자 계정을 생성할 때는 useradd 명령어를 사용한다.",
      "사용자 계정변경을 위한 suermod명령 사용시 사용자 계정 홈 디렉토리를 설정하고자 할때는 -d 옵션을 사용한다.",
      "사용자의 그룹에 대한 정보는 /etc/group 파일에 저장되어 있다.",
      "/etc/shadow 파일은 사용자의 uid, gid등의 정보를 포함하고 있다."
    ],
    "answer": 3,
    "explanation": "uid나 gid를 확인할 수 있는 항목은 /etc/passwd에서 확인이 가능합니다."
  },
  {
    "id": 139,
    "sourceLabel": "106.",
    "question": "리눅스에서 최상위 디렉터리는?",
    "options": [
      "/boot",
      "/home",
      "/",
      "/mnt"
    ],
    "answer": 2,
    "explanation": "제공된 원문에 별도의 해설이 없습니다."
  },
  {
    "id": 140,
    "sourceLabel": "107.",
    "question": "다음 중 우분투(ubuntu) 리눅스의 기반이 되는 리눅스로 알맞은 것은?",
    "options": [
      "Fedora",
      "RHEL",
      "Debian",
      "Slackware"
    ],
    "answer": 2,
    "explanation": "슬랙웨어계열 : Slax 또는 Slax OS, Vector Linux, DeLi Linux, Frugalware, Salix OS \n\n레드햇 계열 : Redhat Enterprise Linux, CentOS, Fedora, AnNyung Linux(안녕), Oracle Enterprise Linux, Scientific Linux, 타이젠\n\n데비안계열 : Debialn,우분투, 민트, Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 141,
    "sourceLabel": "108.",
    "question": "다음 중 VirtualBox와 같은 가상화 프로그램으로 리눅스를 설치할떄 선택하는 IPv4 설정항목으로 가장 알맞은 것은?",
    "options": [
      "수동",
      "다른 컴퓨터와 공유",
      "사용안함",
      "자동(DHCP)"
    ],
    "answer": 3,
    "explanation": "DHCP는 IP 주소를 자동으로 할당해 주는 서버입니다.\n\n자동으로 IP주소를 할당 받는 다는 의미"
  },
  {
    "id": 142,
    "sourceLabel": "109.",
    "question": "다음 중 명령어의 실행 결과가 나머지 셋과 다른 것은?",
    "options": [
      "cd",
      "cd ~",
      "cd $HOME",
      "cd HOME"
    ],
    "answer": 3,
    "explanation": "①②③은 홈디렉터리로 이동하지만 cd HOME을 하면 \"그런 폴더나 파일은 없다고 뜹니다.\"\n\n만약 cd /home/계정명 이라고 하면 이때는 해당 계정의 홈 디렉터리로 이동하게 됩니다."
  },
  {
    "id": 143,
    "sourceLabel": "110.",
    "question": "다음 중 cp 명령으로 디렉터리를 복사할 때 사용하는 옵션으로 틀린 것은?",
    "options": [
      "-r",
      "-R",
      "-a",
      "-d"
    ],
    "answer": 1,
    "explanation": "문제의 핵심은 디렉터리를 복사할 때입니다.\n\ncp 옵션 [복사할 대상] [복사할 위치]\n\n-a : 원본파일의 속성, 링크정보들을 그대로 유지하고 복사\n\n-d : 복사할 파일의 심볼릭파일이면, 심볼릭 정보를 그대로 유지한 상태로 복사\n\n-f : 복사할 파일의 사용자에게 확인 없이 강제로 복사\n\n-r : 일반 파일이며, 그냥 복사되고, 만약 원본이 경로면, 그 경로와 함께 경로 안에 있는 모든 하위 경로, 파일들이 복사됨.\n\n-R : 경로를 복사할 경우에는 그 안에 포함된 모든 하위 경로와 파일들을 모두 복사\n\n-i : 만약 복사 대상 파일이 이미 있으면 사용자에게 어떻게 처리할 것인지 물어보는 프롬프트를 나타나게 함.\n\n-p : 원본 파일의 권한과 소유권을 유지하면서 복사"
  },
  {
    "id": 144,
    "sourceLabel": "110-1.",
    "question": "cp명령에서 복사할 장소에 이미 동일한 파일명이 존재할 경우 그대로 덮어쓰는 옵션으로 알맞은 것은?",
    "options": [
      "-f",
      "-a",
      "-i",
      "-p"
    ],
    "answer": 0,
    "explanation": "cp 옵션 [복사할 대상] [복사할 위치]\n\n-a : 원본파일의 속성, 링크정보들을 그대로 유지하고 복사\n\n-d : 복사할 파일의 심볼릭파일이면, 심볼릭 정보를 그대로 유지한 상태로 복사\n\n-f : 복사할 파일의 사용자에게 확인 없이 강제로 복사\n      (복사 대상 파일이 이미 그 위치에 존재한다면 파일을 지우고 강제로 복사)\n\n-r : 일반 파일이며, 그냥 복사되고, 만약 원본이 경로면, 그 경로와 함께 경로 안에 있는 모든 하위 경로, 파일들이 복사됨.\n\n-R : 경로를 복사할 경우에는 그 안에 포함된 모든 하위 경로와 파일들을 모두 복사\n\n-i : 만약 복사 대상 파일이 이미 있으면 사용자에게 어떻게 처리할 것인지 물어보는 프롬프트를 나타나게 함.\n\n얼핏보면 i인  것 같지만 i는 어떻게 할 것인지 사용자에게 물어 보게 됩니다.\n\n -f를 정답으로 처리 했을 듯 함."
  },
  {
    "id": 145,
    "sourceLabel": "111.",
    "question": "현재 호스트에서 ihd.or.kr까지 연결되는 과정을 알고 싶을 때 사용할 명령은?",
    "options": [
      "traceroute ihd.or.kr",
      "ping ihd.or.kr",
      "telnet ihd.or.kr",
      "ftp ihd.or.kr"
    ],
    "answer": 0,
    "explanation": "리눅스 시스템에서 경로를 상세하게 추적하는 명령어는 traceroute입니다.\n\nping은 과정이 없이 목적지까지의 정보 전달이 원할한지만을 확인할 수 있습니다."
  },
  {
    "id": 146,
    "sourceLabel": "112.",
    "question": "다음은 job.txt 파일의 내용을 출력한 것이다. \n\n다음 중 'grep -v [abc] job.txt' 명령을 실행한 결과에 대한 설명으로 알맞은 것은?\n\n#cat job.txt\n\nprogrammer\n\nengineer\n\ndesigner\n\nabc",
    "options": [
      "programmer만 결과로 출력된다.",
      "engineer와 designer 결과로 출력된다.",
      "programmer와 abc가 결과로 출력된다.",
      "programmer, engineer, designer가 결과로 출력된다."
    ],
    "answer": 1,
    "explanation": "패턴 [abc] 의 의미: a 또는 b 또는 c 중 어느 한 문자라도 포함된 줄을 찾습니다.\n\nprogrammer: 'a'가 포함됨 (매칭)\n\nengineer: a, b, c 모두 없음 (불일치)\n\ndesigner: 'c'가 포함되지 않았고, a, b도 없음 (불일치)\n\nabc: 'a', 'b', 'c' 모두 포함됨 (매칭)\n\n옵션 -v (invert-match) 의 역할: 패턴과 일치하지 않는(매칭되지 않는) 줄만 선택하여 출력합니다.\n\n결과 도출:\n\n패턴 [abc]에 걸리는 줄은 programmer와 abc입니다.\n\n이 줄들을 제외하고(-v) 남은 줄은 engineer와 designer입니다.\n\n만약 'abc'라는 문자열 그 자체를 제외하고 싶다면 대괄호 없이 grep -v \"abc\" job.txt를 사용해야 합니다."
  },
  {
    "id": 147,
    "sourceLabel": "112-1.",
    "question": "다음 중 grep 명령으로 jalin.txt에서 'ihd'  또는 'kait'라는 문자열을 검색하는 방법으로 알맞은 것은?",
    "options": [
      "grep 'ihd | kait' jalin.txt",
      "grep -e 'ihd | kait' jalin.txt",
      "grep -E 'ihd | kait' jalin.txt",
      "grep -p 'ihd | kait' jalin.txt"
    ],
    "answer": 2,
    "explanation": "grep -E 옵션을 사용하게 되면 지정된 파일에서 ihd와 kait를 찾아서 출력해 줍니다."
  },
  {
    "id": 148,
    "sourceLabel": "112-2.",
    "question": "다음 중 현재 디렉터리의 하위 디렉터리까지 모두 포함하여 linuxmaster라는 문자열을 포함한 파일을 검색하는 명령으로 가장 알맞은 것은?",
    "options": [
      "find . -string linuxmaster -print",
      "grep -r linuxmaster*",
      "ls -al | grep linuxmaster",
      "cat * | grep linuxmaster"
    ],
    "answer": 1,
    "explanation": "grep -r 옵션을 사용하게 되면 하위 디렉터리 까지 검색 범위를 확장하게 됩니다."
  },
  {
    "id": 149,
    "sourceLabel": "112-3.",
    "question": "다음은 job.txt 파일의 내용을 출력한 것이다. \n\n다음 중 'grep  [abc]  job.txt' 명령을 실행한 결과에 대한 설명으로 알맞은 것은?\n\n#cat job.txt\n\nprogrammer\n\nengineer\n\ndesigner\n\nabc",
    "options": [
      "programmer만 결과로 출력된다.",
      "engineer와 designer 결과로 출력된다.",
      "programmer와 abc가 결과로 출력된다.",
      "programmer, engineer, designer가 결과로 출력된다."
    ],
    "answer": 2,
    "explanation": "패턴 [abc]의 의미: 줄 내에 a 또는 b 또는 c 중 단 한 글자라도 포함되어 있다면 매칭(선택)됩니다.\n\n각 항목 검사:\n\nprogrammer: 중간에 'a'가 포함되어 있으므로 매칭됩니다.\n\nengineer: 'a', 'b', 'c' 중 어떤 문자도 포함되어 있지 않아 매칭되지 않습니다.\n\ndesigner: 이 단어 역시 'a', 'b', 'c' 중 어떤 문자도 포함되어 있지 않아 매칭되지 않습니다.\n\nabc: 'a', 'b', 'c'가 모두 포함되어 있으므로 당연히 매칭됩니다.\n\n결과 도출: 매칭된 programmer와 abc 두 줄이 화면에 출력됩니다.\n\n이전에 풀었던 112번 문제에서는 일치하지 않는 것을 찾는 -v 옵션이 있었지만, 이번에는 옵션이 없으므로 패턴과 일치하는 항목만 출력되는 것입니다."
  },
  {
    "id": 150,
    "sourceLabel": "113.",
    "question": "다음 명령의 실행결과에 대한 설명으로 가장 적절한 것은?\n\n#useradd -d /home/userid -g users -s /bin/sh userid",
    "options": [
      "사용자 계정의 각종 설정들을 변경하고 있다.",
      "userid 그룹에 users 계정을 추가하고 있다.",
      "홈 디렉토리를 /home/userid, 기본 그룹을 suers, 로그인 쉘을 /bin/sh로 지정하며 userid 계정을 생성하고 있다.",
      "userid 계정의 홈 디렉토리, 기본그룹, 로그인 쉘 등의 설정들을 조회하고 있다."
    ],
    "answer": 2,
    "explanation": "useradd 옵션 \n\n-d : 홈 디렉터리 위치를 지정\n\n-g : 새로운 사용자의 그룹을 지정\n\n-G : 새로운 사용자의 보조그룹을 지정\n\n-u : 새로운 사용자의 UID를 지정\n\n-p: 새로운 사용자를 추가하면서 동시에 패스워드를 지정\n\n-s : 새로운 사용자의 쉘을 지정"
  },
  {
    "id": 151,
    "sourceLabel": "113-1.",
    "question": "다음 중 사용자 계정 추가 시 기본적으로 설정되는 항목으로 틀린 것은?",
    "options": [
      "Home directory",
      "기본 셸",
      "그룹 및 그룹id",
      "vi 편집기"
    ],
    "answer": 1,
    "explanation": "계정을 생성하게 되면, 아래와 같이 /etc/passwd라는 항목에 만들어진 계정이 나타납니다.\n\n해당 필들의 값을 보면, 계정명:패스워드:UID:GID:설명:홈디렉터리:셸정보를 확인할 수 있습니다.\n\n하지만 vi 편집기를 기본적으로 설정해 주지는 않습니다.\n\n 정답 : ④\n\n113-2. 다음 명령에 대한 설명으로 맞는 것은?\n\n#useradd -f 5 ihduser\n\n① ihduser 계정의 우선순위를 5만큼 낮추어서 생성한다.\n\n② ihduser 계정은 패스워드 사용기한 만료 후 5일 동안만 사용할 수 있도록 한다.\n\n③ ihduser 계정의 id를  5로 지정한다.\n\n④ ihduser 계정의 passwd 파일내의 위치를 5만큼 앞쪽으로 생성한다.\n\n▶해설\n\nuseradd 옵션 \n\n-d : 홈 디렉터리 위치를 지정\n\n-g : 새로운 사용자의 그룹을 지정\n\n-G : 새로운 사용자의 보조그룹을 지정\n\n-u : 새로운 사용자의 UID를 지정\n\n-p: 새로운 사용자를 추가하면서 동시에 패스워드를 지정\n\n-s : 새로운 사용자의 쉘을 지정\n\n-f : 비밀번호가 만료된 후 계정이 만료될 때까지의 일수"
  },
  {
    "id": 152,
    "sourceLabel": "114.",
    "question": "root(SuperUser)가 아닌 새로운 사용자에게 시스템에 대한 사용권을 부여하는 명령어는?",
    "options": [
      "useradd",
      "plususer",
      "useraddsystem",
      "createuser"
    ],
    "answer": 0,
    "explanation": "리눅스 시스템에서 사용자를 추가하는 명령어는 useradd 또는 adduser로 생성이 가능합니다."
  },
  {
    "id": 153,
    "sourceLabel": "115.",
    "question": "시스템의 메모리 사용량 정보를 확인하는 명령어는?",
    "options": [
      "dmesg",
      "free",
      "stat",
      "find"
    ],
    "answer": 1,
    "explanation": "제공된 원문에 별도의 해설이 없습니다."
  },
  {
    "id": 154,
    "sourceLabel": "116.",
    "question": "파티션을 분할하는 장점으로 틀린 것은?",
    "options": [
      "부팅 시 파일시스템 점검시간을 단축한다.",
      "파일의 크기가 커질 경우 다른 파티션을 활용할 수 있다.",
      "바이러스등으로 인해 시스템에 가해지는 피해를 줄일 수 있다.",
      "특정 파티션이 손상되어도 타 파티션의 자료는 보존되기 때문에 안정성을 보장할 수 있다."
    ],
    "answer": 1,
    "explanation": "파티션 분할을 통해 ①③④의 장점이 있습니다.\n\n하지만 파일의 크기가 커진다고 하여 해당 파일을 분할하여 다른 파티션에 저장하는 것을 장점으로 보기는 어렵습니다."
  },
  {
    "id": 155,
    "sourceLabel": "117.",
    "question": "다음 중 리눅스 커널이 들어있는 디렉터리로 알맞은 것은?",
    "options": [
      "/boot",
      "/etc",
      "/lib",
      "/tmp"
    ],
    "answer": 0,
    "explanation": "제공된 원문에 별도의 해설이 없습니다."
  },
  {
    "id": 156,
    "sourceLabel": "118.",
    "question": "리눅스용 그래픽 사용자 인터페이스?",
    "options": [
      "MS 윈도우즈",
      "KDE",
      "OS/2",
      "Mac OS X"
    ],
    "answer": 1,
    "explanation": "OS/2는 IBM에서 개발한 운영체제이며, Mac OS X는 애플의 X 윈도우즈 입니다.\n\nKDE는 리눅스용 그래픽 사용자 인터페이스 입니다."
  },
  {
    "id": 157,
    "sourceLabel": "119.",
    "question": "다음에서 설명하는 리눅스 배포판으로 알맞은 것은?\n\n2006년 2월에 Knoppix 기반으로 만들어진 리눅스 배포판으로 해킹과 관련된 도구와 설명서가 내장되어 있어서 정보보안을 테스트할 때 유용하다. 2012년 8월에 우분투 기반으로 마지막 버전이 출시되었다.",
    "options": [
      "BackTrack",
      "Kali Linux",
      "Scientific Linux",
      "Vector Linux"
    ],
    "answer": 0,
    "explanation": "우분투기반의 해킹 관련 리눅스는 백트랙이며 이러한 백트랙을 기반으로 kali Linux가 개발되었습니다.\n\n칼리 리눅스는 데비안 계열의 리눅스입니다."
  },
  {
    "id": 158,
    "sourceLabel": "120.",
    "question": "다음 중 ihduser 계정의 삭제할 때 그 사용자의 파일 및 디렉터리를 같이 제거하려고 할 때 알맞은 것은?",
    "options": [
      "userdel ihduser",
      "userdel -d ihduser",
      "userdel -r ihduser",
      "userdel -e ihduser"
    ],
    "answer": 2,
    "explanation": "userdel  :  계정삭제[계정만 삭제}\n\nuserdel -r  : 계정에 대한 모든 정보 삭제[계정+홈 디렉터리도 삭제]\n\nuserdel -f :  계정을 강제로 삭제Userdel –R : 계정 삭제시 계정의 홈 디렉토리의 하위 디렉터리까지 함께 삭제"
  },
  {
    "id": 159,
    "sourceLabel": "121.",
    "question": "다음 중 '/dev/sda6'에 대한 설명으로 알맞은 것은?",
    "options": [
      "6번째 S-ATA 유형이 디스크이다.",
      "6번째 주 파티션이다.",
      "2번째 확장 파티션이다.",
      "2번째 논리 파티션이다."
    ],
    "answer": 3,
    "explanation": "sd는 STAT유형의 디스크로 a는 첫번째 디스크라는 의미입니다.\n\n주파티션은 하나의 디스크에서 최대 4개까지 생성 가능합니다.\n\n그런 의미에서 1-3은 주파티션으로 설정하고 4번째는 확장파티션으로 설정 그리고 5-6은 논리파티션으로 할당 가능합니다\n\n하나의 디스크에는 주파티션은 최대 4개까지 생성가능하며, 확장파티션은 1개, 논리 파티션은 12개 설정이 가능합니다."
  },
  {
    "id": 160,
    "sourceLabel": "122.",
    "question": "다음은 ls -l 명령을 실행시킨 결과이다. 이에 대한 설명으로 틀린 것은?\n\n-rwxr-xr-x ihd project 1024 Aug 13 10:10 client.c",
    "options": [
      "client.c의 소유자는 ihd이다.",
      "소유자는 client.c를 수정할 수 없다.",
      "project 그룹에 속한 사람은 client.c의 내용을 볼 수 있다.",
      "일반사용자도 client.c를 실행할 수 있다."
    ],
    "answer": 1,
    "explanation": "소유자는 rwx의 권한을 모두 갖고 있으므로 수정이 가능합니다."
  },
  {
    "id": 161,
    "sourceLabel": "123.",
    "question": "데비안 배포판에서 제공하고 있는 패키지 관리용 도구는?",
    "options": [
      "rpm",
      "debian",
      "dpkg",
      "Mtoo"
    ],
    "answer": 2,
    "explanation": "패키지 관리기법( 관리 기능 낮은 수준  높은 수준 )\n\n - 레드햇 : RPM - YUM\n\n - 데비안 : dpkg(dselect, alien) - apt-get - aptitude\n\n - 수세 : YaST(yes another setup tool)라는 운영체제 설치 및 구성도구이며,  Zypp 또는 Zypper를 통해 패키지 관리기능을 제공"
  },
  {
    "id": 162,
    "sourceLabel": "124.",
    "question": "다음 ( 괄호 ) 안에 들어갈 명령으로 알맞은 것은?\n\n# (     ) www.ihd.or.kr\n\nServer :                    168.126.63.1\n\nAddress :                  168.126.63.1#53\n\nNon-authoritative answer.\n\nName : www.ihd.or.kr\n\nAddress : 211.202.42.101",
    "options": [
      "host",
      "hostname",
      "nslookup",
      "dig"
    ],
    "answer": 2,
    "explanation": "제공된 원문에 별도의 해설이 없습니다."
  },
  {
    "id": 163,
    "sourceLabel": "125.",
    "question": "다음 명령의 실행 결과에 대한 설명으로 적절한 것은?\n\n[ihd@ihdihd]$ ls -al >more",
    "options": [
      "현재 디렉토리의 파일 목록을 한 페이지씩 나누어 출력한다.",
      "현재 디렉토리의 파일 목록을 more라는 파일에 저장한다.",
      "현재 디렉토리의 파일 목록을 모니터에 출력하고, 이를 more 파일에 저장한다.",
      "more 파일의 정보를 조회한다."
    ],
    "answer": 1,
    "explanation": "리다이렉션 기호를 이용하면 파일 목록이 출력되지 않고 바로 more파일에 저장됩니다."
  },
  {
    "id": 164,
    "sourceLabel": "126.",
    "question": "rm -r [디렉터리]의 명령으로 사용했을 때의 결과는?",
    "options": [
      "사용자의 확인에 의하여 파일과 디렉터리를 지운다.",
      "디렉터리 내의 파일뿐만 아니라 하위 디렉터리와 그 안의 파일까지 모두 삭제한다.",
      "안전하게 파일과 디렉터리를 지울 수 있는 명령어이다.",
      "디렉터리 내의 각각의 파일을 지우는 정보를 자세히 보여준다."
    ],
    "answer": 1,
    "explanation": "rm -r을 하게 되면 사용자의 확인 없이 바로 삭제가 적용됩니다.\n\n특히 디렉터리 냉의 파일과 폴더가 삭제되면 하위 폴더나 파일도 함께 삭제됩니다."
  },
  {
    "id": 165,
    "sourceLabel": "127.",
    "question": "다음은 ihd.orkr의 메일 서버 관련 정보를 조회하는 과정이다. (괄호)안에 들어갈 옵션으로 알맞은 것은?\n\n#nslookup (      ) ihd.or.kr",
    "options": [
      "mx",
      "type=mx",
      "-mx",
      "-type=mx"
    ],
    "answer": 3,
    "explanation": "nslookup을 통해 MX레코드가 잘 설정되었는지 확인이 할 수 있습니다.\n\nnslookup -type=mx [도메인주소] 또는 nslookup -q=mx [도메인주소]\n\n또 다른 방법은 cmd창에서 nslookup을 입력 후\n\n>set type=mx 또는 set q=mx\n\n>도메인주소\n\n와 같은 방법으로 확인할 수 있습니다.\n\n 정답 : ④\n\n \n\n128. 다음 중 텍스트 형식이 아닌 파일(non-text file)에서 문자열을 추출할 때 사용하는 명령으로 알맞은 것은?\n\n① mesg\n\n② stty\n\n③ file\n\n④ strings\n\n▶해설\n\nstrings는 보통 프로그램 안에 있는 문자열을 출력할 때 사용합니다.보통 문서의 내용을 보는 것은 cat 명령어를 이용해서 보게 되지만 프로그램 안에 있는 문자열은 strings를 이용하는 것이 보통입니다.(물론 cat으로는 프로그램 파일의 내용 확인은 안 됩니다.)\n\n기본적인 사용방법은 아래와 같습니다.\n\nstrings <옵션> <파일명>\n\n사용 예) strings anaconda-ks.cfg → 아래에 해당 내용들이 출력됨."
  },
  {
    "id": 166,
    "sourceLabel": "129.",
    "question": "다음과 같이 명령을 실행한 상태이다. (괄호) 안에 'cd ..'라고 실행했을 때 이동되는 디렉터리로 알맞은 것은?\n\n[kaituser@www /]$ cd /usr/local/src[kaituser@www src]$ (       )",
    "options": [
      "/",
      "/usr/local",
      "/usr/local/src",
      "/home/kaituser"
    ],
    "answer": 1,
    "explanation": ". 은 현재 디렉터리를 의미하며,..은 상위 디렉터리를 의미합니다./은 디렉터리를 구분해 주는 역할을 하며, 루트디렉터리를 의미합니다.~은 사용자 홈 디렉터리를 의미합니다.(cd 만 사용해도 동일)\n\n최종 경로는 /usr/local/src 이며, 이 위치에서 cd를 입력하게 되면 홈디렉터리로 이동하게 됩니다.[kaituser@www /]$ cd /usr/local/src[kaituser@www src]$ cd 혹은 cd ~[kaituser@www ~]$"
  },
  {
    "id": 167,
    "sourceLabel": "130.",
    "question": "grub.conf 파일의 내용이 지워져서 GRUB 부트 메뉴에서 직접 입력하여 설정하려고 한다.\n\n다음 중 GRUB부트 메뉴에서 직접 입력할 때 사용하는 키로 알맞은 것은?",
    "options": [
      "[a]",
      "[b]",
      "[c]",
      "[e]"
    ],
    "answer": 2,
    "explanation": "GRUB의 멀티부트 메뉴 화면에서 [a], [c], [e] 키를 누르면 각각의 모드로 진입 할 수 있습니다.\n\n[a]는 kernel의 파라미터를 추가할 수 있게 하는 모드입니다.\n\n[e]는 멀티부트 메뉴의 리스트 항목을 직접 편집 할 수 있게 해주는 모드입니다.\n\n[c] (command)\n\nGRUB의 명령행 인터페이스(CLI) 모드로 진입합니다.\n\ngrub.conf 파일이 손상되었을 때 커널 위치나 루트 파티션을 직접 타이핑하여 부팅을 시도할 수 있습니다."
  },
  {
    "id": 168,
    "sourceLabel": "131.",
    "question": "다음 중 시스템의 하드웨어 시간을 출력하는 명령어가 아닌 것은?",
    "options": [
      "hwclock",
      "clock",
      "date",
      "rdate"
    ],
    "answer": 2,
    "explanation": "hwclock와 clock은 동일한 결과를 확인\n\n2021년 03월 01일(월) 오후 06시 43분 15초 -0.418096 seconds\n\ndate는 아래와 같이 날짜 및 시간 정보가 출력됨.\n\n2021. 03. 01. (월) 18: 43: 15 KST\n\nrdate는 원격지 타임서버(NTP서버)를 이용하여 시스템 시간을 설정(변경)할 때 사용하는 명령어임"
  },
  {
    "id": 169,
    "sourceLabel": "132.",
    "question": "다음 중 사용자 계정정보를 UID 순으로 출력해 주는 명령어는 무엇인가?",
    "options": [
      "show users",
      "users",
      "lslogin",
      "lslogins"
    ],
    "answer": 3,
    "explanation": "lslogins는 사용자 계정정보를 UID순으로 출력해 주는 명령어이다."
  },
  {
    "id": 170,
    "sourceLabel": "133.",
    "question": "다음 중 GNU 프로젝트에 의해 개발된 프로그램으로 틀린 것은 무엇인가?",
    "options": [
      "gcc",
      "emacs",
      "KDE",
      "GNOME"
    ],
    "answer": 2,
    "explanation": "GNU는 GNU’s Not Unix! = GNU는 유닉스가 아니다 = GNU) 그누 프로젝트(GNU Project)는 유닉스의 상업적 확산에 반발하여 리처드 스톨만과 그의 팀이 무료로 개발, 배포하고 있는 유닉스 호환 운영체제를 말합니다. \n\n또한 정보의 공유 프로젝트 자체를 말하기도합니다. (참고로 GNU, 그누는 “소목, 소과의 누영양속에 속하는 동물임)\n\n이렇게 리처드 스톨만이 만들어 사용하던 것들이 gcc, emacs, GNOME,gzip 등이 있습니다. \n\ngcc는 GNU Compiler Collection을 줄여서 GCC라고 부름.(GNU 컴파일러 모음)"
  },
  {
    "id": 171,
    "sourceLabel": "134.",
    "question": "123 명령어를 실행하면, ls -alF가 실행된다. 이 명령어의 사용을 중단하려할 때 괄호 안에 들어갈 명령으로 알맞은 것은 무엇인가?\n\n#(     ) 123",
    "options": [
      "alias",
      "unalias",
      "which",
      "whatis"
    ],
    "answer": 1,
    "explanation": "alias는 긴 명령어를 짧은 별명으로 만들어서 설정하는 것을 말합니다.\n\n예를들어\n\n#alias 123='ls -alF'\n\n#unalias 123\n\n로 설정한 후 # 123 을 입력하게 되면 ls -alF가 동작하게 됩니다.\n\n여기서 주의 해야할 부분은 띄어쓰기와 '명령어'입니다.\n\n123='ls -alF'와 같이 띄어쓰기를 주의해야 하며, 작은 따옵표를 꼭 입력해 주어야 합니다.\n\n이러한 alias를 해제하는 방법은 unalias 123을 해 주시면 123으로 설정해 놓은 별명이 해제 됩니다."
  },
  {
    "id": 172,
    "sourceLabel": "135.",
    "question": "다음 중 ihduser 사용자의 패스워드의 사용을 일시적으로 막으려고 할 때 알맞은 것은?",
    "options": [
      "passwd -d ihduser",
      "passwd -u ihduser",
      "passwd -r ihduser",
      "passwd -l ihduser"
    ],
    "answer": 3,
    "explanation": "passwd명령어는 사용자 계정에 패스워드를 설정할 수도 있고, 해제하거나 일시적으로 사용을 제한하거나 패스워드 사용을 아예 막을 때 사용합니다.\n\npasswd -l 또는 usermod -L은 일시적인 패스워드 사용을 막을 때 사용하는 옵션\n\npasswd -u 또는 usermod -U는 일시적인 제한을 해제할 때 사용하는 옵션\n\npasswd -d는 계정에 대한 암호를 사용하지 못하게 하는 경우(주로 퇴사한 직원의 계정을 막을 때 사용)"
  },
  {
    "id": 173,
    "sourceLabel": "136.",
    "question": "다음 중 아파치 라이선스를 적용하는 소프트웨어로 알맞은 것은?",
    "options": [
      "CentOS",
      "Hadoop",
      "Firefox",
      "OS X"
    ],
    "answer": 1,
    "explanation": "아파치(Apache)라이선스\n\n상업적 사용가능.\n\n재배포시 소스공개의무 없음.\n\n재배포시 라이선스 포함 및 출처를 공개함.\n\nCentOS는 GPL 라이선스 사용\n\nHadoop(하둡)은 Apache Hadoop 이라고도 부릅니다.\n\n대용량의 빅데이터를 처리하는 분산파일시스템과 빅데이터의 자료를 처리하기 위한 분산처리 시스템을 제공합니다.\n\nFirefox는 모질라재단의 웹브라우저로 GPL 라이선스 사용\n\nOS X는 애플 퍼블릭 소스 라이선스 사용"
  },
  {
    "id": 174,
    "sourceLabel": "136-1.",
    "question": "다음에서 설명하는 라이센스로 알맞은 것은?\n\n해당 소프트웨어를 누구나 개작할 수 있고, 수정본의 재배포 시에 소스 코드의 비공개가 가능하다.\n\n이 라이선스가 적용된 소프트웨어에는 X window System, JQuery, Node.js 등이 있다.",
    "options": [
      "GPL",
      "MPL",
      "MIT",
      "BSD"
    ],
    "answer": 2,
    "explanation": "MIT 라이선스는 매사추세츠 공과대학교(MIT)을 기원으로 하는 소프트웨어 라이선스 중 가장 대표적입니다.\n\nX11 License 또는 X window License로 표기되기도합니다.\n\n보통 MIT 라이선스의 소트프웨어를 개조하여 제품을 만들어도 오픈 소스를 배포해야 한다는 규정이 없어 제한이 느슨하다라는 평가를 받고 있습니다. 대표적 소프트웨어로는 Node.js, jQuery, Ruby on Rails, X 윈도 시스템(X11) , 비주얼 스튜디오 코드등 이 있습니다.\n\nGPL(GNU General Public License) – 일반 공중 사용허가서 → 자유소프트웨어 재단(Free Software Foundation. FSF)에서 만든 라이선스\n\n이 라이선스로 프로그램을 만들게 되면, 모든 파생된 프로그램 역시 같은 라이선스를 가져야 한다.(쉽게 말해 완전한 공유의 정신을 말함)\n\n오해하면 안 되는 것은 GNU 프로그램이 공짜를 의미하는 것은 아니라는 점입니다. (개발자는 프로그램을 유료로 판매할 수도 있음)\n\n그러나 다른 사람들이 원래의 프로그램을 고쳐서 사용하는 것 까지는 막아서는 안 된다는 의미입니다.\n\nBSD(Berkeley Software Distribution)\n\nBSD라이선스는 GPL과는 달리 소스 코드를 수정하거나 추가해도 소스를 공개해야 하는 의무는 없습니다.\n\n대표적인 상업용 라이센스로는 Apple의 IOS와 Mac OS, 애플다윈, Tmax, 솔라리스 등이 있습니다.\n\nFreeBSD는 완전한 형태의 OS이며, 무료로 제공됨. → TrueOS, GhostBSD, 애플 다윈, DesktopBSD, MidnightBSD등 파생됨.\n\nopenBSD(NetBSD에서 파생된 오픈소스 운영체제, 보안 쪽에 특화되어 개발되고 있습니다.)\n\nNetBSD(임베디드시스템이나 최신 및 구식의 하드웨어까지 사용할 수 있는 높은 이식성이 특징)\n\nTrueOS(FreeBSD에 기반한 유닉스계열 데스크톱 운영체제)\n\nMPL 라이선스는 Mozilla Public License로 넷스케이프의 웹브라우저 소스코드를 공개하기 위해 만들어진 라이선스입니다.\n\n특징은 소스코드 라이선스와 실행파일의 라이선스를 분리되어 관리됩니다. 수정한 소스코드는 MPL로 공개하고 저작자에게 수정한 부분에 대해 알려야 하며, 실행파일은 독점 라이선스로 배포할 수 있습니다."
  },
  {
    "id": 175,
    "sourceLabel": "136-2.",
    "question": "다음 중 MPL라이선스에 대한 설명으로 틀린 것은?",
    "options": [
      "독점적 소프트웨어와의 결합이 가능하다.",
      "MPL 소스 코드를 수정한 경우에 반드시 소스 코드를 공개해야 한다.",
      "소스 코드를 재배포가 가능하다.",
      "MPL 소스 코드와 다른 코드를 결합한 경우에 다른 소스 코드를 공개해야 한다."
    ],
    "answer": 2,
    "explanation": "MPL은 실행파일의 경우 공개 의무는 없습니다.\n\nMPL 소스 코드와 다른 코드를 결합한 경우에도 다른 소스 코드를 공개하지 않아도 됩니다. 단, MPL 라이선스의 조건을 준수해야 하며, 원저자의 이름과 출처를 명시해야 합니다."
  },
  {
    "id": 176,
    "sourceLabel": "137.",
    "question": "cal 명령 실행 시 1월1일을 기준으로 누적된 날짜 정보를 출력할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-a",
      "-s",
      "-j",
      "-y"
    ],
    "answer": 2,
    "explanation": "cal은 calendar는 달력을 뜻하며, 기본적으로 #calendar라고 입력하게 되면 리눅스 시스템에서 현재에 해당하는 월(달)을 출력해 줍니다.\n\n기본적인 사용방법은 $ cal [옵션] [일] [월] [년] 과 같습니다.\n\n-y : year(년) 단위로 출력\n\n-j : 율리우스력 달력이라고 하며, 서버의 시간을 기준으로 1월1일부터 현재까지 몇 일인지를 표시해 줍니다.\n\n-V : 버전 정보를 확인\n\n특정 연월을 출력하고 싶다면 cal 09 2009와 같이 하면 됩니다."
  },
  {
    "id": 177,
    "sourceLabel": "138.",
    "question": "다음 리눅스 배포판 중 나머지 셋과 종류가 다른 것은?",
    "options": [
      "CentOS",
      "Scientific Linux",
      "Oracle Linux",
      "Linux Mint"
    ],
    "answer": 3,
    "explanation": "슬랙웨어계열 : SUSE 또는 OpenSUSE, Slax 또는 Slax OS, Vector Linux, DeLi Linux, Frugalware, Salix OS \n\n레드햇 계열 : Redhat Enterprise Linux, CentOS, Fedora, AnNyung Linux(안녕), Oracle Enterprise Linux, Scientific Linux, 타이젠\n\n데비안계열 : Debialn,우분투, 민트(Mint), Kali Linux, knoppix, crunchBang Linux, Steam OS, Damn Small Linux, elementary OS, 기린, 하모니카 등\n\n맨드리바계열 : Open Mandriva, Mageia, PCLinuxOS\n\n안드로이드계열 : Android, chrome OS, Remix OS, Polaris OS"
  },
  {
    "id": 178,
    "sourceLabel": "139.",
    "question": "다음 (괄호)안에 들어갈 명령으로 알맞은 것은?\n\n#(      ) -s 18:46:15",
    "options": [
      "set",
      "time",
      "date",
      "rdate"
    ],
    "answer": 2,
    "explanation": "date는 아래와 같이 날짜 및 시간 정보가 출력됨.\n\n2021. 09. 27. (월) 18: 46: 15 KST\n\n-d 옵션은 특정 날자를 구할 때 사용합니다.\n\n예를들면 date -d \"-1 days\"를 하면 -1은 어제를 의미합니다.\n\n-d \"-1 weeks\"를 하면 -1은 일주전이며, 앞으로 10일 후면 -d \"+10 days\"를 하면 됩니다.\n\n-s 옵션은 오늘의 시간을 임으로 설정할 수 있습니다.\n\n예로 date -s 16:20:00을 하면 현재의 시간 기준을 18시46분15초로 변경합니다.\n\nrdate는 원격지 타임서버(NTP서버)를 이용하여 시스템 시간을 설정(변경)할 때 사용하는 명령어임"
  },
  {
    "id": 179,
    "sourceLabel": "139-1.",
    "question": "다음 중 시스템 시간을 변경하는 명령으로 알맞은 것은?",
    "options": [
      "date",
      "setterm",
      "time",
      "cal"
    ],
    "answer": 0,
    "explanation": "date명령어 뒤에 “월시간년도.초”의 형식으로 입력하면 시간 셋팅이 가능합니다.\n\nrdate 명령이나, ntpd, ntpdate 명령을 이용해서 시스템의 시간을 time서버와 동기화 할 수 있고 원하는 시간으로 변경도 가능합니다.\n\n하지만 time서버와 연결이 되지 않는 환경이라면 date -s 명령어를 이용하여 수동으로 시간을 변경해 사용할 수도 있습니다.\n\n예) date -s \"2023-11-01 13:42:00\" → 1101 13:42:00 KST 2022"
  },
  {
    "id": 180,
    "sourceLabel": "139-2.",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?\n\n# date ( )\n\n2022 11 01",
    "options": [
      "\"%Y %m %d\"",
      "-\"%Y %m %d\"",
      "+\"%Y %m %d\"",
      "--\"%Y %m %d\""
    ],
    "answer": 2,
    "explanation": "date명령어는 시스템 시간과 날짜를 출력하거나 설정할 수 있습니다.\n\n+ 를 사용하면 현재 시간과 날짜를 주어진 인수가 지시하ᅟᅳᆫ 형식으로 출력합니다.\n\n+가 없는 인수가 있다면, date는 시스템 시계를 주어진 시간과 날짜로 설정하게 됩니다.\n\n+ \"%Y %m %d\"를 입력하게 되면 현재의 시간인 2022년 11월01일을 출력하게 됩니다.\n\n대소문자이 구분은 다음과 같습니다.\n\n%는 문자를 표시한다는 의미\n\nY는 년도출력 y는 년도를 끝의 두글자만 출력합니다.\n\nM은 minute(분)을 의미하며, m은 월을 의미합니다.\n\nD는 %m/%d/%y 날짜 표현식이며, d는 월기준 일(day)을 의미합니다."
  },
  {
    "id": 181,
    "sourceLabel": "140.",
    "question": "리눅스 파일 시스템에 대한 설명으로 틀린 것은?",
    "options": [
      "계층적인 트리구조이다.",
      "트리구조에는 제한이 있다.",
      "최상단에 / 디렉토리가 있다.",
      "네트워크를 이용하여 다른 시스템의 디스크와 파일에까지 확장할 수 있다."
    ],
    "answer": 1,
    "explanation": "리눅스 파일 시스템은 논리적으로 단계나 깊이에 제한이 없는 유연한 계층 구조를 가집니다.\n\n디스크 용량과 커널의 설정 한도 내에서 사용자가 원하는 만큼 디렉터리 계층을 생성할 수 있습니다.\n\n파일시스템은 로컬에 한정하여 설정 및 사용할 수 있습니다."
  },
  {
    "id": 182,
    "sourceLabel": "141.",
    "question": "사용 중인 일부 디스크에 오류가 발생하더라도 정상적인 사용이 가능하게 하려할 때 선택하는 파일시스템 유형으로 알맞은 것은?",
    "options": [
      "ext4",
      "vfat",
      "software RAID",
      "Physical volume(LVM)"
    ],
    "answer": 2,
    "explanation": "리눅스시스템에서 지원되는 파일시스템은 ext, ext2, ext3, ext4, swap, xfs, iso9660, hpfs, ufs등이 있습니다.\n\nsoftware RAID \n\n여러 개의 디스크를 하나로 묶어 관리하는 기술입니다.\n\n특히 RAID 1(미러링)이나 RAID 5 방식을 사용하면, 구성된 디스크 중 일부에 물리적 오류가 발생하더라도 데이터 손실 없이 정상적인 시스템 운영이 가능합니다.\n\n저널링 파일시스템 : ext3, ext4, JFS, XFS, ReiserFS\n\n사용목적 : 데이터의 복구가 용이하고 복구될 확률이 높음.\n\nvfat는 긴 이름의 디렉토리를 지원하는 타입으로 윈도우즈 타입의 파일시스템입니다.\n\n여러 개의 디스크를 필요에 따라 용량을 나눠서 사용하는 방법으로는 RAID와 LVM이 있습니다.\n\nRAID (= 동적디스크)\n\nRAID(Redundant Array of Independent Disks 혹은 Redundant Array of Inexpensive Disks)는 여러 개의 하드 디스크에 일부 중복된 데이터를 나눠서 저장하는 기술입니다. 복수 배열 독립 디스크로도 부릅니다.\n\nRAID는 하드웨어 레이드와 소프트웨어 레이드로 나뉘는데 하드웨어는 컨트롤을 역할을 수행하는 하드웨어를 별도로 사용하는 것이고, 소프트웨어 레이드는 컨트롤을 소프트웨어로 하는 것을 말합니다.\n\nLVM(Logical Volume Manager)는 여러 개의 하드디스크를 합쳐서 한 개의 파일시스템으로 사용하는 것으로 필요에 따라 나누어 사용할 수 있습니다.\n\nLVM구성 순서 : PV(Physical Volume) → VG(Volume Group) → LV(Logical Volume)10G, 20G디스크 → 2개를 하나로(30G) → 하나의 디스크처럼 다시 나눠서 사용(15G, 15G)\n\nLVM은 사용 중인 볼륨 파티션이 데이터 이전 없이도 확장하거나 축소할 수 있습니다.\n\nPhysical Volume(LVM)을 사용하여 디스크 오류가 발생하더라도 다른 디스크를 통해 계속 동작하게 설정할 수 있습니다."
  },
  {
    "id": 183,
    "sourceLabel": "141-1.",
    "question": "다음  중 다수의 디스크나 파티션을 하나로 묶어서 구성하는 기술과 관련 있는 조합으로 알맞은 것은?",
    "options": [
      "ext4         LVM",
      "ext4         RAID",
      "ext3         ext4",
      "LVM         RAID"
    ],
    "answer": 3,
    "explanation": "여러 개의 디스크를 필요에 따라 용량을 나눠서 사용하는 방법으로는 RAID와 LVM이 있습니다.\n\nRAID (= 동적디스크)\n\nRAID(Redundant Array of Independent Disks 혹은 Redundant Array of Inexpensive Disks)는 여러 개의 하드 디스크에 일부 중복된 데이터를 나눠서 저장하는 기술입니다. 복수 배열 독립 디스크로도 부릅니다.\n\nRAID는 하드웨어 레이드와 소프트웨어 레이드로 나뉘는데 하드웨어는 컨트롤을 역할을 수행하는 하드웨어를 별도로 사용하는 것이고, 소프트웨어 레이드는 컨트롤을 소프트웨어로 하는 것을 말합니다.\n\nLVM(Logical Volume Manager)는 여러 개의 하드디스크를 합쳐서 한 개의 파일시스템으로 사용하는 것으로 필요에 따라 나누어 사용할 수 있습니다.\n\nLVM구성 순서 : PV(Physical Volume) → VG(Volume Group) → LV(Logical Volume)10G, 20G디스크 → 2개를 하나로(30G) → 하나의 디스크처럼 다시 나눠서 사용(15G, 15G)\n\nLVM은 사용 중인 볼륨 파티션이 데이터 이전 없이도 확장하거나 축소할 수 있습니다.\n\nPhysical Volume(LVM)을 사용하여 디스크 오류가 발생하더라도 다른 디스크를 통해 계속 동작하게 설정할 수 있습니다."
  },
  {
    "id": 184,
    "sourceLabel": "142.",
    "question": "다음 설명으로 알맞은 것은?\n\n시스템 충돌 시 시스템에서 정보를 수집하여 충돌 원인을 규명하는 자료를 제공한다. 이 기능을 사용하려면 리눅스 설치할 때에 해당 기능의 사용 여부와 물리적 메모리를 할당해야 한다.",
    "options": [
      "kdump",
      "PAM",
      "kerberos",
      "NIS"
    ],
    "answer": 0,
    "explanation": "네트워크 사용자 인증 사용 시스템은 NIS, LDAP, Kerberos등이 있습니다."
  },
  {
    "id": 185,
    "sourceLabel": "143.",
    "question": "다음 중 네트워크 인터페이스를 설정 또는 확인하는 명령으로 알맞은 것은?",
    "options": [
      "ifconfig",
      "ipconfig",
      "xconfig",
      "iptable"
    ],
    "answer": 0,
    "explanation": "윈도우즈에서는 네트워크 인터페이스 환경설정 정보를 확인하는 명령어는 ipconfig이며, 리눅스시스템에서는 ifconfig를 사용합니다."
  },
  {
    "id": 186,
    "sourceLabel": "144.",
    "question": "다음 중 uname 명령으로 커널 버전만 확인 할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-a",
      "-r",
      "-v",
      "-s"
    ],
    "answer": 1,
    "explanation": "uname\n\n시스템 정보를 표시해 주는 명령어\n\n -a : 커널의 모든 정보를 표시\n\n -r : 커널릴리즈 정보 표시(버전과 릴리즈만 표시)\n\n -v : 커널의 종합적인 정보 표시(배포된 날짜 및 종합 정보도 표시)\n\n -s : 커널명을 표시\n\n② -r (release)\n\n커널의 릴리스 버전(버전 정보)만 깔끔하게 출력합니다. (예: 5.15.0-101-generic)"
  }
];
