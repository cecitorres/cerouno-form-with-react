import React, { Component } from 'react';
import Input from '../components/Input';
import PreviewData from '../components/PreviewData';
import Button from '../components/Button';

const INITIAL_STATE = [
  {
    name: 'Cecilia',
    age: '26'
  }
];

class FormContainer extends Component {  
  state = {
    newUser: {
      name: '',
      age: '',
      userName: ''
    },
    usersSaved: INITIAL_STATE
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          usersSaved: data
        });
      });
  }

  handleName = (e) => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      })
    );
  }

  handleAge = (e) => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      })
    );
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        }
      })
    );
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.newUser);
    let userData = this.state.newUser;
    this.setState(prevState => (
      {
        usersSaved: [
          ...prevState.usersSaved,
          userData
        ],
        newUser: {
          name: '',
          age: ''
        }
      }
    ));
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: ''
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <p>Formulario React JS</p>
          <form>
            <Input
              name="name"
              type="text"
              title="Nombre"
              value={this.state.newUser.name}
              placeholder="Ingresa tu nombre"
              handleChange={this.handleInput}
            />
            <Input 
              name="age"
              title="Edad"
              type="number"
              value={this.state.newUser.age}
              placeholder="Ingresa tu edad"
              handleChange={this.handleInput}
            />
            <Input
              name="userName"
              type="text"
              title="Nombre de usuario"
              value={this.state.newUser.userName}
              placeholder="Ingresa tu nombre"
              handleChange={this.handleInput}
            />
            <Button
              action={this.handleFormSubmit}
              title="Enviar"
            />
            <Button
              action={this.handleClearForm}
              title="Reiniciar"
            />
          </form>
        </div>
        <PreviewData
          data={this.state.usersSaved}
        />
      </div>
    );
  }
};

export default FormContainer;