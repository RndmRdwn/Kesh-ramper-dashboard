'use client'

import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Import a theme for syntax highlighting


const Authentication = () => {

  const apiKeyExample = 'YOUR_API_KEY: kf_test_12345abcdef67890';
  const apiKeyExample2 = 'Authorization: Bearer YOUR_API_KEY';
  const apiKeyExample3 = `GET https://api.keshflip-pay.com/v1/transactions
Authorization: Bearer kf_test_12345abcdef67890`;

  // Highlight the code using highlight.js
  const highlightedCode = (value : string) => {
    return hljs.highlight(value, { language: 'javascript' }).value;
  }

  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>Authentication</h2>
      <Separator />

      <div className='py-2'>
        <p className='text-xs text-muted-foreground'>Explain the authentication mechanism:</p>
        <p className='text-sm pt-2'>Our API uses Bearer Token-based authentication to ensure secure access. Every API request must include a valid API key in the request header. </p>
        <p className='text-sm '>Follow the steps below to generate and use your API key.</p>
      </div>
      <Separator />
      <div className='px-4 py-4'>
        <h2 className='text-sm font-semibold'>1.  How Authentication Works</h2>
        <div className='px-8'>
         <div className='grid gap-2 py-2 '>
            <h2 className='text-sm text-muted-foreground'><span className='font-medium'>API Key Format:</span> Your API key is a long, unique alphanumeric string. Example:</h2>
            <pre
              className="text-sm p-2 bg-gray-100  rounded"
              dangerouslySetInnerHTML={{ __html: highlightedCode(apiKeyExample) }}
            />
         </div>
         <div className='grid gap-2 py-2'>
            <h2 className='text-sm text-muted-foreground'><span className='font-medium'>Header Format:</span>  Include your API key in the Authorization header as a Bearer Token:</h2>
            <pre
              className="text-sm p-2 bg-gray-100  rounded"
              dangerouslySetInnerHTML={{ __html: highlightedCode(apiKeyExample2) }}
            />
         </div>
         <div className='grid gap-2 py-2'>
            <h2 className='text-sm text-muted-foreground'><span className='font-medium'>Example Header:</span> </h2>
            <pre
              className="text-sm p-2 bg-gray-100  rounded"
              dangerouslySetInnerHTML={{ __html: highlightedCode(apiKeyExample3) }}
            />
         </div>
      </div>
      </div>
      <Separator />
      <div className='px-4 py-4'>
        <h2 className='text-sm font-semibold'>2. Steps to Generate an API Key</h2>
        <div className='grid gap-2 py-2 px-8'>
          <h2 className='text-sm text-muted-foreground'><strong>1.</strong> Log in to your account on the platform.</h2>
          <h2 className='text-sm text-muted-foreground'><strong>2.</strong> Navigate to the <span className='font-medium text-foreground'>Developer</span> &gt;  
          <span className='font-medium text-foreground'> API Settings</span> section in the settings.</h2>
          <h2 className='text-sm text-muted-foreground'><strong>3.</strong> Click on the Generate New API Key button.</h2>
          <h2 className='text-sm text-muted-foreground'><strong>4.</strong> Enter a name for the key (e.g., &quot;Production Key&quot;).</h2>
          <h2 className='text-sm text-muted-foreground'><strong>5.</strong> Select the permissions or scopes for the key: </h2>
          <div className='px-8 flex gap-2'>
              <div className='flex gap-3 text-sm border border-muted rounded-md px-4 py-1 items-center w-fit'>
                <h2 className='font-medium bg-primary/10 rounded-lg p-1 px-3'>Read </h2>
                <h2> Read-only access to resources.</h2>
              </div>
              <div className='flex gap-3 text-sm border border-muted rounded-md px-4 py-1 items-center w-fit'>
                <h2 className='font-medium bg-primary/10 rounded-lg p-1 px-3'>Write </h2>
                <h2> Allows resource creation and modification.</h2>
              </div>
              <div className='flex gap-3 text-sm border border-muted rounded-md px-4 py-1 items-center w-fit'>
                <h2 className='font-medium bg-primary/10 rounded-lg p-1 px-3'>Admin </h2>
                <h2> Full access, including sensitive settings.</h2>
              </div>
          </div>
          <h2 className='text-sm text-muted-foreground'><strong>6.</strong> Click <span className='font-medium '>Generate</span>. Your new API key will be displayed only once—copy and save it securely. </h2>
        </div>
      </div>
      <Separator />
      <div className='p-4'>
        <h2 className='text-sm font-semibold'>3. Using Your API Key</h2>
      </div>
      <Separator />
      <div className='p-4'>
        <h2 className='text-sm font-semibold'>4. API Key Management</h2>
      </div>
      <Separator />
      

      <div className="py-4 px-6 border-l-4 border-primary bg-primary/5">
        <p className="text-sm font-medium text-primary">
          &quot;Your API keys provide full access to our APIs, so make sure to keep them fully secure. They should never be exposed in any public forums or broadcasted internally within your organization.&quot;
        </p>
      </div>
      
    </div>
  )
}

export default Authentication