import React, { createContext, useContext, useState } from "react";

type SchoolListAndMapContextType = {
  activeSchoolId?: string;
  setActiveSchoolId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const SchoolListAndMapContext =
  createContext<SchoolListAndMapContextType>({} as SchoolListAndMapContextType);

export default function SchoolListAndMapContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [activeSchoolId, setActiveSchoolId] = useState<string>();

  return (
    <SchoolListAndMapContext.Provider
      value={{
        activeSchoolId,
        setActiveSchoolId,
      }}
    >
      {children}
    </SchoolListAndMapContext.Provider>
  );
}

export const useSchoolListAndMapContext = (): SchoolListAndMapContextType =>
  useContext(SchoolListAndMapContext);
