export interface User {
    id: number
    email: string
    password: string
    role?: string
    address?: string
    phone?: string
    hub?: string
    created_at?: Date
}