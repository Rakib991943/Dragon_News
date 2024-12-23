import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../Firebase/fireabse.config";

export const AuthContest = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // Create User 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }
  const updateauser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  }
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    logInUser,
    loading,
    updateauser,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe;
    }
  }, [])

  return (
    <AuthContest.Provider value={authInfo}>
      {children}
    </AuthContest.Provider>
  );
};

export default AuthProvider;