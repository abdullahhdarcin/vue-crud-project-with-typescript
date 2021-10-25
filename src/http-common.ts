import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/c397692b9f744d92a9f62a3d4003917b",
  headers: {
    "Content-type": "application/json"
  }
});