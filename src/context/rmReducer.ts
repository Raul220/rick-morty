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

export interface UpdatePagesLengthAction {
    type: 'UPDATE_PAGES_LENGTH';
    payload: number;
}

export interface UpdateStateAction {
    type: 'UPDATE_STATE';
    payload: {
        characters: Character[],
        charactersLegth: number,
        pagesLength: number
    };
}

type Action =
    | UpdateCharacterListDataAction
    | UpdateCharactersLengthDataAction
    | UpdatePagesLengthAction
    | UpdateStateAction;
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
                pagesLength: action.payload
            }
        case 'UPDATE_PAGES_LENGTH':
            return {
                ...state,
                charactersLegth: action.payload
            }
        case 'UPDATE_STATE':
            return {
                characters: action.payload.characters,
                charactersLegth: action.payload.charactersLegth,
                pagesLength: action.payload.pagesLength
            }
        default:
            return state;
    }
}

export default RickMortyReducer;