import {useLocation} from "react-router-dom";
import {Game} from "../types/game";
import koccLogo from "../assets/kocc-logo.png"

export default function GamePage() {
    const location = useLocation();
    const gamesToDisplay = (location.state.games as Game[]).map(game => {
        const res = {...game}
        while (res.szoveg.includes("[k]")) {
            res.szoveg = res.szoveg.replace("[k]", (Math.floor(Math.random() * 3) + 1).toString())
        }
        return res
    });


    return <div className="bg-black p-5">
        <div className="bg-black text-white text-2xl text-center p-5 font-bold font-vinyl"
             style={{fontFamily: "Rubik Vinyl"}}>Egyedi ivós Danger Bingó szabályok
            (powered by Kocc <img src={koccLogo} width='40px' className="text-center inline"/>)
        </div>
        <div
            className="bg-white  grid-cols-3 grid gap-4 p-4">

            {gamesToDisplay.map((game, index) =>
                <div
                    key={index}>
                    <h3 className="text-yellow-500 font-bold  uppercase text-lg" style={{fontFamily: "Rubik Vinyl"}}
                    >{index + 1} - {game.cimke}</h3>
                    <p className="text-black font-sans font-semibold" style={{fontFamily: "Kalam"}}>{game.szoveg}</p>
                </div>)}</div>
    </div>

}