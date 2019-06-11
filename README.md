# React-native Project in RealCoding-CNU

> React-native를 이용해 Back-end로부터 데이터를 받아와 해당 지역에 대한 날씨 정보들을 보여주는 APP



> Develop

우선, Back-End에서 날씨 정보를 받아올 때 Icon에 대한 값으로 날씨를 파악했다. 예를 들어 "Icon": '01N'이라는 딕셔너리를 받아왔다면 이를 통해 해당하는 아이콘(낮, 맑음)으로 표시할 수 있도록 정해주었고, 그 외에는 온도(temp) 습도(humidity) 를 보여주기로 했다.

구현을 위해 expo와 AVD를 이용했는데, app이 back-end로부터 데이터를 받아 오기 위한 URL이`http://localhost:8080` 이기 때문에 그대로 구현했지만 fetch하는 과정에서 `network request failed` 라는 오류가 발생했다.

이를 해결하기 위해 back-end 프로그램을 수정해보기도 하고, 다른 URL도 넣어봤다.

결론적으로 back-end의 문제가 아닌, AVD가 localhost 혹은 127.0.0.1 을 잘 인식하지 못했다. 결국 찾아낸 방법은

fetch하는 URL을 `http://localhost:8080` 에서 

AVD의 localhost인 `http://10.0.2.2:8080` 로 수정하면 잘 인식된다.



> Detail

back-end에서 받은 json 데이터를 이용해 날씨에 해당하는 아이콘을 출력하기 위해 if문을 사용해서 render 해주었다.

습도, 온도에 해당하는 Text는 픽셀 크기와 테두리에 변화를 주었고, 날씨 아이콘을 포함한 모든 데이터들을 중앙정렬 했다.
