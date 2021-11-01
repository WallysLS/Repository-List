export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.title ? props.repository.title : "Default"}</strong>
            <p>{props.repository.description ? props.repository.description : "Default"}</p>
            <a href={props.repository.link ? props.repository.link : "http://localhost:8080/"}>hey</a>
        </li>
    );
}
