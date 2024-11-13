// useUser.js
import { useState, useEffect } from "react";
import { fetchUserAttributes, signOut as awsSignOut } from "aws-amplify/auth";

export function useUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUserAttributes() {
      try {
        const user = await fetchUserAttributes();
        setUsername(user.name);
        setEmail(user.email);
      } catch (error) {
        console.log("error getting user attributes: ", error);
      }
    }

    getUserAttributes();
  }, []);

  async function signOut() {
    try {
      await awsSignOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return { username, email, signOut };
}
