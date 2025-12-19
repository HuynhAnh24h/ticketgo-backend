export interface IHub {
    id: number,
    name: string,
    code: string,
    location: string,
    phone?: string,
    email?: string,
    manager?: string,
    created_at?: Date
}