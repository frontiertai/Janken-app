'use client'
import { JankenContext } from "@/Appprovider/page";
import { useRouter } from "next/navigation";

import { useContext} from "react";




const Modal=()=>{ 
    const{userWins,botWins,record,setFinalresult,setRetry}=useContext(JankenContext)
    const router=useRouter();

    //結果ページにリダイレクトするページ
  const HandleRedirect=()=>{
    if(userWins>botWins){
      setFinalresult("あなたの勝ち")
    }else if(userWins==botWins){
      setFinalresult("引き分け")
    }else{
      setFinalresult("負け  なんで負けたか明日まで考えといて")


     
    }
    router.push('/Result')
    
  
  }
  const HandleRetry=()=>{
    setRetry(1);
}


    return(
        <>
        <div className="bg-white  absolute w-96 h-48  -translate-x -translate-y-1/2  rounded-lg z-40">
           
            <div className="flex flex-col  items-center justify-center py-8 space-y-8  ">
                <a className=" text-xl font-bold ">
                    最大連勝数:{record}連勝!
                </a>
                <div className="space-x-4">
                    <button className="bg-blue-900 text-white rounded-md px-3 py-2 border border-gray-400 hover:bg-blue-500" onClick={HandleRedirect}>戦績を確認する</button>
                    <button className="bg-red-600 text-white rounded-md px-3 py-2 border border-gray-400 hover:bg-red-500" onClick={HandleRetry}>連勝記録を伸ばしたい</button>
                </div>
            </div>
            
        </div>
        <div className="absolute bg-black bg-opacity-50 w-full h-full z-10">

        </div>
        </>
        
    );
};


export default Modal;