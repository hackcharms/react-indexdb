export interface ITodo{
    id: string | number,
    title: string,
    description: string,
    createdAt?:string|Date,
    updatedAt?:string|Date,
}