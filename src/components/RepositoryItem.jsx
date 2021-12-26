import React from "react";

export function RepositoryItem(props){
    return (
        <li>
        <strong>This repository belongs to  
            {props.coolProps ?? " Me"}
        </strong>
        <p>Forms in react</p>
        <a href="">Acessar Repositório</a>
        </li>
    )
}