import NextAuth, { NextAuthConfig } from "next-auth"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/core/prisma"

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [Discord]
} satisfies NextAuthConfig

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
