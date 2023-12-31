import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import koccLogo from "../assets/kocc-logo.png";
import logo from "../assets/logo.svg";
import {games, mandatoryGames} from "../assets/rules/jatekok";
import Select from "../components/Select";
import {useGameContext} from "../context/GameContext";

const DIFFICULTIES = [
    {mode: 1, min: 1, max: 3, title: "Könnyű (1-3 korty)"},
    {mode: 2, min: 3, max: 6, title: "Közepes (3-6 korty)"},
    {mode: 3, min: 6, max: 10, title: "Nehéz (6-10 korty)"},
] as const;

type DifficultyMode = (typeof DIFFICULTIES)[number]["mode"];

export default function MainPage() {
    const {setGames} = useGameContext();
    const [selectedDifficulty, setSelectedDifficulty] =
        useState<DifficultyMode>(1);

    const navigate = useNavigate();

    const randomSetOfGames = useMemo(() => {
        const {min, max} = DIFFICULTIES.find(
            (d) => d.mode == selectedDifficulty
        ) as (typeof DIFFICULTIES)[number];

        const gamesToReturn = games
            .sort(() => Math.random() - 0.5)
            .slice(0, 67);

        mandatoryGames.forEach((game) => {
            gamesToReturn.push(game)
        })

        return gamesToReturn
            .sort(() => Math.random() - 0.5)
            .map((game) => {
                const res = {...game};
                while (res.szoveg.includes("[k]")) {
                    res.szoveg = res.szoveg.replace(
                        "[k]",
                        randomNumber(min, max).toString()
                    );
                }
                return res;
            });
    }, [selectedDifficulty]);

    const handleGameStart = () => {
        setGames(randomSetOfGames);
        navigate("/game");
    };

    return (
        <div
            className="flex flex-col w-full h-screen align-center justify-center place-items-center gap-5  bg-slate-800">
            <img
                alt="bingo-logo"
                src={logo}
                className="w-20 bg-white p-2 rounded-2xl border-solid border-black border-2"
            />
            <div
                className="text-white text-2xl text-center p-5 font-bold"
                style={{fontFamily: "Rubik Vinyl"}}
            >
                Ivós Danger Bingó
            </div>

            <h1 className="text-lg font-bold text-white">
                Kattints a startra a szabályok létrehozásához
            </h1>
            <Select
                title="mode"
                label="Nehézség"
                options={DIFFICULTIES.map((entry) => ({
                    value: entry.mode,
                    label: entry.title,
                }))}
                value={selectedDifficulty}
                onChange={(_e, value) => setSelectedDifficulty(value as DifficultyMode)}
            />
            <button className="btn" onClick={handleGameStart}>
                Start
            </button>
            <p className="text-sm font-bold text-white">
                {" "}
                (powered by Kocc{" "}
                <img
                    alt="kocc-logo"
                    src={koccLogo}
                    width="30px"
                    className="text-center inline"
                />
                )
            </p>
        </div>
    );
}

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
