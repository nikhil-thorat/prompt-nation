"use client";

import UserProfile from "@/components/UserProfile";
import useUserDetails from "@/hooks/useUserDetails";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
	const { loading, setUserId, userDetails } = useUserDetails();

	const { userId } = useParams();

	useEffect(() => {
		setUserId(userId);
	});
	return (
		<section>
			<UserProfile page="userProfile" loading={loading} user={userDetails} />
		</section>
	);
};

export default Profile;
