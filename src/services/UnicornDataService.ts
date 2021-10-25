import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/unicorns");
  }

  get(id: string) {
    return http.get(`/unicorns/${id}`);
  }

  create(data: any) {
    return http.post("/unicorns", data);
  }

  update(id: string, data: any) {
    return http.put(`/unicorns/${id}`, data);
  }

  delete(_id: string) {
    return http.delete(`/unicorns/${_id}`);
  }

//   deleteAll() {
//     return http.delete(`/unicorns`);
//   }

//   findByTitle(title: string) {
//     return http.get(`/unicorns?title=${title}`);
//   }
}

export default new TutorialDataService();