import React from 'react';

const Message = ({ children, type }) => (
    <p className={`message message-${type}`}>{children}</p>
);

export default Message;
