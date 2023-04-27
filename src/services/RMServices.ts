import axios from 'axios'
import { graphqlQuery } from './queries';
import { IGetCharacterListVariables } from './API';

const GRAPHQL_ENDPOINT = "https://rickandmortyapi.com/graphql";

export async function listCharacters(variables: IGetCharacterListVariables) {
  let response = null;
  try {
    response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query: graphqlQuery({ page: variables.page })
      }
    )
    if (response.data) {
    } else {
      response = { error: "Something wrong with characters" }
    }
  } catch (err) {
    response = { error: "Something wrong with characters" }
  }
  return response;
}