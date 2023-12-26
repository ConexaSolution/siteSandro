import { useState } from "react";

const sendMail = (emailData)=>{
    const [data, setData] = useState()
    const urlServer = import.meta.env.URL_SERVER;
    const fetchSendMail = async ()=>{        
       
        try{
            const response = await fetch(`http://021automacoes.com.br:3000/sendEmail`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            if(response.ok){
                const data = await response.json();
                setData(data)
            }else{
                throw new Error('Erro ao enviar email')
            }
        }catch(err){
            console.error('Erro ao enviar email', err);
        }
    }
    return {data, fetchSendMail}
}

export default sendMail;