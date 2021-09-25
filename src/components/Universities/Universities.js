import React, { useEffect, useState } from 'react';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(()=>{
        fetch('https://azizulwd.github.io/university-json/university.json')
        .then(res => res.json())
        .then(data => setUniversities(data));
    }, []);

    return (
        <div className="universities_container">
            <div className="university_container">
                {
                    universities.map(university => <University
                        key={university.position} 
                        university={university}
                        ></University>)
                }
            </div>
            <div className="right_sidebar"></div>
        </div>
    );
};

export default Universities;