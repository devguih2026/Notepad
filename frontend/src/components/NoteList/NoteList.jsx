import './NoteList.css'

function NoteList() {
    const notas = [
        { id: 1, titulo: "Nota 1", conteudo: "Conteúdo da nota 1" },
        { id: 2, titulo: "Nota 2", conteudo: "Conteúdo da nota 2" },
    ]

    return (
        <section className="notelist">
            {notas.map((nota) => (
                <div className="notelist-card" key={nota.id}>
                    <div className="notelist-titulo">{nota.titulo}</div>
                    <div className="notelist-conteudo">{nota.conteudo}</div>
                </div>
            ))}
        </section>
    )
}

export default NoteList