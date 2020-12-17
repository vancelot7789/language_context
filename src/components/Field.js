import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
  static contextType = LanguageContext;
  render(){
    const inputName =  this.context === 'english' ? 'Name' : 'Naam';
    return(
      <div className="ui field">
        <label> {inputName} </label>
        <input />
      </div>
    )
  }
}

export default Field;