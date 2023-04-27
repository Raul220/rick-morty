import axios from 'axios'
import { graphqlQuery } from './queries';
import { APIResponseData, IGetCharacterListVariables } from './API';

const GRAPHQL_ENDPOINT = "https://rickandmortyapi.com/graphql";

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