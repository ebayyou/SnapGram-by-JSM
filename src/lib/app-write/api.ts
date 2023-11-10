import { ISGNewUser } from "@/shared/interface/sg-new-user.model";
import { account } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: ISGNewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
