import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.email === 'reodica.aldrin06+superadmin_01@gmail.com' &&
          credentials?.password === 'Password123!'
        ) {
          return {
            id: '25904f48-0cc7-424b-afbc-25acf80d3e7e',
            firstName: 'aldrin',
            lastName: 'reodica',
            email: 'reodica.aldrin06+superadmin_01@gmail.com',
            password: 'Password123!',
            role: 'SUPERADMIN',
            isActive: true,
            isVerified: false,
            lastLogin: '2025-08-27T15:30:00.000+00:00',
            createdAt: '2025-08-27T06:14:54.138+00:00',
            updatedAt: '2025-08-27T06:14:54.138+00:00',
          }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token }) {
      //   if (user) token.role = (user as any).role
      return token
    },
    async session({ session }) {
      //   if (token) (session.user as any).role = token.role
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
