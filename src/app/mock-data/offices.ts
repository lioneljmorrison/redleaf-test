import { IOffice } from "../models/office";

class MockOffice implements IOffice {
    constructor(public name: string, public location: string, public total_sales_ytd: number) {}
}

export const MockOffices: MockOffice[] = [
    new MockOffice('Headquarters', 'Colchester, VT', 1000000),
    new MockOffice('North-Eastern Branch', 'Hartford, CT', 700000),
    new MockOffice('Mid-Western Branch', 'Missoula, MT', 440000),
    new MockOffice('South-Western Branch 1', 'San Diego, CA', 2000000),
    new MockOffice('South-Western Branch 2', 'Las Vegas, NV', 3000000),
]