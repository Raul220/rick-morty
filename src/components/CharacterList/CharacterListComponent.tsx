import { FC, useEffect, useState } from "react";
import { Row } from 'antd'
import { useRickMortyContext } from "../../context/rmState";
import Loader from "../Loader/Loader";
import { listCharacters } from "../../services/RMServices";
import CharacterCardComponent from "../CharacterCard/CharacterCardComponent";

const CharacterListComponent: FC = () => {

    const {
        state: {
            characters,
            charactersLegth,
            pagesLength,
        },
        dispatch
    } = useRickMortyContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!characters?.length) loadCharacters()
    }, [characters])

    const loadCharacters = () => {
        setLoading(true)
        listCharacters({ page: 2 })
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
            .finally(() => setLoading(false));
    }

    return (
        <>
            {
                loading ? <Loader /> : (
                    <Row justify='center'>
                        {
                            characters?.map((item, index) => (
                                <CharacterCardComponent
                                    key={index}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                />
                            ))
                        }

                    </Row>
                )
            }
        </>

    )

}

export default CharacterListComponent;