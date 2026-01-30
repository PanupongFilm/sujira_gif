"use client";

import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  //Commit
  const [isEnd, setIsEnd] = useState(false);

  const [conversation, setConversation] = useState(0);
  const [answerOption, setAnswerOption] = useState(0);
  const [gif, setGif] = useState(0);
  const [giftAnswer, setGiftAnswer] = useState("");

  const messages = [
    "สวัสดีค้าบคนน่ารัก🌷",
    "ผมคือแมวน้อยผู้ประทานพร",
    "ให้คนน่ารักเลือกของที่ตัวเองอยากได้",
    "เชิญหยิบซักชิ้นได้เลยขอรับ~",
    "รับแซ่บ~ มีอีกคำถามที่อยากจะถามคับ",
    "วันที่ 14 กุมภาพันธ์ ไปเที่ยวด้วยกันมั้ยคับ",
    "เย้งั้นตกลงแล้วนะคับ🌷🌻",
    "ไม่ไปจริงๆหรอคับ🥺",
    "คิดดูอีกทีได้มั้ย;-;",
    "นะคับๆๆ",
    "อยากให้คนน่ารักมาด้วยกัน~",
  ];

  const answer = [
    "สวัสดีจร้า",
    "เธอเป็นใคร",
    "ว้าวจะให้พรอะไรหรอ",
    "อยากได้แมวมากกว่า",
    "ว้าวไหนๆ",
    "ตื่นเต้นจังเลย",
    "",
    "",
    "ว่ามาได้เลยไอน้อง",
    "คำถามอะไรรึ",
    "ได้เลย",
    "คิดดูก่อนนะ",
    "ได้เลย",
    "คิดดูอีกที",
    "ไปก็ได้จร้า",
    "ไม่เหมือนเดิม",
    "ตกลงๆ",
    "จะไปดีมั้ยน้า",
    "ก้ได้ๆ",
    "คิดดูอีกนิด"
  ]

  const gifList = [
    "/cat.gif",
    "/cat2.gif",
    "/cat6.gif",
    "/cat5.gif",
    "/cat.gif",
    "/cat6.gif",
    "/cat3.gif",
    "/cat.gif",
    "/cat2.gif",
    "/cat4.gif",
    "/cat5.gif",
    "/cat6.gif",
  ];

  useEffect(() => {
    const connectDB = async () => {
      const res = await axios.get('/api');
      
      if(res.status === 200){
        console.log("Connected!!!!");
      }
    }

    connectDB();
  }, [])

  const pushData = async () => {
    try {
      const payload = {
        wishName: giftAnswer
      }

      const res = await axios.post('/api', payload);
      if (res.status === 200) {
        console.log("✅ Push Success:", res.data);
      }
    } catch (error) {
      console.error("❌ Push Failed:", error);
    }
  }

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center w-screen h-screen flex flex-col relative">
      <main className="flex flex-col w-screen h-screen items-center justify-center -mt-5">

        <img
          key={gif}
          src={gifList[gif]}
          width={450}
          className="z-5"
        />

        <div className="w-130 h-45 bg-white -mt-8 z-10 rounded-2xl flex items-center justify-center">
          <h1 className="text-3xl text-pink-600 text-center">
            <Typewriter
              key={conversation}
              words={[messages[conversation]]}
              typeSpeed={60}
              deleteSpeed={0}
              cursor
            />
          </h1>
        </div>

        {/* Option */}
        {conversation !== 3 && isEnd === false && (
          <div className="flex gap-10">
            <div
              onClick={() => {

                if (conversation !== 5 && conversation < 5) {
                  setConversation(prev => prev + 1);
                  setGif(prev => prev + 1);
                  setAnswerOption(prev => prev + 2)
                }
                else if (conversation === 5) {
                  setConversation(6);
                  setGif(6);
                  setIsEnd(true);
                  pushData();

                }
                else if (conversation !== 5 && conversation > 5) {
                  setConversation(6);
                  setGif(6);
                  setIsEnd(true);
                  pushData();
                }

              }}
              className="mt-15 p-5 h-20 bg-white shadow rounded-xl cursor-pointer"
            >
              <h1 className="text-pink-600 text-3xl animate-bounce">{answer[answerOption]}</h1>
            </div>

            <div
              onClick={() => {

                if (conversation === 10) {
                  setConversation(7);
                  setGif(7);
                  setAnswerOption(10);
                  return;
                }

                if (conversation !== 5 && conversation < 11) {
                  setConversation(prev => prev + 1);
                  setGif(prev => prev + 1);
                  setAnswerOption(prev => prev + 2)
                }
                else if (conversation === 5) {
                  setConversation(prev => prev + 2);
                  setGif(prev => prev + 2);
                  setAnswerOption(prev => prev + 2)
                }

              }}
              className="mt-15 p-5 h-20 bg-white shadow rounded-xl cursor-pointer"
            >
              <h1 className="text-pink-600 text-3xl animate-bounce">{answer[answerOption + 1]}</h1>
            </div>
          </div>
        )}

        {conversation === 3 && (
          <div className="mt-10 flex flex-row gap-5 items-center justify-center">

            <div className="w-40 h-30 bg-white rounded-2xl cursor-pointer flex items-center justify-center"
              onClick={() => {
                setConversation(prev => prev + 1);
                setGif(prev => prev + 1);
                setAnswerOption(prev => prev + 2);
                setGiftAnswer("กระเป๋า zootopia");
              }}>
              <img src={"/Img1.png"} width={100} />
            </div>

            <div className="w-40 h-30 bg-white rounded-2xl cursor-pointer flex items-center justify-center"
              onClick={() => {
                setConversation(prev => prev + 1);
                setGif(prev => prev + 1);
                setAnswerOption(prev => prev + 2);
                setGiftAnswer("รองเท้า Adidas");
              }}>
              <img src={"/Img2.jpg"} width={120} />
            </div>

            <div className="w-40 h-30 bg-white rounded-2xl cursor-pointer flex items-center justify-center"
              onClick={() => {
                setConversation(prev => prev + 1);
                setGif(prev => prev + 1);
                setAnswerOption(prev => prev + 2);
                setGiftAnswer("ลาบูบู้");
              }}>
              <img src={"/Img3.png"} width={120} />
            </div>

          </div>
        )}

        {isEnd ? (<img src={"/effect.gif"} className="absolute top-10" width={900} />) :
          (<img src={"/effect2.gif"} className="absolute top-10" width={900} />)}



      </main>
    </div>
  );
}
