import React, { Component } from 'react';
import './ProfileCompare.css';
import resize from '../../assets/imgs/onvalappeler.svg';
import ProfileSearchB from './ProfileSearchB'
import ProfileSearchA from './ProfileSearchA'
import RadarChart from './RadarChart'

class ProfileCompare extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      ProfileResult: false,
      updateItemMoreA: [],
      updateItemMoreB: [],
     }
  }


  changeView() {
    this.setState({ ProfileResult: true });
  }
  
  render() {
    
    function changevalue(e) {
      e.preventDefault();

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
        var PlayerContainerPlusA = document.querySelector('.PlayerA .Player-container-plus-hide');
        var PlayerContainerPlusB = document.querySelector('.PlayerB .Player-container-plus-hide');
        var PlayerContainerPlusitemA = document.querySelector('.PlayerA .Stats-item-container-plus');
        var PlayerContainerPlusitemB = document.querySelector('.PlayerB .Stats-item-container-plus');

        var secondItemB = document.querySelector('.PlayerB .Stats-item-container:nth-child(2)')
        var thirdItemB = document.querySelector('.PlayerB .Stats-item-container:last-child')
        var thirdItemBisB = document.querySelector('.PlayerB .Stats-item-container-plus .Stats-item-container')

        var secondItemA = document.querySelector('.PlayerA .Stats-item-container:nth-child(2)')
        var thirddItemA = document.querySelector('.PlayerA .Stats-item-container:nth-child(3)')
        var thirdItemA = document.querySelector('.PlayerA .Stats-item-container:last-child')
        var thirdItemBisA = document.querySelector('.PlayerA .Stats-item-container-plus .Stats-item-container')
        // var ok = document.querySelector('.ok')

        box1.style.width = leftHeight + '%';
        box2.style.width = 100 - leftHeight + '%';

        if (box1.style.width >= "70%" && box1.style.width <= "71%") {
          box1.style.width = leftHeight + 25 + '%';
          PlayerContainerB.style.visibility = "hidden";
          if (PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container' && box1.style.width > "72%") {
            contentA.classList.remove("Stats-container-hidden");
            PlayerContainerPlusA.style.display = "flex";
            PlayerContainerPlusitemA.appendChild(thirdItemA);
            [...document.querySelectorAll('.PlayerA svg')].map(x => x.classList.add('large'))
            document.querySelector('.Players-container .PlayerA .container').classList.add('container-flex')
            thirddItemA.style.display = "block"
            secondItemA.style.display = "block"
          }
        }
        else if (box1.style.width >= "84%" && box1.style.width <= "85%") {
          box1.style.width = '50%';
          PlayerContainerB.style.visibility = "visible"
          if (PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container') {
            contentA.classList.add("Stats-container-hidden");
            PlayerContainerPlusA.style.display = "none"
            contentA.appendChild(thirdItemBisA);
            [...document.querySelectorAll('.PlayerA svg')].map(x => x.classList.remove('large'))
            document.querySelector('.Players-container .PlayerA .container').classList.remove('container-flex')
            secondItemA.style.display = "none"
            thirddItemA.style.display = "none"

          }
        }

        else if (box1.style.width >= "30%" && box1.style.width <= "31%") {
          box1.style.width = leftHeight - 30 + '%';
          PlayerContainerA.style.visibility = "hidden"
          if (PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container' && box1.style.width < "29%") {
            contentB.classList.remove("Stats-container-hidden");
            PlayerContainerPlusB.style.display = "flex";
            PlayerContainerPlusitemB.appendChild(thirdItemB);
            [...document.querySelectorAll('.PlayerB svg')].map(x => x.classList.add('large'))
            document.querySelector('.Players-container .PlayerB .container').classList.add('container-flex', 'container-flex-reverse')
            secondItemB.style.display = "block"
          }
        }
        else if (box1.style.width >= "14%" && box1.style.width <= "15%") {
          box1.style.width = '50%';
          PlayerContainerA.style.visibility = "visible"
          if (PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container') {
            contentB.classList.add("Stats-container-hidden");
            PlayerContainerPlusB.style.display = "none";
            contentB.appendChild(thirdItemBisB);
            [...document.querySelectorAll('.PlayerB svg')].map(x => x.classList.remove('large'))
            document.querySelector('.Players-container .PlayerB .container').classList.remove('container-flex', 'container-flex-reverse')
            secondItemB.style.display = "none"
            }
        }
      }
    };
    return (
      <section>

      <div className="Players-container">
        <div  className="content-box PlayerA left">
          <ProfileSearchA ref={(ProfileSearchA) => {window.ProfileSearchA = ProfileSearchA}} id={"A"} />
          <div onMouseDown={changevalue} className="resizer"><span className="helper"></span><img alt="resize" src={resize} /> </div>
        </div>

        <div className="content-box PlayerB right">
          <ProfileSearchB ref={(ProfileSearchB) => {window.ProfileSearchB = ProfileSearchB}} id={"B"} />
        </div>
      </div>
      <RadarChart  updateItemA={this.state.updateItemA} updateItemB={this.state.updateItemB} />
    </section>
    );
  }
}

export default ProfileCompare;
