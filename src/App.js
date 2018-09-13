import React, { Component } from 'react';
import firebase from 'firebase';


class App extends Component {

  state=
  {
    listaPersonas:[],
    nombre:"",
    apellido:""
  }

  onChangeValues(event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({[name]:value});
  }

  componentDidMount(){
    firebase.database().ref('/personas/').on('value',(snapshot)=> {
      console.log(snapshot.val());
      if(snapshot.val()){
        this.setState({listaPersonas:snapshot.val()});
      }
    });
  }

  saveUser(){
    var nombre = "Nuevo Usuario";
    var apellido = "Nuevo Apellido";
    var user = {
      nombre:nombre,
      apellido:apellido
    }
    firebase.database().ref('personas/3' ).set(user);

  }


  saveUserDin(){
    var nombre = "Nuevo Usuario Dinamico";
    var apellido = "Nuevo Apellido Dinamico";
    var user = {
      nombre:nombre,
      apellido:apellido
    }

    var ref = firebase.database().ref('personas');

    var key = ref.push().key;
    firebase.database().ref(`personas/${key}`).set(user);
  }

  onClickGuardar(){

    var user = {
      nombre:this.state.nombre,
      apellido:this.state.apellido
    }

    var ref = firebase.database().ref('personas');

    var key = ref.push().key;
    firebase.database().ref(`personas/${key}`).set(user);
  }

  render() {
    return (
      <div>
          {JSON.stringify(this.state.listaPersonas)}

          <button onClick={this.saveUser.bind(this)} > Agregar </button>
          <button onClick={this.saveUserDin.bind(this)} > Agregar Dinamico </button>

          <br/>
          <hr/>
          <div>
              <label>Nombre:</label>
              <br/>
              <input name="nombre" id="nombre" 
                value={this.state.nombre}
                onChange={this.onChangeValues.bind(this)} />
              <br/>
              <label>Apellido:</label>
              <br/>
              <input name="apellido" id="apellido" 
              value={this.state.apellido}
              onChange={this.onChangeValues.bind(this)} />
              <br/>
              <button onClick={this.onClickGuardar.bind(this)}>Guardar datos </button>

          </div>
      </div>
    );
  }
}

export default App;
