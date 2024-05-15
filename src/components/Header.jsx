import React, { useState } from 'react'
import sun from '../assets/img/light_mode.svg';
import lua from '../assets/img/dark_mode.svg';

const Header = () => {
  const body = document.querySelector('#body');
  const modeByn = body.querySelector('#js-mode');
  const [isDark, setMode] = useState(true);
  const [modeText, setModeText] = useState('Light mode');
  const [modeIcon, setModeIcon] = useState(sun);

  const handleModeChange = () => {
    if(isDark) {
      setMode(!isDark);
      setModeText('Dark mode');
      setModeIcon(lua);
      body.classList.add('light-mode');
      console.log('go to light mode');  
    } else {
      setMode(!isDark);
      setModeText('Light mode');
      setModeIcon(sun);
      body.classList.remove('light-mode');
      console.log('go to dark mode');
    }
  };


  return (
    <div className='items header'>
      <div className="wrapper">
        <h1>Where in the world?</h1>
        <button onClick={() => handleModeChange()} id="js-mode">
          <img src={modeIcon} alt={modeText} />
          {modeText}
        </button>
      </div>
    </div>
  )
}

export default Header