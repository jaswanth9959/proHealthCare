import bcrypt from "bcryptjs";

const doctors = [
  {
    firstName: "admin",
    lastName: "user",
    email: "admin@gmail.com",
    phone: "1234567890",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    firstName: "doctor",
    lastName: "user",
    email: "doctor@gmail.com",
    phone: "1234567890",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor",
  },
  {
    firstName: "lab",
    lastName: "officer",
    email: "lab@gmail.com",
    phone: "1234567890",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default doctors;
