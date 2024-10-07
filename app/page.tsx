"use client"

import { useState, useEffect } from "react";
import ChoiceButton from "./components/ChoiceButton";
import "./css/app.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const [userChoice, setUserChoice] = useState<number>(0);
  const [opponentChoice, setOpponentChoice] = useState<number>(0);
  const [userWins, setUserWins] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const router=useRouter();

  // 数値と出し手の結びつけ
  const Hands = [
    { id: 0, method: "グー" },
    { id: 1, method: "チョキ" },
    { id: 2, method: "パー" }
  ];

  

  // じゃんけんのルールに関する関数 (ユーザーと相手の手を元に(string型から判断)
  const judge = (user: string, bot: string) => {
    if (
      (user === "グー" && bot === "チョキ") ||
      (user === "チョキ" && bot === "パー") ||
      (user === "パー" && bot === "グー")
    ) {
      // 勝数を更新
      setUserWins(userWins + 1);
      // 結果を保存
      setResult("勝ち!!");
    } else if (user === bot) {
      setResult("あいこ!!");
    } else {
      setResult("負け!");
    }
  };

  // userChoice または opponentChoice が更新されたら judge を呼び出す
  useEffect(() => {
    if (userChoice > 0 && opponentChoice > 0) {
      const User = Hands[userChoice - 1].method;
      const Bot = Hands[opponentChoice - 1].method;

      // じゃんけんの始動
      judge(User, Bot);
    }
  }, [userChoice, opponentChoice]); // userChoice または opponentChoice が変更された時に実行

  

  const HandleReset = () => {
    setUserWins(0);
    setResult("");
    setUserChoice(0);
    setOpponentChoice(0);
  };

  const HandleRedirect=()=>{
    router.push("/Result");
  }

//ユーザー情報の更新
  const SelectUser=(hand:number)=>{
    setUserChoice(hand);


  }
//ボット情報の更新
  const SelectBot=(hand:number)=>{
    setOpponentChoice(hand);

  }

  return (
  
    <div className="font-bold">
      <h1 className="test">hello</h1>
      <div className="flex justify-center py-5 space-x-20  ">
      <ChoiceButton label="グー" userselect={1} onUser={SelectUser} onBot={SelectBot}/>
      <ChoiceButton label="チョキ" userselect={2} onUser={SelectUser} onBot={SelectBot}/>
      <ChoiceButton label="パー" userselect={3} onUser={SelectUser} onBot={SelectBot}/>

      </div>


   
     
      
      <div className="flex flex-col  px-7 py-7 space-y-4 ">
        <a className={`flex items-center justify-center  text-4xl ${result === "勝ち!!" ? "text-red-600" : result === "負け!" ? "text-blue-600" : result === "あいこ!!" ? "text-green-600" : ""}`}>
          <h2>{result}</h2>
        </a>
        <a className="flex items-center justify-center text-4xl">
          {userWins>0?(
            <h2 className="text-red-600">{userWins} 勝目!!</h2>
          ):(
            <h2 className="text-gray-950">勝ち星無し</h2>
          )}
        </a>
        <a className="flex flex-col space-y-8 ">
          <h2 className="text-blue-600 text-2xl ">自分の出し手: {userChoice > 0 ? Hands[userChoice-1].method : ""}</h2>
          <h2 className="text-green-600 text-2xl ">相手の出し手: {opponentChoice > 0 ? Hands[opponentChoice-1].method : ""}</h2>
        </a>
        <a className="flex justify-end text-2xl py-10">
          <button className="bg-red-600 text-white rounded-lg px-4 py-4" onClick={HandleReset}>リセット</button>
        </a>
        {userWins>=3?(
          <a className="flex justify-center text-2xl py-20">
          <button className="bg-green-600 text-white rounded-lg px-8 py-4" onClick={HandleRedirect}>戦績を確認する</button>
          </a>
        ):(
          <a></a>
        )}
       
      </div>
    </div>
  );
};

export default Home;
