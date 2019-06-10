import React from 'react';
import { StyleSheet, ImageBackground ,Image, Text, View } from 'react-native';
import { Constants } from 'expo';


export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', null);
    // const city = 'Daejeon';

    fetch(`http://10.0.2.2:8080/byCityName/${city}`)
    .then(response => response.json())
    .then(info => {
      this.setState({
        ...info,
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (

        <View style={styles.container}>
        <Text style={styles.fontsSetting}>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }
    let celsius = this.state.main.temp - 273.15;
    let humidity = this.state.main.humidity;
    let w = this.state.weather[0].icon + "";
    let src;
    if(w =='01d' || w== '01n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/01d.png')} />
        <Text style={styles.fontsSetting}>태양아 저 나그네의 옷을 벗겨라</Text>
        </View>
      );
    }else if(w =='02d' || w== '02n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/02d.png')} />
        <Text style={styles.fontsSetting}>비가 내릴까 말까...</Text>
        </View>
      );
    }else if(w=='03d' || w== '03n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/03d.png')} />
        <Text style={styles.fontsSetting}>우산 챙기면 비 안옵니다,</Text>
        </View>
      );
    }else if(w=='04d' || w=='04n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/04d.png')} />
        <Text style={styles.fontsSetting}>무서운 천둥번개가 칠지도 몰라요.</Text>
        </View>
      );
    }else if(w=='09d' || w== '09n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/09d.png')} />
        <Text style={styles.fontsSetting}>미세먼지를 쓸어갈 달콤한 빗물이네요</Text>
        </View>
      );
    }
    else if(w=='10d' || w== '10n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/10d.png')} />
        <Text style={styles.fontsSetting}>여우비</Text>
        </View>
      );
    }
    else if(w=='11d' || w== '11n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/11d.png')} />
        <Text style={styles.fontsSetting}>토르가 옵니다</Text>
        </View>
      );
    }
    else if(w=='13d' || w== '13n'){
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Image style={styles.imageSetting} source={require('./assets/13d.png')} />
        <Text style={styles.fontsSetting}>나랑 눈사람 만들래?</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
        <Text style={styles.fontsSetting}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.fontsSetting}>습도: {humidity+"%"}</Text>
        <Text style={styles.fontsSetting}>가끔은 모르고 나가도 좋은 날이 있어요</Text>
        <Text style={styles.fontsSetting}>아마 쨍쨍할거에요</Text>
        <Image style={styles.imageSetting} source={require('./assets/01d.png') } />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    justifyContent:'center',
    alignItems:'center',
  },
  fontsSetting: {
    fontSize:35,
    textAlign:'center',
    borderWidth:1,
  },
  imageSetting: {
    width:200,
    height:150,
  },
});
