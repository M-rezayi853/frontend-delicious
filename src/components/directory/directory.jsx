import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemFood from '../itemFood/itemFood';
import './directory.scss';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';


const Directory = ( { sections } ) => {
    // const [sections] = useState(DIRECTORY_DATA);

    return (
        <div className="directory__list">
            {sections.map(section => {
                return (
                    <ItemFood 
                        key={section.id}
                        imgUrl={section.imgUrl}
                        title={section.title}
                        linkUrl={section.linkUrl}
                        readyText={section.readyText}
                        notReadyText={section.notReadyText}
                        notReadyClass={section.notReadyClass}
                    />
                )
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);