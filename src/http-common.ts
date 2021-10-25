import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/4b003bf9415140a6b47f08ed457ace45",
  headers: {
    "Content-type": "application/json"
  }
});