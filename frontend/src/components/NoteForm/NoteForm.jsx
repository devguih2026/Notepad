import { useState, useEffect } from 'react'
import './NoteForm.css'
import { atualizarNota } from '../../services/notaService'
import { deletarNota } from '../../services/notaService'

function NoteForm({ nota }) {
    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')

    useEffect(() => {
        if (nota) {
            setTitulo(nota.titulo)
            setConteudo(nota.conteudo)
        }
    }, [nota])

    async function handleSalvar() {
    // call atualizarNota here
    atualizarNota(nota.id, { titulo, conteudo })
}

    async function handleDeletar() {
        // call deletarNota here
        deletarNota(nota.id)
    }

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
                <button className="noteform-save" onClick={handleSalvar}>Salvar</button>
                <button className="noteform-delete" onClick={handleDeletar}>Deletar</button>
            </div>
        </section>
    )  
}

export default NoteForm