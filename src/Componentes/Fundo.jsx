import React from 'react';

class Fundo extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      relogio: new Date()
    };
  }

  componentDidMount(){
    // componente foi montado
    this.horas = setInterval(
      () => this.tiqueTaque(),
      1000
    );
  }

  componentWillUnmount() {
    // componente será desmontado
    clearInterval(this.horas);
  }

  tiqueTaque(){
    this.setState({
      relogio: new Date()
    });
  }

  render(){
    let data_atual = new Date();
    return (
      <footer className="bg-secondary p-2">
        <div className="container">
          <p className="text-light text-center small">
            Copyright { data_atual.getFullYear() }.
            Criado por Diego Mariano.
            <br/>
            { this.state.relogio.toLocaleTimeString()}
          </p>
        </div>
      </footer>
    );
  }
}

export default Fundo;