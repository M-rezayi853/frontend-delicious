import React, { useState } from 'react';

import ItemFood from '../itemFood/itemFood';
import DIRECTORY_DATA from './directory.data';
import './directory.scss';


const Directory = () => {
    const [sections] = useState(DIRECTORY_DATA);

    return (
        <div className="directory__list">
            {sections.map(section => {
                return (
                    <ItemFood 
                        key={section.id}
                        imgUrl={section.imgUrl}
                        title={section.title}
                        readyText={section.readyText}
                        notReadyText={section.notReadyText}
                        notReadyClass={section.notReadyClass}
                    />
                )
            })}
        </div>
    );
}


export default Directory;