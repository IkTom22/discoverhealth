/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDisease = /* GraphQL */ `
  mutation CreateDisease(
    $input: CreateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    createDisease(input: $input, condition: $condition) {
      id
      name
      slug
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
        slug
        description
        diseaseID
        disease {
          id
          name
          slug
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
          slug
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
          slug
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
          slug
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
export const updateDisease = /* GraphQL */ `
  mutation UpdateDisease(
    $input: UpdateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    updateDisease(input: $input, condition: $condition) {
      id
      name
      slug
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
        slug
        description
        diseaseID
        disease {
          id
          name
          slug
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
          slug
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
          slug
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
          slug
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
export const deleteDisease = /* GraphQL */ `
  mutation DeleteDisease(
    $input: DeleteDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    deleteDisease(input: $input, condition: $condition) {
      id
      name
      slug
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
        slug
        description
        diseaseID
        disease {
          id
          name
          slug
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
          slug
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
          slug
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
          slug
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
export const createMedication = /* GraphQL */ `
  mutation CreateMedication(
    $input: CreateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    createMedication(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $input: UpdateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    updateMedication(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const deleteMedication = /* GraphQL */ `
  mutation DeleteMedication(
    $input: DeleteMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    deleteMedication(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const createOrgan = /* GraphQL */ `
  mutation CreateOrgan(
    $input: CreateOrganInput!
    $condition: ModelOrganConditionInput
  ) {
    createOrgan(input: $input, condition: $condition) {
      id
      name
      slug
      description
      diseaseID
      disease {
        id
        name
        slug
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
          slug
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
export const updateOrgan = /* GraphQL */ `
  mutation UpdateOrgan(
    $input: UpdateOrganInput!
    $condition: ModelOrganConditionInput
  ) {
    updateOrgan(input: $input, condition: $condition) {
      id
      name
      slug
      description
      diseaseID
      disease {
        id
        name
        slug
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
          slug
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
export const deleteOrgan = /* GraphQL */ `
  mutation DeleteOrgan(
    $input: DeleteOrganInput!
    $condition: ModelOrganConditionInput
  ) {
    deleteOrgan(input: $input, condition: $condition) {
      id
      name
      slug
      description
      diseaseID
      disease {
        id
        name
        slug
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
          slug
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
export const createAnimalProduct = /* GraphQL */ `
  mutation CreateAnimalProduct(
    $input: CreateAnimalProductInput!
    $condition: ModelAnimalProductConditionInput
  ) {
    createAnimalProduct(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const updateAnimalProduct = /* GraphQL */ `
  mutation UpdateAnimalProduct(
    $input: UpdateAnimalProductInput!
    $condition: ModelAnimalProductConditionInput
  ) {
    updateAnimalProduct(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const deleteAnimalProduct = /* GraphQL */ `
  mutation DeleteAnimalProduct(
    $input: DeleteAnimalProductInput!
    $condition: ModelAnimalProductConditionInput
  ) {
    deleteAnimalProduct(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const createPlantDiet = /* GraphQL */ `
  mutation CreatePlantDiet(
    $input: CreatePlantDietInput!
    $condition: ModelPlantDietConditionInput
  ) {
    createPlantDiet(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const updatePlantDiet = /* GraphQL */ `
  mutation UpdatePlantDiet(
    $input: UpdatePlantDietInput!
    $condition: ModelPlantDietConditionInput
  ) {
    updatePlantDiet(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const deletePlantDiet = /* GraphQL */ `
  mutation DeletePlantDiet(
    $input: DeletePlantDietInput!
    $condition: ModelPlantDietConditionInput
  ) {
    deletePlantDiet(input: $input, condition: $condition) {
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
        effects
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
          slug
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
export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
        effects
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
          slug
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
          slug
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
export const createAnimalTest = /* GraphQL */ `
  mutation CreateAnimalTest(
    $input: CreateAnimalTestInput!
    $condition: ModelAnimalTestConditionInput
  ) {
    createAnimalTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
export const updateAnimalTest = /* GraphQL */ `
  mutation UpdateAnimalTest(
    $input: UpdateAnimalTestInput!
    $condition: ModelAnimalTestConditionInput
  ) {
    updateAnimalTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
export const deleteAnimalTest = /* GraphQL */ `
  mutation DeleteAnimalTest(
    $input: DeleteAnimalTestInput!
    $condition: ModelAnimalTestConditionInput
  ) {
    deleteAnimalTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
        effects
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
          slug
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
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
        effects
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
          slug
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
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
        effects
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
          slug
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
export const createPlantTest = /* GraphQL */ `
  mutation CreatePlantTest(
    $input: CreatePlantTestInput!
    $condition: ModelPlantTestConditionInput
  ) {
    createPlantTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
export const updatePlantTest = /* GraphQL */ `
  mutation UpdatePlantTest(
    $input: UpdatePlantTestInput!
    $condition: ModelPlantTestConditionInput
  ) {
    updatePlantTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
export const deletePlantTest = /* GraphQL */ `
  mutation DeletePlantTest(
    $input: DeletePlantTestInput!
    $condition: ModelPlantTestConditionInput
  ) {
    deletePlantTest(input: $input, condition: $condition) {
      id
      name
      slug
      subject
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
