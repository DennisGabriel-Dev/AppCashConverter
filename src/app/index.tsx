import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { callApiExchange } from '../services/exchangeApi';

export default function(){
  const [text, setText] = useState('');
  const [money, setMoney] = useState(0);

  return(
    <View style={styles.container}>
      <Text>Digite o valor: </Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setText} 
        value={text} 
        placeholder='Digite o valor aqui: '
      />

      <Text>Moeda convertida: {money}</Text>

      <TouchableOpacity onPress={() => setMoney(callApiExchange(parseInt(text)))}>
        <Text>Click aí</Text>
      </TouchableOpacity>
    </View>
  );
}