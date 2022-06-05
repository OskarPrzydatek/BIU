import "./UserProfile.css";

import UserNotFound from "../../components/UserNotFound/UserNotFound";

export default function UserProfile({ user, profilePicture, children }) {
  return (
    <>
      {user !== undefined ? (
        <ul className="e-one-user-profile">
          {profilePicture}
          <li className="e-one-user-profile__data-wrapper">
            <ul className="e-one-user-profile__data-wrapper--items">
              {children}
            </ul>
          </li>
        </ul>
      ) : (
        <UserNotFound />
      )}
    </>
  );
}
