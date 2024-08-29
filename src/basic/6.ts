interface User {
  name: string;
  age: number;
  email: string;
  adress?: {
    city: string;
    country: string;
  };
}

let person: User = {
  name: "Sasha",
  age: 19,
  email: "himentor@gmail.com",
};

console.log(person);
