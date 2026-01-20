"use client"

import { useState } from "react";

export default function Home() {
  const [conversation, setConversation] = useState(0);
  const [gif, setGif] = useState(0);

  const message = [
    "สวัสดีคนน่ารักที่ผ่านทางมาขอรับ",
    "เนื่องในโอกาสพิเศษ",
    "กระผมจะประทานพรให้คนน่ารัก 1ข้อ",
    "โปรดเลือกสิ่งที่คนน่ารักอยากได้จากตัวเลือกด้านล่างขอรับ",
    "เชิญเลือกได้ขอรับ"
  ]

  const gifList = [
    "/cat.gif",
    "/cat2.gif",
    "/cat3.gif",
  ]

  return (
    <div
      className="
      bg-[url('/bg.jpg')] bg-cover bg-center
      w-screen h-screen flex flex-col"
    >

      <main className="flex flex-col w-screen h-screen items-center justify-center -mt-10 ">

        <img
          key={gif}
          src={gifList[gif]}
          width={450}
          className="z-1"
        />

        <div className="w-130 h-45 bg-white -mt-12 z-10 rounded-2xl flex items-center justify-center relative"
          onClick={() => {
            if (conversation < 4) {
              setConversation(prev => prev + 1);

              if (conversation === 1) {
                setGif((prev => prev + 1));
              }

              if (conversation === 3) {
                setGif((prev => prev + 1));
              }

            }
          }}>

          <h1 className="text-3xl text-pink-600 w-120 text-center">{message[conversation]}</h1>

          <p className="absolute right-6 bottom-2 text-gray-400 text-2xl">แตะ...</p>

        </div>

        {conversation === 4 && (

          <div className="flex flex-col gap-5">


            <div className="flex flex-row itmes-center justify-between gap-7 mt-10">

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

            </div>

            <div className="flex flex-row itmes-center justify-between gap-7 mt-10">

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

              <div className="w-50 h-40 bg-white rounded-2xl">

              </div>

            </div>

          </div>


        )}

      </main>



    </div>
  );
}
