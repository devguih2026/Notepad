{/* renders NoteList + button to create new note */}
import './Home.css'
import NoteList from '../../components/NoteList/NoteList'
import NoteForm from '../../components/NoteForm/NoteForm'


function Home() {
    return (
        <div className="home">
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Home