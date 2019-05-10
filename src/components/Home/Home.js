import React, { Component } from 'react';
import './Home.css';
import ProfileCompare from '../ProfileCompare/ProfileCompare'

class Home extends Component {

  constructor(){
    super();
    this.state = {
      home:true
    }
}
handleClick(){
    this.setState({home:false});        
}
  render() {
    if(this.state.home === true){
      return (
        
        <div className="Home-container">
          <div className="Home-description">
            <h1 className="mb-10"><b>NBA ANALYSE</b></h1>
            <p className="mb-70">Choississez le joueur ou l’équipe que vous souhaitez analysé depuis les 10 <br /> dernieres années.</p>
            <div className="Home-choice">
              <a onClick={this.handleClick.bind(this)} className="Home-choice-compare">COMPARER DEUX JOUEURS</a>
              <a className="Home-choice-analyse">ANALYSER UN JOUEUR</a>
            </div>
          </div>
          
        </div>
        );
    } else{
      return (
        <ProfileCompare/>
        )
    }

      
  }
}

export default Home;