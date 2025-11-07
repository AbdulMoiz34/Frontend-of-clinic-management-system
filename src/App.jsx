import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/AppRouter/AppRouter";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";

const App = () => {

  const { data: user, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true
      });
      return res.data.user;
    },
    retry: false
  });

  if (isLoading) return <p className="text-center mt-10">Checking Session...</p>;

  console.log(user);
  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;