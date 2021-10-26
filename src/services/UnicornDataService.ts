import http from "../http-common";

class UnicornDataService {
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

  delete(id: string) {
    return http.delete(`/unicorns/${id}`);
  }
}

export default new UnicornDataService();