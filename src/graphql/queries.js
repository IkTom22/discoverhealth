/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDisease = /* GraphQL */ `
  query GetDisease($id: ID!) {
    getDisease(id: $id) {
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
        descriptions
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
          descriptions
          createdAt
          updatedAt
        }
        nextToken
      }
      plantDiet {
        id
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
        descriptions
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
          descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
      nextToken
    }
  }
`;
export const getOrgan = /* GraphQL */ `
  query GetOrgan($id: ID!) {
    getOrgan(id: $id) {
      id
      name
      slug
      descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
        slug
        descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
      descriptions
      animalTests {
        items {
          id
          name
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
        descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
      descriptions
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
        descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
      descriptions
      caractaristics
      plantTests {
        items {
          id
          name
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
        descriptions
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
        descriptions
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
          descriptions
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
          descriptions
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
          slug
          diseaseID
          descriptions
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
        descriptions
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
          descriptions
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
