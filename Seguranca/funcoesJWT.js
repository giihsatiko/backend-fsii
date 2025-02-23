//funções utilizadas para gerar token de acesso (ingresso válido para acessar nossa API)
//além de verificar se a assinatura de token é válida
import jwt from 'jsonwebtoken';

//Nós não podemos manter senhas e segredos disponibilizados no código fonte
//Informações sensíveis devem ser armazenadas em variávieis de ambiente

export function assinar(usuario){
    console.log(usuario)
    const token = jwt.sign({usuario}, process.env.SEGREDO, {expiresIn: '5000s'});
    return token;
}

export function verificarAssinatura(token){
    console.log('--------------------------------------------------')
    console.log(process.env.SEGREDO, token)
    console.log('verifica', jwt.verify(token, process.env.SEGREDO))
    return jwt.verify(token, process.env.SEGREDO);
}