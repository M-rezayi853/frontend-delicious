import React from 'react';
import { withRouter } from 'react-router-dom';

import './itemFood.scss';


const ItemFood = ( { imgUrl, title, linkUrl, readyText, notReadyText, notReadyClass, history } ) => {
    return (
        <figure className="itemFoods__show" onClick={() => history.push(linkUrl)}>
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


export default withRouter(ItemFood);