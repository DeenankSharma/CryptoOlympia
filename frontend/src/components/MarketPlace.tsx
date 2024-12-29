import { useEffect, useState } from "react";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import QuestionUploadModal from "./QuestionUploadModal";
import { useAuth } from "@/context/AuthContext";
import AlertDialog from "./LoginAlert";
import QuestionTile from "./QuestionTile";
import axios from "axios";

interface QuestionData {
  _id: string;
  email: string;
  blob_id: string;
  is_solved: boolean;
  title: string;
  text: string;
  eth: string;
  content: string;
  is_text: boolean;
}

export default function MarketPlace() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);

  const closeUploadQuestion = () => {
    setIsUploadModalOpen(false);
  };

  const closeAlertDialog = () => {
    setIsAlertOpen(false);
  };

  const openUploadQuestion = () => {
    if (currentUser) {
      setIsUploadModalOpen(true);
    } else {
      setIsAlertOpen(true);
    }
  };

  const handleExpand = (questionId: string) => {
    console.log("Expanding question:", questionId);
  };

  const getQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/marketplace/');
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  
  return (
    <>
      <div className="market">
        <div className="questions_to_be_displayed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {questions?.map((question) => (
            <QuestionTile
              key={question._id}
              title={question.title}
              text={question.text}
              imageUrl={question.is_text ? "/api/placeholder/400/320" : question.content}
              rewardEth={question.eth}
              isSolved={question.is_solved}
              onExpand={() => handleExpand(question._id)}
            />
          ))}
        </div>

        {isAlertOpen ? (
          <div style={{ width: "50px" }}>
            <AlertDialog
              isAlertOpen={isAlertOpen}
              handleClose={closeAlertDialog}
            />
          </div>
        ) : null}

        {isUploadModalOpen ? (
          <div style={{ width: "50px" }}>
            <QuestionUploadModal
              open={isUploadModalOpen}
              onClose={closeUploadQuestion}
            />
          </div>
        ) : null}

        <div className="absolute bottom-10 right-10">
          <InteractiveHoverButton openUploadModal={openUploadQuestion} />
        </div>
      </div>
    </>
  );
}