import React, { useState, useEffect } from 'react';

import { ReactComponent as PlayIcon } from '../../assets/icons/play2.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import './player.scss';

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        }
    }, [audio]);
    
    return ([playing, toggle]);
}

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className='player'>
            <button onClick={toggle}>{playing ? <PauseIcon className='player__icon' /> : <PlayIcon className='player__icon' />}</button>
        </div>
    );
}

export default Player;