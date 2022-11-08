# Web Note App

## FrontEnd
![react](https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black)
![jquery](https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![bootstrap](https://img.shields.io/badge/bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

## Backend
![nodejs](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)


## Database
![mongodb](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)

## Start
```npm install```

```npm run build ```

```node server/index.js```


## Features
### Header
* React Router로 구현한 메뉴 이동
* 시간 보기 가능

### Home
* draft.js를 사용한 에디터 구현
* H1,H2 ... H6을 이용한 글자 크기 조정 기능
* Blockquote 기능
* UL 과 OL 로 구현한 리스트 기능
* Code Block 기능
* 텍스트 꾸미기 가능 (Bold,Italic,Underline,Monospace)
* mongoDB와 연동시켜 저장 가능
* 상단바를 통해 다른 메뉴로 이동 가능
* 단축키 기능 (CTRL+B, CTRL+U ......)


### Search
* 입력한 텍스트가 포함되어 있는 노트를 보여줌

### View
* 지금까지 작성한 모든 노트 파일 볼 수 있고 draft.js로 작성한 그대로 볼 수 있는 기능
* 삭제 기능 : 삭제 버튼 누르면 페이지가 리로딩 되면서 삭제 가능
* 시간순 정렬

### Timer
*  60초 타이머 기능

### Calender
* 달력 기능