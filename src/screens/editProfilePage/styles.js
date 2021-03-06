const React = require("react-native");
const { Platform } = React;

export default {
  container: {
    backgroundColor: "#fff"
  },
  submitButton: { 
    margin: 15
  },
  avatarGroup:{
    padding:20,
    alignItems: "center",
    justifyContent: 'center',
  },
  label: {
    paddingTop: Platform.OS=="android"? 5 : 0
  },
  avatarImage: {
    width: 200, height: 200
  },
  switch:{
    paddingTop: 5,
    paddingBottom: 5,
    marginTop:17,
    marginLeft:17,
    //justifyContent: 'center',
    //alignItems: 'stretch',
    flexDirection: 'row',
  }
};
