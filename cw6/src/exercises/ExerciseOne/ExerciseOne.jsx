import React from "react";

import useGetRandomUser from "./hooks/useGetRandomUser";

import PageLayout from "./layouts/PageLayout/PageLayout";
import UserProfile from "./layouts/UserProfile/UserProfile";
import UserProfileItem from "./components/UserProfileItem/UserProfileItem";
import UserProfilePicture from "./components/UserProfilePicture/UserProfilePicture";
import GenerateUserButton from "./components/GenerateUserButton/GenerateUserButton";
import Loading from "./components/Loading/Loading";

import { userProfileLabels } from "./consts/userProfileLabels";

export default function ExerciseOne() {
  const { user, handleRandomUserFormAPI } = useGetRandomUser();

  return (
    <>
      {user !== undefined ? (
        <PageLayout>
          <UserProfile
            user={user}
            profilePicture={<UserProfilePicture picture={user.picture.large} />}
          >
            <UserProfileItem
              label={`${user.name.title} `}
              value={`${user.name.first} ${user.name.last}`}
            />
            <UserProfileItem
              label={userProfileLabels.NATIONAL}
              value={user.nat}
            />
            <UserProfileItem
              label={userProfileLabels.PHONE}
              value={user.phone}
            />
            <UserProfileItem
              label={userProfileLabels.EMAIL}
              value={user.email}
            />
          </UserProfile>
          <GenerateUserButton
            label={userProfileLabels.CREATE_NEW_USER}
            onClick={handleRandomUserFormAPI}
          />
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}
