import { StyleSheet } from "react-native";

const colors = {
  black: "#444444",
  pink: "#D1529E",
  green: "#54C1B7",
  blue: "#0F406E",
  lightGrey: "#F2F2F2",
};

const styles = StyleSheet.create({
  body: {
    bottom: 30,
  },
  search: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 60,
    marginBottom: -27,
    color: colors.green,
    letterSpacing: 10,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: "95%",
    height: 100,
    paddingVertical: 10,
    alignSelf: "center",
  },
  inputContainer: { flexDirection: "row" },
  icon: {
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 5,
  },
  inputField: {
    flex: 8,
    color: colors.blue,
    borderColor: colors.pink,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "dotted",
    marginVertical: 5,
    marginLeft: 5,
    padding: 15,
  },
  button: {
    flex: 1,
    backgroundColor: colors.pink,
    borderRadius: 15,
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingLeft: 15,
    marginVertical: 15,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 3,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    flex: 2,
    height: "100%",
    minHeight: 200,
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 5,
    borderColor: colors.green,
    borderWidth: 3,
  },
  intro: {
    flex: 3,
    marginHorizontal: 10,
  },
  articleTitle: { color: colors.blue, fontWeight: "bold", fontSize: 16 },
  date: { color: "#D1529E", fontWeight: "bold" },
  more: {
    fontSize: 30,
    textAlign: "right",
    color: colors.pink,
    alignSelf: "center",
  },

  category: {
    letterSpacing: 3,
    fontSize: 20,
    color: colors.blue,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
  },
  arrow1: {
    fontSize: 18,
    color: colors.pink,
    alignSelf: "center",
  },
  arrow2: {
    fontSize: 18,
    color: colors.green,
    alignSelf: "center",
  },

  errorMsg: { alignSelf: "center" },

  paginator: {
    flexDirection: "row",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  pageChangerButton: {
    fontSize: 20,
    color: colors.pink,
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: colors.pink,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    textAlignVertical: "center",
  },
  pages: {
    color: colors.blue,
    fontWeight: "bold",
  },
  credit: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: colors.pink,
    paddingVertical: 5,
    paddingRight: 15,
    marginVertical: 15,
    textAlign: "right",
  },
});

export default styles;
