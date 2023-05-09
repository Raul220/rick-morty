/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { Button, Row, Space } from 'antd'
import { useRickMortyContext } from "../../context/rmState";
import Loader from "../Loader/Loader";
import { listCharacters } from "../../services/RMServices";
import CharacterCardComponent from "../CharacterCard/CharacterCardComponent";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './style.scss'
import useGetCharacterList from "../../hooks/useGetCharacterList";

const CharacterListComponent: FC = () => {
    const { loading, characters, charactersLegth, pagesLength, currentPage, firstPage, lastPage, nextPage, previousPage } = useGetCharacterList()

    return (
        <div className="list-container">
            <h2>Rick & Morty Characters</h2>
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