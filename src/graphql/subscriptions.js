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
export const onCreateOrgan = /* GraphQL */ `
  subscription OnCreateOrgan {
    onCreateOrgan {
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
export const onUpdateOrgan = /* GraphQL */ `
  subscription OnUpdateOrgan {
    onUpdateOrgan {
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
export const onDeleteOrgan = /* GraphQL */ `
  subscription OnDeleteOrgan {
    onDeleteOrgan {
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
export const onCreatePlantDiet = /* GraphQL */ `
  subscription OnCreatePlantDiet {
    onCreatePlantDiet {
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
export const onUpdatePlantDiet = /* GraphQL */ `
  subscription OnUpdatePlantDiet {
    onUpdatePlantDiet {
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
export const onDeletePlantDiet = /* GraphQL */ `
  subscription OnDeletePlantDiet {
    onDeletePlantDiet {
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
export const onCreateAnimalTest = /* GraphQL */ `
  subscription OnCreateAnimalTest {
    onCreateAnimalTest {
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
export const onUpdateAnimalTest = /* GraphQL */ `
  subscription OnUpdateAnimalTest {
    onUpdateAnimalTest {
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
export const onDeleteAnimalTest = /* GraphQL */ `
  subscription OnDeleteAnimalTest {
    onDeleteAnimalTest {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
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
export const onCreatePlantTest = /* GraphQL */ `
  subscription OnCreatePlantTest {
    onCreatePlantTest {
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
export const onUpdatePlantTest = /* GraphQL */ `
  subscription OnUpdatePlantTest {
    onUpdatePlantTest {
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
export const onDeletePlantTest = /* GraphQL */ `
  subscription OnDeletePlantTest {
    onDeletePlantTest {
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
