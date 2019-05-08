import React from 'react';
import './App.css';

const App  = () => { 
  
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
      var leftHeight = (parseFloat(window.getComputedStyle(box1, '').width) + e.movementX) * bodyWidth;
      box1.style.width = leftHeight + '%';
      box2.style.width = 100 - leftHeight + '%';
  
      if (box1.style.width >= "70%" && box1.style.width <= "71%") {
        box1.style.width = leftHeight + 20 + '%';
        ;
      } 
      else if (box1.style.width >= "84%" && box1.style.width <= "85%") {
        box1.style.width = '50%';
      }

      if (box1.style.width >= "30%" && box1.style.width <= "31%") {
        box1.style.width = leftHeight - 20 + '%';
        ;
      } 
      else if (box1.style.width >= "14%" && box1.style.width <= "15%") {
        box1.style.width = '50%';
      }
    }
  };
  return (
  <div className="Players-container">

    <div className="content-box PlayerA left">
      <div className="header">
        Player 1
      </div>
      <div></div>
      <div onMouseDown={changevalue} className="resizer"></div>
    </div>


    <div className="content-box PlayerB right">
      <div className="header">
        Player 2
      </div>
      <div></div>
    </div>


  </div>
  );
}

export default App;
