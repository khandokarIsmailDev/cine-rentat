import React from 'react';
import Star from '../../assets/star.svg'

const Rating = ({value}) => {
    const stars = Array(value).fill(Star)
    return (
        <>
        {
            stars.map((star,index)=>(
                <img src={star} key={index} width={14} height={14} alt="image" />
            ))
        }
            
        </>
    );
};

export default Rating;