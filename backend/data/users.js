import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ho Duy Hoang',
    email: 'hoang@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nguyen Quoc Huy',
    email: 'huy@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
