import { Query, QueryResult } from "pg"
import pool from "../configs/database.config"
import { User } from "../models/User.model"

export class UserRepository {
    async CreateUser(user:User): Promise<User>{
        const result = await pool.query(
            `INSERT INTO users (email, password, role, address, phone, hub) 
             VALUES ($1, $2, $3, $4, $5, $6) 
             RETURNING *`,
            [user.email, user.password, user.role, user.address, user.phone, user.hub]
        )
        return result.rows[0]
    }

    async FindAllUsers():Promise<User[]>{
        const result:QueryResult<User> =  await pool.query(`SELECT * FROM users ORDER BY id ASC`)
        return result.rows
    }

    async FindUserByEmail(email: string):Promise<User | null>{
        const result: QueryResult<User> = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
        return result.rows[0] || null
    }

    async FindUserById(id:number):Promise<User | null>{
        const result: QueryResult<User> = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
        return result.rows[0] || null
    }

    async UpdateUser(id:number, user:Partial<User>):Promise<User | null>{
        const existingUser = await this.FindUserById(id)
        if(!existingUser) return null   
        const updatedUser = {...existingUser, ...user}
        const result: QueryResult<User> = await pool.query(
            `UPDATE users SET email=$1, password=$2, role=$3, address=$4, phone=$5, hub=$6 WHERE id=$7 RETURNING *`,
            [updatedUser.email, updatedUser.password, updatedUser.role, updatedUser.address, updatedUser.phone, updatedUser.hub, id]
        )
        return result.rows[0]
    }

    async DeleteUser(id:number):Promise<boolean>{
        const result: QueryResult<User> = await pool.query(`DELETE FROM users WHERE id=$1`, [id])
        return (result.rowCount ?? 0) > 0
    }
}