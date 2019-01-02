import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


class Botao extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius:10
      },
      botaoTexto:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold',
      }

    });
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto:''}

    this.frases=['A vida trará coisas boas se tiver paciência.','Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.','Não compense na ira o que lhe falta na razão.','Defeitos e virtudes são apenas dois lados da mesma moeda.','A maior de todas as torres começa no solo.','Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {

    let r = Math.floor(Math.random() * this.frases.length);
    let s = this.state;
    s.texto = this.frases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./images/cookie.png')}/>
        <Text style={styles.texto}>"{this.state.texto}"</Text>
        <Botao color="#B59619" text="Quebrar Biscoito" onPress={this.quebrarBiscoito}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop:40,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:17,
    color:"#B59619",
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
});
