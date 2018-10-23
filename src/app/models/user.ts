// Added password to the interface as an optional string.
// Also made name optional so that it could be used for Login

export interface IUser {
    name?: string;
    email: string;
    password?: string;
}
