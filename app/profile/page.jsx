'use client';

import UserProfile from '@/components/UserProfile';
import useUser from '@/hooks/useUserDetails';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MyProfile = () => {
	const { loading, setUserId, userDetails } = useUser();

	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session?.user.id) {
			router.push('/');
		}
		setUserId(session?.user.id);
	});
	return (
		<section className="">
			<UserProfile page="myProfile" loading={loading} user={userDetails} />
		</section>
	);
};

export default MyProfile;
