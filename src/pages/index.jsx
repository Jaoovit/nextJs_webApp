import Link from 'next/link'
export default function home () {
    return (
    <div>
        <h1>Receitas</h1>
        <Link href="/bolonhesa">Bolonhesa</Link>
        <Link href="/bechamel">Bechamel</Link>
        <Link href="/pesto">Pesto</Link>
    </div>    
    )
}

