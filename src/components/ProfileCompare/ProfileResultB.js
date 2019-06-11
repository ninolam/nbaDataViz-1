import React, { Component } from 'react';
import './ProfileCompare.css';
import '../App/App.css'
import DonutChart from "react-svg-donut"

class ProfileResultB extends Component {
  constructor() {
    super()
    this.state = {
      moreStats: false,
    }
  }

  clearValue() {
    var donutTitleA = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-value')
    var donutSubTitleA = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-subtext')

    donutTitleA.textContent = this.props.updateItemB.totalPaniers;
    donutSubTitleA.textContent = "Paniers";

    var donutTitleB = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-value')
    var donutSubTitleB = document.querySelector('.PlayerB .donut-chart:last-child .donut-chart-text-subtext')

    donutTitleB.textContent = this.props.updateItemB.rT
    donutSubTitleB.textContent = "Rebond";
  }

  componentDidMount() {
    var searchBar = document.querySelector('.PlayerB .container .Search-all-container');
    searchBar.classList.add("fixed", "right");
    this.clearValue();
    var inputValue = document.querySelector('.PlayerB .Search-all-container input');
    inputValue.value = this.props.updateItemB.name;
    document.querySelector('.PlayerB ul').style.visibility = "hidden";
  }
  componentDidUpdate() {
    this.clearValue()
  }
  render() {

    var PlayerInfos = this.props.updateItemB;
    var roPrc = PlayerInfos.rO / PlayerInfos.rT * 100;
    var rdPrc = PlayerInfos.rD / PlayerInfos.rT * 100;
    var threePointPrc = PlayerInfos.threePoint / PlayerInfos.totalPaniers * 100;
    var twoPointPrc = PlayerInfos.twoPoint / PlayerInfos.totalPaniers * 100;

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
          <section className="all-content">
            <div className="Player-container Player-info-container">

              <img className="img-player" alt="player" src={'https://tsnimages.tsn.ca/ImageProvider/PlayerHeadshot?seoId=' + PlayerInfos.firstname.toLowerCase() + '-' + PlayerInfos.lastname.toLowerCase()} />
              <div className="Player-info">
                <div>
                  <p className="poste">Poste: <b>{PlayerInfos.poste}</b></p>
                  <p className="equipe">Equipe: <b>{PlayerInfos.equipe}</b></p>
                  <p className="age">Age: <b>{PlayerInfos.age} ans</b></p>
                </div>
                <div>
                  <p className="poids">Poids: <b>{PlayerInfos.poids}</b></p>
                  <p className="taille">Taille: <b>{PlayerInfos.taille}</b></p>
                  <p className="experience">Experience: <b>{PlayerInfos.experience} ans</b></p>
                </div>

              </div>
              <div className="Stats-container Stats-container-hidden">
                <div className="Stats-item-container">
                  <div className="Stats-item" id="minute"></div>
                  <div className="Stats-item" id="points"></div>
                </div>

                <div className="Stats-item-container">
                  <div className="Stats-item" id="passes"></div>
                  <div className="Stats-item" id="rebond"></div>
                </div>

                <div style={styles} className="Stats-item-container">
                  <DonutChart
                    size={200}
                    data={data}
                    onHover={(i) => {
                      var donutTitle = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-value')
                      var donutSubTitle = document.querySelector('.PlayerB .donut-chart:first-child .donut-chart-text-subtext')
                      if (i >= 0) {
                        donutTitle.textContent = data[i].value + "%"
                        donutSubTitle.textContent = data[i].name
                      } else {
                        donutTitle.textContent = PlayerInfos.totalPaniers
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
                        donutTitle.textContent = PlayerInfos.rT
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
              <div className="Stats-item-container-plus">
              </div>
            </div>

          </div>

        </div>

      );

    }
  }
}

export default ProfileResultB;