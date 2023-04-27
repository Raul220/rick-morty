import { State, characterData } from "./rmState";

export interface UpdateCharacterListDataAction {
    type: 'UPDATE_CHARACTER_LIST';
    payload: characterData[];
}

type Action =
    | UpdateCharacterListDataAction;
const RickMortyReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'UPDATE_CHARACTER_LIST':
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}

export default RickMortyReducer;