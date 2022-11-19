import './styles.css';
import FormePage from './FormPage';

function BodyPage () {
    return(
        <div className='body_page'>
            <h1>
                BOOTCAMP DNC
            </h1>
            <div className='container_span'>
                <p>
                    Esse será um evento exclusivo para todos os alunos 
                    da DNC, que querem <span className='bg_black'>acelerar a carreira</span> com uma 
                    semana intensiva de conteúdo de mercado entre  
                </p>
                <span className='bg_black'>BACK-END, FRONT-END & BANCO DE DADOS.</span>
            </div>

            <FormePage />
        </div>
    )
}

export default BodyPage;