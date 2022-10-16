import axios from "axios";

const baseURL = process.env.NODE_ENV !== "production" ? "http://127.0.0.1:8000/" : "https://valutech.herokuapp.com/"


export const client = axios.create({
  baseURL: baseURL,
  headers: {
		"Content-Type": "application/json",
	},
});