'use client'
import { createContext,  useState } from "react";

type AppProviderProps={
    children:React.ReactNode
}
type History={
    id:number,
    userChoice:number,
    opponentChoice:number,
    result:string
}

type JankencontextType={
    userChoice:number;
    setUserChoice:React.Dispatch<React.SetStateAction<number>>;
    opponentChoice:number;
    setOpponentChoice:React.Dispatch<React.SetStateAction<number>>;
    userWins:number;
    setUserWins:React.Dispatch<React.SetStateAction<number>>,
    botWins:number;
    setBotWins:React.Dispatch<React.SetStateAction<number>>,
    result:string;
    setResult:React.Dispatch<React.SetStateAction<string>>
    gameCount:number;
    setGameCount:React.Dispatch<React.SetStateAction<number>>;
    winningRate:number;
    setWinningRate:React.Dispatch<React.SetStateAction<number>>;
    history:History[];
    setHistory:React.Dispatch<React.SetStateAction<History[]>>;
    newHistory:History;
    setNewHistory:React.Dispatch<React.SetStateAction<History>>;
    finalresult:string;
    setFinalresult:React.Dispatch<React.SetStateAction<string>>
    record:number;
    setRecord:React.Dispatch<React.SetStateAction<number>>;
    best:number;
    setBest:React.Dispatch<React.SetStateAction<number>>;
    retry:number;
    setRetry:React.Dispatch<React.SetStateAction<number>>;


};

const JankenContextData={
    userChoice:0,
    setUserChoice:()=>{},
    opponentChoice:0,
    setOpponentChoice:()=>{},
    userWins:0,
    setUserWins:()=>{},
    botWins:0,
    setBotWins:()=>{},
    result:"",
    setResult:()=>{},
    gameCount:0,
    setGameCount:()=>{},
    winningRate:0,
    setWinningRate:()=>{},
    history:[],
    setHistory:()=>{},
    newHistory:{id:0,userChoice:0,opponentChoice:0,result:""},
    setNewHistory:()=>{},
    finalresult:"",
    setFinalresult:()=>{},
    record:1,
    setRecord:()=>{},
    best:1,
    setBest:()=>{},
    retry:0,
    setRetry:()=>{}
}

export const JankenContext=createContext<JankencontextType>(JankenContextData);


export const AppContextProvider=({children}:AppProviderProps)=>{

    


    const[userChoice,setUserChoice]=useState<number>(0);
    const [opponentChoice, setOpponentChoice] = useState<number>(0);
    const [userWins, setUserWins] = useState<number>(0);
    const [botWins, setBotWins] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [gameCount, setGameCount] = useState<number>(0);
    const [winningRate,setWinningRate]=useState<number>(0);
    const[history,setHistory]=useState<History[]>([]);
    const[newHistory,setNewHistory]=useState<History>(
        {
            id:0,
            userChoice:0,
            opponentChoice:0,
            result:""
        });
    const [finalresult, setFinalresult] = useState<string>("");


    const [record,setRecord]=useState<number>(0);
    const[best,setBest]=useState<number>(0);
    const [retry,setRetry]=useState<number>(0);
    

    


    return(
        <JankenContext.Provider value={{userChoice,setUserChoice,opponentChoice,setOpponentChoice,userWins, setUserWins,botWins,setBotWins,result, setResult,gameCount,setGameCount,winningRate,setWinningRate,history,setHistory,newHistory,setNewHistory,finalresult, setFinalresult,record,setRecord,best,setBest,retry,setRetry}}>
            {children}
        </JankenContext.Provider>
        
    )
};


export default AppContextProvider;







