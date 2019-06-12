import React, { Component } from 'react';
import './ProfileCompare.css';
import '../App/App.css'
import DonutChart from "react-svg-donut"
import api from '../helpers/api'


class ProfileResultA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreStats: false,
      PlayerInfosMore : []
    }
  }

  clearValue() {
    var PlayerInfosMore = this.props.updateItemMoreB;

    var totalrb = PlayerInfosMore.offensive_rebound + PlayerInfosMore.defensive_rebound;
    var totalPaniers = PlayerInfosMore.two_points + PlayerInfosMore.three_points;
    var donutTitleA = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-value')
    var donutSubTitleA = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-subtext')

    donutTitleA.textContent = totalPaniers;
    donutSubTitleA.textContent = "Paniers";

    var donutTitleB = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-value')
    var donutSubTitleB = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-subtext')

    donutTitleB.textContent = totalrb
    donutSubTitleB.textContent = "Rebond";
  }

  async componentDidMount() {
    var searchBar = document.querySelector('.PlayerB .container .Search-all-container');
    searchBar.classList.add("fixed");
    this.clearValue();
    var inputValue = document.querySelector('.PlayerB .Search-all-container input');
    inputValue.value = this.props.updateItemB.name;
    console.log(this.props);

  }
  componentDidUpdate() {
    this.clearValue()
  }
  render() {
    var PlayerInfos = this.props.updateItemB;
    var PlayerInfosMore = this.props.updateItemMoreB;

    var totalrb = PlayerInfosMore.offensive_rebound + PlayerInfosMore.defensive_rebound
    var roPrc = PlayerInfosMore.offensive_rebound / totalrb * 100;
    var rdPrc = PlayerInfosMore.defensive_rebound / totalrb * 100;
    var threePointPrc = PlayerInfosMore.three_points * 3 / (PlayerInfosMore.points - PlayerInfosMore.free_throw) * 100;
    var twoPointPrc = PlayerInfosMore.two_points * 2 / (PlayerInfosMore.points - PlayerInfosMore.free_throw) * 100;

    const styles = {
      display: 'flex',
      flexDirection: 'column'
    }

    const title = "Paniers"
    const titleR = "Rebond"

    const data = [
      { name: "2 points", value: Math.round(twoPointPrc) },
      { name: "3 Point", value: Math.round(threePointPrc) },
    ]
    const dataR = [
      { name: "Offensive", stroke: "#22594e", strokeWidth: 6, value: Math.round(roPrc) },
      { name: "Defensive", stroke: "blue", value: Math.round(rdPrc) },
    ]

    if (PlayerInfos !== undefined) {
      return (
        
        <div className="container">
          {this.props.renderSearch}
          <section style = {{  backgroundColor: "#E2813A",backgroundImage: "url("+PlayerInfosMore.logo+")",backgroundPosition: "center",backgroundRepeat: "no-repeat", backgroundSize: "70%"}} className="all-content">
            <div className="layer"></div>
            <div className="Player-container Player-info-container">
              <img className="img-player" alt="player" src={'https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=' + PlayerInfos.name.replace(' ', '-')} />
              <div className="Player-info">
                <div>
                  <p className="poste">Poste: <b>{PlayerInfosMore.post}</b></p>
                  <p className="equipe">Equipe: <b>{PlayerInfosMore.name}</b></p>
                  <p className="age">Année de naissance: <b>{PlayerInfosMore.birth_year}</b></p>
                </div>
                <div>
                  <p className="poids">Poids: <b>{PlayerInfosMore.weight}</b></p>
                  <p className="taille">Taille: <b>{PlayerInfosMore.height}</b></p>
                  <p className="experience">Université: <b>{PlayerInfosMore.college}</b></p>
                </div>
                </div>
              <div className="Stats-container Stats-container-hidden">
                <div className="Stats-item-container">
                  <div className="Stats-item" id="minute">
                    <p>{PlayerInfosMore.minute_played} Minute jouée</p>
                    <span>{PlayerInfosMore.rankMinutePlayed} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>

                  </div>
                  <div className="Stats-item" id="points">
                  <p>{PlayerInfosMore.points} Points marquées</p>
                    <span>{PlayerInfosMore.rankPoint} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>
                  </div>
                </div>

                <div className="Stats-item-container">
                  <div className="Stats-item" id="passes">
                  <p>{PlayerInfosMore.assist} Passes décisives</p>
                    <span>{PlayerInfosMore.rankAssit} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>
                  </div>
                  <div className="Stats-item" id="matchJouer">
                  <p>{PlayerInfosMore.match_played} Matchs Joués</p>
                    <span>{PlayerInfosMore.rankMatchPlayed} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>
                  </div>
                  
                </div>

                <div className="Stats-item-container">
                  <div className="Stats-item" id="rebondO">
                  <p>{PlayerInfosMore.offensive_rebound} Rebond Offensive</p>
                    <span>{PlayerInfosMore.rankOffensiveRebound} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>
                  </div>
                  <div className="Stats-item" id="rebondD">
                  <p>{PlayerInfosMore.defensive_rebound} Rebond Defensive</p>
                    <span>{PlayerInfosMore.rankDefensiveRebound} <sup>e</sup> / {PlayerInfosMore.totalPlayer}</span>
                  </div>
                  
                </div>

                

                <div style={styles} className="Stats-item-container">
                  <DonutChart
                    size={200}
                    data={data}
                    onHover={(i, item) => {
                      var donutTitle = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-value')
                      var donutSubTitle = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-subtext')
                      if (i >= 0) {
                        donutTitle.textContent = data[i].value + "%"
                        donutSubTitle.textContent = data[i].name
                        console.log(item);
                        
                      } else {
                        donutTitle.textContent = PlayerInfosMore.two_points + PlayerInfosMore.three_points
                        donutSubTitle.textContent = title
                      }

                    }}

                    outerRadius={0.4}
                  />

                  <DonutChart
                    size={200}
                    data={dataR}
                    onHover={(i) => {
                      var donutTitle = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-value')
                      var donutSubTitle = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-subtext')

                      if (i >= 0) {
                        donutTitle.textContent = dataR[i].value + "%"
                        donutSubTitle.textContent = dataR[i].name
                      }
                      else {
                        donutTitle.textContent = PlayerInfosMore.offensive_rebound + PlayerInfosMore.defensive_rebound
                        donutSubTitle.textContent = titleR
                      }
                    }}

                    outerRadius={0.4}

                  />

                </div>
              </div>
            </div>

          </section>

          <div className="Player-container-plus-hide">

            <div className="Stats-container-plus">
              <div className="Stats-item-container-plus"></div>
            </div>

          </div>
        </div>

      );

    }
  }
}

export default ProfileResultA;