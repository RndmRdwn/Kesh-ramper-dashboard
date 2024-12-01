'use client'

import React, { useState } from 'react';
import NewWebhook from '@/components/modals/NewWebhooks';
import { Button } from '@/components/shadcn/ui/button';
import { Switch } from '@/components/shadcn/ui/switch';
import { Pencil, TestTube, Trash, Unplug } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/shadcn/ui/tooltip';
import EditWebhook from '@/components/modals/EditWebhook';


export type webhookType = {
  name: string,
  event: string,
  webhook_url: string,
  last_Sent?: string,
}

const WebHooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [webhooks, setWebhooks] = useState<webhookType[]>([]); // State for storing webhooks
  const [currentWebhook, setCurrentWebhook] = useState<webhookType>([]); // State for storing webhooks

  const handleAddWebhook = (newWebhook: webhookType) => {
    setWebhooks((prev) => [...prev, newWebhook]); // Add the new webhook to the list
  };
  const handleEditWebhook = (newWebhook: webhookType) => {
    setCurrentWebhook(newWebhook); // Add the new webhook to the list
  };

  return (
    <div className=' max-w-6xl mx-auto'>
      <div className="flex justify-between items-center">
        <div className="py-4">
          <h2 className="font-medium">WebHooks</h2>
          <p className="text-sm text-muted-foreground">
            Set up your triggers and receive notifications instantly.
          </p>
        </div>
        <NewWebhook
          onClose={(isOpen: boolean, newWebhook?: webhookType) => {
            setIsOpen(false);
            if (newWebhook) {
              handleAddWebhook(newWebhook); // Save the new webhook
            }
          }}
          open={isOpen}
        />
        <Button
          onClick={() => setIsOpen(true)}>
          Add Webhook
        </Button>
      </div>
      <div className="w-full py-4">
        <div className="w-full bg-primary/5 shadow-sm grid grid-cols-10 gap-5 rounded-lg px-8 p-2">
          <h2 className="font-medium col-span-1 text-muted-foreground text-sm"></h2>
          <h2 className="font-medium col-span-2 text-muted-foreground text-sm">Name</h2>
          <h2 className="font-medium col-span-2 text-muted-foreground text-sm">Trigger Event</h2>
          <h2 className="font-medium col-span-2 text-muted-foreground text-sm">Event ID</h2>
          <h2 className="font-medium col-span-2 text-muted-foreground text-sm">Last Sent</h2>
          <h2 className="font-medium col-span-1 text-muted-foreground text-sm"></h2>
        </div>
        <div>
          {webhooks.length === 0 ? (
            <div className='w-full h-[500px]  flex flex-col opacity-50 justify-center items-center'>
              <Unplug size={60} className='text-primary'/>
              <p className="py-4">No webhooks created yet.</p>

            </div>
          ) : (
            webhooks.map((webhook, index) => (
              <div
                key={index}
                className="w-full grid grid-cols-10 gap-5 items-center border-b px-8 py-3"
              >
                  <h2 className="font-medium col-span-1 text-sm">
                    <WebhookState id={webhook.name} />
                  </h2>
                  <h2 className="font-medium col-span-2 text-sm">{webhook.name}</h2>
                  <h2 className="font-medium col-span-2 text-sm">{webhook.event}</h2>
                  <h2 className="font-medium col-span-2 text-sm ">{webhook.webhook_url}</h2>
                  <h2 className="font-medium col-span-2 text-sm">Last Sent</h2>
                  <div className="flex gap-2 items-center">
                      <Tooltip>
                      <TooltipTrigger>
                        <Button onClick={() => handleEditWebhook(webhook)} size='icon' variant='outline'>
                          <Pencil />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className='bg-background text-foreground border-primary/20 shadow-md border'>
                        <p>Edit</p>
                      </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger>
                          <Button size='icon' variant='outline'>
                            <Trash />
                          </Button>
                      </TooltipTrigger>
                      <TooltipContent className='bg-background text-foreground border-primary/20 shadow-md border'>
                        <p>Delete</p>
                      </TooltipContent>
                      </Tooltip>
                  </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* <EditWebhook data={webhooks} onClose={} open={} /> */}
    </div>
  );
};


type stateType = {
  id: string
}
const WebhookState = ({ id } : stateType) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} />
    </div>
  )
}
export default WebHooks;
