import { Song } from "./song";

export class User {
    _id: String;
    firstName: String;
    lastName: String;
    phone: String;
    email: String;
    password: String;
    passwordConfirm: String;
    image: String;
    terms: boolean;
    role: any;
    favoriteSongs: Array<Song>;
}
