import React, { useState } from 'react';
import './InviteModal.css'

function InviteModal({ onClose }) {
    const [inviteLink, setInviteLink] = useState('');

    const handleGenerateLink = () => {
        const generatedLink = `https://shoppinglist.com/invite/${Math.random().toString(36).substr(2, 8)}`;
        setInviteLink(generatedLink);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Generate Invitation Link</h2>
                <button onClick={handleGenerateLink} className="generate-button">Generate</button>
                {inviteLink && (
                    <p className="invite-link">Invite Link: <span>{inviteLink}</span></p>
                )}
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
}


export default InviteModal;