import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/AppRouter/AppRouter";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spin } from "antd";
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from "./store/authReducer";

const getUser = async () => {
  try {
    const res = await axios.get("/auth/me");
    return res.data.user;
  } catch (err) {
    throw err;
  }
}

const App = () => {

  const dispatch = useDispatch();

  const { data: user, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    retry: false
  });

  useEffect(() => {
    if (user) dispatch(setUser(user));
    else dispatch(clearUser());
  }, [user, dispatch, error]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="small" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;