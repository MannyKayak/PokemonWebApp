import NextAuth from "next-auth"
import prisma from "../../../libs/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
  }),
  CredentialProvider({
    name: "credentials",
    credentials: {
      email: {label: "email", type:"email", placeholder: "Your email address"},
      password: {label: "password", type:"password"},
      username: {label: "username", type:"text", placeholder: "Your username"},
    },
    async authorize(credentials) {
      // so far hard code a user
      const user = {id: 1, name: "John", email: "john@example.com"}
      return user;
    }
  })
],
// encript jwt token
secret: process.env.SECRET,
}

export { handler as GET, handler as POST }