import React from "react";

import "./UserProfilePicture.css";

export default function UserProfilePicture({ picture }) {
  return (
    <li className="e-one-user-profile-picture">
      <picture>
        <img src={picture} alt={`profile`} />
      </picture>
    </li>
  );
}
