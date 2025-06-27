# to-do-list UI 컴포넌트 만들기
### goole fonts, font awesome 연결
* `npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome`
1. 위 설치명령 진행후 `http://fontawesome.com/icons` 주소 접속 후 원하는 아이콘 검색
2. 아이콘이 `solid`, `brands` 둘 중 무엇인지 확인하고 react 버전으로 코드 붙여넣기
3. 컴포넌트 파일 내에 `import`이용 폰트어썸 불러오고, brands, solids버전에 맞게 추가 불러오기 진행 (아래 예시코드)
`import * as brands from '@fortawesome/free-brands-svg-icons'`
`import * as solid from '@fortawesome/free-solid-svg-icons'`
### gooleFonts 연결
1. 구글폰트 import 주소 복사
2. `index.html` 붙여넣기
3. `reset.css` -> `font-family` 글꼴명 연결하기
---
## 컴포넌트 설계
* 제작 웹/앱의 디자인 형태를 보고 컴포넌트를 몇개 생성할지 어디로 호출시킬지 계획하고 생성하기
* 기본 컴포넌트 연결이 끝난후 CSS 진행하기
## 최종 프로젝트 빌드 (컴포넌트 작업 완료후)
* 빌드(Build)란? **소스코드 파일을 실행 가능한 형태로 변환하는 과정**
