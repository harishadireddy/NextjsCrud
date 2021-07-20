import style from "./vc.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ViewCoffee = ({ notes }) => {
  console.log(notes);
  const router = useRouter();
  const handleDelete = async (id) => {
    const data = await fetch(`https://nextjs-crud-gamma.vercel.app/api/notes/${id}`, {
      method: "DELETE",
    });

    if (data.statusText === "OK") {
      toast.warning("Deleted");
      document.location.reload(true);
    } else {
      toast.error("Failed to Delete");
    }
  };
  const handleUpadate = (id) => {
    router.push(`/CRUD/${id}`);
  };

  return (
    <>
      <Head>
        <title>View Coffee</title>
      </Head>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className={style.main_container}>
        {notes.map((data) => (
          <>
            <div key={data._id} className={style.container}>
              <button
                type="button"
                className={style.close}
                onClick={() => handleDelete(data._id)}
              >
                ✖
              </button>
              <div>{data.title}</div>
              <div>{data.description}</div>
              <button
                type="button"
                className={style.edit}
                onClick={() => handleUpadate(data._id)}
              >
                EDIT
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewCoffee;

ViewCoffee.getInitialProps = async () => {
  const res = await fetch("https://nextjs-crud-gamma.vercel.app/api/notes");

  const { data } = await res.json();

  return {
    notes: data,
  };
};
