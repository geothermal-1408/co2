import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      baseUrl = "http://localhost:3000"; // Ensure the base URL is explicitly defined in development

      // Handle sign-in and sign-out redirects
      if (url === `${baseUrl}/api/auth/signout`) {
        return baseUrl; // Redirect to home page after sign out
      }

      // Default behavior: Redirect to the dashboard after sign in
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };
