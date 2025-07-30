import React from "react";
import { Redirect } from "expo-router";
import { useAuthStore } from "@/hooks/useAuthstore";

const App = () => {
  const { user } = useAuthStore();

  if (user) {
    return <Redirect href={"/home"} />;
  } else {
    return <Redirect href={"/log-in"} />;
  }
};

export default App;
