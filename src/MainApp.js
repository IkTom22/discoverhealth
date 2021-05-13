import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import {AmplifyAuthenticator, AmplifySignOut}from '@aws-amplify/ui-react';
import MenuBar from './components/headerbar/MenuBar';
import AddDisease from './components/buttons/AddDisease';
import Container from '@material-ui/core/Container';

import './App.css';



Amplify.configure(awsConfig);

function MainApp(){
    return (
        <AmplifyAuthenticator>
            <Container maxWidth="lg">
                <MenuBar/>
                <AddDisease />
            </Container>
        </AmplifyAuthenticator>
    )
}

export default MainApp;