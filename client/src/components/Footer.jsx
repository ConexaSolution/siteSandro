import '../resoucers/styles/footer.css'
import logoIcon from '../resoucers/icons/logo.png'

const Footer = ()=>{


    return(
        <div className="footer">
            <img src={logoIcon} alt="logo" />
            <div id='infoFooter'> 
                <h3>INSTALAÇÃO, MANUTENÇÃO E CONFIGURAÇÃO</h3>
                <span>E-mail para contato:</span>
                <span>contato021ti@gmail.com</span>              
            </div>
        </div>
    )
}

export default Footer;