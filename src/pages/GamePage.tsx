import {useLocation} from "react-router-dom";
import {Game} from "../types/game";
import koccLogo from "../assets/kocc-logo.png"
import {useState} from "react";

export default function GamePage() {
    const [revealedIndexes, setRevaledIndexes] = useState<number[]>([])

    const location = useLocation();
    const gamesToDisplay = (location.state.games as Game[]);


    return <div className="bg-slate-900 p-5 flex flex-col items-center relative">
        <div className="text-white text-2xl text-center p-5 font-bold"
             style={{fontFamily: "Rubik Vinyl"}}>Egyedi ivós Danger Bingó szabályok
            (powered by Kocc <img src={koccLogo} width='40px' className="text-center inline"/>)
        </div>
        <div
            className="text-white text-2xl text-center mb-2 font-bold w-full gap-2 content-baseline sticky top-0 z-10 flex-nowrap"
            style={{fontFamily: "Rubik Vinyl"}}>
            <div
                className="bg-white rounded-r-3xl text-black p-2 h-14 flex gap-2 font-sans font-semibold transition w-full flex-nowrap w-full overflow-auto justify-end border border-solid border-1 border-black overflow-hidden">
                {revealedIndexes.map((number, index) =>
                    <div
                        className="bg-yellow-600 rounded-full min-w-[2.5rem] w-[2.5rem] h-[2.5rem] text-md transition h-8 border border-solid border-black"
                        key={index}>{number + 1}</div>
                )
                }
            </div>
        </div>
        <div
            className="bg-white grid-cols-2 lg:grid-cols-3 grid gap-4 p-4">

            {gamesToDisplay.map((game, index) =>
                <div
                    className="relative"
                    key={index}>
                    <h3 className="text-yellow-500 font-bold  uppercase text-lg" style={{fontFamily: "Rubik Vinyl"}}
                    >{index + 1} - {game.cimke}</h3>
                    <div
                        className={` relative text-black transition font-semibold ${!revealedIndexes.includes(index) && "blur-md cursor-pointer"}`}
                        style={{fontFamily: "Kalam"}}>{game.szoveg}

                    </div
                    >
                    {!revealedIndexes.includes(index) &&
                        <div className="absolute font-sans font-semibold text-black top-8 right-1/4 cursor-pointer"
                             onClick={() => setRevaledIndexes(prev => [...prev, index])}
                             style={{fontFamily: "Kalam"}}>Kattints a
                            felfedéshez</div>}
                </div
                >)}</div>
    </div>

}