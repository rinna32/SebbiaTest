export interface Category {
    id: number,
    name: string
}

export interface NewsShort {
    id: number
    title: string
    date: string
    shortDescription: string
}

export interface NewsFull extends NewsShort {
    fullDescription: string 
}