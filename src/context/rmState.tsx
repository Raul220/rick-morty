import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import RickMortyReducer, { UpdateCharacterListDataAction } from "./rmReducer";


export interface characterData {
    name: string;
}

export interface State {
    characters: characterData[] | null,
}

export interface Store {
    state: State,
    dispatch?: React.Dispatch<UpdateCharacterListDataAction>;
}

const initialState: State = {
    characters: null,
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