import React from 'react';

import UserCard from './UserCard';

const UserList = props => {
    // console.log('from UserList', props);
    return (
        <div>
            {props.userData.map((user, index) => {
                return (
                    <UserCard user={user} key={index} />
                )
            })}
        </div>
    )
}

export default UserList;