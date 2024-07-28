import User from '@/models/User';
import { connectDb } from '@/utils/connectDb';
import { createUsername } from '@/utils/createUsername';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async session({ session }) {
			const sessionUser = await User.findOne({ email: session.user.email });
			session.user.id = sessionUser._id.toString();
			return session;
		},
		async signIn({ profile }) {
			try {
				await connectDb();

				let user = await User.findOne({ email: profile.email });

				if (!user) {
					user = await User.create({
						email: profile.email,
						username: createUsername(profile.email),
						image: profile.picture,
					});

					user.save();
				}

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };

