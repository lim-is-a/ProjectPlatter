import styled from 'styled-components'

const StyledDiv = styled.div`
    border: 2px solid  #52bb8b;
    width:30%;
    height: 300px;
    margin: 2%;
    background:#d5ffec;
    justify-content : end;
    display: flex;
    justify-content: center;
    align-items:center;
`

const AppTile = () => {
    return (
        <StyledDiv> 
            <p>AppTile</p>   
        </StyledDiv>
        )
}

export default AppTile;