import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm

import { TextInput, Button } from 'react-native-paper'

export default class App extends React.Component {
  //variaveis globais
  //variaveis que estão no contexto do app
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7',
  };

  calcularIMC = () => {

    //altura.replace(',', '.')
    const resultado = 
    this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#f1c40f'
      });
    } else if(resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Parabéns, você está no peso ideal!',
        cor: '#2ecc71'
      });
    } else if (resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f1c40f'
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade grave',
        cor: '#e74c3c'
      });
    }
  }
  // imc = peso / (altura ao quadrado)

  render(){
    return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      
      <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
        <Text style={styles.resultado}>{this.state.imc}</Text>
        <Text style={styles.diagnostico}>{this.state.legenda}</Text>
      </View>
      
      <View>
        <TextInput 
          style={styles.peso}
          label = "Peso"
          onChangeText={(valor) => {
            this.setState({peso: valor.replace(',', '.')});
          }}
        />
        <TextInput 
          style={styles.altura}
          label = "Altura"
          onChangeText={(valor) => {
            this.setState({altura: valor.replace(',', '.')});
          }}
        />
        <Button mode="outlined" style={styles.button} onPress={this.calcularIMC}>
          Calcular
        </Button>
      </View>

      <View style={styles.by}>
        <Text>by Bryan Dietrich Bernhardt</Text>
      </View>
    </View>
    
  );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
    paddingTop: 100,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  painel: {
    borderRadius: 10,
    width: 200,
    alignSelf: 'center',
    padding: 8,
    marginVertical: 10,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 15,
  },
  peso: {
    marginVertical: 10,
    borderRadius: 10,
  },
  altura: {
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginVertical: 10,
  },
  by: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 110
  }
});