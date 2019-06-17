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
            <p className="mb-70">Grâce à Playerz, plongez vous dans l'univers de la NBA ! <br/> Parcourez et comparer les statistiques de vos joueurs préférés de ces 10 dernières années !</p>
            <div className="Home-choice">
              <p onClick={this.handleClick.bind(this)} className="Home-choice-compare">COMPARER DEUX JOUEURS</p>
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
