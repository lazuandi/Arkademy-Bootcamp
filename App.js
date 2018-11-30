import React, {Component} from 'react';
import {Container, Header, Title, Button, Text, Content} from 'native-base';

export default class App extends Component {
  state={
    number: 0
  }

  handleIncrement() {
    if(this.state.number < 10){
      this.setState({
      number : this.state.number +1
    })
    } else {
      alert("sudah mentok");
      this.setState({
        number : 0
      })
    }
    
  }

  render(){
    return(
      <Container style={{flex: 1,justifyContent: 'center'}}>
        <Header>
          <Title>tasbih digital</Title>
          </Header>

          <Content>
            <Text style={{textAlign: 'center', marginTop:200, marginBottom: 50, fontSize: 40}}>{this.state.number}</Text>
            <Button block style={{marginLeft:50, marginRight:50 }} onPress={() => this.handleIncrement()}> 
            <Text> pencet disini </Text>
            </Button>
          </Content>
          
      </Container>


    )

  }

}