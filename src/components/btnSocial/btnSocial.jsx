import React from 'react';

import { ReactComponent as IconInstagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as IconTelegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/github.svg';
import './btnSocial.scss';


const BtnSocial = ( { children, instagram, telegram, github } ) => {
    return (
        <div className={`btnSocial ${instagram ? 'instagram' : telegram ? 'telegram' : github ? 'github' : ''}`}>
            <div className={`btnSocial__icon ${instagram ? 'instagram' : telegram ? 'telegram' : github ? 'github' : ''}`}>
                {
                    instagram ? <IconInstagram className="btnSocial__svg"/> :
                    telegram ? <IconTelegram className="btnSocial__svg"/> :
                    github ? <IconGithub className="btnSocial__svg"/> : null
                }
            </div>

            <button className="btnSocial__btn">{children}</button>
        </div>
    );
};


export default BtnSocial;