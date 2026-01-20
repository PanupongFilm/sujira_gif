"use client"

import { useState } from "react";

export default function Home() {
  const [conversation, setConversation] = useState(1);

  const messages = [
    "สวัสดีครับ",
    'ข้าชื่อ "แมวน้อยแสนใจดี"',
    "ยินดีที่ได้รู้จักนะ 😺",
  ];

  return (
    <div
      className="
      bg-[url('/bg.jpg')] bg-cover bg-center
      w-screen h-screen flex flex-col"
    >
      <header className="flex flex-col items-center mt-50">
        <img src="/cat.gif" width={500} />

        <div
          onClick={() => setConversation((prev) => prev + 1)}
          className="
            relative -mt-7 z-10 w-150 h-40
            flex items-center justify-center
            rounded-2xl bg-white border border-gray-200 shadow-xl
            cursor-pointer select-none
          "
        >
          <h1
            key={conversation}   
            className="
              text-4xl text-pink-700
              transition-opacity duration-500 ease-in-out
            "
          >
            {messages[conversation - 1]}
          </h1>

          <p className="text-2xl text-gray-400 absolute bottom-2.5 right-4">
            Tap
          </p>
        </div>
      </header>
    </div>
  );
}
