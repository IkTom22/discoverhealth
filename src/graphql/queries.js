/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDisease = /* GraphQL */ `
  query GetDisease($id: ID!) {
    getDisease(id: $id) {
      id
      name
      knownAs
      overview
      symptoms
      causes
      effects
      complications
      preventions
      medication {
        id
        name
        description
        sideEffects
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
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
        description
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
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
          diseaseID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      plantDiet {
        id
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
        createdAt
        updatedAt
      }
      plants {
        items {
          id
          family
          name
          diseaseID
          description
          caractaristics
          createdAt
          updatedAt
        }
        nextToken
      }
      tests {
        items {
          id
          name
          subject
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
export const listDiseases = /* GraphQL */ `
  query ListDiseases(
    $filter: ModelDiseaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiseases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
      nextToken
    }
  }
`;
export const getMedication = /* GraphQL */ `
  query GetMedication($id: ID!) {
    getMedication(id: $id) {
      id
      name
      description
      sideEffects
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
export const listMedications = /* GraphQL */ `
  query ListMedications(
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        sideEffects
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrgan = /* GraphQL */ `
  query GetOrgan($id: ID!) {
    getOrgan(id: $id) {
      id
      name
      description
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
export const listOrgans = /* GraphQL */ `
  query ListOrgans(
    $filter: ModelOrganFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrgans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnimalProduct = /* GraphQL */ `
  query GetAnimalProduct($id: ID!) {
    getAnimalProduct(id: $id) {
      id
      family
      name
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
      description
      animalTests {
        items {
          id
          name
          subject
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
export const listAnimalProducts = /* GraphQL */ `
  query ListAnimalProducts(
    $filter: ModelAnimalProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        family
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
        animalTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlantDiet = /* GraphQL */ `
  query GetPlantDiet($id: ID!) {
    getPlantDiet(id: $id) {
      id
      name
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPlantDiets = /* GraphQL */ `
  query ListPlantDiets(
    $filter: ModelPlantDietFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantDiets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      family
      name
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
      description
      caractaristics
      plantTests {
        items {
          id
          name
          subject
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
export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        family
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
        caractaristics
        plantTests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnimalTest = /* GraphQL */ `
  query GetAnimalTest($id: ID!) {
    getAnimalTest(id: $id) {
      id
      name
      subject
      result
      reference
      animalPdtID
      animalPdt {
        id
        family
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
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
export const listAnimalTests = /* GraphQL */ `
  query ListAnimalTests(
    $filter: ModelAnimalTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subject
        result
        reference
        animalPdtID
        animalPdt {
          id
          family
          name
          diseaseID
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      name
      subject
      result
      reference
      diseaseID
      disease {
        id
        name
        knownAs
        overview
        symptoms
        causes
        effects
        complications
        preventions
        medication {
          id
          name
          description
          sideEffects
          diseaseID
          createdAt
          updatedAt
        }
        organ {
          id
          name
          description
          diseaseID
          createdAt
          updatedAt
        }
        animalProducts {
          nextToken
        }
        plantDiet {
          id
          name
          diseaseID
          description
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subject
        result
        reference
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlantTest = /* GraphQL */ `
  query GetPlantTest($id: ID!) {
    getPlantTest(id: $id) {
      id
      name
      subject
      result
      reference
      plantID
      plant {
        id
        family
        name
        diseaseID
        disease {
          id
          name
          knownAs
          overview
          symptoms
          causes
          effects
          complications
          preventions
          createdAt
          updatedAt
        }
        description
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
export const listPlantTests = /* GraphQL */ `
  query ListPlantTests(
    $filter: ModelPlantTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subject
        result
        reference
        plantID
        plant {
          id
          family
          name
          diseaseID
          description
          caractaristics
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
