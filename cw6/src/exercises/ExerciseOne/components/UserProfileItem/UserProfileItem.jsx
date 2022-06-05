import "./UserProfileItem.css";

export default function UserProfileItem({ label, value }) {
  return (
    <li className="e-one-user-profile-item">
      <span className="e-one-user-profile-item__label">{label}</span>
      <span className="e-one-user-profile-item__value">{value}</span>
    </li>
  );
}
