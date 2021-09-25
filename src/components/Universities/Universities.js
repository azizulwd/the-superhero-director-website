import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [member, setMember] = useState([]);

    useEffect(()=>{
        fetch('https://azizulwd.github.io/university-json/university.json')
        .then(res => res.json())
        .then(data => setUniversities(data));
    }, []);

    const addedMemebrs = (university)=>{
        const newUniversity = [...member, university];
        setMember(newUniversity);
    }

    return (
        <div className="universities_container">
            <div className="university">
                {
                    universities.map(university => <University
                        key={university.position} 
                        university={university}
                        addedMemebrs={addedMemebrs}
                        ></University>)
                }
            </div>
            <div className="right_sidebar">
                <Member member={member}></Member>
            </div>
        </div>
    );
};

export default Universities;