import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from '../../aws-exports';
import {AmplifyAuthenticator}from '@aws-amplify/ui-react';

import AddDisease from '../Disease/AddDisease'
import Container from '@material-ui/core/Container';

import '../../App.css';



Amplify.configure(awsConfig);

function Admin(){
    return (
        <AmplifyAuthenticator>
            <Container maxWidth="lg">
                
                <AddDisease />
            </Container>
        </AmplifyAuthenticator>
    )
}

export default Admin;