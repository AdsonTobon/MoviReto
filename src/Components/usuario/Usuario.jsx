import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Usuario() {
    const [usua, setUsua] = useState([]);
    const { id} = useParams();
    
    const url ="https://api-triatlon-urbana-users.vercel.app/usuarios"
    useEffect(() => {
        async function getData() {
          let response = await fetch(
            `${url}/${id}`
          );
          let userData = await response.json();
          setUsua(userData);
        }
        getData()
}, [id])

    return (
        <div>
            <h3 id="title">{usua.first_name}</h3>
            <img src={usua.avatar} alt={usua.first_name} />
        </div>
    )
}