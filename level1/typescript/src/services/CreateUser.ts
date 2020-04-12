/**
 * To create an user: name, email, password
 */

export default function createUser(name = "", email: string, password: string) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
