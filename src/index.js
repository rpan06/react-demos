import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Dildongus',
    lastName: 'the Diarrhea'
}

function fullName(user){
    return `${user.firstName} ${user.lastName}`
}

const greeting = <h1>Hello {fullName(user)}!</h1>

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
