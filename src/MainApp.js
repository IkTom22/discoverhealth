import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator}from '@aws-amplify/ui-react';

import Container from '@material-ui/core/Container';

import './App.css';



Amplify.configure(awsConfig);

function MainApp(){
    return (
        <AmplifyAuthenticator>
            <Container maxWidth="lg">
                
                I am MainApp
            </Container>
        </AmplifyAuthenticator>
    )
}

export default MainApp;