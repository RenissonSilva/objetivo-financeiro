import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
  const [total, setTotal] = useState();
  const [goal, setGoal] = useState();
  const [months, setMonths] = useState();
  const [monthlyContribution, setMonthlyContribution] = useState();

  async function calculate() {
    const date1 = new Date();
    const date2 = new Date('2025-01-05');
    m = (date2.getFullYear() - date1.getFullYear()) * 12;
    m -= date1.getMonth();
    m += date2.getMonth();
    setMonths(m)
    setMonthlyContribution(Math.floor((goal - total) / m))
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Objetivo Final</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setGoal}
      />

      <Text style={styles.text}>Total acumulado até o momento</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setTotal}
      />
      
      <Button 
        color={'#38b585'}
        title="Calcular"
        onPress={calculate}
      />
      
      {monthlyContribution && 
        <Text style={[styles.text, { marginTop: 20 }]}>
          Devo investir <Text style={styles.boldText}>{monthlyContribution}</Text> durante {months} meses
        </Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    color: '#38b585',
    fontWeight: 'bold',
  }
});
