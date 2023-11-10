export interface ISGNewUser {
  name: string;
  username: string;
  email: string;
  password: string;
}

export class SGNewUser implements ISGNewUser {
  constructor(
    public name: string,
    public username: string,
    public email: string,
    public password: string
  ) {}
}
