import axios  from "axios";

export type DataUser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

type UserDTO = {
    page: number,
    per_page: number,
    total: number,
    total_pages: 2,
    data: Array<DataUser>
}

const getUser = async () => {
    const response = await axios.get<UserDTO>('https://reqres.in/api/users');
    return response.data
}

export default {
    getUser
}