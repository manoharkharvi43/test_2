import axios from "axios";

const all_user = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://panorbit.in/api/users.json`);
    dispatch({
      type: "ALL_USER",
      payload: res.data.users,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};

export default all_user;
