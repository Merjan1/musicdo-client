import { AUTH } from "../constants/actionTypes";
import * as api from "../apis/api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
