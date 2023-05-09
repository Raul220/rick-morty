import { FC, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCharacter } from '../../services/RMServices'
import Loader from '../Loader/Loader'
import { Button, Image } from 'antd'
import { Character } from '../../services/API'
import useGetCharacterDetail from '../../hooks/useGetCharacterDetail'

const CharacterDetailComponent: FC = () => {

    const { loading, character } = useGetCharacterDetail()

    return (
        <>
            {
                loading ? <Loader /> : (
                    <article
                        style={{
                            textAlign: 'center',
                            margin: '100px 33px 0 33px',
                        }}
                    >
                        <Image
                            src={character?.image}
                            width={200}
                        />
                        <p>Name: {character?.name}</p>
                        <p>Status: {character?.status}</p>
                        <p>Species: {character?.species}</p>
                        <p>Gender: {character?.gender}</p>
                        <p>Origin: {character?.origin?.name}</p>
                        <p>Last known location: {character?.location?.name}</p>
                        <p>Number of episodes appearances: {character?.episode?.length}</p>
                        <NavLink
                            to='/'
                            type="primary"
                            style={{
                                marginTop: 25
                            }}
                        >
                            <Button type='primary'>
                                Back
                            </Button>

                        </NavLink>
                    </article>
                )
            }
        </>
    )
}

export default CharacterDetailComponent;