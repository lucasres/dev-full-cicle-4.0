import React, { useEffect, useState } from "react";
import UserService, { DataUser } from "../services/UserService";

const UserList = () => {
    const [data, setData] = useState<DataUser[]>()
    
    useEffect(()=>{
        const getUsers = async ()=>{
            const response = await UserService.getUser()
            setData(response.data)
        }
        getUsers()
    },[])

    return (
        <div>
            {data?.map(el=>(
                <p>{el.first_name} {el.last_name}</p>
            ))}
        </div>
    )
}

export default UserList