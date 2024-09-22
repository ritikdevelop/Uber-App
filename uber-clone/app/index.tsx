import { Redirect } from "expo-router";
import React from "react";
import { useAuth } from '@clerk/clerk-expo'
const Home = () => {

    const { isSignedIn } = useAuth();

    if (isSignedIn) {
      return <Redirect href="/(root)/(tabs)/home" />
    }

    return <Redirect href="/(auth)/welcome" />;
};

export default Home;