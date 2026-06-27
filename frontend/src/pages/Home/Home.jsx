import './Home.css'
import Header from '../../components/Header/Header'
import NoteList from '../../components/NoteList/NoteList'
import NoteForm from '../../components/NoteForm/NoteForm'

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <NoteList />
                <NoteForm />
            </div>
        </div>
    )
}

export default Home