import React, { Component } from 'react';
import './ProfileCompare.css';
import resize from '../../assets/imgs/resize.png';


class ProfileCompare extends Component {
  render() {
    function changevalue(e) {
        e.preventDefault();
        var resizer = document.querySelector('.resizer');
    
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
          var leftHeight = (parseFloat(window.getComputedStyle(box1, '').width) + e.movementX) * bodyWidth;
          box1.style.width = leftHeight + '%';
          box2.style.width = 100 - leftHeight + '%';
      
          if (box1.style.width >= "70%" && box1.style.width <= "71%") {
            box1.style.width = leftHeight + 25 + '%';
            PlayerContainerB.style.visibility = "hidden"
          } 
          else if (box1.style.width >= "84%" && box1.style.width <= "85%") {
            box1.style.width = '50%';
            PlayerContainerB.style.visibility = "visible"
          }
    
          else if (box1.style.width >= "30%" && box1.style.width <= "31%") {
            box1.style.width = leftHeight - 30 + '%';
            PlayerContainerA.style.visibility = "hidden"
          } 
          else if (box1.style.width >= "14%" && box1.style.width <= "15%") {
            box1.style.width = '50%';
            PlayerContainerA.style.visibility = "visible"
          }
        }
      };
      return (
      <div className="Players-container">
    
        <div className="content-box PlayerA left">
          <div className="Player-container">
            <h2 className="Player-title">
              Joueur 1
            </h2>
            <p className="description">Choississez le joueur ou l’équipe que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur glissez le rond vers la droite.</p>
            <div className="Search-container">
              <input type="text" placeholder="Recherche ..." />
              <select>
                  <option value="2018-2019">2018-2019</option>
                  <option value="2017-2018">2017-2018</option>
                  <option value="2016-2017">2016-2017</option>
                  <option value="2015-2016">2015-2016</option>
              </select>
              </div>
          </div>
          <div onMouseDown={changevalue} className="resizer"><span className="helper"></span><img src={resize} /> </div>
        </div>
    
    
        <div className="content-box PlayerB right">
        <div className="Player-container">
            <h2 className="Player-title">
              Joueur 2
            </h2>
            <p className="description">Choississez le joueur ou l’équipe que vous souhaitez comparez, si vous souhaitez seulement analyser un joueur glissez le rond vers la droite.</p>
            <div className="Search-container">
              <input type="text" placeholder="Recherche ..." />
              <select>
                  <option value="2018-2019">2018-2019</option>
                  <option value="2017-2018">2017-2018</option>
                  <option value="2016-2017">2016-2017</option>
                  <option value="2015-2016">2015-2016</option>
              </select>
            </div>
          </div>
        </div>
    
    
      </div>
      );
  }
}

export default ProfileCompare;