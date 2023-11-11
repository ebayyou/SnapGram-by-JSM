import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { createUserAccount, signInAccount } from "../app-write/api";
import { ISGNewUser } from "@/shared/interface/sg-new-user.model";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: ISGNewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: ISGNewUser) => signInAccount(user),
  });
};
