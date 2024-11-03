import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo nome="Caio Philipe" image="https://avatars.githubusercontent.com/u/18087360?v=" percentual={85}/>
                    <UserInfo nome="Caio Philipe" image="https://avatars.githubusercontent.com/u/18087360?v=" percentual={90}/>
                    <UserInfo nome="Caio Philipe" image="https://avatars.githubusercontent.com/u/18087360?v=" percentual={80}/>
                    <UserInfo nome="Caio Philipe" image="https://avatars.githubusercontent.com/u/18087360?v=" percentual={79}/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }; 