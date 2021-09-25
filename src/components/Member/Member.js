import React from 'react';
import './Member.css';

const Member = (props) => {
    console.log(props);
    const members = props.member;

    let totalBudget = 0;
    for(const addedMember of members){
        totalBudget = totalBudget + addedMember.Budget;
    }


    return (
        <div className="members">
            <h4>Member Added: {members.length}</h4>
            <h4>Total Cost: {totalBudget}</h4>
            <br/>
            <div>
                {
                    members.map(member => <li key={member.position}>{member.name}</li>)
                }
            </div>
        </div>
    );
};

export default Member;