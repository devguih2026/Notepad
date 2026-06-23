{/* renders NoteList + button to create new note */}
import './Home.css'
import NoteList from '../../components/NoteList/NoteList'

function Home() {
    return (
        <div className="home">
            <NoteList />
        </div>
    )
}

export default Home