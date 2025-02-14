export declare function mockUsers(length: number): {
    id: any;
    name: any;
    firstName: any;
    lastName: any;
    avatar: any;
    city: any;
    street: any;
    postcode: any;
    email: any;
    phone: any;
    gender: "female" | "male";
    age: number;
    stars: number;
    followers: number;
    rating: number;
    progress: number;
    amount: any;
}[];
export declare function mockTreeData(options: {
    limits: number[];
    labels: string | string[] | ((layer: number, value: string, faker: any) => string);
    getRowData?: (layer: number, value: string) => any[];
}): never[];
