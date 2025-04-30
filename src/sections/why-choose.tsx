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

import BuySell from '../../public/assets/features/3. Frame-en-3.png'
import Securely from '../../public/assets/features/4. Frame-en-4.png'
import SendMoney from '../../public/assets/features/5. Frame-en-5.png'

import TypingAnimation from "@/components/animations/TypingAnimation";
import Fade from "@/components/animations/fade";
import Reveal from "@/components/animations/reveal";

import GPlay from '../../public/assets/sample/g-play.svg'
import AStore from '../../public/assets/sample/a-store.svg'
import FinancialAppSlider from "./feature-slider";

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
      heading: "Effortlessly Crypto, Fiat Management",
      desc: "Manage your crypto trades with ease and speed.",
      points: [
        { id: 1, title: "Instant Transactions", subtitle: "Buy and sell crypto in seconds." },
        { id: 2, title: "Best Rates", subtitle: "Enjoy competitive pricing with low fees." },
        { id: 3, title: "Secure Payments", subtitle: "Seamlessly deposit and withdraw using local currency." },
      ],
      image: BuySell
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
      image: Securely
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
      image: SendMoney
    },
  ];

  const [selected, setSelected] = useState('buy-sell')

  return (
    <div className="w-full lg:h-full h-fit text-white">
      <div className="w-full max-w-7xl mx-auto h-full lg:pt-32 pt-72 px-8 flex flex-col gap-6 items-center">
        <h2 className="bg-muted-foreground/15 shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
          <TypingAnimation color='gray' content={'Features'} size='medium' delay={0.098} speed={2}/>
        </h2>
        <TypingAnimation color='white' content={'Why Choose Us?'} size='xlarge' delay={0.028} speed={3}/>
        <Reveal>
          <p className="lg:max-w-4xl text-center mx-auto text-muted-foreground">{content}</p>
        </Reveal>

        <div className="w-full lg:px-6">
          <div className="lg:block hidden w-full border border-white/20 rounded-xl  p-6">
            <Tabs defaultValue={items[0].id} onValueChange={(value) => setSelected(value)} className="w-full flex flex-col gap-3  items-center justify-center">
              {/* Tab List */}
              <TabsList className="grid grid-cols-3 bg-transparent gap-3 h-full w-fit rounded-lg">
                {items.map((item) => (
                  <TabsTrigger key={item.id} value={item.id} className={`text-white/50 flex hover:border-white border border-transparent items-center gap-3 data-[state=active]:text-primary data-[state=active]:bg-[#fcfcfc] p-3 rounded-lg
                    `}>
                    <Image src={item.id == selected ? item.iconSelected : item.icon} alt="image" width={20} height={20} />
                    <p className="font-semibold text-base">{item.label}</p>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab Content */}
              {items.filter(it => it.id == selected).map((item) => (
                <TabsContent key={item.id} value={item.id} className=" w-full">
                  <div className=" lg:grid flex flex-col grid-cols-2 px-12 pb-12 gap-8">
                    <div>
                      <div className="flex flex-col gap-3 w-fit">
                        {/* <Fade> */}
                          <span className="text-sm  w-fit bg-gradient-to-br from-primary/20 to-muted/10 px-5 py-2 rounded-full">
                            <TypingAnimation color='gray' content={item.badge} size='medium' delay={0.098} speed={2}/>
                          </span>
                        <TypingAnimation color='white' content={item.heading} size='xlarge' delay={0.098} speed={2}/>

                        {/* <TypingAnimation color='lightgray' content={item.desc} size='normalLight' delay={0.098} speed={2}/> */}
                        <Fade delay={1.2}>
                          <p className="text-muted-foreground mt-2">{item.desc}</p>
                        </Fade>
                      </div>
                      <div className="mt-6 flex flex-col gap-4">
                        {item.points.map((point, index) => (
                          <div key={point.id} className="">
                            <Reveal delay={index + 0.5}>
                              <div className="flex gap-2 items-start">
                                  <Check className="text-primary" /> 
                                  <div className="flex items-center gap-2">
                                    <p className=" font-medium text-sm items-center ">
                                      {point.title}:
                                      <span className="text-muted-foreground text-sm px-1">{point.subtitle}</span>
                                    </p>
                                  </div>
                              </div>
                            </Reveal>
                          </div>
                        ))}
                      </div>
                      <div className="flex pt-12 gap-5">
                        <Reveal delay={3.5}>
                          <Image src={GPlay} alt="image" width={150} height={150} />
                        </Reveal>
                        <Reveal delay={3.8}>
                          <Image src={AStore} alt="image" width={150} height={150} />
                        </Reveal>
                    </div>
                    </div>
                    <div className="w-full h-[580px] flex items-center justify-center ">
                        <div className="flex relative w-full overflow-hidden h-full rounded-xl   ">
                          {/* <div className="absolute top-6 z-10 -right-10">
                            <Fade delay={1}>
                              <Image src={EthCoin} alt="image" className="rounded-xl" width={110} height={110} />
                            </Fade>
                          </div>
                          <div className="absolute bottom-10 -left-8 z-10">
                            <Fade delay={1}>
                              <Image src={SolCoin} alt="image" className="rounded-xl" width={110} height={110} />
                            </Fade>
                          </div> */}
                          <div className=" w-full ">
                            <Reveal>
                              <Image src={item.image} alt="image" className="rounded-xl" width={400} height={400} />
                            </Reveal>
                          </div>
                          {/* <div className="w-full flex justify-center pt-8">
                            <h2 className="text-3xl font-light flex flex-col w-80 text-center">
                              Experience 
                              <span className="font-semibold">
                                <span className="">Seamless</span>
                                <span className="font-light px-1.5">&</span>
                                <span className="">Secure </span>
                              </span>
                                <span className="">Crypto Transactions</span>
                            </h2>
                          </div> */}
                            {/* <Image src={item.image} alt="image" className="rounded-xl" width={500} height={500} /> */}
                        </div>
                    </div>
                  </div>
                </TabsContent>
              ))} 
            </Tabs>
          </div>

            <div className="lg:hidden flex">
                <FinancialAppSlider />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
