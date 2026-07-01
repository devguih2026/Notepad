import { useState, useEffect } from 'react'
import { buscarNotas } from '../../services/notaService'

import './NoteList.css'

function NoteList({ onSelect }) {
    const [notas, setNotas] = useState([])

    useEffect(() => {
    buscarNotas().then(data => {
        setNotas(data)  
    })
}, [])

        return (
        <section className="notelist">
            {notas.map((nota) => (
                <div className="notelist-card" key={nota.id} onClick={() => onSelect(nota)}>
                    <div className="notelist-titulo">{nota.titulo}</div>
                    <div className="notelist-conteudo">{nota.conteudo}</div>
                </div>
            ))}
        </section>
    )
}

export default NoteList