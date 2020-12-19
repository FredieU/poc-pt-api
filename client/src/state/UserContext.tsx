import React, { createContext, ReactElement, ReactNode, useState } from "react";

const initialState: User = {
  email: undefined,
  token: undefined,
  username: undefined,
  _id: undefined,
};

export type User = {
  email?: string;
  token?: string;
  username?: string;
  _id?: string;
};

export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

export type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: UserProviderProps): ReactElement {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
