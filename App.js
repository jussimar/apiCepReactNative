import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './components/Api';
import Cep from './components/Cep';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      cep:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('ws/01001000/json/');
    this.setState({
      cep: response.data
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Cep data={this.state.cep}/>
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
