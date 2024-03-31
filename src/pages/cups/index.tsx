import Image from "next/image";
import PinkCup from "../../images/pink_cup.svg"
import YellowCup from "../../images/yellow_cup.svg"
import MagentaCup from "../../images/magenta_cup.svg"
import PurpleCup from "../../images/purple_cup.svg"

import RobloxDummy from "../../images/RobloxDummy.png"

export default function CupsGame() {
    return <main className="flex text-bright flex-wrap justify-center p-12">
        <div className="w-full grid grid-cols-12 gap-4">
            <section className="p-5 bg-boxed rounded-[12px] xl:col-span-3 col-span-12">
                <div className="w-full flex justify-between">
                    {/* To Left */}
                    <div className="flex space-x-2">
                        <div className="w-auto rounded-md bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                            Manual
                        </div>
                        <div className="w-auto rounded-md hover:bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                            Auto
                        </div>
                    </div>

                    {/* To Right */}
                    <div>
                        <div className="w-auto rounded-md bg-inner px-4 py-2 uppercase text-xs">
                            Fairness
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-2 mt-6">
                    <div>
                        <label htmlFor="" className="text-xs uppercase tracking-wide">Amount</label>
                        <input type="text" className="focus:outline-none bg-inner px-4 rounded-md py-3 w-full" />
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs uppercase tracking-wide">Amount</label>
                        <input type="text" className="focus:outline-none bg-inner px-4 rounded-md py-3 w-full" />
                    </div>
                </div>

                <div className="mt-7">
                    <button className="w-full px-4 py-3 rounded-md bg-first uppercase font-semibold text-white hover:bg-supreme duration-200 transition-all hover:scale-95 hover:border-first border border-transparent">Play</button>
                </div>
            </section>

            <section className="xl:col-span-9 col-span-12">
                <div className="p-5 bg-boxed rounded-[12px] w-full space-y-2">
                    <div className="py-6 px-8 bg-inner rounded-md grid grid-cols-2">
                        <div className="flex flex-wrap items-center space-x-2">
                            <div className="space-y-4">
                                <img src={RobloxDummy.src} className="ring-2 ring-cups-magenta w-10 h-10 rounded-full bg-boxed" alt="" />
                                <img src={RobloxDummy.src} className="ring-2 ring-cups-pink w-10 h-10 rounded-full bg-boxed" alt="" />
                            </div>

                            <span>
                                vs
                            </span>

                            <div className="space-y-4">
                                <img src={RobloxDummy.src} className="ring-2 ring-cups-yellow w-10 h-10 rounded-full bg-boxed" alt="" />
                                <img src={RobloxDummy.src} className="ring-2 ring-cups-purple w-10 h-10 rounded-full bg-boxed" alt="" />
                            </div>
                        </div>

                        <div className="flex items-center float-right">
                            <div className="flex float-right flex-wrap justify-center space-x-10 items-center">
                                <Image src={MagentaCup} alt={`Pink Cup Picture`}></Image>
                                <Image src={PinkCup} alt={`Pink Cup Picture`}></Image>
                                <Image src={YellowCup} alt={`Pink Cup Picture`}></Image>
                                <Image src={PurpleCup} alt={`Pink Cup Picture`}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
}