import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import RickMortyReducer, { UpdateCharacterListDataAction, UpdateCharactersLengthDataAction, UpdatePagesLengthAction, UpdateStateAction } from "./rmReducer";
import { Character } from "../services/API";

export interface State {
    characters: Character[] | null,
    charactersLegth: number | null,
    pagesLength: number | null,
}

export interface Store {
    state: State,
    dispatch?: React.Dispatch<UpdateCharacterListDataAction | UpdateCharactersLengthDataAction | UpdatePagesLengthAction | UpdateStateAction>;
}

const initialState: State = {
    characters: null,
    charactersLegth: null,
    pagesLength: null
}

const RickMortyContext = createContext<Store>({ state: initialState })
export const useRickMortyContext = () => useContext(RickMortyContext);

const RickMortyState: React.FC<PropsWithChildren> = (props) => {
    const [state, dispatch] = useReducer(RickMortyReducer, initialState)

    return (
        <RickMortyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </RickMortyContext.Provider>
    )
}

export default RickMortyState;