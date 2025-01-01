'use client'

import DeleteApiKey from '@/components/modals/ConfirmDeleteApi';
import GenerateApiKey from '@/components/modals/GenerateApiKey';
import ViewApiKey from '@/components/modals/ViewApiKey';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { Separator } from '@/components/shadcn/ui/separator';
import { handleClipboard } from '@/lib/clipboardText';
import { CircleAlert, Key, Pencil, Trash2, Eye, EyeOff, Copy } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export interface ApiKey {
  name: string;
  key: string;
  isVisible: boolean;  // To toggle visibility of the full key
}

const DevelopersPage = () => {
  const [isOpen, setIsOpen] = useState(false); // For GenerateApiKey Modal
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]); // List of API keys
  const [permissions, setPermissions] = useState(''); // List of API keys
  const [viewApiKey, setViewApiKey] = useState<ApiKey | null>(null); // To store the key being viewed
  const [selectedKey, setSelectedKey] = useState<ApiKey | null>(null); // Selected API key for deletion
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // For DeleteApiKey Modal

  const handleDeleteKey = (index: number) => {
    setSelectedKey(apiKeys[index]); // Set the selected API key to delete
    setIsDeleteOpen(true); // Open the delete confirmation dialog
  };
  
  const confirmDelete = () => {
    if (selectedKey) {
      setApiKeys((prev) => prev.filter((_, i) => i !== apiKeys.indexOf(selectedKey!))); // Delete the key
      setIsDeleteOpen(false); // Close the delete confirmation dialog
    }
  };

  // Temporarily store the name until the key is generated
  const handleApiName = (name: string) => {
    setApiKeys((prev) => [...prev, { name, key: '', isVisible: false }]);
  };

  // Assign the key to the last added item in the list
  const handleApiKey = (key: string) => {
    setApiKeys((prev) => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;
      if (lastIndex >= 0) updated[lastIndex].key = key;
      return updated;
    });
  };

  // Toggle visibility of the full API key
  const toggleKeyVisibility = (index: number) => {
    setApiKeys((prev) => {
      const updated = [...prev];
      updated[index].isVisible = !updated[index].isVisible;
      return updated;
    });
  };

  // Mask the key to display a portion and hide the rest
  const maskKey = (key: string) => {
    return key.slice(0, 6) + '************'; // Example: API_123************
  };

  // Open the ViewApiKey modal and pass the selected key
  const handleEditKey = (api: ApiKey) => {
    setViewApiKey(api);
  };

  // Close the ViewApiKey modal
  const closeViewApiKey = () => {
    setViewApiKey(null);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h3 className="text- font-medium">Developer Tools</h3>
        <p className="text-sm text-muted-foreground">
          Access developer tools, API settings, and configuration for custom development and technical setup.
        </p>
      </div>
      <Separator />

        <div className=''>

        </div>
      <div className='w-full'>
        <div className="grid gap-2">
          <Label className=''>Generate API Keys</Label>
          <div className="flex gap-3">
            <Input placeholder="Search API Keys..." className='py-5' />
            <GenerateApiKey
              open={isOpen}
              onClose={(va) => setIsOpen(va)}
              fetchApiName={handleApiName}
              fetchApiKey={handleApiKey}
              fetchPermissions={(value : string) => setPermissions(value)}
            />
          </div>

          <div className="grid py-4">
            {apiKeys.length === 0 ? (
              <div className="p-3 px-4 border rounded-md flex gap-3">
                <CircleAlert size={20} />
                <h2 className="text-sm text-muted-foreground">
                  No User API Keys have been created
                </h2>
              </div>
            ) : (
              <div className="space-y-3">
                {apiKeys.map((api, index) => (
                  <div
                    key={index}
                    className="p-3 px-4 border rounded-md flex justify-between items-center"
                  >
                    <div className="flex gap-2">
                      <div className="p-2 flex items-center border rounded-md">
                        <Key />
                      </div>
                      <div>
                        <h4 className="font-medium">{api.name}</h4>
                        <div className='flex gap-2 items-center'>
                          <p className="text-sm text-muted-foreground">
                            {api.isVisible ? api.key : maskKey(api.key)}
                          </p>
                          <Button size='sm' className='p-0 px-2' variant='outline' 
                            onClick={() => handleClipboard(api.key)}>
                            <Copy />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="px-2" variant="outline" onClick={() => toggleKeyVisibility(index)}>
                        {api.isVisible ? <EyeOff /> : <Eye />}
                      </Button>
                      <Button
                        className="px-2"
                        variant="outline"
                        onClick={() => handleEditKey(api)} // Open the modal and pass the selected API key
                      >
                        <Pencil />
                      </Button>
                      <Button
                        className="px-2"
                        variant="outline"
                        onClick={() => handleDeleteKey(index)} // Open the delete confirmation dialog
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="p-2 text-sm text-muted-foreground">
              An API key allows you to authenticate with our API and access its functionalities programmatically.
              You can create multiple API keys with different permissions.
              For more information, please refer to the{' '}
              <Link href="/" className="text-primary underline">
                API documentation.
              </Link>
            </div>
          </div>
        </div>

        {/* ViewApiKey Dialog */}
        {viewApiKey && (
          <ViewApiKey
            selected={permissions}
            
            apiKey={viewApiKey} // Pass the selected key to the modal
            open={true}
            onClose={closeViewApiKey} // Close the modal
          />
        )}

        {/* DeleteApiKey Dialog */}
        {isDeleteOpen && selectedKey && (
          <DeleteApiKey
            data={selectedKey} // Pass the selected key to the modal
            open={isDeleteOpen}
            onDelete={confirmDelete}
            onClose={() => setIsDeleteOpen(false)} // Close the delete dialog
          />
        )}
      </div>

    </div>
  );
};

export default DevelopersPage;
