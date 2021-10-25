import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/8c8eb38401194fddb0201d4a7082a55f",
  headers: {
    "Content-type": "application/json"
  }
});