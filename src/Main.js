import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignOut}from '@aws-amplify/ui-react';

import './App.css';

Amplify.configure(awsConfig);

function MainApp(){
    return (
        <AmplifyAuthenticator>
            <div className="App">
                <AmplifySignOut />
                <h1>WELCOME TO DISCOVER HEALTH</h1>
            </div>
        </AmplifyAuthenticator>
    )
}

export default MainApp;