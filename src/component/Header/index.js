import React, { Component} from 'react'
import './header.css'
import { Link} from 'react-router-dom'


class Hearder extends Component{
  
  constructor(props){
    super(props);
    this.state = {};
  }
  
  
  render(){
    return(
      <div className="header">
        <Link to="/">Filmaria</Link>
      </div>

    );
  }

}


export default Hearder;
