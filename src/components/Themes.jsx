
import { BsSun, BsMoon} from 'react-icons/bs' ; 
import './themes.css';
import {useEffect, useState} from 'react';



const getStorageTheme = () => {
  let theme = 'dark-theme';

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
   return theme;
}

const Themes = () => { 


  const [theme, setTheme] = useState(getStorageTheme());

 const toggleTheme = () => {
  theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
}

          useEffect(() => {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
          }, [theme]);

  return (
    
    <div>
    <div className="style_switcher">
     

      <div className="theme_toggler" onClick={toggleTheme}>
       {theme === 'light-theme' ? <BsMoon/>  : <BsSun/>}
      </div>

    </div>
  </div>
    
  )
}

export default Themes
