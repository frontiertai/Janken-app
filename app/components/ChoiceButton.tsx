//要件定義：ユーザージャンケンの手を決めるまた、相手側のジャンケンの手も返す

import { useEffect, useState } from "react";


interface Jankenprops{
    onUser:(user:number)=>void;
    onBot:(bot:number)=>void;
    label:string;
    userselect:number
}

const ChoiceButton=({onUser,onBot,label,userselect}:Jankenprops)=>{
    const [userChoice,setUserChoice]=useState<number>(0);
    const [opponentChoice,setOpponentChoice]=useState<number>(0);


    const Handleselect = (hand: number) => {

        console.log(hand+"handの数");
        // ユーザーの出し手の決定

        //handの数値はユーザーのクリックと同時に変更されているが、setuserChoiceにて変更が同期されていない
        setUserChoice(hand);
        onUser(userChoice)
        console.log(userChoice);

       
        
    
        // Botの出し手を出力
        const opponentNumber = Math.floor(Math.random() * 3) + 1;
        setOpponentChoice(opponentNumber);
        onBot(opponentChoice)
        console.log(opponentChoice);
      };



    return(
        <button className="px-10 py-4 bg-blue-900 text-white text-2xl rounded-lg  "onClick={()=>Handleselect(userselect)}>{label}</button>

    );
};

export default ChoiceButton