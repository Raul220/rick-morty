import { Character } from "../services/API";
import { State } from "./rmState";

export interface UpdateCharacterListDataAction {
    type: 'UPDATE_CHARACTER_LIST';
    payload: Character[];
}

export interface UpdateCharactersLengthDataAction {
    type: 'UPDATE_CHARACTERS_LENGTH';
    payload: number;
}

type Action =
    | UpdateCharacterListDataAction
    | UpdateCharactersLengthDataAction;
const RickMortyReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'UPDATE_CHARACTER_LIST':
            return {
                ...state,
                characters: action.payload
            }
        case 'UPDATE_CHARACTERS_LENGTH':
            return {
                ...state,
                charactersLegth: action.payload
            }
        default:
            return state;
    }
}

export default RickMortyReducer;