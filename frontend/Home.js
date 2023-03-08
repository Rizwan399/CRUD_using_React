import { useEffect, useState } from "react"
import axios from 'axios'
import './temp.css'
import { Link, useNavigate } from "react-router-dom";
function Home() {
    const [data, setData] = useState([])
    const navigate=useNavigate();
    async function handleDelete(username) {
        const res = await axios.delete(`http://localhost:8080/delete/${username}`)
        console.log(res);
        await window.location.reload()
    }
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:8080/get")
            await setData(res.data)
        }
        fetchData()
    }, [])
    return <div>
        <div style={
            {display : 'flex'
            }
        }>
        <Link to={'/'}><h1>Home</h1></Link>
        <Link to={'/signin'}><h1>Sign In</h1></Link>
        <Link to={'/signup'}><h1>Sign Up</h1></Link>
        <Link to={'/'}><h1>Datas</h1></Link>
        </div>
        {data && data.map(user => <div className="user" key={user.username}>
            <table>
                <tr>
                <th>Username</th>
                <th>Mail</th>
                <th>Password</th>
                </tr>
                <tr>
                <td>{user.username}</td>
                <td><p>{user.mail}</p> </td>
                <td><p>{user.password}</p> </td>
            <button id='te'onClick={()=>{
                handleDelete(user.username)
            }}>Delete</button>
            <button style={{backgroundColor:'orange'}}onClick={()=>navigate('/edit',{state:{username:user.username}})}>Change</button>
                </tr>
            </table>
        </div>)}
    </div>
}

export default Home