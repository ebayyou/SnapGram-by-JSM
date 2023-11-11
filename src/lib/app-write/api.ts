import { ID, Query } from "appwrite";

import { ISGNewUser } from "@/shared/interface/sg-new-user.model";
import { account, appWriteConfig, avatars, databases } from "./config";

export async function createUserAccount(user: ISGNewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email!,
      user.password!,
      user.name!
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name!);

    const newUser = await saveNewUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveNewUserToDB(user: ISGNewUser) {
  try {
    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.collectionUsersId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signInAccount(user: ISGNewUser) {
  try {
    const session = await account.createEmailSession(
      user.email!,
      user.password!
    );

    return session;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.collectionUsersId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}
