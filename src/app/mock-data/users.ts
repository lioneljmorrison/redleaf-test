import { IUser } from "../models/user";

class MockUser implements IUser {
    constructor(public name: string, public email: string, public password: string) { }
}

export const MockUsers: MockUser[] = [
    new MockUser('Jon Test', 'jon@test.com', '1234567890')
]