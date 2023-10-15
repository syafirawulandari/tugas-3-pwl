import React, { useEffect, useState } from "react";
import { InputText, InputMessages } from "../components/Input";
import { SubmitButton } from "../components/Button";
import dbDump from "../dump/db.dump";
import toast from "react-hot-toast";

const Kontak = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput({ name: "", email: "", messages: "" });
  }, []);

  const handleSubmit = () => {
    try {
      if (input.name === "" || input.email === "" || input.messages === "") {
        toast.error("Isi dulu semua kolomnya ya :D");
      } else {
        dbDump.push(input);
        toast.success("Berhasil kirim pesan :)");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setInput({ name: "", email: "", messages: "" });
    }
  };
  return (
    <main>
      <div className="container">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignSelf: "center",
            }}
          >
            <InputText
              onChange={handleInput}
              type={"text"}
              name={"name"}
              id={"name"}
              labeltext={"Nama"}
              value={input.name}
            />
            <InputText
              onChange={handleInput}
              type={"email"}
              name={"email"}
              id={"email"}
              labeltext={"Email"}
              value={input.email}
            />
          </div>
          <InputMessages
            onChange={handleInput}
            name={"messages"}
            id={"messages"}
            value={input.messages}
          />
          <SubmitButton actions={handleSubmit} />
        </div>
      </div>
    </main>
  );
};

export default Kontak;
