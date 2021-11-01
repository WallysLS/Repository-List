import { RepositoryItem } from "./RepositoryItem";

const repositoryJs = {
    title: "Teste1",
    description: "A very cool repository",
    link: "https://github.com/WallysLS",
};

export function RepositoryList() {
    return (
        <section className="repositorylist">
            <h1>Repository list</h1>
            <ul>
                <RepositoryItem repository={repositoryJs} />
                <RepositoryItem repository={repositoryJs} />
                <RepositoryItem repository={repositoryJs} />
            </ul>
        </section>
    );
}
