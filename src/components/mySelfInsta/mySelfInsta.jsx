import React from 'react'

import Player from '../player/player';
import dostDaramAudio from '../../assets/audio/Sirvan Khosravi - Doost Daram Zendegiro (UpMusic).mp3';
import fadeInAudio from '../../assets/audio/01-Faded.mp3';
import alanWalker from '../../assets/alanWalker.jpg';
import './mySelfInsta.scss';

const MySelfInsta = () => {
    return (
        <div className='mySelfInsta'>
            <div className='mySelfInsta__songs'>
                <h2>My Favorite Songs: </h2>

                <div className='mySelfInsta__song'>
                    <div className='mySelfInsta__player'>
                        <img className='mySelfInsta__img' src={alanWalker} alt='alan walker'/>
                    </div>

                    <div className='mySelfInsta__player'>
                        <div className='mySelfInsta__box mySelfInsta__box-1'>
                            <div className="mySelfText__des">
                                <span>Alan Walker</span>
                                <span>Faded - best song 2015</span>
                            </div>
                            <Player url={fadeInAudio} />
                        </div>

                        <div className='mySelfInsta__box mySelfInsta__box-2'>
                            <div className="mySelfText__des">
                                <span>Sirvan Khosravi</span>
                                <span>Dost daram zendgi ro</span>
                            </div>
                            <Player url={dostDaramAudio} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mySelfInsta__favText'>
                <h2>My Favorite Text: </h2>
                <p className="paragraph-2">&nbsp;"go to bed with dreams and wake up with plans."</p>
            </div>
        </div>
    );
}

export default MySelfInsta;