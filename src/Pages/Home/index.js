import { useNavigate  } from "react-router-dom";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import banner from "../../assets/banner.png";
import { Container, Title, TitleHighlight, TextContent } from "./styles";

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>Implemente <br/> </TitleHighlight> 
                    o seu futuro global agora.
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novodesafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="banner da DIO"/>
            </div>
        </Container>
    </>)
}

export { Home };

/*
<Button title="teste 1" onClick={() => console.log("Button clicked")}/>
        <Button variant="secondary" title="teste 2" onClick={() => console.log("Button clicked")}/>
*/