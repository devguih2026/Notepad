import './Header.css'  

function Header() {

  return (
    <header className="header">
        <div className="header-title">NotePad</div>
        <input className="header-search" type="text" placeholder="Search..." />
        <button className="header-new">+ New Note</button>
    </header>
  )
}

export default Header