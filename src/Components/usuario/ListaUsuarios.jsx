import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

    const url ="https://api-triatlon-urbana-users.vercel.app/usuarios"

export default function ListaUsuarios(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function obtenerUsersIniciales() {
            let users = await obtenerUsers()
            setUsers(users)
        }
        obtenerUsersIniciales()
    }, [])

    const obtenerUsers = async () => {
        let respuesta = await fetch(url)
        let users = await respuesta.json()
        return users
    }

    
    return (
        <>
            <table border="1" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((usuario, i) => {
                        return <tr key={i}>
                            <td>{usuario.first_name}</td>
                            <td><img src={usuario.avatar} alt={usuario.first_name} /></td>
                            <td>
                            <Link to={`usuario/${usuario.id}`}>Ver</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
