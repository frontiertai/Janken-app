//
import { useContext } from "react";
import { JankenContext } from "@/Appprovider/page";

const ResetButton=()=>{

    const {setUserWins,setBotWins,setResult,setUserChoice,setOpponentChoice,setGameCount,setHistory,setNewHistory,setBest,setRecord}=useContext(JankenContext)

    const HandleReset = () => {
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

      };

      return(
        <button className="bg-red-600 text-white rounded-lg px-4 py-4" onClick={HandleReset}>リセット</button>
      );
    


};

export default ResetButton;



//Restボタン内の処理
