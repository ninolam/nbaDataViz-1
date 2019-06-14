





import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './RadarChart.css';
import './ProfileSearchA'
import './ProfileSearchB'
import { defaults } from 'react-chartjs-2'


defaults.global.defaultFontSize = 12;
defaults.global.defaultFontColor = '#000000';
defaults.global.defaultFontFamily = 'Montserrat';

export default class LineChart extends Component {
  constructor() {
    super()
    this.state = {
        data : {
        labels: ['2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', "2017-2018", "2018-2019"],
        datasets: [
          {
            fill: true,
            lineTension: 0.6,
            backgroundColor: '#2d314285',
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            fill: true,
            lineTension: 0.6,
            backgroundColor: '#db7e5273',
            pointRadius: 4,
            pointHoverRadius: 6,
          }
        ]
      }
    }   
    this.handleClick = this.handleClick.bind(this);
 
  }
  componentDidMount(){
    window.addEventListener('click', this.handleClick);
  }

  handleClick(){    
    setTimeout(() => {
      let newState = Object.assign({}, this.state);
      var playerA = window.ProfileSearchA.state.updateItemMoreA
      var playerB = window.ProfileSearchB.state.updateItemMoreB

      newState.data.datasets[0].label = playerA.player_name;
      newState.data.datasets[1].label = playerB.player_name;
      var parentA = document.querySelector('.PlayerA');
      var parentB = document.querySelector('.PlayerB');
      if (parentA.childNodes[0].className === 'container' && parentB.childNodes[0].className === 'container') {
        newState.data.datasets[0].data = [];
        newState.data.datasets[1].data = [];
        playerA.pointCarrier.map(item => newState.data.datasets[0].data.push(item.points))
        playerB.pointCarrier.map(item => newState.data.datasets[1].data.push(item.points))
      }  
      this.setState({newState});
    }, 300);
  }
  render() {      
    
    return (
    <div className="line-chart">
        <Line options={{scales: { xAxes: [{gridLines: {display: false,}}],yAxes: [{display: false,}]},maintainAspectRatio: false,tooltips: {bodyFontFamily: "'Montserrat', sans-serif", titleFontFamily: "'Montserrat', sans-serif",callbacks: { label: function(tooltipItem, data) { return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' points';}}}, pointLabels: {fontSize: 10, fontColor: "#000000", fontFamily:"'Montserrat', sans-serif"}, legend: false }} data={this.state.data} />
    </div>
    );
  }
}
