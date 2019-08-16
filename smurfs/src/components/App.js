import React, { useEffect } from "react";
import "./App.css";
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';


 function App (props) {
  
  useEffect(() => {
    props.getSmurfs()
},[])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm />
        <SmurfList />
      </div>
    );
}

const mapStateToProps = (state) => {
  return state;    
}

export default connect(mapStateToProps, { getSmurfs })(App);
