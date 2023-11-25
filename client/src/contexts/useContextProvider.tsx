import { useState, createContext } from "react";

import {
  ContextType,
  ProviderProps,
  ContactType,
} from "./useContextProvider.types";

export const MyContext = createContext<ContextType | undefined>(undefined);

export default function Provider({ children }: ProviderProps) {
  const [contactList, setContactList] = useState<ContactType[]>([]);

  const updateContactList = (data: ContactType[]) => {
    setContactList(data);
  };

  const contextValue: ContextType = {
    contactList,
    updateContactList,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
