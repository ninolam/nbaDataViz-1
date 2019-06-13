import React, { Component } from 'react';
import './Home.css';
import ProfileCompare from '../ProfileCompare/ProfileCompare'
import ProfileResultA from '../ProfileCompare/ProfileResultA'
import ProfileResultB from '../ProfileCompare/ProfileResultB'
import logo from '../../assets/imgs/logo.svg';


class Home extends Component {
  state = {
    home: true
  }
  handleClick() {
    this.setState({ home: false });
  }
  render() {
    if (this.state.home === true) {
      return (
        <div className="Home-container">
          <div className="Home-description">
          <h1 className="mb-10"><img alt="resize" src={logo} /></h1>
            <p className="mb-70">Choisissez le joueur que vous souhaitez comparez, si vous souhaitez <br /> seulement analyser un joueur faites glisser le rond vers la droite.</p>
            <div className="Home-choice">
              <p onClick={this.handleClick.bind(this)} className="Home-choice-compare">COMPARER DEUX JOUEURS</p>
              {/* <p className="Home-choice-analyse">ANALYSER UN JOUEUR</p> */}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ProfileCompare PA={<ProfileResultA/>} PB={<ProfileResultB/>} ref={(ourComponent) => {window.ourComponent = ourComponent}} />
      )
    }


  }
}

export default Home;
