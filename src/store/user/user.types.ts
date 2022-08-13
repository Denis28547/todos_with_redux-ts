type addressType = {
  street: string;
  city: string;
};

export type userType = {
  id: number;
  username: string;
  email: string;
  address: addressType;
};
