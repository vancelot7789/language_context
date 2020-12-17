import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
class Button extends React.Component{
  /* equivalent to Button.contextType = LanguageContext */
  static contextType = LanguageContext;
  render(){
    const title = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return(
      <button className="ui button primary">
        {title}
      </button>
    );
  }
}

export default Button;