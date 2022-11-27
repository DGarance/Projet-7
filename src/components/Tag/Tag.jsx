import styled from "styled-components"

export default function Tag(props){

    const TagContainer = styled.div`
    display:flex;
    width:115px;
    background: #FF6060;
    border-radius:10px;
    `
    const StyledSpan= styled.span`
    color: white;
    `

 return (
    <TagContainer>
        <StyledSpan>{props.tag}</StyledSpan>
    </TagContainer>
 )
}