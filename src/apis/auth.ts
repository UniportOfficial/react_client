import config from "../config";
import axios from "axios";

type SigninResult = {
    accessToken: string
    refreshToken: string
}

export async function signin(username: string, password: string) : Promise<SigninResult>{
    try {
        const result: SigninResult = await axios.post(config.signin, {username, password})
            .then(result=>result.data.data)
        return result;
    } catch(err) {
        throw err;
    }
}