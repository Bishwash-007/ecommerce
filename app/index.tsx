import React from "react";
import { Redirect } from "expo-router";
import { useAuthStore, User } from "@/hooks/useAuthstore";

const App = () => {
  // Uncomment this when using real auth state
  // const { user } = useAuthStore();

  const user = {
    fullName: "Bishwash Chaudhari",
  };

  if (user) {
    return (
      <Redirect
        href={{
          pathname: "/(root)/product/product",
          params: { id: "1" },
        }}
      />
    );
  } else {
    return <Redirect href="/log-in" />;
  }
};

export default App;
