import axios from "axios";

const apis = {
  development: "http://localhost:4000",
  production: "https://music-do-api.herokuapp.com",
};

const API = axios.create({ baseURL: apis[process.env.NODE_ENV] });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const signIn = (formData) => API.post("/login/login", formData);
export const signUp = (formData) => API.post("/login/signup", formData);

// Configura a instância do Axios para injetar o cabeçalho de autenticação antes de cada requisição
API.interceptors.request.use(async (config) => {
  // Verifica se já temos as informações do usuário logado no localStorage
  const storedUser = localStorage.getItem("profile");

  const loggedInUser = JSON.parse(storedUser || '""');

  if (loggedInUser.token) {
    config.headers = {
      Authorization: `Bearer ${loggedInUser.token}`,
    };
  }

  return config;
});

export default API;
