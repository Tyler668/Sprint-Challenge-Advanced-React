import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false, '');

    useEffect(() => {
        const body = document.querySelector('body');
        const cardsCont = document.querySelector('.player-container');
        const card = document.querySelectorAll('.player-card');

        if (darkMode) {
            cardsCont.classList.remove('dark-mode');
            body.classList.remove('dark-mode');
            card.forEach(card =>{
                card.classList.remove('card-dark-mode');
            })
        }
        else {
            cardsCont.classList.add('dark-mode');
            body.classList.add('dark-mode');
            card.forEach(card =>{
                card.classList.add('card-dark-mode');
            })
        }

        // darkMode ? (cardsCont.classList.remove('dark-mode'), card.classList.remove('dark-mode')) : (cardsCont.classList.add('dark-mode'), card.classList.add('dark-mode'));
    }, [darkMode]);


    return [darkMode, setDarkMode];
}

export default useDarkMode;