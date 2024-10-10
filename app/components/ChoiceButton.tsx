"use client"
//要件定義：ユーザージャンケンの手を決めるまた、相手側のジャンケンの手も返す

import { useContext } from "react";
import { JankenContext } from "@/Appprovider/page";


interface Jankenprops{
    label:string;
    userselect:number
}



const ChoiceButton=({label,userselect}:Jankenprops)=>{
    const {setUserChoice,setOpponentChoice,setGameCount,gameCount}=useContext(JankenContext);


    


    const Handleselect = (hand: number) => {

        // ユーザーの出し手の決定

        //handの数値はユーザーのクリックと同時に変更されているが、setuserChoiceにて変更が同期されていない
        setUserChoice(hand);
        //console.log(userChoice);

       
        
    
        // Botの出し手を出力
        const opponentNumber = Math.floor(Math.random() * 3) + 1;
        setOpponentChoice(opponentNumber);
        //console.log(opponentChoice);
        setGameCount(gameCount+1);
      };



    return(
        <button className="px-10 py-4 bg-blue-900 text-white text-2xl rounded-lg hover:bg-blue-700  "onClick={()=>Handleselect(userselect)}>{label}</button>

    );
};

export default ChoiceButton