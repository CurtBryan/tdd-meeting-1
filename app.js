const axios = require("axios");

const addNums = () => {
  return 2 + 2;
};

const getUserNameByID = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data.username;
  } catch (err) {
    return err.toString();
  }
};

module.exports = {
  addNums,
  getUserNameByID,
};
