import Link from 'next/link'

export default function cabecalho(props) {
    
    return (
        <header>
            <h1>{props.titulo}</h1>
            <Link href="/">Voltar</Link>
        </header>
    )
}