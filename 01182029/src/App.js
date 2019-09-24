import React, {Component} from 'react';

class MeuBtn extends Component{
  render(){
    return <button onClick = {() => this.props.change(this.props.text)}>{this.props.text}</button>
  }
}

class MeuTitulo extends Component{
  render(){
    return <h2>Você clicou no {this.props.title}</h2>
  }
}
export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      btnAtual: ''
    }
  }

  handleChange = (nome) =>{
    this.setState({
      btnAtual: nome
    })
  }

  render() {
    return (
      <>
        <MeuTitulo title={this.state.btnAtual}/>
        <MeuBtn change={this.handleChange} text="Botão 01" />
        <MeuBtn change={this.handleChange} text="Botão 02" />
        <MeuBtn change={this.handleChange} text="Botão 03" />
      </>
    );
  }
}