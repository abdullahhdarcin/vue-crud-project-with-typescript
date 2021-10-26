import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/fde8e0ded7a6433bb99e3ca4b98a2d30",
  headers: {
    "Content-type": "application/json"
  }
});