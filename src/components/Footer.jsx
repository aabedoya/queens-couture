import { Facebook, Instagram, Room, Phone, MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}

`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Queens-Couture</Logo>
                <Desc>ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur numquam a corporis tenetur dignissimos tempore repellat? Doloremque sit repellendus magni animi, quod, laboriosam optio culpa, quaerat soluta at magnam.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Enlaces ??tiles</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Ropa Mujer</ListItem>
                    <ListItem>Ropa Hombre</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Seguir orden</ListItem>
                    <ListItem>Lista de deseos</ListItem>
                    <ListItem>T??rminos y condiciones</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> Centro Comercial Oviedo Local 1176</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+57 316 731 33 33</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>contacto@queenscouturecol.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;