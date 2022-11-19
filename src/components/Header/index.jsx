import './styles.css'


function Header () {
    return(
        <header className='container_header'>
            <ul className='ul_header'>
                <li>Home</li>
                <li>Ultimas Edições</li>
                <li>Requisitos para Participar</li>
            </ul>
            <div className='continer_buton'>
                <button>Login</button>
            </div>

        </header>
    )
}

export default Header;