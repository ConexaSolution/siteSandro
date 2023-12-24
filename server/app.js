const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:5173', 'http://021automacoes.com.br','http://localhost'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
}));

const UserEmail = process.env.CONTA_EMAIL;
const senha = process.env.SENHA_EMAIL;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    
    user: UserEmail,
    pass: senha,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

app.post('/sendEmail', async (req, res) => {
  const { name, email, phone, message } = req.body;

 
  const mailOptions = {
    from: UserEmail,
    to: UserEmail,
    subject: 'Novo formulário de contato do site',
    text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
  };

 
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Formulário enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ error: 'Erro ao processar o formulário' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
