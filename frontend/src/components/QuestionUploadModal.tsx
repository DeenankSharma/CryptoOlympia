import { useState } from 'react';
import {
  Dialog,
  DialogContent,
//   DialogHeader,
//   DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/context/AuthContext';
// import { useAuth } from '@/context/AuthContext';

interface QuestionUploadModalProps {
  open: boolean;
  onClose: () => void;
}

interface QuestionFormData {
  title: string;
  reward: string;
  content: string | File | null;
}

const QuestionUploadModal = ({ open, onClose }: QuestionUploadModalProps) => {
  const [formData, setFormData] = useState<QuestionFormData>({
    title: '',
    reward: '',
    content: null,
  });
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const {currentUser} = useAuth();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, content: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, content: event.target.value }));
    setPreviewUrl(null);
  };

  const handleSubmit = () => {
    console.log(formData);
    console.log(currentUser)
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="image">Image Question</TabsTrigger>
            <TabsTrigger value="text">Text Question</TabsTrigger>
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

            <TabsContent value="image" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
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

            <TabsContent value="text" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="question">Question Text</Label>
                <Textarea
                  id="question"
                  placeholder="Type your question here..."
                  className="min-h-[100px]"
                  onChange={handleTextChange}
                />
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