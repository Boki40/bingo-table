import {Link} from "react-router-dom";
import {games} from "../assets/rules/jatekok"

export default function MainPage() {
    const randomSetOfGames = games.sort(() => Math.random() - 0.5).slice(0, 75).map(game => {
        const res = {...game}
        while (res.szoveg.includes("[k]")) {
            res.szoveg = res.szoveg.replace("[k]", (Math.floor(Math.random() * 3) + 1).toString())
        }
        return res
    })

    return <div className="flex flex-col w-full h-screen align-center justify-center place-items-center gap-5 bg-white">
        <h1 className="text-lg font-bold">Kattints a startra a szabályok létrehozásához</h1>
        <Link to="/game" state={{games: randomSetOfGames}}>
            <button className=" btn">Start</button>
        </Link>
    </div>
}