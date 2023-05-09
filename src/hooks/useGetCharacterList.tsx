import { useEffect, useState } from "react";
import { useRickMortyContext } from "../context/rmState";
import { listCharacters } from "../services/RMServices";

const useGetCharacterList = () => {
    const [currentPage, setCurrent] = useState(1);
    const [loading, setLoading] = useState(false);
    const {
        state: {
            characters,
            charactersLegth,
            pagesLength,
        },
        dispatch
    } = useRickMortyContext();

    useEffect(() => {
        if (!characters?.length) loadCharacters(1)
    }, [])

    /**
     * Call a service that returns the character list and the info of the character list
     * @param page page to paginate
     */
    const loadCharacters = (page: number) => {
        setLoading(true)
        listCharacters({ page: page })
            .then((res) => {
                if (res?.status === 200) {
                    if (dispatch) {
                        dispatch({
                            type: 'UPDATE_STATE',
                            payload: {
                                characters: res.data.data.characters.results,
                                charactersLegth: res.data.data.characters.info.count,
                                pagesLength: res.data.data.characters.info.pages,
                            }
                        })
                    }
                }
            })
            .catch(e => {
                console.log(e)
            })
        .finally(() => setLoading(false))
    }

    const nextPage = () => {
        setCurrent(currentPage + 1)
        loadCharacters(currentPage + 1)
    }

    const lastPage = () => {
        if (pagesLength) {
            setCurrent(pagesLength)
            loadCharacters(pagesLength)
        }
    }

    const previousPage = () => {
        setCurrent(currentPage - 1)
        loadCharacters(currentPage - 1)
    }

    const firstPage = () => {
        setCurrent(1)
        loadCharacters(1)
    }

    return {currentPage, loading, nextPage, lastPage, previousPage, firstPage, characters, charactersLegth, pagesLength}
}

export default useGetCharacterList