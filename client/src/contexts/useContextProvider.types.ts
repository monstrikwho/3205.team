export interface ContactType {
  email: string;
  number: string;
}

export interface ContextType {
  contactList: ContactType[];
  updateContactList: (data: ContactType[]) => void;
}

export interface ProviderProps {
  children: React.ReactNode;
}
