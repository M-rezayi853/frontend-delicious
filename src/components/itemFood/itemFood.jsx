import React from 'react';

import './itemFood.scss';


const ItemFood = ( { imgUrl, title, readyText, notReadyText, notReadyClass } ) => {
    return (
        <figure className="itemFoods__show">
            <img className="itemFoods__img" src={imgUrl} alt={title} />
            <span className="itemFoods__text itemFoods__text-1">{title}</span>
            <span className={`itemFoods__text itemFoods__text-2 ${notReadyClass}`}>{readyText}</span> 
            {   
                notReadyText.length ?
                <span className="itemFoods__text itemFoods__text-1">{notReadyText}</span>
                : null
            }
            
        </figure>
    );
}


export default ItemFood;