import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/7e07e9b1267b449b898a8ac54fe1ff45",
  headers: {
    "Content-type": "application/json"
  }
});