import '../resoucers/styles/services.css';
import callsIcon from '../resoucers/images/calls.png';
import camsIcon from '../resoucers/images/cams.png';
import devicesIcon from '../resoucers/images/devices.png';
import monitorsIcon from '../resoucers/images/monitors.png';
import webElecIcon from '../resoucers/images/webElec.png';
import cabsIcon from '../resoucers/images/cabs.png';
const Services = ({ref2}) => {
    return(
        <div className='services' ref={ref2}>
            <div id='title'>
                <h2>SERVIÇOS</h2>
                <span>Conheça nosso portifólio de serviços</span>
            </div>
            <div className="containerServices">
                <div className='optServices' id='containerSeg'>                    
                    <span><h3>SEGURANÇA</h3></span>
                    <div className='itemsSeg'>
                        <div className='itemServices'>
                            <div><img src={monitorsIcon} alt="" /></div>
                            <div className="infoServices">
                                <h3>CFTV</h3>
                                <span>Você pode monitorar seu patrimônio de qualquer lugar e a qualquer momento por meio de uma conexão online. Oferecemos vigilância confiável em todas as condições climáticas.
                                </span>
                            </div>
                        </div>
                        <div className='itemServices'>
                            <div><img src={camsIcon} alt="" /></div>
                            <div className="infoServices">
                                <h3>MONITORAMENTO 24h DE SISTEMAS DE ALARME/CÂMERAS</h3>
                                <span>
                                Avanço na segurança preventiva. Sistemas em residências ou empresas conectados à central de monitoramento por internet/gprs enviam sinais continuamente. Nossa equipe treinada identifica e antecipa situações de risco ao patrimônio ou vida dos clientes.
                                </span>
                            </div>
                        </div>
                        <div className='itemServices'>                                
                                <div><img src={webElecIcon}alt="" /></div>
                                <div className="infoServices">
                                    <h3>Alarme, Cerca elétrica e Concertina</h3>
                                    <span>Proteja todo o perímetro do seu patrimônio com integração opcional à central de alarme. Quando acionada, a sirene alerta imediatamente a equipe de monitoramento.
                                    </span>
                                </div>
                            </div>
                            <div className='itemServices'>
                                <div><img src={devicesIcon}alt="" /></div>
                                <div className="infoServices">
                                    <h3>Fechaduras Elétricas, Biométricas e com senha</h3>
                                    <span>Afixadas nas portas, permitem acesso via chaveiro, cartão, senhas, digital e aplicativos móveis. Amplamente usado em hotéis, condomínios e empresas, ganha espaço nas residências pela praticidade e segurança, eliminando a necessidade de chaves e preocupações com esquecimentos ou portas abertas.</span>
                                </div>
                            </div>                    
                        </div>                   
                </div>  

                <div className='optServices' id='containerTel'>                    
                    <span><h3>TELECOMUNICAÇÕES</h3></span>
                    <div className='itemsSeg'>
                        <div className='itemServices'>
                            <img src={callsIcon} alt=""/>
                            <div className="infoServices">
                                <h3>Interfonia, Vídeo Porteiro e PABX</h3>
                                <span>Soluções completas em interfonia residencial, coletiva e vídeo porteiro para comunicação eficaz entre o interior e exterior de residências, apartamentos e empresas, proporcionando comodidade e segurança. O PABX permite chamadas externas simultâneas para todos os ramais da empresa, com linhas conectadas facilitando chamadas gratuitas entre os ramais internos.</span>
                            </div>                        
                        </div>
                        <div className='itemServices'>
                            <div><img src={cabsIcon} alt="" /></div>
                            <div className="infoServices" id='cab'>
                                <h3>Cabeamento Estruturado</h3>
                                <span>
                                    <p>-Desenvolvimento de projetos WAN/LAN;</p>
                                    <p>-Instalação de redes de computadores;</p>
                                    <p>-Fusão (emenda) de fibra ótica;</p>
                                    <p>-Instalação e configuração de dispositivos de rede;</p>
                                    <p>-Certificação de cabeamento estruturado CAT 5e, CAT 6 e CAT 6A;</p>
                                    <p>-Montagem e organização de racks;</p>
                                    <p>-Reestruturação de redes de computadores.</p>
                                </span>
                            </div>
                        </div>
                    </div>                   
                </div> 
            </div>
        </div>
    )
}

export default Services;