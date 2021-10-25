import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/46a65bf86d53433ea76ee399d1574e75",
  headers: {
    "Content-type": "application/json"
  }
});