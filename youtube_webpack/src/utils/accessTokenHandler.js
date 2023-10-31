import { Cookies } from "react-cookie";

// 로컬 스토리지에 저장
export const saveAccessTokenToLocalStorage = (accessToken) => {
  localStorage.setItem('accessToken', accessToken)
}
  
export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('accessToken') || ''
}

// 쿠키에 저장
const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, {...options});
}

export const getCookie = (name) => {
  return cookies.get(name);
}