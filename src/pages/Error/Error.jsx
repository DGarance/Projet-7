import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Error(){

    const ErrorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;`

    const ErrorTitle = styled.h1`
    font-size:288px;
    color:#FF6060;
    `
    const ErrorText = styled.p`
    top:30px;
    color:#FF6060;
    `

    return(
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </ErrorContainer>
    )
}