import React, { useState } from 'react'

import Lissy1 from './Images/Lissy/Lissy1.jpeg'
import Lissy2 from './Images/Lissy/Lissy2.jpeg'
import Lissy3 from './Images/Lissy/Lissy3.jpeg'
import Lissy4 from './Images/Lissy/Lissy4.jpeg'
import Lissy5 from './Images/Lissy/Lissy5.jpeg'
import Lissy6 from './Images/Lissy/Lissy6.jpeg'
import Lissy7 from './Images/Lissy/Lissy7.jpeg'
import Lissy8 from './Images/Lissy/Lissy8.jpeg'
import Lissy9 from './Images/Lissy/Lissy9.jpeg'
import Lissy10 from './Images/Lissy/Lissy10.jpeg'
import Lissy11 from './Images/Lissy/Lissy11.jpeg'
import Lissy12 from './Images/Lissy/Lissy12.jpeg'

export default function Gallery() {
    const [imagesArray, setImagesArray] = useState([Lissy1, Lissy2, Lissy3, Lissy4, Lissy5, Lissy6, Lissy7, Lissy9, Lissy10, Lissy11, Lissy12]);

    return (
        <div div className='galleryContainer'>
            <div className='imageList'>
                {imagesArray.map(image => {
                    return (
                        <div className='imageWrapper'>
                            <img src={image} className='image' />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}