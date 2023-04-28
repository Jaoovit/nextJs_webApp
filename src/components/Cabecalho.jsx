export default function cabecalho(props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <a href="/">Voltar</a>
        </header>
    )
}