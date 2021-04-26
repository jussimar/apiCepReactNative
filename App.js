import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import api from './components/Api';
import Cep from './components/Cep';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      cep:[],
      cepDigitado: ''
    };
    this.carregar = this.carregar.bind(this);
  }

  async componentDidMount(){
    const response = await api.get('ws/01001000/json/');
    this.setState({
      cep: response.data
    })
  }

  async carregar(){
    const response = await api.get('ws/'+this.state.cepDigitado+'/json/');
    this.setState({
      cep: response.data
      
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Digite Seu Cep..." 
          onChangeText={
            (value) => this.setState({cepDigitado: value})
          }/>
        <Cep data={this.state.cep}/>
        <Button title="Buscar" onPress={this.carregar}/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
