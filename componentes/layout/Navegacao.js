import Link from 'next/link'

export default function Navegacao() {
  return (
    <div>
      <nav className='barraNavegacao'>
        <ul>
          <li>
            <Link className='link' href="/">Home</Link>
          </li>
          <li>
            <Link className='link' href="/fase1">Fase 1</Link>
          </li>
        </ul>
      </nav>
      <main>
        
      </main>
    </div>
  )
}
