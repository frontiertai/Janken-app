"use client"

import { useState, useEffect, useContext } from "react";
import ChoiceButton from "./components/ChoiceButton";
import "./css/app.css";
import { useRouter } from "next/navigation";
import { JankenContext, } from "./Appprovider/page";
import ResetButton from "./components/ResetButton";
import Result from "./components/Result";

const Home = () => {

  const {userChoice,opponentChoice,userWins,botWins,setFinalresult}=useContext(JankenContext);

  const router=useRouter();


  // 数値と出し手の結びつけ
  const Hands = [
    { id: 0, method: "グー" },
    { id: 1, method: "チョキ" },
    { id: 2, method: "パー" }
  ];

  

//コンポーネント化した部分はコメントアウトをしている。
/*
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

*/

  
//Restボタン内の処理
  /*const HandleReset = () => {
    setUserWins(0);
    setResult("");
    setUserChoice(0);
    setOpponentChoice(0);
  };*/

//結果ページにリダイレクトするページ
  const HandleRedirect=()=>{
    if(userWins>botWins){
      setFinalresult("あなたの勝ち")
    }else if(userWins==botWins){
      setFinalresult("引き分け")
    }else{
      setFinalresult("負け  なんで負けたか明日まで考えといて")
    }
    
    router.push("/Result");

  
  }

  return (
    <div className="h-screen  bg-blue-900  flex flex-col justify-center place-items-center  ">
     
      <div className="font-bold bg-white px-4 py-8  rounded-lg  overflow-y-auto">
        <h1 className="flex justify-center items-center  ">ジャンケンゲーム</h1>
        <div className="flex justify-center py-5 space-x-10  ">
          <ChoiceButton label="グー" userselect={1} />
          <ChoiceButton label="チョキ" userselect={2} />
          <ChoiceButton label="パー" userselect={3} />
        </div>
      
      <div className="flex flex-col  px-7 py-7 space-y-4 ">
        <Result/>
        <div className="flex flex-col space-y-8 ">
          <h2 className="text-blue-600 text-2xl ">あなた: {userChoice > 0 ? Hands[userChoice-1].method : ""}</h2>
          <h2 className="text-green-600 text-2xl ">相手の出し手: {opponentChoice > 0 ? Hands[opponentChoice-1].method : ""}</h2>
        </div>
        <div className="flex justify-end text-2xl py-10">
          <ResetButton/>
        </div>

        {userWins>=3?(
          <a className="flex justify-center text-2xl py-3">
          <button className="bg-green-600 text-white rounded-lg px-8 py-4" onClick={HandleRedirect}>戦績を確認する</button>
          </a>
        ):(
          <a></a>
        )}
       
      </div>
      </div>
    </div>
  );
};

export default Home;
