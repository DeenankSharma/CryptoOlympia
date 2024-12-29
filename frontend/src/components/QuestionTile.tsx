import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface QuestionTileProps {
  title: string
  text:string;
  imageUrl: string
  rewardEth: string
  isSolved: boolean
  onExpand: () => void
}

const QuestionTile = ({ 
  title, 
  text,
  imageUrl, 
  rewardEth, 
  isSolved, 
  onExpand 
}: QuestionTileProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden bg-card">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <Badge 
            className={`absolute top-2 right-2 ${
              isSolved ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          >
            {isSolved ? 'Solved' : 'Not Yet'}
          </Badge>
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg truncate">{title}</h3>
            <h5 className="font-semibold text-lg truncate">{text}</h5>
            <span className="text-sm font-medium">
              {rewardEth} ETH
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full hover:bg-accent"
          onClick={onExpand}
        >
          Expand
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionTile;