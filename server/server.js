const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 5174;

app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:5173', 'http://intranethublog.net:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
}));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'seuemail@gmail.com',
    pass: 'sua_senha_ou_senha_de_aplicativo',
  },
});

app.post('/sendEmail', async (req, res) => {
  const { nome, email, phone, msg } = req.body;

  // Configurar o e-mail
  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'seuemail@gmail.com',
    subject: 'Novo formulário de contato do site',
    text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${msg}`,
  };

  // Enviar o e-mail
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Formulário enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send('Erro ao processar o formulário');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
