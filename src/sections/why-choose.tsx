'use client'

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shadcn/ui/tabs";
import { Check } from "lucide-react";
import Coin from '../../public/assets/icons/coin.svg'
import CoinFill from '../../public/assets/icons/coin-fill.svg'
import Flip from '../../public/assets/icons/flip.svg'
import Rocket from '../../public/assets/icons/rocket.svg'
import FlipFill from '../../public/assets/icons/flipFill.svg'
import RocketFill from '../../public/assets/icons/rocketFill.svg'
import Image from "next/image";

import Wallet from '../../public/assets/payments/mockup/wallet.svg'
import Head from '../../public/assets/payments/mockup/head.svg'
import Status from '../../public/assets/payments/mockup/status.svg'


const WhyChoose = () => {
  const content =
    "Keshflip is more than just a crypto platform. It's your gateway to secure, simple, and efficient financial solutions. Designed for both individuals and businesses, Keshflip provides the tools you need to transact with confidence and ease.";

  const items = [
    {
      id: "buy-sell",
      label: "Buy & Sell",
      icon: Flip,
      iconSelected: FlipFill,
      badge: "Instant Trading",
      heading: "Buy & Sell Crypto Effortlessly",
      desc: "Manage your crypto trades with ease and speed.",
      points: [
        { id: 1, title: "Instant Transactions", subtitle: "Buy and sell crypto in seconds." },
        { id: 2, title: "Best Rates", subtitle: "Enjoy competitive pricing with low fees." },
        { id: 3, title: "Secure Payments", subtitle: "Seamlessly deposit and withdraw using local currency." },
      ],
    },
    {
      id: "payments",
      label: "Payments",
      icon: Coin,
      iconSelected: CoinFill,
      badge: "Seamless Transactions",
      heading: "Pay with Crypto Anywhere",
      desc: "Make secure and instant payments using your crypto balance.",
      points: [
        { id: 1, title: "Fast & Easy", subtitle: "Pay for goods and services with just a few taps." },
        { id: 2, title: "Global Reach", subtitle: "Transact with businesses and individuals worldwide." },
        { id: 3, title: "Flexible Options", subtitle: "Choose from multiple cryptocurrencies for payments." },
      ],
    },
    {
      id: "send-money",
      label: "Send Money",
      icon: Rocket,
      iconSelected: RocketFill,
      badge: "Instant Transfers",
      heading: "Send Crypto with Ease",
      desc: "Transfer funds securely to friends, family, or businesses—anytime, anywhere.",
      points: [
        { id: 1, title: "Lightning-Fast Transfers", subtitle: "Send crypto instantly with minimal fees." },
        { id: 2, title: "Multiple Currencies", subtitle: "Support for various digital assets and local currencies." },
        { id: 3, title: "Reliable & Secure", subtitle: "Your transactions are protected with top-tier security." },
      ],
    },
  ];

  const [selected, setSelected] = useState('buy-sell')

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#101219] to-black text-white">
      <div className="w-full max-w-7xl mx-auto h-full py-12 flex flex-col gap-6 items-center">
        <h2 className="bg-muted-foreground/15 shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-1 px-4 rounded-full">
          Features
        </h2>
        <h2 className="text-5xl font-semibold">Why Choose Keshflip?</h2>
        <p className="lg:max-w-4xl text-center mx-auto text-muted-foreground">{content}</p>

        <div className="w-full border border-white/20 rounded-xl p-6">
          <Tabs defaultValue={items[0].id} onValueChange={(value) => setSelected(value)} className="w-full flex flex-col gap-3  items-center justify-center">
            {/* Tab List */}
            <TabsList className="grid grid-cols-3 bg-transparent gap-3 h-full w-fit rounded-lg">
              {items.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className={`text-white/50 flex hover:bg-gradient-to-br from-muted/10 items-center gap-3 data-[state=active]:text-primary data-[state=active]:bg-[#fcfcfc] p-3 rounded-lg
                  `}>
                  <Image src={item.id == selected ? item.iconSelected : item.icon} alt="image" width={20} height={20} />
                  <p className="font-semibold text-lg">{item.label}</p>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {items.filter(it => it.id == selected).map((item) => (
              <TabsContent key={item.id} value={item.id} className=" w-full">
                <div className=" grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex flex-col gap-3 w-fit">
                      <span className="text-sm  w-fit bg-gradient-to-br from-primary/20 to-muted/10 px-5 py-2 rounded-full">{item.badge}</span>
                      <h3 className="text-4xl font-semibold mt-3">{item.heading}</h3>
                      <p className="text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                    <div className="mt-6 flex flex-col gap-4">
                      {item.points.map((point) => (
                        <div key={point.id} className="flex gap-2 items-start">
                            <Check className="text-primary" /> 
                            <div className="flex items-start flex-col ">
                              <p className=" font-medium  items-center">
                                {point.title} 
                              </p>
                                <span className="text-muted-foreground flex flex-wrap">{point.subtitle}</span>
                            </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-full border">
                    <div className="w-fit h-fit pt-3 px-3 rounded-t-[8%] bg-gradient-to-tr from-[#6600CC] to-[#5600AC]/80">
                      <div className="grid gap-6  px-4 py-2 bg-white w-fit rounded-t-[7%]">
                        <Image src={Status} alt="image" width={400} height={300} />
                        <Image src={Head} alt="image" width={400} height={300} />
                        <Image src={Wallet} alt="image" width={400} height={300} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
