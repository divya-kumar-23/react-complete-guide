import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Stephnie',age:26}
    ],
    otherState:'some other value  '
  }
  switchNameHandler=(newName)=>{
    //console.log('was clicked');
   // do not do this----- this.state.persons[0].name='maxmillion';
   this.setState({
     persons:[
       {name:newName, age:28},
       {name:"Manu", age:28},
       {name:"Stephnie", age:27},
     ]
   })
  }
  nameChangedHandler=(event)=>{
    this.setState({
    persons:[
      {name:"Max", age:28},
      {name:event.target.value, age:28},
      {name:"Stephnie", age:27},
    ]
    })
  }
  render() {
    return (
      <div className="App">
        
          <p>
          Hi I m react app
          </p>
          
          <p>
          this is really working
          </p>
          <button 
          onClick={this.switchNameHandler}>
          Switch name</button>
          <Person 
          name={this.state.persons[2].name}
           age={this.state.persons[2].age} />
          <Person  
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this,'Max!!')}>
          my hobby is racing
          </Person>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
           click={this.switchNameHandler}
          />
          
       
      </div>
    );
  }
}

export default App;
