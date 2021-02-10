import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/catergories';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/catergories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/catergories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/catergories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/catergories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
