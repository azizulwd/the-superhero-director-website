import React from 'react';

const University = (props) => {
    console.log(props.university);

    const {name, image, city, position, Budget} = props.university;
    return (
        <div className="university">
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p><span style={{fontWeight: 'bold'}}>City: </span>{city}</p>
            <p><span style={{fontWeight: 'bold'}}>Position: </span>{position}</p>
            <p><span style={{fontWeight: 'bold'}}>Budget: </span>{Budget}</p>
        </div>
    );
};

export default University;