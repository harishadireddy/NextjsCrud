import Head from "next/head";
import style from "./crud.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const object = {
    title: name,
    description: description,
  };

  const AddCoffee = async () => {
    const data = await fetch("http://localhost:3000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    // console.log(data);
    // console.log(data.statusText);
    if (data.statusText === "OK") {
      toast.success("successfully Added");
      setName(" ");
      setDescription(" ");
    } else {
      toast.error("Failed to Add recepie");
    }
  };

  return (
    <>
      <Head>
        <title>CRUD</title>
      </Head>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className={style.start}>
        <div className={style.text}>Add your recepie here</div>

        <div className={style.form}>
          <label>Title</label>
          <input
            className={style.input1}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <input
            className={style.input2}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            button="true"
            style={{
              height: "3em",
              width: "20em",
              borderRadius: "12px",
              backgroundColor: "#ade8f4",
            }}
            onClick={() => AddCoffee()}
          >
            Add
          </button>
        </div>
      </div>
      {/* {title}
      {description} */}
    </>
  );
};

export default Add;
