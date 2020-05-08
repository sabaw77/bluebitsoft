export class UserInterface {
    _id: string;
    index: number;
    picture: string;
    age: number;
    name: string;
    gender: string;
    favoriteFruit: string;
}
export class UserListInterface {
    list: UserInterface[];
    length: number
}