import axios from 'axios'
import { graphqlQuery } from './queries';
import { APIResponseData, IGetCharacterListVariables } from './API';

const GRAPHQL_ENDPOINT = "https://rickandmortyapi.com/graphql";

/**
 * Service for get characters
 * @param variables object with page number wanted
 * @returns the service info with the characters in pasede page
 */
export async function listCharacters(variables: IGetCharacterListVariables) {
  let response: APIResponseData;
  try {
    response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: graphqlQuery({ page: variables.page })
      }
    )
    if (response.status === 200) {
      return response;
    } else {
      console.log('Error')
    }
  } catch (err) {
    console.log(err)
  }
}

export async function getCharacter(id: number) {
  let response;
  try {
    response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  } catch (e) {
    console.log(e)
  }
  return response;
}