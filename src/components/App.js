import React from 'react';

class App extends React.Component{
  state = { language: 'english' };


  render(){
    console.log(this.state.language);
    return (
      <div className="ui container">
        <div>
          Select a language
          <i className="flag us" onClick={() => { this.setState({ language: 'english' })}}/>
          <i className="flag nl" onClick={() => { this.setState({ language: 'deutch' })}}/>
        </div>
      </div>
    );
  }
}

export default App;