//ユーザーとボットの手が変更されたらジャンケンを開始するコンポーネント
//また戦績を保存する。

import { useContext, useEffect, useState } from "react";
import { JankenContext } from "../Appprovider/page";


const Result=()=>{

  const{userChoice,opponentChoice,setUserWins,userWins,setBotWins,botWins,result,setResult,gameCount,winningRate,setWinningRate,history,setHistory,newHistory,setNewHistory}=useContext(JankenContext);
  // 数値と出し手の結びつけ
  const Hands = [
    { id: 0, method: "グー" },
    { id: 1, method: "チョキ" },
    { id: 2, method: "パー" }
  ];

  // じゃんけんのルールに関する関数 (ユーザーと相手の手を元に(string型から判断)
// judge関数の修正
const judge = (user: string, bot: string) => {
  let newResult = "";
  if (
    (user === "グー" && bot === "チョキ") ||
    (user === "チョキ" && bot === "パー") ||
    (user === "パー" && bot === "グー")
  ) {
    // 勝数を更新
    setUserWins(userWins + 1);
    newResult = "勝ち!!";
  } else if (user === bot) {
    newResult = "あいこ!!";
  } else {
    newResult = "負け!";
    setBotWins(botWins + 1);
  }

  setResult(newResult);


  setNewHistory({
    id: gameCount,
    userChoice: userChoice,
    opponentChoice: opponentChoice,
    result: newResult 
  });
};

// useEffectの修正
useEffect(() => {
  if (userChoice > 0 && opponentChoice > 0) {
    const User = Hands[userChoice - 1].method;
    const Bot = Hands[opponentChoice - 1].method;

    // じゃんけんの始動
    judge(User, Bot);
  }
}, [userChoice, opponentChoice, gameCount]);



useEffect(()=>{
  if(newHistory.result!=""){
    setHistory([...history,newHistory]);
  }
},[newHistory])




useEffect(()=>{

  const rate=Math.round(100*(userWins/gameCount)*10)/10;

  setWinningRate(rate)

},[gameCount,userWins]);




  return(
    <>
    <a className={`flex items-center justify-center  text-4xl ${result === "勝ち!!" ? "text-red-600" : result === "負け!" ? "text-blue-600" : result === "あいこ!!" ? "text-green-600" : " "}`}>
      <h2>{result}</h2>
    </a>
    <a className="flex items-center justify-center text-4xl">
          {gameCount>0?(
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <h2 className="text-blue-600 text-2xl">ユーザーの勝利数:{userWins} 勝目</h2>
                <h2 className="text-green-600 text-2xl">Botの勝利数:{botWins}勝目</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-gray-950 text-2xl">対戦数:{gameCount}</h2>
                <h2 className="text-gray-950 text-2xl">あなたの勝率:{winningRate}%</h2>
              </div>
            </div>
          ):(
            <h2 className="text-gray-950 text-2xl">出す手を選んでください</h2>
          )}
    </a>
    </>


  );
};

export default Result;





