// import React, {Component} from 'react';
// import {Radar} from 'react-chartjs-2';
// import './RadarChart.css';
// import './ProfileSearchA'
// import './ProfileSearchB'



// export default class RadarChart extends Component {
//   constructor() {
//     super()
//     this.state = {
//       playerA: [],
//       playerB:[],
//       data: {
//       labels: [ '% de lancers francs', '% de reussite', '% de 2 points', '% de 3 points'],
//       datasets: [
//         {
//           backgroundColor: 'rgba(45, 49, 66, 0.7)'
//         },
//         {
//           backgroundColor: 'rgba(219, 126, 82, 0.7)'
//         }
//       ],
//     }
//     }
//     this.handleClick = this.handleClick.bind(this);
//     this.handleDef = this.handleDef.bind(this);
//     this.handleAtt = this.handleAtt.bind(this);
    

//   }

//   componentDidUpdate(){
//     var parentA = document.querySelector('.PlayerA');
//     var parentB = document.querySelector('.PlayerB');
//     var radar = document.querySelector('.radar-chart-container');    
//     if (parentA.childNodes[0].className === 'container' && parentB.childNodes[0].className === 'container') {
//       radar.style.display = "block";
//     }
//     else {
//       radar.style.display = "none"
//     }
//   }
//   componentDidMount(){
//     window.addEventListener('click', this.handleClick);
//   }

//   handleClick(){    
//     setTimeout(() => {
//       console.log(window.ProfileSearchA.state.updateItemMoreA);
//       console.log(window.ProfileSearchB.state.updateItemMoreB);

//       let newState = Object.assign({}, this.state);
//       var playerA = window.ProfileSearchA.state.updateItemMoreA
//       var playerB = window.ProfileSearchB.state.updateItemMoreB
//       this.setState({
//         playerA:playerA,
//         playerB:playerB
//       });
//       newState.data.datasets[0].label = playerA.player_name;
//       newState.data.datasets[1].label = playerB.player_name;
//       if ( this.state.data.labels[0] === '% de lancers francs')
//        {
//         newState.data.datasets[0].data = [playerA.free_throw_percent / 10, playerA.field_goal_pourcent / 10, playerA.two_point_percent / 10, playerA.three_points_percent / 10];
//         newState.data.datasets[1].data = [playerB.free_throw_percent / 10, playerB.field_goal_pourcent / 10, playerB.two_point_percent / 10, playerB.three_points_percent / 10];    
//       }
//       console.log(newState.data.datasets);
      
//       this.setState({newState});
//     }, 300);
    
//   }

//   handleAtt(e){
//     e.stopPropagation()
//     let newState = Object.assign({}, this.state);
//     var playerA = window.ProfileSearchA.state.updateItemMoreA
//     var playerB = window.ProfileSearchB.state.updateItemMoreB
//     newState.data.labels = [ '% de lancers francs', '% de reussite', '% de 2 points', '% de 3 points'];
//     newState.data.datasets[0].data = [playerA.free_throw_percent / 10, playerA.field_goal_pourcent / 10, playerA.two_point_percent / 10, playerA.three_points_percent / 10];
//     newState.data.datasets[1].data = [playerB.free_throw_percent / 10, playerB.field_goal_pourcent / 10, playerB.two_point_percent / 10, playerB.three_points_percent / 10];    
//     this.setState(newState);
//     var buttonA = document.querySelector('.radar-chart-category-att')
//     var buttonD = document.querySelector('.radar-chart-category-def')
//     if (buttonA.className.split(" ")[1] !== "active") {
//       buttonA.classList.toggle('active')
//       buttonD.classList.toggle('active')
//     }
//   }

//   handleDef(e){
//     e.stopPropagation()
    
//     let newState = Object.assign({}, this.state);
//     var playerA = window.ProfileSearchA.state.updateItemMoreA
//     var playerB = window.ProfileSearchB.state.updateItemMoreB
//     console.log(playerA.personal_fault, playerA.match_played );
//     newState.data.labels = [ '% d\'interceptions', '% de blocks', '% de rebond defensif', '% de fautes'];
//     newState.data.datasets[0].data = [playerA.defensive_rebound_percent, (playerA.personal_fault / playerA.match_played), playerA.steal_percent, playerA.block_percent];
//     newState.data.datasets[1].data = [playerB.defensive_rebound_percent, (playerB.personal_fault / playerB.match_played), playerB.steal_percent, playerB.block_percent];
//     this.setState(newState);
//     var buttonA = document.querySelector('.radar-chart-category-att')
//     var buttonD = document.querySelector('.radar-chart-category-def')

//     if (buttonD.className.split(" ")[1] !== "active") {
//       buttonD.classList.toggle('active')
//       buttonA.classList.toggle('active')  
      
//     }
//   }
//   render() {      
    
//     return (
//       <section className="radar-chart-container">
//         <div className="radar-chart">
//           <div className="radar-chart-category">
//             <button onClick={this.handleAtt} className="radar-chart-category-att active">Attaque</button>
//             <button onClick={this.handleDef} className="radar-chart-category-def">Defense</button>
//           </div>
//           <img className="absolute logo-team-first-player" src={this.state.playerA.logo}/>
//           <img className="absolute logo-team-second-player" src={this.state.playerA.logo}/>
//           <div className="layer-radar"></div>
//           <Radar options={{ maintainAspectRatio: false, tooltips: {bodyFontFamily: "'Montserrat', sans-serif", titleFontFamily: "'Montserrat', sans-serif",callbacks: { label: function(tooltipItem, data) { return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';}}}, legend: false }} data={this.state.data} />
//         </div>
//       </section>
//     );
//   }
// }
