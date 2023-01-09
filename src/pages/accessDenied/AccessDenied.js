import React from 'react';

const AccessDenied = () => (
    <div>
        <h1>Access Denied</h1>
        <p>You are not authorized to access this page.</p>
        <a href="/login">go back to login page</a>
    </div>
);

export default AccessDenied;