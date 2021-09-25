import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './University.css';

const University = (props) => {
    // console.log(props.university);

    const {name, image, city, position, Budget} = props.university;

    const addIcon = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="single_university">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <div className="univeristy_info">
                <p><span style={{fontWeight: 'bold'}}>City: </span>{city}</p>
                <p><span style={{fontWeight: 'bold'}}>Position: </span>{position} in Bangladesh</p>
                <p><span style={{fontWeight: 'bold'}}>Budget: </span>{Budget}</p>
            </div>
            <button onClick={()=> props.addedMemebrs(props.university)}>{addIcon} Add University</button>
        </div>
    );
};

export default University;