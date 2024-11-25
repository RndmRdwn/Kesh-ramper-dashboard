import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';
import React, { useState } from 'react';

type NetworkProps = {
    name: string;
    code: string;
    block_confirmation: string;
    min_deposit: string;
    est: string;
};

const Wallet = ({crypto} : {crypto : string}) => {
    const cryptoNetworks: NetworkProps[] = [
        {
            name: "Ethereum",
            code: "ERC20",
            block_confirmation: "12",
            min_deposit: "0.01 ETH",
            est: "5 minutes",
        },
        {
            name: "BNB Smart Chain",
            code: "BEP20",
            block_confirmation: "3",
            min_deposit: "0.001 BNB",
            est: "1 minute",
        },
        {
            name: "Bitcoin",
            code: "BTC",
            block_confirmation: "6",
            min_deposit: "0.0001 BTC",
            est: "30 minutes",
        },
        {
            name: "Polygon",
            code: "MATIC",
            block_confirmation: "64",
            min_deposit: "1 MATIC",
            est: "2 minutes",
        },
        {
            name: "Solana",
            code: "SOL",
            block_confirmation: "1",
            min_deposit: "0.01 SOL",
            est: "30 seconds",
        },
        {
            name: "Avalanche",
            code: "AVAX",
            block_confirmation: "3",
            min_deposit: "0.1 AVAX",
            est: "2 minutes",
        },
        {
            name: "Tron",
            code: "TRC20",
            block_confirmation: "1",
            min_deposit: "10 TRX",
            est: "1 minute",
        },
        {
            name: "Cardano",
            code: "ADA",
            block_confirmation: "15",
            min_deposit: "1 ADA",
            est: "10 minutes",
        },
        {
            name: "Polkadot",
            code: "DOT",
            block_confirmation: "6",
            min_deposit: "0.1 DOT",
            est: "5 minutes",
        },
        {
            name: "Litecoin",
            code: "LTC",
            block_confirmation: "6",
            min_deposit: "0.01 LTC",
            est: "15 minutes",
        },
    ];
    const [selectedNetwork, setSelectedNetwork] = useState<NetworkProps | null>(null);

    return (
        <div className='grid gap-2'>
           <Label className='text-md'> Enter 
            <span className=' uppercase'> {crypto}</span> Wallet Address  </Label>

            <div>
                <Label className="text-sm">Wallet Address</Label>
                <Input placeholder='Enter Wallet Address' />
            </div>
            <div className="grid">
                <Label className="text-sm">Network</Label>
                <Select
                    onValueChange={(value) => {
                        const selected = cryptoNetworks.find((item) => item.code === value);
                        if (selected) setSelectedNetwork(selected);
                    }}
                >
                    <SelectTrigger className="w-full text-muted-foreground">
                        <SelectValue placeholder="Select Network">
                            {selectedNetwork ? `${selectedNetwork.name} - ${selectedNetwork.code}` : "Select Network"}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {cryptoNetworks.map((item) => (
                                <SelectItem key={item.code} value={item.code} className='w-full'>
                                    {item.name} - {item.code}
                                    
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {selectedNetwork && (
                <div className="py-4">
                    <div className='grid grid-cols-2'>
                        <p className='text-sm text-muted-foreground'>Selected Network</p>
                        <p className='text-sm font-medium'>{selectedNetwork.name} ({selectedNetwork.code})</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-sm text-muted-foreground'>Block Confirmations</p>
                        <p className='text-sm font-medium'>{selectedNetwork.block_confirmation}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-sm text-muted-foreground'>Minimum Deposit</p>
                        <p className='text-sm font-medium'>{selectedNetwork.min_deposit}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-sm text-muted-foreground'>Estimated Time</p>
                        <p className='text-sm font-medium'>{selectedNetwork.est}</p>
                    </div>
                </div>
            )}

        </div>
    );
};
export default Wallet;
