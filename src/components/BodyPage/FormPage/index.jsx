import './styles.css';


function FormePage () {
    return(
        <form className='container_form_page'>
            <div className='content_texts'>
                <label className='label'>Nome:</label>
                <input className='text' type='text' placeholder='Insita seu nome aquí' />
                <label className='label'>Sobrenome:</label>
                <input className='text' type='text' placeholder='Insira seu sobrenome aqui'/>
            </div>
            <div className='content_area'>
                <span className='label'>Área de Interesse:</span>
                <div className='content_checkboxs'>
                    <div>
                        <label>Front End</label>
                        <input type="checkbox" value="front_end" />
                    </div>

                    <div>
                        <label>Back End</label>
                        <input type="checkbox" value="back_end" />
                    </div>

                    <div>
                        <label>Banco de dados</label>
                        <input type="checkbox" value="b_g_dados" />
                    </div>
                </div>
            </div>
            <div className='content_texts'>
                <label className='label'>E-mail:</label>
                <input className='text' type="text" placeholder='Insira seu e-mail aqui'/>

                <label className='label'>Telefone:</label>
                <input className='text' type="text" placeholder='(99) 9999-9999'/>

                <label className='label'>Insita uma frase criativa aquí:</label>
                <input className='text' type="text" placeholder='Qual frase criativa você gostaria de falar? :)'/>
            </div>
            <button className='button_login'>LOGIN</button>
        </form>
    )
}

export default FormePage;