/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { Button, Row, Space } from 'antd'
import { useRickMortyContext } from "../../context/rmState";
import Loader from "../Loader/Loader";
import { listCharacters } from "../../services/RMServices";
import CharacterCardComponent from "../CharacterCard/CharacterCardComponent";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './style.scss'

const CharacterListComponent: FC = () => {
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
        .finally(() => setLoading(false));
    }

    const nextPage = () => {
        setCurrent(currentPage + 1);
        loadCharacters(currentPage + 1);
    }

    const lastPage = () => {
        if (pagesLength) {
            setCurrent(pagesLength);
            loadCharacters(pagesLength);
        }
    }

    const previousPage = () => {
        setCurrent(currentPage - 1);
        loadCharacters(currentPage - 1);
    }

    const firstPage = () => {
        setCurrent(1);
        loadCharacters(1);
    }

    return (
        <div className="list-container">
            <h1>Rick & Morty Characters</h1>
            {
                loading ? <Loader /> : (
                    <Space size='middle' direction="horizontal">
                        <Row justify='center'>
                            {
                                characters?.map((item, index) => (
                                    <CharacterCardComponent
                                        key={index}
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        data-tastid={`card-item-${index}`}
                                    />
                                ))
                            }

                        </Row>
                    </Space>
                )
            }

            <div className="footer">
                <p>
                    {currentPage === pagesLength ? charactersLegth : currentPage * 20} of {charactersLegth} characters
                </p>
                <Button
                    icon={<><LeftOutlined /><LeftOutlined /></>}
                    onClick={firstPage}
                    size="middle"
                    shape="round"
                    disabled={currentPage === 1}
                    data-testid='go-first-page-buttom'
                />
                <Button
                    icon={<LeftOutlined />}
                    onClick={previousPage}
                    size="middle"
                    shape="round"
                    disabled={currentPage === 1}
                    data-testid='go-previous-page-buttom'
                />
                <span className="current-page" data-testid='current-page'>
                    {currentPage} / {pagesLength}
                </span>
                <Button
                    icon={<RightOutlined />}
                    onClick={nextPage}
                    size="middle"
                    shape="round"
                    disabled={currentPage === pagesLength}
                    data-testid='go-next-page-buttom'
                />
                <Button
                    icon={<><RightOutlined /><RightOutlined /></>}
                    onClick={lastPage}
                    size="middle"
                    shape="round"
                    disabled={currentPage === pagesLength}
                    data-testid='go-last-page-buttom'
                />
            </div>
        </div>
    )
}

export default CharacterListComponent;