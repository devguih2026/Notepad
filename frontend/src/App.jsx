import './App.css'
import Header from './components/Header/Header'
import NoteList from './components/NoteList/NoteList'
import Home from './pages/Home/Home'

function App() {
 

  return (
    <div className="app">
      <Header />
      <NoteList />
      <Home />
      </div>
  )
}

export default App
