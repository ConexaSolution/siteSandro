import '../resoucers/styles/footer.css'
import logoIcon from '../resoucers/icons/logo.png'

const Footer = ()=>{


    return(
        <div className="footer">
            <img src={logoIcon} alt="logo" />
            <div id='infoFooter'> 
                <h3>INSTALAÇÃO, MANUTENÇÃO E CONFIGURAÇÃO</h3>
                <h4>E-mail para contato:</h4>
                <span>contato021ti@gmail.com</span>              
            </div>
        </div>
    )
}

export default Footer;