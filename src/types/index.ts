
interface IUser {
    name: string
}

interface IUrl {
    small: string;
    regular: string;
}

export interface IImage {
    id: number;
    urls: IUrl;
    description: string;
    user: IUser
}