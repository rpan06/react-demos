import React from 'react';
import dog from '../assets/images/Dog_CTA_Desktop_HeroImage.jpg'

export default props => {
    const styles={
        color: 'green',
    }
    return (
        <div>
            <h1 style={styles}>component 3</h1>
            <img src={dog} alt=""/>
        </div>
    )
}
