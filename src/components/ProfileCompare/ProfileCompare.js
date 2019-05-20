import React, { Component } from 'react';
import './ProfileCompare.css';
import resize from '../../assets/imgs/resize.png';
import ProfileSearch from './ProfileSearch'
import ProfileResult from './ProfileResult'

function updateState(ProfileResult) {
  this.setState({ ProfileResult })
}



class ProfileCompare extends Component {

  constructor(props) {
    super(props)
    this.state = { ProfileResult: false }
  }

  changeView() {
    this.setState({ ProfileResult: true });
  }

  render() {
    function changevalue(e) {
      e.preventDefault();
      // var resizer = document.querySelector('.resizer');

      document.addEventListener('mousemove', resizeX);
      document.addEventListener('mouseup', function (e) {
        document.removeEventListener('mousemove', resizeX);
        document.body.style.cursor = 'auto';
      });

      function resizeX(e) {
        var bodyWidth = 100 / document.body.clientWidth;
        var box1 = document.querySelector('.PlayerA');
        var box2 = document.querySelector('.PlayerB');
        var PlayerContainerA = document.querySelector('.PlayerA .Player-container');
        var PlayerContainerB = document.querySelector('.PlayerB .Player-container');
        var contentA = document.querySelector('.PlayerA .Stats-container');
        var contentB = document.querySelector('.PlayerB .Stats-container');
        var leftHeight = (parseFloat(window.getComputedStyle(box1, '').width) + e.movementX) * bodyWidth;
        box1.style.width = leftHeight + '%';
        box2.style.width = 100 - leftHeight + '%';

        if (box1.style.width >= "70%" && box1.style.width <= "71%") {
          box1.style.width = leftHeight + 25 + '%';
          PlayerContainerB.style.visibility = "hidden"
          if(PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container'){
            contentA.classList.remove("Stats-container-hidden");
          }
        }
        else if (box1.style.width >= "84%" && box1.style.width <= "85%") {
          box1.style.width = '50%';
          PlayerContainerB.style.visibility = "visible"
          if(PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container'){
            contentA.classList.add("Stats-container-hidden");
          }
        }

        else if (box1.style.width >= "30%" && box1.style.width <= "31%") {
          box1.style.width = leftHeight - 30 + '%';
          PlayerContainerA.style.visibility = "hidden"
          if(PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container'){
            contentB.classList.remove("Stats-container-hidden");
          }
        }
        else if (box1.style.width >= "14%" && box1.style.width <= "15%") {
          box1.style.width = '50%';
          PlayerContainerA.style.visibility = "visible"
          if(PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container'){
            contentB.classList.add("Stats-container-hidden");
          }
        }
      }
    };



    return (
      <div className="Players-container">

        <div className="content-box PlayerA left">
          <ProfileSearch />
          <div onMouseDown={changevalue} className="resizer"><span className="helper"></span><img alt="resize" src={resize} /> </div>
        </div>


        <div className="content-box PlayerB right">
        <ProfileSearch />
        </div>


      </div>
    );
  }
}


export default ProfileCompare;