import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="flex">
        <h1 className="header">Animal Sighting tracker</h1>
        <div className="navbar">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>

            <li>
              <Link to="add">Add Sighting</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <input
          style={{
            display: "block",
            margin: "auto",
            textAlign: "center",
            width: "50%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "15px",

            // border: this.state.error
            //   ? "2px solid red"
            //   : this.state.value
            //   ? "2px solid #2684ff"
            //   : "2px solid hsl(0, 0%, 80%)",
            // outline: "0px",

            // "&:hover": {
            //   border: "2px solid green",
            // },
          }}
          type="text"
          placeholder="Search here"
          //   onChange={handleChange}
          //   value={searchInput}
        />
      </div>
    </>
  );
};

export default Header;
