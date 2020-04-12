/**
 * To create an user: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  /**
   * Alternative
   * techs: string[];
   */
  techs: Array<string | TechObject>;
}

export default function createUser({
  name = "",
  email,
  password,
  techs,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
