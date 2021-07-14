import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import styles from "./Appbar.module.css";
import Link from "next/link";
const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setstate] = useState(false);
  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "transparent" }}>
        <Toolbar>
          {matches ? (
            <div>
              <MenuIcon button onClick={() => setstate(true)} />
            </div>
          ) : (
            <>
              <h2>Coffee</h2>
              <div className={styles.Menu}>
                <h3>
                  <Link href="/" className="link">
                    Home
                  </Link>
                </h3>
                <h3>
                  <Link href="/CRUD/viewCoffee">View </Link>
                </h3>

                <h3>
                  <Link href="/CRUD">Add Recepie</Link>
                </h3>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="bottom"
        open={state}
        onClose={() => {
          setstate(false);
        }}
      >
        <div className={styles.drawer}>
          <h3>
            <Link href="/" className="link">
              Home
            </Link>
          </h3>
          <h3>
            <Link href="/news">News</Link>
          </h3>

          <h3>
            <Link href="/css">Css</Link>
          </h3>
        </div>
      </Drawer>
    </>
  );
};

export default Appbar;
