import {Link} from "react-router-dom";
import {games} from "../assets/rules/jatekok"
import logo from "../assets/logo.svg"
import koccLogo from "../assets/kocc-logo.png"

export default function MainPage() {
    const randomSetOfGames = games.sort(() => Math.random() - 0.5).slice(0, 75).map(game => {
        const res = {...game}
        while (res.szoveg.includes("[k]")) {
            res.szoveg = res.szoveg.replace("[k]", (Math.floor(Math.random() * 3) + 1).toString())
        }
        return res
    })

    return <div
        className="flex flex-col w-full h-screen align-center justify-center place-items-center gap-5 bg-white bg-slate-800">
        <img src={logo} className="w-20 bg-white p-2 rounded-2xl border border-solid border-black border-2"/>
        <div className="text-white text-2xl text-center p-5 font-bold"
             style={{fontFamily: "Rubik Vinyl"}}>Ivós Danger Bingó

        </div>

        <h1 className="text-lg font-bold text-white">Kattints a startra a szabályok létrehozásához</h1>
        <Link to="/game" state={{games: randomSetOfGames}}>
            <button className=" btn">Start</button>
        </Link>
        <p className="text-sm font-bold text-white"> (powered by Kocc <img src={koccLogo} width='30px'
            className="text-center inline"/>)</p>
    </div>
}