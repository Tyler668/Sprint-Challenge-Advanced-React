import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const PlayerCards = (props) => {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className = 'outer'>
            <button onClick = {toggleMode} className = 'dm-Toggle'>Dark Mode</button>
            <div className='player-container'>
                {props.players.map(player => (
                    <div className='player-card'>
                        <h2>{player.name}</h2>
                        <h3>{player.country}</h3>
                        <h4>{player.searches} searches</h4>
                    </div>
                ))}
            </div>

        </div>

    );
}


export default PlayerCards;