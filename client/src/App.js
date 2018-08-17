import React, { Component } from 'react';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import ItemModal from './Components/ItemModal';
// redux
import { Provider } from 'react-redux';
import store from './store';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{  Container } from 'reactstrap';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <br/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
            <br/>
            <p >with <span style={{color: 'red'}}>&hearts;</span> by AroicX</p>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
