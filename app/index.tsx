import React from "react";
import { Redirect } from "expo-router";
import { useAuthStore, User } from "@/hooks/useAuthstore";

const App = () => {
  // const { user } = useAuthStore();
  const user = {
    fullName: "Bishwash Chaudhari",
  };

  if (user) {
    return <Redirect href={"/home"} />;
  } else {
    return <Redirect href={"/log-in"} />;
  }
};

export default App;
