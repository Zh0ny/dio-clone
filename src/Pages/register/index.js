import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import * as yup from 'yup';
import { useState } from "react";

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleRegister, SubtitleRegister, RegisterBottomText, Wrapper, LoginText, LoginSpanText } from './styles';

const checkEmail = async (value) => {
    try{
        const response = await api.get('/users');
        const users = response.data;
        const alreadyExistUser = users.find(user => user.email === value);
        if(alreadyExistUser){
            return false;
        }
        return true;
    }catch(e){
        return false;
    }
}

const schema = yup.object(
    {   
        name: yup.string().required('Campo Obrigatório'),
        password: yup.string().min(3, 'no mínimo 3 caracteres').required('Campo Obrigatório'),
        email: yup.string().email('email não é válido').required('Campo Obrigatório').test('unique-email', 'Email já está em uso', checkEmail)
    }
).required();

const Register = () => {
    
    const navigate = useNavigate();
    const [accountCreated, setAccountCreated] = useState(false);


    const { control, handleSubmit, formState: { errors, isValid  } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const response = await api.get('/users');
            console.log(response.data);
            const users = response.data;
            const highestId = users.reduce((maxId, user) => Math.max(user.id, maxId), 0);

            const newUser = {
                id: highestId + 1,
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
            const {data} = await api.post(`/users`, newUser);
            console.log(data);
            if(data.id){
                setAccountCreated(true);
                return;
                
            }
            else{
                alert('Erro ao fazer cadastro de usuário');
            }
        }catch(e){
            alert('Erro ao fazer cadastro de usuário');
        }
    };

    return (<>

        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                {accountCreated? 
                    (<Wrapper>
                        <TitleRegister>Conta criada com sucesso</TitleRegister>
                        <SubtitleRegister>Seja bem vindo a plataforma da DIO._</SubtitleRegister>
                        <Button title="Ir para o login" variant="secondary" onClick={() => navigate('/login')}/>
                    </Wrapper>)
                    : 
                    (<Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="name"
                                control={control}
                                leftIcon={<MdPerson/>}
                                placeholder="Digite seu nome completo"
                                ErrorMessage={errors.name ? errors.name.message : null}
                            />
                            <Input
                                name="email"
                                control={control}
                                leftIcon={<MdEmail />}
                                placeholder="Digite seu email"
                                ErrorMessage={errors.email ? errors.email.message : null}
                            />
                            <Input
                                name="password"
                                control={control}
                                leftIcon={<MdLock />}
                                placeholder="Digite sua senha"
                                type="password"
                                ErrorMessage={errors.password ? errors.password.message : null}
                            />
                            <Button title="Criar uma conta" variant="secondary" type="submit" disabled={!isValid}/>
                            <RegisterBottomText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</RegisterBottomText>
                            <LoginText>Já tenho uma conta. <LoginSpanText onClick={() => navigate('/login')}>Entrar</LoginSpanText></LoginText>
                        </form>
                    </Wrapper> 
                )}
            </Column>
        </Container>
    </>);
}

export { Register };