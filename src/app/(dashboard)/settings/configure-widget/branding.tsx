"use client";

import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
    title: string;
};

const Branding = ({ title }: Props) => {
    const [logo, setLogo] = useState<File | null>(null);
    const [headerText, setHeaderText] = useState("");
    const [footerText, setFooterText] = useState("");

    // Handle logo upload
    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setLogo(event.target.files[0]);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-3">
            {/* Logo Upload */}

            {/* <div className="w-full flex items-center col-span-2 ">
        <Label className="w-full " htmlFor="logo-upload">
          Upload Logo
        </Label>

        {logo ? (
          <div className="">
            <Image
              src={URL.createObjectURL(logo)}
              alt="Uploaded Logo"
              width={100}
              height={100}
              className="w-16 h-16 object-cover rounded-full border"
            />
          </div>
        ) : (
          <div className="w-16 h-16 object-cover rounded-full bg-primary/10 border">
        </div>
        )}
        <input
          type="file"
          id="logo-upload"
          accept="image/*"
          onChange={handleLogoChange}
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 file:cursor-pointer hover:file:bg-blue-100"
        />
       
      </div> */}

            <div className="grid grid-cols-6 col-span-2">
              <div className="col-span-2 py-2 w-full ">
                Logo
              </div>
              <div className="col-span-4 w-full ">
                asd
              </div>
              
            </div>

            {/* Header Text */}
            <div className=" py-2 grid gap-1">
                <Label className="font-normal text-muted-foreground" htmlFor="header-text">
                    Header Text
                </Label>
                <Input
                    type="text"
                    id="header-text"
                    value={headerText}
                    onChange={(e) => setHeaderText(e.target.value)}
                    className="w-full "
                    placeholder="Enter custom header text"
                />
            </div>

            {/* Footer Text */}
            <div className="">
                <Label className="" htmlFor="footer-text">
                    Footer Text
                </Label>
                <Input
                    type="text"
                    id="footer-text"
                    value={footerText}
                    onChange={(e) => setFooterText(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
                    placeholder="Enter custom footer text"
                />
            </div>

            {/* Preview */}
            {/* <div className="border-t pt-4 mt-4">
        <h3 className="text-md font-semibold mb-2">Preview:</h3>
        <div className="flex items-center gap-2">
          {logo && (
            <Image
              src={URL.createObjectURL(logo)}
              alt="Preview Logo"
              width={400}
              height={400}
              className="w-8 h-8 object-cover rounded-full border"
            />
          )}
          <span className="text-md font-semibold">{headerText || 'Header Text'}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{footerText || 'Footer Text'}</p>
      </div> */}
        </div>
    );
};

export default Branding;
