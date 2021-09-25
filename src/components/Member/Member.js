import React from 'react';

const Member = (props) => {
    console.log(props);
    const members = props.member;

    let totalBudget = 0;
    for(const addedMember of members){
        totalBudget = totalBudget + addedMember.Budget;
    }


    return (
        <div>
            <h3>Member Added: {members.length}</h3>
            <h3>Total Cost: {totalBudget}</h3>
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