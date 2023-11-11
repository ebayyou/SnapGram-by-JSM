export interface ISGNewUser {
  accountId?: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  password?: string | null;
  imageUrl?: URL | null;
}

export class SGNewUser implements ISGNewUser {
  constructor(
    public accountId?: string | null,
    public name?: string | null,
    public username?: string | null,
    public email?: string | null,
    public password?: string | null,
    public imageUrl?: URL | null
  ) {}
}
