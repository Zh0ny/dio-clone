import React from 'react'
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture,
    Img
} from './styles';
import { Button } from '../button';
import logo from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';

const Header = ({autenticado}) => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Img src={logo} alt="logo da DIO" onClick={() => navigate('/Home')}/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/18087360?v=4"/>
                    ) : (
                            <>
                                <MenuRight href="/home">Home</MenuRight>
                                <Button title="Entrar" onClick={() => navigate("/login")}/>
                                <Button title="Cadastrar" onClick={() => navigate("/register")}/>
                            </>
                        )
                    }
                </Row>
                
            </Container>
        </Wrapper>
    )
}

export {Header};