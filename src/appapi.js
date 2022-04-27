import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function Appapi() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://random-data-api.com/api/color/random_color').then((res) => {
           
            setUsers(res.data)

        }).catch(() => {
            console.log("deu erro")
        })
    }, [])

    return (

        <div>
            <p>{users.id + " " + users.color_name}</p>
        </div>


    );
}