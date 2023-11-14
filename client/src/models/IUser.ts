export interface IUser { 
        id: string,
        email: string,
        password?: string,
        role?: string,
        createAt: Date,
        updatedAt: Date
}