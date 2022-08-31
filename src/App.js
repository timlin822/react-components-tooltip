import {useState} from 'react';

import Tooltip from 'components/tooltip/Tooltip';

import image from 'images/girl.jpg';

import './App.css';

function App() {
  const [tooltipIsShow,setTooltipIsShow]=useState(false);

  const mouseEnterHandler=()=>{
		setTooltipIsShow(true);
	};
  const mouseLeaveHandler=()=>{
      setTooltipIsShow(false);
	};

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="image-box">
          <img className="image" src={image} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} alt="image" />
          <Tooltip tooltipIsShow={tooltipIsShow} text="I'm Mary Chen" />
        </div>
      </div>
    </section>
  );
}

export default App;