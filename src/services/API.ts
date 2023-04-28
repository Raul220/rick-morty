export type Character = {
    id: number,
    name: string,
    status: string | null,
    species: string | null,
    type: string | null,
    gender: string | null,
    origin: URlItem | null,
    location: URlItem | null,
    image: string,
    episode: string[] | null,
    created: string | null
}

export type URlItem = {
    name: string,
    url: string
}

export type IGetCharacterListVariables = {
    page: number
}

export type APIResponseData = {
    data: {
        data: {
            characters: {
                info: {
                    count: number,
                    pages: 42,
                },
                results : Character[],
            }
        }
    },
    status: number,
}