import Head from "next/head";
const Edit = ({ notes }) => {
  console.log(notes);
  console.log(notes.title);
  return (
    <>
      <Head>
        <title>EDIT</title>
      </Head>
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
