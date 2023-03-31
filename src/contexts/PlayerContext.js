import { createContext, useState } from "react";
import defaultPlayersData  from "../assets/gameData/defaultPlayers";


export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {


    const [defaultPlayers, setDefaultPlayers] = useState(defaultPlayersData);
    const [customPlayers, setCustomPlayers] = useState(null);
    const [activePlayer, setActivePlayer] = useState(null);
    const [album, setAlbum] = useState([]);

    const data = {
        defaultPlayers,

        customPlayers,
        setCustomPlayers,

        activePlayer,
        setActivePlayer,

        album,
        setAlbum
    }




    return <PlayerContext.Provider value={data} >
        {children}
    </PlayerContext.Provider>
}