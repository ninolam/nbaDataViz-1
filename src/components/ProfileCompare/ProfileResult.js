import React, { Component } from 'react';
import './ProfileCompare.css';
import  './ProfileSearch'


class ProfileResult extends Component {
  
  render() {
    var PlayerInfos = this.props.updateItem;
    if(PlayerInfos === undefined){
      PlayerInfos = {
        name: "not found",
        firstname: "not found",
        lastname: "not found",
        poste: 'not found',
        poids: 'not found',
        equipe:'not found',
        taille:'not found',
        experience:'not found'
      }
    }else{
      PlayerInfos = this.props.updateItem;
    }
    
    return (
      <div className="Player-container Player-info-container">
        <img className="img-player" alt="player" src={'https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=' + PlayerInfos.firstname.toLowerCase() + '-' + PlayerInfos.lastname.toLowerCase()}  />
        <div className="Player-info">
          <div>
            <p className="poste">Nom: {PlayerInfos.name}</p>
            <p className="equipe">Equipe: {PlayerInfos.equipe}</p>
            <p className="age">Age: {PlayerInfos.age} ans</p>
          </div>
          <div>
            <p className="poids">Poids: {PlayerInfos.poids}</p>
            <p className="taille">Taille: {PlayerInfos.taille}</p>
            <p className="experience">Experience: {PlayerInfos.experience} ans</p>
          </div>

          
        </div>
        <div className="Stats-container Stats-container-hidden">
            <div className="Stats-item-container">
                <div className="Stats-item" id="minute"></div>
                <div className="Stats-item" id="points"></div>
                <div className="Stats-item" id="passe"></div>
            </div>

            <div className="Stats-item-container">
                <div className="Stats-item" id="passes"></div>
                <div className="Stats-item" id="rebond"></div>
                <div className="Stats-item" id="rebond"></div>
            </div>
            </div>
      </div>

    );
  }
}

export default ProfileResult;