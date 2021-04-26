import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cep extends Component{

    render(){
        return(
            <>
                <Text>CEP: {this.props.data.cep}</Text>
                <Text>RUA: {this.props.data.logradouro}</Text>
                <Text>BAIRRO: {this.props.data.bairro}</Text>
                <Text>CIDADE: {this.props.data.localidade}</Text>
                <Text>ESTADO: {this.props.data.uf}</Text>
            </>
        )
    }
}

export default Cep;