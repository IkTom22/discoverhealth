import React from "react";
import { DiseasesProvider } from "./contexts/disease.context";
import DiseaseApp from "./DiseaseApp";

function App() {
  return (
    <DiseasesProvider>
      <DiseaseApp />
    </DiseasesProvider>
  );
}

export default App;
