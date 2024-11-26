import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";


type PreviewModesProps = {
  mode: (val: number) => void
}

const PreviewModes = ({ mode } : PreviewModesProps) => {

  const [selectedMode, setSelectedMode] = useState(1)
  const handleModeChange = (val : number) => {
    mode(val)
    setSelectedMode(val)
  }
    return (
       <div className="flex gap-1">
          <Button variant="outline" className={`${selectedMode == 1 && 'border-primary text-primary bg-primary/5'}`} 
            size="sm" onClick={() => handleModeChange(1)}>
            Preview
          </Button>
          <Button variant="outline" className={`${selectedMode == 2 && 'border-primary text-primary bg-primary/5'}`} 
            size="sm" onClick={() => handleModeChange(2)}>
            Code
          </Button>
       </div>
    );
};

export default PreviewModes;
