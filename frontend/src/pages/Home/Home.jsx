import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import NoteList from '../../components/NoteList/NoteList'
import NoteForm from '../../components/NoteForm/NoteForm'

function Home() {
    const [notaSelecionada, setNotaSelecionada] = useState(null)

    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <NoteList onSelect={setNotaSelecionada} />
                <NoteForm nota={notaSelecionada} />
            </div>
        </div>
    )
}

export default Home