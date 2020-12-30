import React from 'react';

import UserChef from '../userChef/userChef';
import user1 from '../../assets/user-1.JPG';
import user2 from '../../assets/user-2.JPG';
import user3 from '../../assets/user-3.JPG';
import './chefs.scss';


const Chefs = () => {
    return (
        <section className="chefs">
            <h3 className="chefs__heading-3 heading-3 heading-3-black">Top 3 chefs</h3>
            <div className="chefs__list">
                <UserChef userSrc={user1} userName="Kim So-eun" numCooks={344} />
                <UserChef userSrc={user2} userName="Song Joong-ki" numCooks={254} />
                <UserChef userSrc={user3} userName="Han Hyo-joo" numCooks={630} />
            </div>
        </section>
    );
}


export default Chefs;