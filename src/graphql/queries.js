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
      nextToken
    }
  }
`;
export const getOrganDesc = /* GraphQL */ `
  query GetOrganDesc($id: ID!) {
    getOrganDesc(id: $id) {
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
export const listOrganDescs = /* GraphQL */ `
  query ListOrganDescs(
    $filter: ModelOrganDescFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganDescs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        organ {
          id
          name
          slug
          diseaseID
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
        descriptions {
          nextToken
        }
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
export const getAnimalProductDesc = /* GraphQL */ `
  query GetAnimalProductDesc($id: ID!) {
    getAnimalProductDesc(id: $id) {
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
export const listAnimalProductDescs = /* GraphQL */ `
  query ListAnimalProductDescs(
    $filter: ModelAnimalProductDescFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalProductDescs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        animalProductID
        organ {
          id
          family
          name
          slug
          diseaseID
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
export const getPlantDiet = /* GraphQL */ `
  query GetPlantDiet($id: ID!) {
    getPlantDiet(id: $id) {
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
export const listPlantDiets = /* GraphQL */ `
  query ListPlantDiets(
    $filter: ModelPlantDietFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantDiets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlantDietDesc = /* GraphQL */ `
  query GetPlantDietDesc($id: ID!) {
    getPlantDietDesc(id: $id) {
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
export const listPlantDietDescs = /* GraphQL */ `
  query ListPlantDietDescs(
    $filter: ModelPlantDietDescFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantDietDescs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        plantDietID
        plantDiet {
          id
          title
          slug
          diseaseID
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
      nextToken
    }
  }
`;
export const getPlantDesc = /* GraphQL */ `
  query GetPlantDesc($id: ID!) {
    getPlantDesc(id: $id) {
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
export const listPlantDescs = /* GraphQL */ `
  query ListPlantDescs(
    $filter: ModelPlantDescFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantDescs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        plantID
        content
        Plant {
          id
          family
          name
          slug
          diseaseID
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
export const getAnimalTest = /* GraphQL */ `
  query GetAnimalTest($id: ID!) {
    getAnimalTest(id: $id) {
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
export const listAnimalTests = /* GraphQL */ `
  query ListAnimalTests(
    $filter: ModelAnimalTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const listPlantTests = /* GraphQL */ `
  query ListPlantTests(
    $filter: ModelPlantTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
