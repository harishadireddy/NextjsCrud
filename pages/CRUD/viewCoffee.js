import style from "./vc.module.css";
import Head from "next/head";
const viewCoffee = ({ notes }) => {
  console.log(notes);
  return (
    <>
      <Head>
        <title>View Coffee</title>
      </Head>
      <div className={style.main_container}>
        {notes.map((data) => (
          <>
            <div className={style.container}>
              <div>{data.title}</div>
              <div>{data.description}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default viewCoffee;

viewCoffee.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");

  const { data } = await res.json();

  return {
    notes: data,
  };
};
