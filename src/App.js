import React, {Component, useState} from "react";
import './App.css';

//In deze App component een aantal voorbeelden van React componenten. 
//De componenten staan ook in dit bestand. 
//Niet gebruikelijk maar wel fijner voor het overzicht. 
//De functies in de App Component worden meegegeven/gebruikt door sommige van deze voorbeeld components.

function App() {

  //voor conditionalComponent
  function conditionVoorbeeld (){
    var thisDay = new Date();
    if ( thisDay.getDay() == 3 ){
        return true;
    } else {
        return false;
    }
  }

  //voor CallbackComponent
  function callbackVoorbeeld(){
     alert("Callback");
  }

  //CallbackMetArgumentComponent
  function callbackMetArgumenten(event){
    alert("Callback met argumenten! Input value is: "+ event.target.value)
  }


  return (
    <div className="App ComponentContainer">
      <h3> AppComponent, gewoon naar beneden scrollen</h3>
      <SimpelFunctieComponent simpelProp="Deze string is doorgegeven als prop" />
      <SimpelClassComponent simpelProp="Deze string is doorgegeven als prop" />
      <MinderSimpelClassComponent simpelProp="Deze string is doorgegeven als prop" />
      <InterActiefClassComponent simpelProp="Deze string is doorgegeven als prop" />
      <InterActiefFunctieComponent />
      <ListClassComponent />
      <CallbackComponent callBackProp={callbackVoorbeeld} />
      <CallbackMetArgumentComponent callBackProp={(event) => callbackMetArgumenten(event)} />
      <ConditionalComponent conditionalProp = {conditionVoorbeeld()}/>
    </div>
  );
}


//Simpel class component met een prop
class SimpelClassComponent extends Component {
  render() {
    return (
      <div className="ComponentContainer">
          <h3> Simpel Class Component</h3>
          <p>{ this.props.simpelProp }</p>
      </div>
    ) 
  }
}

//Hetzelfde component, maar dan als functie component
function SimpelFunctieComponent(props) {
  return (
      <div className="ComponentContainer">
          <h3> Simpel Functie Component</h3>
          <p>{ props.simpelProp }</p>
      </div>
  );
}

//Class component met props en een eigen state var
class MinderSimpelClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { myStateVar: "Dit is een state var" };  
  }

  render() {
    return (
      <div className="ComponentContainer">
          <h3> Minder Simpel Class Component</h3>
          <p>{ this.props.simpelProp }</p>
          <p>{ this.state.myStateVar }</p>
      </div>
    ) 
  }
}


//Class component waarbij je de state var kunt veranderen
class InterActiefClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { myInteractiveStateVar: "Dit is een interactieve state var" };  
  }

  handleChange(event){
    this.setState({      
      myInteractiveStateVar: event.target.value    
    });
  }

  render() {
    return (
      <div className="ComponentContainer">
          <h3> Minder Simpel Class Component</h3>

          <p>{this.props.simpelProp}</p>
          <p>{this.state.myInteractiveStateVar}</p>

          <input
            value = {this.state.myInteractiveStateVar}
            onChange = {(event)=>this.handleChange(event)}
          /> 
      </div>
    ) 
  }
}


//Functie component waarin je ook een state var kan veranderen. 
//Dus net als het component hierboven. 
//Met usestate kun je ook in een class component een interne state bijhouden en veranderen. 
//De syntax is iets anders, maar het gedrag komt op hetzelfde neer. 
function InterActiefFunctieComponent() {
  const [myInteractiveVar, setMyInteractiveVar] = useState("Dit is een interactieve var");

   function handleChange(event){
     setMyInteractiveVar(event.target.value);
  }
  return (
      <div className="ComponentContainer">
          <h3> Simpel Functie Component</h3>
          <p>{myInteractiveVar}</p>

          <input
            value = {myInteractiveVar}
            onChange = {(event)=>handleChange(event)}
          /> 
      </div>
  );
}

//Component die een lijst uitprint
class ListClassComponent extends Component {
  constructor() {
    super();
    this.state = { myList: [
      {
        id: 1, 
        name:"henk"
      },
      {
        id:2,
        name:"piet"
      }

    ]};  
  }
   
  render() {
    return (
      <div className="ComponentContainer">
          <h3> List Class Component</h3>
          <ul>{ this.state.myList.map((item) => 
              <li key={item.id}>{item.name}</li>
            )}
          </ul>
      </div>
    ) 
  }
}


//Component met simpele callback 
class CallbackComponent extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div className="ComponentContainer">
        <h3> Callback component</h3>
        <button onClick={this.props.callBackProp}>Klik voor callback</button>
      </div>
    ) 
  }
}

//Component met callback waarin een argument meegegeven wordt. 
class CallbackMetArgumentComponent extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div className="ComponentContainer">
        <h3> Callback met argumenten</h3>
        <input 
          value = {""}
          onChange={(event) => this.props.callBackProp(event)}
          /> 
      </div>
    ) 
  }
}

//Component die verschillende dingen kan renderen, 
//op basis van een bepaalde conditie

class ConditionalComponent extends Component {
  constructor(props) {
    super(props);
    }
    render() {
      if (this.props.conditionalProp == true )
      {
        return (
                <div className="ComponentContainer">
                  <h3> Conditioneel component: Vandaag is het woensdag</h3>
                </div>
        ) 
      }
      else {
        return (
                <div className="ComponentContainer">
                  <h3> Conditioneel component: Vandaag is het geen woensdag </h3>
                </div>
          ) 
      }   
    }

}



export default App;
