import React, { Component } from 'react';
import './ProfileCompare.css';
import '../App/App.css'
import DonutChart from "react-svg-donut"

class ProfileResultA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moreStats: false,
      PlayerInfosMore : []
    }
  }

  clearValue() {
    var PlayerInfosMore = this.props.updateItemMoreA;

    var totalrb = PlayerInfosMore.offensive_rebound + PlayerInfosMore.defensive_rebound;
    var totalPaniers = PlayerInfosMore.two_points + PlayerInfosMore.three_points;
    var donutTitleA = document.querySelector('.PlayerA .donut-chart:first-child .donut-chart-text-value')
    var donutSubTitleA = document.querySelector('.PlayerA .donut-chart:first-child .donut-chart-text-subtext')

    donutTitleA.textContent = totalPaniers;
    donutSubTitleA.textContent = "Paniers";

    var donutTitleB = document.querySelector('.PlayerA .donut-chart:last-child .donut-chart-text-value')
    var donutSubTitleB = document.querySelector('.PlayerA .donut-chart:last-child .donut-chart-text-subtext')

    donutTitleB.textContent = totalrb
    donutSubTitleB.textContent = "Rebonds";
  }

  async componentDidMount() {
    var searchBar = document.querySelector('.PlayerA .container .Search-all-container');
    searchBar.classList.add("fixed");
    this.clearValue();
    var inputValue = document.querySelector('.PlayerA .Search-all-container input');
    inputValue.value = this.props.updateItemA.name;
    console.log(this.props);

  }
  componentDidUpdate() {
    this.clearValue()
  }
  renderPost(param) {
    switch(param) {
      case 'PG':
        return 'Meneur';
      case 'SG':
        return 'Arrière';
      case 'SF':
        return 'Ailier';
      case 'PF':
        return 'Ailier fort';
      case 'C':
        return 'Pivot';

    }
  }
  render() {
    var PlayerInfos = this.props.updateItemA;
    var PlayerInfosMore = this.props.updateItemMoreA;
    console.log(PlayerInfosMore);



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
    const titleR = "Rebonds"

    const data = [
      { name: "2 points", value: Math.round(twoPointPrc) },
      { name: "3 points", value: Math.round(threePointPrc) },
    ]
    const dataR = [
      { name: "Offensive", stroke: "#22594e", strokeWidth: 6, value: Math.round(roPrc) },
      { name: "Defensive", stroke: "blue", value: Math.round(rdPrc) },
    ]

    if (PlayerInfos !== undefined) {
      return (

        <div className="container">
          {this.props.renderSearch}
          <section style = {{ backgroundColor: "#2D3142",backgroundImage: "url("+PlayerInfosMore.logo+")",backgroundPosition: "center",backgroundRepeat: "no-repeat"}} className="all-content">
            <div className="layer"></div>
            <div className="Player-container Player-info-container">
              <img className="img-player" alt="player" src={'https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=' + PlayerInfos.name.replace(' ', '-')} />
              <div className="Player-info">
                <div>
                  <p className="poste">Poste: <b>{PlayerInfosMore.post} ({this.renderPost(PlayerInfosMore.post)})</b></p>
                  <p className="equipe">Equipe: <b>{PlayerInfosMore.name}</b></p>
                  <p className="age">Age: <b>{ 2019 - PlayerInfosMore.birth_year} ans</b></p>
                </div>
                <div>
                  <p className="poids">Poids: <b>{PlayerInfosMore.weight} kg</b></p>
                  <p className="taille">Taille: <b>{PlayerInfosMore.height / 100} m</b></p>
                  <p className="universite">Université: <b>{PlayerInfosMore.college === "N/A" ? "Non renseignée" : PlayerInfosMore.college }</b></p>
                </div>
                </div>
                <div className="Stats-container Stats-container-hidden">
                <div className="Stats-item-container">
                  <div className="Stats-item" id="minute">
                    <p>{PlayerInfosMore.rankMinutePlayed} <sup>{PlayerInfosMore.rankMinutePlayed === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                    <p>{PlayerInfosMore.minute_played} </p>
                    <p>Minutes jouées</p>

                  </div>
                  <div className="Stats-item" id="points">
                  <p>{PlayerInfosMore.rankPoint} <sup>{PlayerInfosMore.rankPoint === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                  <p>{PlayerInfosMore.points}</p>
                    <p>Points marquées</p>
                  </div>
                </div>

                <div className="Stats-item-container">
                  <div className="Stats-item" id="passes">
                    <p>{PlayerInfosMore.rankAssit} <sup>{PlayerInfosMore.rankAssit === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                    <p>{PlayerInfosMore.assist} </p>
                    <p>Passes décisives</p>
                  </div>
                  <div className="Stats-item" id="matchJouer">
                    <p>{PlayerInfosMore.rankMatchPlayed} <sup>{PlayerInfosMore.rankMatchPlayed === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                    <p>{PlayerInfosMore.match_played} </p>
                  <p>Matchs Joués</p>
                  </div>
                  
                </div>

                <div className="Stats-item-container">
                  <div className="Stats-item" id="rebondO">
                    <p>{PlayerInfosMore.rankOffensiveRebound} <sup>{PlayerInfosMore.rankOffensiveRebound === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                    <p>{PlayerInfosMore.offensive_rebound} </p>
                  <p>Rebond Offensive</p>
                  </div>
                  <div className="Stats-item" id="rebondD">
                  <p>{PlayerInfosMore.rankDefensiveRebound} <sup>{PlayerInfosMore.rankDefensiveRebound === 1 ? "er" : "ème"}</sup> / {PlayerInfosMore.totalPlayer}</p>
                  <p>{PlayerInfosMore.defensive_rebound}</p>
                    <p>Rebond Defensive</p>
                  </div>

                </div>



                <div style={styles} className="Stats-item-container">
                  <DonutChart
                    size={200}
                    data={data}
                    onHover={(i, item) => {
                      var donutTitle = document.querySelector('.PlayerA .donut-chart:first-child .donut-chart-text-value')
                      var donutSubTitle = document.querySelector('.PlayerA .donut-chart:first-child .donut-chart-text-subtext')
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
                      var donutTitle = document.querySelector('.PlayerA .donut-chart:last-child .donut-chart-text-value')
                      var donutSubTitle = document.querySelector('.PlayerA .donut-chart:last-child .donut-chart-text-subtext')

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
