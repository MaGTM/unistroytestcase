export interface IParticipant {
    id: number,
    username: string,
    email: string,
    address: string
}

export interface IParticipantList {
    meta: {
        currentPage: number,
        perPage: number,
        totalPages: number
    },
    items: IParticipant[]
}

export interface INewParticipant {
    name: string,
    email: string
}
