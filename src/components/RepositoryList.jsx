import React from "react";
import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react";

//https://api.github.com/users/WallysLS/repos

export function RepositoryList(){
    const [repositories,setRepositories] = useState([]);
    
    useEffect(() => {}, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
             <RepositoryItem coolProps = " Naruto" />
             <RepositoryItem />
             <RepositoryItem />
            </ul>
        </section>
    )
}