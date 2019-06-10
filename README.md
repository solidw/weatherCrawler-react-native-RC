# React-native Project in RealCoding-CNU

우선, Back-End에서 날씨 정보를 받아올 때 기존의 domain에 icon의 값을 추가로 받아왔다.

이를 통해 어떤 날씨 아이콘(icon)을 표시할 지 정해주었고, 그 외 있는 기존정보 온도(temp), 습도(humidity), ) 를 추가로 

표시하기로 했다.

AVD에서 http://localhost:8080/을 인식하지 못해서 많이 헤맸다.

AVD는 http://10.0.2.2:8080/로 하면 잘 인식된다.

localhost에서 받은 json을 기준으로 날씨에 해당하는 아이콘을 출력하기 위해 if문을 사용해서, 반환 해주었다.

습도, 온도에 해당하는 Text는 픽셀 크기와 테두리에 변화를 주었고, 아이콘은 중앙정렬을 했다.
