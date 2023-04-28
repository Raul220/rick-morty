import { IGetCharacterListVariables } from "./API";

export const graphqlQuery = (variables: IGetCharacterListVariables) => `query {
    characters(page: ${variables.page}) {
      info {
        count
        pages
      }
      results {
        name
        image
        id
      }
    }
  }`;