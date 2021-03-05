import React from 'react'

import Player from '../player/player';
import dostDaramAudio from '../../assets/audio/Sirvan Khosravi - Doost Daram Zendegiro (UpMusic).mp3';
import fadeInAudio from '../../assets/audio/01-Faded.mp3';
import './mySelfInsta.scss';

const MySelfInsta = () => {
    return (
        <div className='mySelfInsta'>
            <div className='mySelfInsta__favText'>
                <h2>My Favorite Text: </h2>
                <p className="paragraph-2">&nbsp;"go to bed with dreams and wake up with plans."</p>
            </div>

            <div className='mySelfInsta__songs'>
                <h2>My Favorite Songs: </h2>

                <div className='mySelfInsta__song'>
                    <div className='mySelfInsta__player'>
                        <Player url={dostDaramAudio} />
                        <p>Dost daram zendgi ro</p>
                    </div>

                    <div className='mySelfInsta__player'>
                        <Player url={fadeInAudio} />
                        <p>Fade in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySelfInsta;