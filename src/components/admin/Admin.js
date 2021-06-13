import React from "react";
import Amplify from "aws-amplify";
import awsConfig from "../../aws-exports";
import Container from "@material-ui/core/Container";
import AddDisease from "../Disease/Add/AddDisease";
import DiseaseLists from "../Disease/Lists/DiseaseLists";
import "../../App.css";

Amplify.configure(awsConfig);

function Admin() {
  return (
    <Container maxWidth="lg">
      <AddDisease />
      <DiseaseLists />
    </Container>
  );
}

export default Admin;
