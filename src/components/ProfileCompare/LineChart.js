





import React, {Component} from 'react';
// import {Line} from 'react-chartjs-2';
// import './RadarChart.css';
// import './ProfileSearchA'
// import './ProfileSearchB'

export default class LineChart extends Component {
  constructor() {
    super()
    this.state = {
        data : {
        labels: ['2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', "2017-2018", "2018-2019"],
        datasets: [
          {
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'blue',
            borderColor: 'orange',
            // pointBorderColor: 'rgba(75,192,192,1)',
            // pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            // pointHoverBorderColor: 'rgba(220,220,220,1)',
            // pointHoverBorderWidth: 6,
            // pointRadius: 1,
            // data: [65, 59, 80, 81, 56, 55, 40, 80, 90]
          },
          {
            fill: true,
            lineTension: 0.6,
            backgroundColor: 'red',
            borderColor: 'white',
            // data: [85, 29, 90, 11, 36, 85, 90, 10, 20]
          }
        ]
      }
    }   
    // this.handleClick = this.handleClick.bind(this);
 
  }
//   componentDidMount(){
//     window.addEventListener('click', this.handleClick);
//   }

//   handleClick(){    
//     setTimeout(() => {
//     //   console.log(window.ProfileSearchA.state.updateItemMoreA);
//     //   console.log(window.ProfileSearchB.state.updateItemMoreB);

//       let newState = Object.assign({}, this.state);
//       var playerA = window.ProfileSearchA.state.updateItemMoreA
//       var playerB = window.ProfileSearchB.state.updateItemMoreB

//       newState.data.datasets[0].label = playerA.player_name;
//       newState.data.datasets[1].label = playerB.player_name;
//       var parentA = document.querySelector('.PlayerA');
//       var parentB = document.querySelector('.PlayerB');
//       var radar = document.querySelector('.radar-chart-container');    
//       if (parentA.childNodes[0].className === 'container' && parentB.childNodes[0].className === 'container') {
//     //   newState.data.datasets[0].data = [ playerA.pointCarrier[8].points, playerA.pointCarrier[7].points, playerA.pointCarrier[6].points, playerA.pointCarrier[5].points, playerA.pointCarrier[4].points, playerA.pointCarrier[3].points, playerA.pointCarrier[2].points, playerA.pointCarrier[1].points, playerA.pointCarrier[0].points];
//     //   newState.data.datasets[1].data = [ playerB.pointCarrier[8].points, playerB.pointCarrier[7].points, playerB.pointCarrier[6].points, playerB.pointCarrier[5].points, playerB.pointCarrier[4].points, playerB.pointCarrier[3].points, playerB.pointCarrier[2].points, playerB.pointCarrier[1].points, playerB.pointCarrier[0].points];
// console.log(this.playerA.data.map((item) => item.points)
// );
//     }  
      
//       this.setState({newState});
//     }, 300);
    
//   }
  render() {      
    
    return (
    <div className="line-chart">
        {/* <Line options={{ maintainAspectRatio: false, legend: false }} data={this.state.data} /> */}
    </div>
    );
  }
}
