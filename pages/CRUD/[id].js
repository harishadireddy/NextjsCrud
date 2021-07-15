import Head from "next/head";
import style from "./crud.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const Edit = ({ notes }) => {
  const router = useRouter();
  // console.log(notes);
  // console.log(notes.title);
  const id = notes._id;
  console.log(id);
  const [name, setName] = useState(notes.title);
  const [description, setDescription] = useState(notes.description);

  const object = {
    title: name,
    description: description,
  };

  const handleEdit = async () => {
    const data = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    if (data.statusText === "OK") {
      toast.success("successfully Updated the change");
      setName(" ");
      setDescription(" ");
      // router.push(`/CRUD/viewCoffee`);
    } else {
      toast.error("Failed to update the changes");
    }
  };

  return (
    <>
      <Head>
        <title>Edit</title>
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
            style={{
              height: "3em",
              width: "20em",
              borderRadius: "12px",
              backgroundColor: "#ade8f4",
            }}
            onClick={() => handleEdit()}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

Edit.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);

  const { data } = await res.json();

  return {
    notes: data,
  };
};
export default Edit;
