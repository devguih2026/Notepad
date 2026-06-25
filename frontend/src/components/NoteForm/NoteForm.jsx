import { useState } from 'react'
import './NoteForm.css'

function NoteForm() {
    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')

    return (
        <section className="noteform">
            <input 
                className="noteform-titulo"
                type="text" 
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <textarea 
                className="noteform-conteudo"
                placeholder="Conteúdo..."
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
            />
            <div className="noteform-buttons">
                <button className="noteform-save">Salvar</button>
                <button className="noteform-delete">Deletar</button>
            </div>
        </section>
    )
}

export default NoteForm