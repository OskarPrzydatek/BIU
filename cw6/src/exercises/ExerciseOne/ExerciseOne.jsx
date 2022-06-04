import React from "react";

export default function ExerciseOne() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((result) => result.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  const handleRandomUserFormAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((result) => result.json())
      .then((data) => setUser(data.results[0]));
  };

  return (
    <section>
      <h2>Zadanie 1</h2>

      {user !== undefined ? (
        <ul>
          <li>
            {user.name.title} {user.name.first} {user.name.last}
          </li>

          <li>Nationality: {user.nat}</li>

          <li>Phone: {user.phone}</li>

          <li>Email: {user.email}</li>

          <li>
            <picture>
              <img
                src={user.picture.large}
                alt={`${user.name.first} profile`}
              />
            </picture>
          </li>
        </ul>
      ) : (
        <li>User doesn't exist!</li>
      )}

      <button onClick={handleRandomUserFormAPI}>Generate random user</button>
    </section>
  );
}
