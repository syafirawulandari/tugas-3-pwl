import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import { PlusButton } from "../components/Button";
import toast from "react-hot-toast";

const Beranda = () => {
  const [result, setResult] = useState(0);
  const [emoji, setEmoji] = useState(":(");
  useEffect(() => {
    result < 10
      ? setEmoji(":(")
      : result >= 10 && result < 50
      ? setEmoji(":|")
      : setEmoji(":)");
  }, [result]);
  const incrementResult = () => {
    result < 150
      ? setResult((prevResult) => prevResult + 1)
      : toast.error("Udah mentok, gabisa lagi :(");
  };
  return (
    <>
      <Header title={"Toko Safira"} desc={"Toko Kebutuhan Bangun Datar Kamu"} />
      <main>
        <div className="container">
          <div className="content">
            <p>
              Selamat datang di Toko Aku! Toko spesialis yang ngejual berbagai
              macam bangun datar kebutuhan kamu. Dari segitiga sampe lingkaran,
              aku punya semuanya! Aku percaya kalo belajar geometri harus
              menyenangkan dan interaktif. Oleh karena itu, aku menawarkan
              berbagai bangun datar yang bisa dipake untuk belajar sekaligus
              bermain. Setiap produk aku dirancang dengan hati-hati untuk
              memastikan kualitas dan detail yang sempurna. Aku bisa membantu
              dalam perjalanan belajar kamu. Jadi, tunggu apa lagi? Ayo jelajahi
              koleksi aku dan temukan bangun datar yang kamu banget. Selamat
              berbelanja!
            </p>
          </div>
          <div
            className="container"
            style={{
              gap: 20,
              width: "50%",
              alignSelf: "center",
              alignItems: "center",
              flexDirection: "row",
              justifySelf: "center",
              justifyContent: "center",
            }}
          >
            <PlusButton
              text={"Tombol Gabut"}
              result={result}
              actions={incrementResult}
            />
            <h1>{emoji}</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
