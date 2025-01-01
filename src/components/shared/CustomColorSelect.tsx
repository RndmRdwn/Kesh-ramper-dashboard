import { useState } from "react";
import { Label } from "@/components/shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Input } from "../shadcn/ui/input";
import { Button } from "../shadcn/ui/button";
import { DefaultSelectType } from "@/constant/types/common";
import { toast } from "sonner";

type CustomColorSelectProps = {
  placeholder: string;
  label?: string;
  value: string;
  isEditable?: boolean;
  onChange: (value: string) => void;
};

export function CustomColorSelect({
  isEditable,
  placeholder,
  label,
  value,
  onChange,
}: CustomColorSelectProps) {
  // State to manage the colors list
  const [data, setData] = useState<DefaultSelectType[]>([
    { id: 1, name: "Color 1", value: "#6600CC" },
    { id: 2, name: "Color 2", value: "#0B6E4F" },
    { id: 3, name: "Color 3", value: "#FA9F42" },
    { id: 4, name: "Color 4", value: "#721817" },
  ]);

  // State for custom color input
  const [customColor, setCustomColor] = useState("");

  // Handle adding a custom color
  const addCustomColor = () => {
    if (customColor && /^#[0-9A-Fa-f]{6}$/.test(customColor)) {
      const newColor = {
        id: data.length + 1,
        name: `Custom Color`,
        value: customColor,
      };
      setData((prev) => [...prev, newColor]);
      onChange(customColor); // Set the selected value to the custom color
      setCustomColor(""); // Clear input
    } else {
        toast.error('Please enter a valid hex color code!')
    }
  };

  return (
    <>
      {!isEditable ? (
        <>
          <div>
            <h2 className="text-sm text-muted-foreground">{label}</h2>
            <Label className="text-base">{value}</Label>
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-1">
            <h2 className="text-xs text-muted-foreground">{label}</h2>
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger className="w-full text-muted-foreground">
                <SelectValue placeholder={placeholder || "Select"}>
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-md p-2 border"
                      style={{ backgroundColor: value }}
                    />
                    {value}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {data.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center gap-3">
                        <div
                          className="rounded-md w-6 h-6 border"
                          style={{ backgroundColor: item.value }}
                        />
                        {item.name}
                      </div>
                    </SelectItem>
                  ))}
                  {/* Add Custom Color Option */}
                  <div className="p-2 border-t mt-2">
                    <div className="flex items-center gap-3">
                      <Input
                        placeholder="#Code"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-full"
                      />
                      <Button onClick={addCustomColor}>Add</Button>
                    </div>
                  </div>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </>
      )}
    </>
  );
}
