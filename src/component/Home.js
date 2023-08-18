import React, { useState, useEffect, useCallback } from "react";
import CardScreen from "./CardScreen";
import { usersService } from "../services/ApiServices";
import { Row} from 'antd';
import { UserData } from "../context/GlobalContext";

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getDataFromUsers()
    }, [])

    const getDataFromUsers = useCallback(async () => {
        const res = await usersService.getUsersData()
        setUsers(res.data)
    }, [users])


    return (
        <>
        <UserData.Provider value={{setUsers,users}}>
            <Row>
            {users.map((data) => {
                return (
                    
                    <CardScreen user={data}/>
                    
                )
            })
            }
            </Row>
            </UserData.Provider>
        </>
    )
}
export default Home;