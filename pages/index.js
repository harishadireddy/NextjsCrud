import Head from "next/head";
import Image from "next/image";
import undraw from "../images/undraw.svg";
export default function Demo() {
  return (
    <>
      <Head>
        <title>Home</title>;
      </Head>
      {/* <header>
        <h1 className="logo">Logo</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="css">Css</Link>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      </header> */}
      {/* <Appbar /> */}
      <div className="banner">
        <h1> May your coffee be strong and your Monday be short..</h1>
        <p style={{ fontSize: "30px" }}>Lets wait for the Creativity</p>
      </div>

      <div className="quote">
        <div>
          Modern baristas have turned making coffee into an art form, and we are
          all addicted to their work. These days there are hundreds of different
          ways of making coffee, and which cup is ‘the best’ depends on your own
          taste. But no matter how you brew, every cup of coffee is underpinned
          by the same seven key steps
        </div>
        <Image
          src={undraw}
          alt="Picture of the author"
          width={1000}
          height={1000}
          className="svg"
        />
      </div>

      <div className="card">
        <div className="cbox">
          <div className="text">
            <div className="text__i1">Coffee</div>

            <div className="text__i3">
              The first branded coffee to be sold commercially to the public was
              Nes Cafe in 1879.
            </div>
          </div>
          <div className="picture"></div>
        </div>
      </div>

      <div className="slideO">
        <div className="slideO_text">
          <div className="textOne">THE TECH – USE AN ESPRESSO MACHINE</div>
          <div className="textTwo">
            There’s never been just one way of doing it: you could use an
            espresso machine, a French press, or a complex contraption, which
            looks like it belongs in a lab rather than your kitchen.
          </div>
        </div>
        <div className="slideO_image"></div>
      </div>
      {/* <div className="slideT">
        <div className="slideT_text"></div>
        <div className="slideT_image"></div>
      </div> */}
    </>
  );
}
