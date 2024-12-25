// import { CardWithForm } from "./SideMenu";
import { useState } from "react";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import QuestionUploadModal from "./QuestionUploadModal";
import { useAuth } from "@/context/AuthContext";
import AlertDialog from "./LoginAlert";

export default function MarketPlace() {

  const [isUploadModalOpen,setIsUploadModalOpen] = useState<boolean>(false);
  const {currentUser} = useAuth();
  const [isAlertOpen,setIsAlertOpen] = useState<boolean>(false);


  const closeUploadQuestion = ()=>{
    setIsUploadModalOpen(false);
  }

  const closeAlertDialog = ()=>{
    setIsAlertOpen(false);
  }

  const openUploadQuestion = ()=>{
    if(currentUser){
      setIsUploadModalOpen(true)
    }
    else{
      setIsAlertOpen(true)  
    }
  }




  return (<>
    <div className="market">
      {isAlertOpen ? <div style={{"width":"50px"}}>
        <AlertDialog isAlertOpen={isAlertOpen} handleClose={closeAlertDialog} />
      </div>:null}
      {isUploadModalOpen ? <div style={{"width":"50px"}}>
        <QuestionUploadModal open={isUploadModalOpen} onClose={closeUploadQuestion} />
      </div>:null}
      <div className="absolute bottom-10 right-10">
        <InteractiveHoverButton  openUploadModal={openUploadQuestion} />
      </div>
    </div>

  </>)
}