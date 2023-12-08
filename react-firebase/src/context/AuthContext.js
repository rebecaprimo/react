import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || {"uid":"CGMzNtEIzYPPgCm1gLudQGnoM6k2","email":"kaian@gmail.com","emailVerified":false,"isAnonymous":false,"providerData":[{"providerId":"password","uid":"kaian@gmail.com","displayName":null,"email":"kaian@gmail.com","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"AMf-vBx1PtHwFgEQhKNiFP9IvDxZ7fMJiboF9oG746B85YqjpEW_0kXiDeEG4m3lbjJl7_8mcZR9YTmQpE4Hh3nIyiTct6eDN7cuwhdY8BVF07pn5K_mAt0wTFQKf_mGL3fH8idJQjaZhRwjJJhh0TXL8rA6lgUEQrhJRKUuvPF0NEeUX6oQbDshT3wqCv52MXePjOVCAv7Rj1RY8RudWmVa4RSpcFx8YQ","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiYmQyOTllODU2MmU3MmYyZThkN2YwMTliYTdiZjAxMWFlZjU1Y2EiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXhwZW5zZS10cmFja2VyLTM2MjkzIiwiYXVkIjoiZXhwZW5zZS10cmFja2VyLTM2MjkzIiwiYXV0aF90aW1lIjoxNzAxMjk3MDczLCJ1c2VyX2lkIjoiQ0dNek50RUl6WVBQZ0NtMWdMdWRRR25vTTZrMiIsInN1YiI6IkNHTXpOdEVJellQUGdDbTFnTHVkUUdub002azIiLCJpYXQiOjE3MDEyOTcwNzMsImV4cCI6MTcwMTMwMDY3MywiZW1haWwiOiJrYWlhbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2FpYW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.O7QpqlJc7V8tPMDEcybKI5ZI4hHUKyzcoZSZNbNIatEKU597A4cjhsVVTBvbOrnYjxG8adVX9AILugSXIhpQwyFdKCJQ1bCsBtd6uQM_8XbjigMjsg3EK6CdCr3kq1F8pCiVSeoigMLUgvY7c49JIB-NpRZl2-TkfVIdLqJ-0kj-8Y-kUcTp14gGW0ChQjMuurLuBfvsJovN4MZ40BXVH5ARLoXrbYO3mZqhLZVDd4DHL37ljrDYdQ8Km8OZpPU5MkK0Tb0ifuubF29sCPzDSIMUAHFs4kTXT4e3HB4Zkwxa3uK9BHnP1ph1HmDaKv6vuxZvjzdAmRjqmwTsceKodA","expirationTime":1701300673812},"createdAt":"1701297056790","lastLoginAt":"1701297056790","apiKey":"AIzaSyAdnEuN_QQAkHG994xyy2HmTJbeaUAPvlk","appName":"[DEFAULT]"},
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
