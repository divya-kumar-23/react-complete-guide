import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:'efsssf',name:'Max',age:28},
      {id:'efsssfdsdsfsdf',name:'Manu',age:29},
      {id:'efsssesfesfesfsef',name:'Stephnie',age:26}
    ],
    otherState:'some other value  ',
    showPersons:false
  }
  
  nameChangedHandler=(event,id)=>{

    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[this.state.persons];
    persons[personIndex]=person;
    this.setState({
    persons:persons
    })
  }
  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  deletePersonHandler(personIndex){
    //const persons =this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  render() {
    const style={
      backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer' 
    };
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {
            this.state.persons.map((persons, index)=>{
              return <Person
              click={()=>this.deletePersonHandler(index)}
              style={style}
              name={persons.name}
              age={persons.age}
              key={persons.id} 
              changed={(event)=>this.nameChangedHandler(event,persons.id)}
              />
          })
          }
        
        </div>
      );
      style.backgroundColor='red';
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
