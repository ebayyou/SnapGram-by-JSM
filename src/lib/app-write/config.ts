import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appWriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  collectionSavesId: import.meta.env.VITE_APPWRITE_COLECTION_SAVES_ID,
  collectionUsersId: import.meta.env.VITE_APPWRITE_COLECTION_USERS_ID,
  collectionPostsId: import.meta.env.VITE_APPWRITE_COLECTION_POSTS_ID,
};

export const client = new Client();

client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
