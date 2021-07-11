import Head from "next/head";
export default function newsindex() {
  return (
    <>
      <Head>
        <title>News</title>;
      </Head>

      <style jsx>{`
        h1 {
          text-align: center;
        }
        .box {
          height: 300px;
          width: 60%;
          background: blue;
          margin: 20px auto;
          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
          border-radius: 21px;
          text-align: center;
          padding-top: 10px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif sans-serif;
          font-size: 50px;
          color: antiquewhite;
        }
      `}</style>
      <body className="bodyin">
        <h1>main page of news</h1>;
      </body>
      <div className="box">
        <h1>1</h1>
      </div>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores
        error, ab vitae non quis eius excepturi facilis cupiditate, maiores
        asperiores in quam natus neque nam minus deleniti. Consectetur, cum?
      </p>
    </>
  );
}
