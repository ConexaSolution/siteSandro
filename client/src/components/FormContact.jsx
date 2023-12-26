import '../resoucers/styles/formContact.css'
import MaskedInput from 'react-text-mask';
import backContact from '../resoucers/images/backContact.jpg'
import sendMail from '../scripts/fetchEmail';
import { useEffect, useState } from 'react';

const FormContact = ({ref3})=>{
    const [params, setParams] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })

    const {data, fetchSendMail} = sendMail(params)

    const handleParams = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setParams((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    useEffect(()=>{       
    },[params])
    
    const handleFecth = ()=>{
        fetchSendMail();
    }

    return(
        <div className="formContact" ref={ref3}>
            <img id='fundoContato' src={backContact}alt="contato" />
            <div className="form" id="formInsert">
                <div className='inputs' >
                    <div id='insertName' className='itemInsert'>
                        <label htmlFor='name'>Insira seu nome*</label>
                        <input value={params.name} onChange={handleParams} id='name' type='text'name='name'></input>
                    </div>
                    <div id="insertContact">
                        <div id='insertMail'className='itemInsert'>
                            <label>Insira um e-mail válido*</label>
                            <input value={params.email} name='email' onChange={handleParams}type='email'></input>
                        </div>
                        <div id='insertTell'className='itemInsert'>
                            <label>Seu número de telefone*</label>
                            <MaskedInput
                                value={params.phone}
                                name='phone'
                                onChange={handleParams}
                                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                placeholder="(99) 99999-9999"
                                required
                            />
                        </div>
                    </div>
                    <div id='insertMsg'className='itemInsert'>
                        <span>Mensagem</span>
                        <textarea value={params.message} onChange={handleParams} name='message'id='inputText'></textarea>
                        <button onClick={handleFecth}>Enviar</button>
                    </div>
                    
                </div>
            </div>
            <div className="form" id='formInfo'>
                <div className="info">
                    <h2>Fale conosco</h2>
                    <span>Envie sua mensagem preenchendo o formulário e retornaremos o contato o mais rápido possível.</span>
                </div>
                <div className="info">
                    <span>Você também poderá entrar em contato conosco pelos telefones:</span>
                    <h2>(21) 98168-5956 <img src="" alt="" /></h2>    
                    <h2>(21) 99421-6846 <img src="" alt="" /></h2>                 
                </div>

            </div>
            
        </div>
    )
}

export default FormContact;