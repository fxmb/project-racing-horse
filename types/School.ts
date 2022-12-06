export type School = {
  id: string;
  name: {
    school: string;
    owner: string;
  };
  contact: {
    phone: string;
    mobilePhone: string;
    web: string;
    email: string;
  };
  address: {
    street: string;
    zip: string;
    town: string;
    state?: string;
    country: string;
  };
};
