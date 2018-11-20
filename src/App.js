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
    otherState:'some other value  ',
    showPersons:false
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
  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  render() {
    const style={
        backgroungColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px' 
    };
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
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
    return (
      <div className="App">
        
          <p>
          Hi I m react app
          </p>
          
          <p>
          this is really working
          </p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch name</button>
            {persons}
      </div>
    );
  }
}

export default App;
