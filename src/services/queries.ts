import { IGetCharacterListVariables } from "./API";

export const graphqlQuery = (variables: IGetCharacterListVariables) => `query {
    characters(page: ${variables.page}) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }`;