import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';
import './RadarChart.css';
import './ProfileSearchA'


export default class RadarChart extends Component {
  constructor() {
    super()
    this.state = {
      data: {
      labels: [ '% de lancers francs', '% de reussite', '% de 2 points', '% de 3 points'],
      datasets: [
        {
          backgroundColor: 'rgba(45, 49, 66, 0.7)'
        },
        {
          backgroundColor: 'rgba(219, 126, 82, 0.7)'
        }
      ],
    }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDef = this.handleDef.bind(this);
    this.handleAtt = this.handleAtt.bind(this);
  }

  componentDidMount(){
    window.addEventListener('click', this.handleClick);
  }

  handleClick(){
    let newState = Object.assign({}, this.state);
    var playerA = window.ProfileSearchA.state.updateItemA
    var playerB = window.ProfileSearchB.state.updateItemB
    newState.data.datasets[0].label = playerA.name;
    newState.data.datasets[1].label = playerB.name;
    if ( this.state.data.labels[0] === '% de lancers francs')
     {
      newState.data.datasets[0].data = [playerA.stat1, playerA.stat2, playerA.stat3, playerA.stat4];
      newState.data.datasets[1].data = [playerB.stat1, playerB.stat2, playerB.stat3, playerB.stat4];    
    }
    this.setState({newState});    
  }

  handleAtt(e){
    e.stopPropagation()
    let newState = Object.assign({}, this.state);
    var playerA = window.ProfileSearchA.state.updateItemA
    var playerB = window.ProfileSearchB.state.updateItemB
    newState.data.labels = [ '% de lancers francs', '% de reussite', '% de 2 points', '% de 3 points'];
    newState.data.datasets[0].data = [playerA.stat1, playerA.stat2, playerA.stat3, playerA.stat4];
    newState.data.datasets[1].data = [playerB.stat1, playerB.stat2, playerB.stat3, playerB.stat4];  
    this.setState(newState);
    var buttonA = document.querySelector('.radar-chart-category-att')
    var buttonD = document.querySelector('.radar-chart-category-def')
    console.log(buttonA.className);

    if (buttonA.className.split(" ")[1] !== "active") {
      buttonA.classList.toggle('active')
      buttonD.classList.toggle('active')  
      
    }
  }

  handleDef(e){
    e.stopPropagation()
    let newState = Object.assign({}, this.state);
    var playerA = window.ProfileSearchA.state.updateItemA
    var playerB = window.ProfileSearchB.state.updateItemB
    newState.data.labels = [ '% d\'interceptions', '% de blocks', '% de rebond defensif', '% de fautes'];
    newState.data.datasets[0].data = [playerA.stat5, playerA.stat6, playerA.stat7, playerA.stat7];
    newState.data.datasets[1].data = [playerB.stat5, playerB.stat6, playerB.stat7, playerB.stat7];
    this.setState(newState);
    var buttonA = document.querySelector('.radar-chart-category-att')
    var buttonD = document.querySelector('.radar-chart-category-def')

    if (buttonD.className.split(" ")[1] !== "active") {
      buttonD.classList.toggle('active')
      buttonA.classList.toggle('active')  
      
    }
  }
  
  

  render() {    
    return (
      <div className="radar-chart">
        <div className="radar-chart-category">
          <button onClick={this.handleAtt} className="radar-chart-category-att active">Attaque</button>
          <button onClick={this.handleDef} className="radar-chart-category-def">Defense</button>
        </div>
        <Radar  data={this.state.data} />
      </div>
    );
  }
}
