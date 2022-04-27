import axios from 'axios'

export default function getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res=>{
        const users=res.data
        return users
    })
}

