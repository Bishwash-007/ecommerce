import React from "react";
import { Redirect } from "expo-router";

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
          pathname: "/order",
          params: { id: "1" },
        }}
      />
    );
  } else {
    return <Redirect href="/log-in" />;
  }
};

export default App;
