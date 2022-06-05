import React from "react";

import useGet from "./useGet";

import { API } from "../api/api";

export default function useGetRandomUser() {
  const [user, setUser] = React.useState();

  const handleRandomUserFormAPI = useGet(API.BASE_URL, (data) =>
    setUser(data.results[0])
  );

  React.useEffect(() => {
    handleRandomUserFormAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, handleRandomUserFormAPI };
}
