import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import * as yup from 'yup';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object(
    {
        password: yup.string().min(3, 'no mínimo 3 caracteres').required('Campo Obrigatório'),
        email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    }
).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid  } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&password=${formData.password}`);
            console.log(data);
            if(data.length && data[0].id && data[0].password === formData.password){
                navigate('/feed') 
                return
            }
            else{
                alert('Usuário ou senha inválido')
            }
        }catch(e){
            alert('Erro ao fazer login');
        }
    };

    console.log(isValid, 'errors', errors.password ? errors.password.message : null);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input control={control} ErrorMessage={errors.email ? errors.email.message : null} placeholder="E-mail" leftIcon={<MdEmail />} name="email" />
                    <Input control={control} ErrorMessage={errors.password ? errors.password.message : null} type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText onClick={() => alert("Chora bebê !!")}>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={() => navigate('/register')}>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };

/*
<Button title="teste 1" onClick={() => console.log("Button clicked")}/>
        <Button variant="secondary" title="teste 2" onClick={() => console.log("Button clicked")}/>
*/