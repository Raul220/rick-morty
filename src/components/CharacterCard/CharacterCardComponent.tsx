import { FC } from "react";
import { Card, Image } from 'antd'

interface ICharacterCard {
    name: string;
    image: string;
    id: number;
}

const CharacterCardComponent: FC<ICharacterCard> = ({ name, image, id }) => {

    return (
        <Card
            title={name}
            extra={<a href={`character/${id}`}>More</a>}
            style={{ width: 300, margin: '2.5px' }}
        >
            <Image src={image} style={{ borderRadius: '50%' }} />
        </Card>
    )

}

export default CharacterCardComponent;