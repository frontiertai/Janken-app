'use client'
import { useContext } from "react";
import { JankenContext } from "@/Appprovider/page";
import { useRouter } from "next/navigation";


const Result = () => {

  const router=useRouter();

  const { history,userWins,botWins,setUserWins,setBotWins,setResult,setUserChoice,setOpponentChoice,setGameCount,setHistory,setNewHistory,finalresult,best,setBest,setRecord} = useContext(JankenContext);

  
  const Hands = [
    { id: 0, method: "グー" },
    { id: 1, method: "チョキ" },
    { id: 2, method: "パー" }
  ];

  
  const handleClick=()=>{
    setUserWins(0);
    setBotWins(0);
    setResult("");
    setUserChoice(0);
    setOpponentChoice(0);
    setGameCount(0);
    setHistory([]);
    setBest(1);
    setRecord(1);
    setNewHistory({
        id:0,
            userChoice:0,
            opponentChoice:0,
            result:""
    });
    
    
    router.push("/")

  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-blue-900 ">
        
        <div className=" bg-white rounded-lg px-10 py-8 space-y-4 flex-col overflow-y-auto">
            <div className="font-bold space-y-2">
                <div className="flex space-x-4  justify-center text-2xl ">
                    <div>
                        あなたの勝ち数:{userWins}
                    </div>
                    <div>
                        Botの勝ち数:{botWins}
                    </div>
                    <div>
                        連勝数:{best}
                    </div>

                </div>
                <div className={`flex justify-center ${finalresult==="あなたの勝ち" ? "text-red-600":finalresult==="引き分け" ? "text-green-600":finalresult==="負け  なんで負けたか明日まで考えといて" ? "text-blue-600":""}`}>
                    {finalresult}
                </div>

            </div>

            <table className="min-w-full table-auto border-collapse border border-gray-400">
            <thead>
            <tr className="bg-gray-100">
                <th className="border border-gray-400 px-4 py-2">対戦数</th>
                <th className="border border-gray-400 px-4 py-2">あなた</th>
                <th className="border border-gray-400 px-4 py-2">Bot</th>
                <th className="border border-gray-400 px-4 py-2">勝敗</th>
            </tr>
            </thead>
            <tbody>
            {history.map((list, index) => (
                <tr key={index} className="text-center">
                <td className="border border-gray-400 px-4 py-2">{index+1}</td>
                <td className={`border border-gray-400 px-4 py-2 `}>{Hands[list.userChoice - 1].method}</td>
                <td className={`border border-gray-400 px-4 py-2 `}>{Hands[list.opponentChoice - 1].method}</td>
                <td className={`border border-gray-400 px-4 py-2 ${list.result === "勝ち!!" ? "text-red-600" : list.result === "負け!" ? "text-blue-600" : list.result === "あいこ!!" ? "text-green-600" : ""}`}>
                    {list.result}
                </td>
                </tr>
            ))}
            </tbody>
            </table>
            <div className="flex justify-end space-y-2 ">
                <button onClick={handleClick} className=" bg-blue-600 border border-gray-400  px-4 py-4 rounded-md font-bold text-white">
                    再挑戦する
                </button>
            </div>
        </div>
        


    </div>
  


        
  );
};

export default Result;
