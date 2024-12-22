import React from 'react';
import './InvitedUsers.css'

function InvitedUsers({ invitedUsers, isOwner, onRemoveUser }) {
    return (
        <div className="invited-users">
            <h3 className="invited-users-caption" style={{ fontSize: '1.1em', color: '#15105e;', textAlign: 'left',marginBottom: '10px', marginLeft: '45px'}}>
    Invited Users
</h3>
            <ul>
                {invitedUsers.map((user) => (
                    <li key={user} className="invited-user">
                        {user}
                        {isOwner && (
                            <button onClick={() => onRemoveUser(user)} className="remove-button">✕</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InvitedUsers;