const styles = {
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    // background: "rgb(116,111,111)",
    // background:
    //   "linear-gradient(90deg, rgba(116,111,111,1) 0%, rgba(49,48,48,1) 100%)",
    background: '#DBDBDA',
    backgroundPosition: "left",
    flexWrap: "wrap",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: 'wrap'
  },

  title: {
    fontSize: "20px",
    color: "white",
    alignSelf: "center",
  },
  information: {
    margin: ["20px"],

    h2: {
      color: "black",
      fontSize: "23px",
      fontFamily: "Montserrat",
      fontWeight: "bold",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: ["column", "column", "column", "column", "row"],
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignitems: "center",
    textAlign: "center",
    margin: '30px'
  },

  icon: {
      fontSize: '30px',
      background: '#333131',
      padding: '15px',
      borderRadius: '50px',
      color: 'white'
  }
};

export default styles;
