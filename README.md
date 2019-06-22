# React-native Project in RealCoding-CNU

> React-native를 이용해 Back-end로부터 데이터를 받아와 해당 지역에 대한 날씨 정보들을 보여주는 APP



## OVERVIEW

 - BACKEND to FRONTEND
   - Icon
     - {"Icon" : "01N"} // 맑음
   - temp (temperature) // 화씨온도
   - humidity



- 문제

  > AVD에서 `localhost` `127.0.0.1` 인식 불가능 => `network request failed` 발생

- 해결

  > AVD에서는 `10.0.2.2:8080` 을 `localhost`로 인식한다.
  >
  > `fetch` 에서 URL을 `127.0.0.1:8080` -> `10.0.2.2:8080` 로 수정.
  >
  > 정상적으로 작동

## DETAIL

- BACKEND의 JSON data
  - 아이콘
  - 온도
  - 습도
- FRONTEND에서 추가한 날씨에 맞는 문장
  - 조건에 따른 문자열