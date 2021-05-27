/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDisease = /* GraphQL */ `
  subscription OnCreateDisease {
    onCreateDisease {
      id
      name
      slug
      knownAs
      overview
      symptoms
      causes
      riskFactors
      complications
      preventions
      medication {
        id
        name
        slug
        description
        sideEffects
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      animalProducts {
        items {
          id
          family
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      plants {
        items {
          id
          family
          name
          slug
          diseaseID
          caractaristics
          createdAt
          updatedAt
        }
        nextToken
      }
      tests {
        items {
          id
          title
          slug
          objective
          result
          reference
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDisease = /* GraphQL */ `
  subscription OnUpdateDisease {
    onUpdateDisease {
      id
      name
      slug
      knownAs
      overview
      symptoms
      causes
      riskFactors
      complications
      preventions
      medication {
        id
        name
        slug
        description
        sideEffects
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      animalProducts {
        items {
          id
          family
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      plants {
        items {
          id
          family
          name
          slug
          diseaseID
          caractaristics
          createdAt
          updatedAt
        }
        nextToken
      }
      tests {
        items {
          id
          title
          slug
          objective
          result
          reference
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDisease = /* GraphQL */ `
  subscription OnDeleteDisease {
    onDeleteDisease {
      id
      name
      slug
      knownAs
      overview
      symptoms
      causes
      riskFactors
      complications
      preventions
      medication {
        id
        name
        slug
        description
        sideEffects
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      animalProducts {
        items {
          id
          family
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      plants {
        items {
          id
          family
          name
          slug
          diseaseID
          caractaristics
          createdAt
          updatedAt
        }
        nextToken
      }
      tests {
        items {
          id
          title
          slug
          objective
          result
          reference
          diseaseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMedication = /* GraphQL */ `
  subscription OnCreateMedication {
    onCreateMedication {
      id
      name
      slug
      description
      sideEffects
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMedication = /* GraphQL */ `
  subscription OnUpdateMedication {
    onUpdateMedication {
      id
      name
      slug
      description
      sideEffects
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMedication = /* GraphQL */ `
  subscription OnDeleteMedication {
    onDeleteMedication {
      id
      name
      slug
      description
      sideEffects
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrgan = /* GraphQL */ `
  subscription OnCreateOrgan {
    onCreateOrgan {
      id
      name
      slug
      descriptions {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrgan = /* GraphQL */ `
  subscription OnUpdateOrgan {
    onUpdateOrgan {
      id
      name
      slug
      descriptions {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrgan = /* GraphQL */ `
  subscription OnDeleteOrgan {
    onDeleteOrgan {
      id
      name
      slug
      descriptions {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrganDesc = /* GraphQL */ `
  subscription OnCreateOrganDesc {
    onCreateOrganDesc {
      id
      content
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganDesc = /* GraphQL */ `
  subscription OnUpdateOrganDesc {
    onUpdateOrganDesc {
      id
      content
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganDesc = /* GraphQL */ `
  subscription OnDeleteOrganDesc {
    onDeleteOrganDesc {
      id
      content
      organ {
        id
        name
        slug
        descriptions {
          nextToken
        }
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnimalProduct = /* GraphQL */ `
  subscription OnCreateAnimalProduct {
    onCreateAnimalProduct {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          animalProductID
          createdAt
          updatedAt
        }
        nextToken
      }
      animalTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          animalPdtID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnimalProduct = /* GraphQL */ `
  subscription OnUpdateAnimalProduct {
    onUpdateAnimalProduct {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          animalProductID
          createdAt
          updatedAt
        }
        nextToken
      }
      animalTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          animalPdtID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnimalProduct = /* GraphQL */ `
  subscription OnDeleteAnimalProduct {
    onDeleteAnimalProduct {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          animalProductID
          createdAt
          updatedAt
        }
        nextToken
      }
      animalTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          animalPdtID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnimalProductDesc = /* GraphQL */ `
  subscription OnCreateAnimalProductDesc {
    onCreateAnimalProductDesc {
      id
      content
      animalProductID
      organ {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnimalProductDesc = /* GraphQL */ `
  subscription OnUpdateAnimalProductDesc {
    onUpdateAnimalProductDesc {
      id
      content
      animalProductID
      organ {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnimalProductDesc = /* GraphQL */ `
  subscription OnDeleteAnimalProductDesc {
    onDeleteAnimalProductDesc {
      id
      content
      animalProductID
      organ {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlantDiet = /* GraphQL */ `
  subscription OnCreatePlantDiet {
    onCreatePlantDiet {
      id
      title
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          plantDietID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlantDiet = /* GraphQL */ `
  subscription OnUpdatePlantDiet {
    onUpdatePlantDiet {
      id
      title
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          plantDietID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlantDiet = /* GraphQL */ `
  subscription OnDeletePlantDiet {
    onDeletePlantDiet {
      id
      title
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          content
          plantDietID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlantDietDesc = /* GraphQL */ `
  subscription OnCreatePlantDietDesc {
    onCreatePlantDietDesc {
      id
      content
      plantDietID
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlantDietDesc = /* GraphQL */ `
  subscription OnUpdatePlantDietDesc {
    onUpdatePlantDietDesc {
      id
      content
      plantDietID
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlantDietDesc = /* GraphQL */ `
  subscription OnDeletePlantDietDesc {
    onDeletePlantDietDesc {
      id
      content
      plantDietID
      plantDiet {
        id
        title
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlant = /* GraphQL */ `
  subscription OnCreatePlant {
    onCreatePlant {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          plantID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      caractaristics
      plantTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          plantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlant = /* GraphQL */ `
  subscription OnUpdatePlant {
    onUpdatePlant {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          plantID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      caractaristics
      plantTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          plantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlant = /* GraphQL */ `
  subscription OnDeletePlant {
    onDeletePlant {
      id
      family
      name
      slug
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      descriptions {
        items {
          id
          plantID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      caractaristics
      plantTests {
        items {
          id
          title
          slug
          objective
          result
          reference
          plantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlantDesc = /* GraphQL */ `
  subscription OnCreatePlantDesc {
    onCreatePlantDesc {
      id
      plantID
      content
      Plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlantDesc = /* GraphQL */ `
  subscription OnUpdatePlantDesc {
    onUpdatePlantDesc {
      id
      plantID
      content
      Plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlantDesc = /* GraphQL */ `
  subscription OnDeletePlantDesc {
    onDeletePlantDesc {
      id
      plantID
      content
      Plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnimalTest = /* GraphQL */ `
  subscription OnCreateAnimalTest {
    onCreateAnimalTest {
      id
      title
      slug
      objective
      result
      reference
      animalPdtID
      animalPdt {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnimalTest = /* GraphQL */ `
  subscription OnUpdateAnimalTest {
    onUpdateAnimalTest {
      id
      title
      slug
      objective
      result
      reference
      animalPdtID
      animalPdt {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnimalTest = /* GraphQL */ `
  subscription OnDeleteAnimalTest {
    onDeleteAnimalTest {
      id
      title
      slug
      objective
      result
      reference
      animalPdtID
      animalPdt {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
      id
      title
      slug
      objective
      result
      reference
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
      id
      title
      slug
      objective
      result
      reference
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
      id
      title
      slug
      objective
      result
      reference
      diseaseID
      disease {
        id
        name
        slug
        knownAs
        overview
        symptoms
        causes
        riskFactors
        complications
        preventions
        medication {
          id
          name
          slug
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          slug
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          title
          slug
          diseaseID
          createdAt
          updatedAt
        }
        plants {
          nextToken
        }
        tests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlantTest = /* GraphQL */ `
  subscription OnCreatePlantTest {
    onCreatePlantTest {
      id
      title
      slug
      objective
      result
      reference
      plantID
      plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlantTest = /* GraphQL */ `
  subscription OnUpdatePlantTest {
    onUpdatePlantTest {
      id
      title
      slug
      objective
      result
      reference
      plantID
      plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlantTest = /* GraphQL */ `
  subscription OnDeletePlantTest {
    onDeletePlantTest {
      id
      title
      slug
      objective
      result
      reference
      plantID
      plant {
        id
        family
        name
        slug
        diseaseID
        disease {
          id
          name
          slug
          knownAs
          overview
          symptoms
          causes
          riskFactors
          complications
          preventions
          createdAt
          updatedAt
        }
        descriptions {
          nextToken
        }
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
