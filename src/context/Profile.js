import { useState, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [social, setSocial] = useState("");

  return (
    <ProfileContext.Provider
      value={{ profile, setProfile, isLogin, setIsLogin, social, setSocial }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
