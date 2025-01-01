"use client";

import { Label } from "@/components/shadcn/ui/label";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Plus, X } from "lucide-react"; // Icon from lucide-react

const Branding = () => {
  const [logo, setLogo] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle logo upload
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(event.target.files[0]);
    }
  };

  // Trigger file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Remove logo
  const handleRemoveLogo = () => {
    setLogo(null);
  };

  return (
    <div className="flex w-full gap-3">
      {/* Logo Upload */}
      <div className="w-full flex lg:flow-row flex-col justify-between gap-4 col-span-2 py-2">
        <Label className="font-normal text-muted-foreground" htmlFor="logo-upload">
          Upload Logo
        </Label>
        <div className="relative w-fit flex gap-3">
          {logo ? (
            <div className="relative lg:w-14 w-24 lg:h-14 h-24">
              <Image
                src={URL.createObjectURL(logo)}
                alt="Preview Logo"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-md border"
              />
              {/* X Icon for removing the image */}
              <button
                onClick={handleRemoveLogo}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleButtonClick}
              className="w-14 h-14 flex items-center  justify-center rounded-md border border-dashed border-muted-foreground hover:bg-muted/20"
            >
              <Plus className="w-6 h-6 text-muted-foreground" />
            </button>
          )}
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            id="logo-upload"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Branding;
