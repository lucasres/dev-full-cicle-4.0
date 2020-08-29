import axios  from "axios";

export type UserDTO  = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

type DataUser = {
    page: number,
    per_page: number,
    total: number,
    total_pages: 2,
    data: Array<UserDTO>
}

const getUser = async () => {
    const response = await axios.get<DataUser>('https://reqres.in/api/users');
    return response.data
}

export default {
    getUser
}