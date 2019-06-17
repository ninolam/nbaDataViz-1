import React, { Component } from 'react';
import './ProfileCompare.css';
import resize from '../../assets/imgs/onvalappeler.svg';
import ProfileSearchB from './ProfileSearchB'
import ProfileSearchA from './ProfileSearchA'
import RadarChart from './RadarChart'
import LineChart from './LineChart'


class ProfileCompare extends Component {

  constructor(props) {
    super(props)
    this.state = {
      updateItemMoreA: [],
      updateItemMoreB: [],
    }
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
        var box1 = document.querySelector('.PlayerA');
        var box2 = document.querySelector('.PlayerB');
        var PlayerContainerA = document.querySelector('.PlayerA .Player-container');
        var PlayerContainerB = document.querySelector('.PlayerB .Player-container');
        var contentA = document.querySelector('.PlayerA .Stats-container');
        var contentB = document.querySelector('.PlayerB .Stats-container');
        var PlayerContainerPlusA = document.querySelector('.PlayerA .Player-container-plus-hide');
        var PlayerContainerPlusB = document.querySelector('.PlayerB .Player-container-plus-hide');
        var PlayerContainerPlusitemA = document.querySelector('.PlayerA .Stats-item-container-plus');
        var PlayerContainerPlusitemB = document.querySelector('.PlayerB .Stats-item-container-plus');

        var firstItemB = document.querySelector('.PlayerB .Stats-item-container:nth-child(2)')
        var secondItemB = document.querySelector('.PlayerB .Stats-item-container:nth-child(3)')
        var thirdItemB = document.querySelector('.PlayerB .Stats-item-container:last-child')
        var lastItemB = document.querySelector('.PlayerB .Stats-item-container-plus .Stats-item-container')

        var firstItemA = document.querySelector('.PlayerA .Stats-item-container:nth-child(2)')
        var secondItemA = document.querySelector('.PlayerA .Stats-item-container:nth-child(3)')
        var thirdItemA = document.querySelector('.PlayerA .Stats-item-container:last-child')
        var lastItemA = document.querySelector('.PlayerA .Stats-item-container-plus .Stats-item-container')

        var bodyWidth = 100 / document.body.clientWidth;
        var leftWidth = (parseFloat(window.getComputedStyle(box1, '').width) + e.movementX) * bodyWidth;

        box1.style.width = leftWidth + '%';
        box2.style.width = 100 - leftWidth + '%';

        if (box1.style.width >= "70%" && box1.style.width <= "71%") {
          box1.style.width = leftWidth + 25 + '%';
          box2.children[0].style.visibility = "hidden";
          if (PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container' && box1.style.width > "72%") {
            contentA.classList.remove("Stats-container-hidden");
            PlayerContainerPlusA.style.display = "flex";
            PlayerContainerPlusitemA.appendChild(thirdItemA);
            [...document.querySelectorAll('.PlayerA svg')].map(x => x.classList.add('large'))
            document.querySelector('.Players-container .PlayerA .container').classList.add('container-flex')
            firstItemA.style.display = "block"
            secondItemA.style.display = "block"
          }
        }
        else if (box1.style.width >= "84%" && box1.style.width <= "85%") {
          box1.style.width = '50%';
          box2.children[0].style.visibility = "visible";
          if (PlayerContainerA.children[2].className.split(" ")[0] === 'Stats-container') {
            contentA.classList.add("Stats-container-hidden");
            PlayerContainerPlusA.style.display = "none"
            contentA.appendChild(lastItemA);
            [...document.querySelectorAll('.PlayerA svg')].map(x => x.classList.remove('large'))
            document.querySelector('.Players-container .PlayerA .container').classList.remove('container-flex')
            firstItemA.style.display = "none"
            secondItemA.style.display = "none"

          }
        }

        else if (box1.style.width >= "30%" && box1.style.width <= "31%") {
          box1.style.width = leftWidth - 30 + '%';
          box1.children[0].style.visibility = "hidden";

          if (PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container' && box1.style.width < "29%") {
            contentB.classList.remove("Stats-container-hidden");
            PlayerContainerPlusB.style.display = "flex";
            PlayerContainerPlusitemB.appendChild(thirdItemB);
            [...document.querySelectorAll('.PlayerB svg')].map(x => x.classList.add('large'))
            document.querySelector('.Players-container .PlayerB .container').classList.add('container-flex', 'container-flex-reverse')
            firstItemB.style.display = "block"
            secondItemB.style.display = "block"
          }
        }
        else if (box1.style.width >= "14%" && box1.style.width <= "15%") {
          box1.style.width = '50%';
          box1.children[0].style.visibility = "visible";

          if (PlayerContainerB.children[2].className.split(" ")[0] === 'Stats-container') {
            contentB.classList.add("Stats-container-hidden");
            PlayerContainerPlusB.style.display = "none";
            contentB.appendChild(lastItemB);
            [...document.querySelectorAll('.PlayerB svg')].map(x => x.classList.remove('large'))
            document.querySelector('.Players-container .PlayerB .container').classList.remove('container-flex', 'container-flex-reverse')
            firstItemB.style.display = "none"
            secondItemB.style.display = "none"
          }
        }
      }
    };
    return (
      <section>

        <div className="Players-container">
          <div className="content-box PlayerA left">
            <ProfileSearchA ref={(ProfileSearchA) => { window.ProfileSearchA = ProfileSearchA }} id={"A"} />
            <div onMouseDown={changevalue} className="resizer"><span className="helper"></span><img alt="resize" src={resize} /> </div>
          </div>

          <div className="content-box PlayerB right">
            <ProfileSearchB ref={(ProfileSearchB) => { window.ProfileSearchB = ProfileSearchB }} id={"B"} />
          </div>
        </div>
        <section className="data-viz-container">
          <RadarChart />
          <LineChart />
        </section>
      </section>
    );
  }
}

export default ProfileCompare;
