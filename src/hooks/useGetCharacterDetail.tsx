import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "../services/API"
import { getCharacter } from "../services/RMServices"

const useGetCharacterDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [loading, setLoading] = useState(false)
    const [character, setCharacter] = useState<Character | null>(null)

    useEffect(() => {
        loadDetail()
    }, [])

    const loadDetail = () => {
        if (id) {
            setLoading(true)
            getCharacter(parseInt(id))
                .then((res) => {
                    if (res?.status === 200) {
                        setCharacter(res.data);
                    }
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(() => setLoading(false))
        }
    }

    return { loading, character }
}

export default useGetCharacterDetail