import { useEffect } from 'react';
import  useLocalStorage  from './useLocalStorage';


const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage(false, '');

    useEffect(() =>{
        const cardsCont = document.querySelector('.player-container');
        darkMode ? cardsCont.classList.remove('dark-mode') : cardsCont.classList.add('dark-mode');
      }, [darkMode]);


      return [darkMode, setDarkMode];
}

export default useDarkMode;