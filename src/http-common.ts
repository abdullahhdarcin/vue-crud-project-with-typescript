import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/64f58f5c3afc4f4f992ea4cb9e4abf18",
  headers: {
    "Content-type": "application/json"
  }
});