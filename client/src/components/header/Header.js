import "./Header.css";
const Header = () => {
  return (
    <>
      <h1 className="header">Animal Sighting tracker</h1>
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
