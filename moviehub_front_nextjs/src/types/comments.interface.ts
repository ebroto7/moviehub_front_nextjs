export interface CommentType {
    id: string | number,
    
    title: string,
    description: string
    ratting: number

    movieID: string | number,
    userId: string | number
    createdAt?: Date,
    updatedAt?: Date
}