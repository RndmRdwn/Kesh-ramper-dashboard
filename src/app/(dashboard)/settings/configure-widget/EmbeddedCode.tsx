'use client'

import { CodeEditor } from '@/components/codeEditor';
import { Button } from '@/components/shadcn/ui/button';
import { Label } from '@/components/shadcn/ui/label';
import { Copy } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';


const EmbeddedCode = () => {
  const [widgetCode] = useState(`
    <div id="widget-container"></div>
    <script src="https://example.com/widget.js"></script>
    <script>
      new Widget({
        clientId: "YOUR_CLIENT_ID",
        theme: {
          primaryColor: "#ff5722",
          secondaryColor: "#ffffff",
          font: "Roboto",
        },
        defaultCurrency: "USD",
        paymentMethods: ["credit_card", "bank_transfer"],
      }).render("#widget-container");
    </script>
      `);
    
      const [iframeCode] = useState(`
        <iframe
            src="https://example.com/widget?clientId=YOUR_CLIENT_ID&theme=dark"
            width="400"
            height="600"
            style="border: none;"
          ></iframe>
          `);

      const copyToClipboard = () => {
        navigator.clipboard.writeText(widgetCode);
        toast("Embed code copied to clipboard!");
      };
      const copyToClipboard2 = () => {
        navigator.clipboard.writeText(widgetCode);
        toast("Iframe Embed code copied to clipboard!");
      };

  return (
    <div>
       <div style={{  margin: "auto", padding: "0px" }}>
        <div className='flex justify-between items-center py-2'>
          <Label>Embedded Widget Code</Label>
          <Button size='icon' variant='secondary' onClick={copyToClipboard}> 
            <Copy />
          </Button>
        </div>
        <CodeEditor height={'270px'} width={'800px'} value={widgetCode}  onChange={() => {}} />
        <div className='flex justify-between items-center py-2'>
          <Label>Iframe Embed Code:</Label>
          <Button size='icon' variant='secondary' onClick={copyToClipboard2}> 
            <Copy />
          </Button>
        </div>
        <CodeEditor height={'150px'} width={'800px'} value={iframeCode}  onChange={() => {}} />
        
      </div>
    </div>
  )
}

export default EmbeddedCode