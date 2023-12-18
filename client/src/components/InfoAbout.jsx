import '../resoucers/styles/infoAbout.css'
const InfoAbout = ()=>{
    return(
        <div className="infoAbout" >
            <div id="mission">
                <h3>Missão</h3>
                <span>
                Fornecemos Segurança, Monitoramento e Telecomunicações com ética e excelência. 
                Destacamos soluções de última geração, valorizando confiança e qualidade.
                </span>
            </div>
            <div id="vision">
                <h3>Visão</h3>
                <span>
                Buscamos ser líderes em qualidade nos processos em que atuamos, 
                estabelecendo-nos como referência na nossa região de atuação.
                </span>
            </div>
            <div id="values">
                <h3>Valores</h3>
                <span>
                Guiados por nossos valores de ética, tecnologia, inovação, 
                segurança, trabalho em equipe, satisfação, lucratividade, 
                respeito, iniciativa e responsabilidade social.
                </span>
            </div>
        </div>
    )
}

export default InfoAbout;