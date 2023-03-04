import {View, Text, Switch, Touchable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('CALCULATOR');
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };
  const calculate = (title: string) => {
    if(title==='C'){
      setResult('')
    }else if(title==='DL'){
      setResult(result.substring(0,result.length-1))
    }else if(title== '='){
      setResult(eval(result))
    }else{
      setResult(result+title)
    }
    
    
  };
  const Btn = ({title,type}) => (
    <TouchableOpacity/*dokunulduğunda gerçekleşecek olan bir eylemi tetikleyen bir düğmedir*/ 
    onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: darkTheme ? colors.dark2 : colors.light1,
        height: 70,
        width: 70,
        margin: 12,
      }}>
      <Text
        style={{
          fontSize: 37,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type: string) => {
    if(type==='top'){
      return '#35F'
    }else if(type==='right'){
      return '#EB6363'
    }else{
      return darkTheme ? colors.light : colors.dark
    }
  }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: darkTheme ? colors.dark : colors.light,
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.light : colors.dark} //anahtarın yuvarlak kısmının rengi (true ise light false ise dark)
        trackColor={{true: colors.light2, false: colors.dark2}} //anahtarın çizgi kısmının rengi
      />
      <Text
        style={{
          fontSize: 35,
          color: darkTheme ? colors.light : colors.dark,
          width: '100%',
          textAlign: 'right',
          marginTop:165,
          paddingRight: 20,
          paddingBottom: 20,
        }}>
        {result}
      </Text>
      <View
        style={{
          flexDirection: 'row',/* elemanların yatay bir şekilde hizalanmasını sağlar */
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: darkTheme ? colors.dark1 : colors.light1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }} 
      >
        <Btn title="C" type="top"/>
        <Btn title="DL" type="top"/>
        <Btn title="%" type="top"/>
        <Btn title="/" type="right"/>
        <Btn title="7" type="number"/>
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right"/>
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"/>
        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>
      </View>
    </View>
  );
}
