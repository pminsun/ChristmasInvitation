import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "유저 이메일,페스워드 방식",
      credentials: {
        email: {
          label: "유저 이메일",
          type: "email",
          placeholder: "user@email.com",
        },
        password: { label: "패스워드", type: "password" },
      },
      async authorize(credentials, req) {
        const accountArray = [
          {
            id: "박민선",
            password: "Partynight!",
          },
          {
            id: "정주비",
            password: "Partynight!",
          },
          {
            id: "이혜경",
            password: "Partynight!",
          },
          {
            id: "김희선",
            password: "Partynight!",
          },
          {
            id: "조효진",
            password: "Partynight!",
          },
          {
            id: "정안나",
            password: "Partynight!",
          },
          {
            id: "김하영",
            password: "Partynight!",
          },
          {
            id: "박연주",
            password: "Partynight!",
          },
        ];

        const matchedAccount = accountArray.find(
          (account) =>
            account.id === credentials.email &&
            account.password === credentials.password
        );

        if (matchedAccount) {
          const user = [
            {
              id: 1,
              name: "박민선",
              email: "박민선",
            },
            {
              id: 2,
              name: "정주비",
              email: "정주비",
            },
            {
              id: 3,
              name: "이혜경",
              email: "이혜경",
            },
            {
              id: 4,
              name: "김희선",
              email: "김희선",
            },
            {
              id: 5,
              name: "조효진",
              email: "조효진",
            },
            {
              id: 6,
              name: "정안나",
              email: "정안나",
            },
            {
              id: 7,
              name: "김하영",
              email: "김하영",
            },
            {
              id: 8,
              name: "박연주",
              email: "박연주",
            },
          ];

          const matchedUser = user.find((x) => x.email === matchedAccount.id);
          if (matchedUser) {
            return Promise.resolve(matchedUser);
          }
        }
        return Promise.resolve(null);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
