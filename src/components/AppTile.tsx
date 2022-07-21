import styled from 'styled-components'
import { Link } from "react-router-dom"

const Tile = styled.div`
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
interface AppTileProps{
    appName: string
}

const AppTile = ({appName}: AppTileProps) => {
    return (
        <Tile> 
            <Link to={`/${appName.toLowerCase().replaceAll(" ", "-")}`} >{appName}</Link>
        </Tile>
        )
}

export default AppTile;