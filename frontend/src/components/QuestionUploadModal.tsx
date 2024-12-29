import { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

interface QuestionUploadModalProps {
  open: boolean;
  onClose: () => void;
}

interface QuestionFormData {
  email:string|null|undefined;
  title: string;
  reward: string;
  text: string;
  is_text: boolean;
  content: File | null;
}

const QuestionUploadModal = ({ open, onClose }: QuestionUploadModalProps) => {
  const {currentUser} = useAuth();
  const [formData, setFormData] = useState<QuestionFormData>({
    email:currentUser?.email,
    title: '',
    reward: '',
    text: '',
    is_text: true,
    content: null,
  });
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ 
        ...prev, 
        content: file,
        is_text: false 
      }));
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setFormData(prev => ({
        ...prev,
        content: null,
        is_text: true 
      }));
      setPreviewUrl(null);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ 
      ...prev, 
      text: event.target.value 
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.reward || !formData.text) {
      alert('Please fill in all required fields: title, reward, and question text');
      return;
    }
    const response = await axios.post('http"//localhost:3000/ques/question',formData,{headers:
      {
        'Authorization':`Bearer ${currentUser?.getIdToken()}`
    }
    })
    console.log(response.status);
    if(response.status === 200){
      console.log(formData);
      console.log(currentUser);
      onClose();
    }
    else{
      onClose()
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="image">With Image</TabsTrigger>
            <TabsTrigger value="text">Without Image</TabsTrigger>
          </TabsList>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter question title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reward">Reward</Label>
              <Input
                id="reward"
                placeholder="Enter reward in ETH"
                value={formData.reward}
                onChange={(e) => setFormData(prev => ({ ...prev, reward: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="questionText">Question Text</Label>
              <Textarea
                id="questionText"
                placeholder="Type your question here..."
                className="min-h-[100px]"
                value={formData.text}
                onChange={handleTextChange}
              />
            </div>

            <TabsContent value="image" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image">Upload Image (Optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                {previewUrl && (
                  <div className="mt-4 relative w-full h-48">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </TabsContent>
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Submit Question
          </Button>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionUploadModal;