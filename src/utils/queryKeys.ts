export const queryKeys = {
  auth: {
    me: () => ["auth", "me"] as const,
  },
  user: {
    profile: () => ["user", "profile"] as const,
  },
} as const;
