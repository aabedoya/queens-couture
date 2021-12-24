import styled from "styled-components"

const Container = styled.div`
 height: 30px;
 background-color: black;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 500;
`
const Announcement = () => {
    return (
        <div>
            <Container>
                -- Super oferta de fin de año en todos los productos de nuestra tienda 50% --
            </Container>
        </div>
    )
}

export default Announcement
