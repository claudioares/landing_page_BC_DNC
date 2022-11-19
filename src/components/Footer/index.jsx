import './styles.css';

function Footer () {
    return(
        <footer className='container_footer'>
            <div className='content_footer'>
                <div className='content_form_info'>
                    <strong className='school'>Escolas</strong>
                    <span>Formação em Tecnologia</span>
                    <span>Formação em Marketing</span>
                    <span>Formação em Dados</span>
                    <span>Formação em Projetos</span>
                    <span>Formação em Produtos</span>
                </div>
                <div className='content_form_info'>
                    <strong className='DNC'>Sobre a DNC</strong>
                    <span>História</span>
                    <span>Missão e Valores</span>
                    <span>Trabalhe Conosco</span>
                    <span>Conteúdo Gratuito</span>
                </div>
                <div className='content_endress_footer'>
                    <div className='endress_footer'>
                        © 2022 DTC Treinamentos & Consultoria LTDA | CNPJ: 27.995.577/0001-37 | R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
                    </div>
                </div>
            </div>
            <div className='finale_footer'>
                Termos de Uso | Política de Privacidade
            </div>
        </footer>
    )
}

export default Footer;