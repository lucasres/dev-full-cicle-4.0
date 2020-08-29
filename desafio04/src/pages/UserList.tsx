import React, { useEffect, useState } from "react";
import UserService, { UserDTO } from "../services/UserService";

const UserList = () => {
    const [data, setData] = useState<UserDTO[]>()
    
    useEffect(()=>{
        const getUsers = async ()=>{
            const response = await UserService.getUser()
            setData(response.data)
        }
        getUsers()
    },[])

    return (
        <div className="hv-100 bg-white-gray">
            <div className="bg-blue color-white header">Listagem de Usuarios</div>
            <div className="container">
                {data?.map(el=>(
                    <div className="card-user">
                        <div className="card-user-avatar">
                            <img src={el.avatar} alt={el.first_name} />
                        </div>
                        <div className="card-user-info">
                            <p className="name">{el.first_name} {el.last_name}</p>
                            <p className="email">{el.email}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default UserList