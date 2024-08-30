type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

let user: Params = {
  email: "q",
  firstName: "w",
  lastName: "e",
  phone: "rty",
};

console.log(user);
