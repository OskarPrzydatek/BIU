import React from "react";

import { DataContext } from "../contexts/DataContext";

export default function DataContextProvider({ children }) {
  const [data, setData] = React.useState({});

  const dataContextValue = React.useMemo(
    () => ({
      data,
      setData,
    }),
    [data, setData]
  );

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
}
