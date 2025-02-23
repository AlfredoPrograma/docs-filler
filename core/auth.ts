import NextAuth, { NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/core/prisma"

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: []
} satisfies NextAuthConfig

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
