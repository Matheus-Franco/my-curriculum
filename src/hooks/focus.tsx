import React, { createContext, useContext, useState } from 'react';

interface IContextData {
  handleFocusApresentation(): void;
  handleFocusGoals(): void;
  handleFocusTechs(): void;
  handleFocusProjects(): void;
  handleFocusCourses(): void;
  handleFocusSkills(): void;
  focusApresentation: boolean;
  focusGoals: boolean;
  focusTechs: boolean;
  focusProjects: boolean;
  focusCourses: boolean;
  focusSkills: boolean;
}

const FocusContext = createContext<IContextData>({} as IContextData);

export const FocusProvider: React.FC = ({ children }) => {
  const [focusApresentation, setFocusApresentation] = useState<boolean>(false);
  const [focusGoals, setFocusGoals] = useState<boolean>(false);
  const [focusTechs, setFocusTechs] = useState<boolean>(false);
  const [focusProjects, setFocusProjects] = useState<boolean>(false);
  const [focusCourses, setFocusCourses] = useState<boolean>(false);
  const [focusSkills, setFocusSkills] = useState<boolean>(false);

  function handleFocusApresentation(): void {
    setTimeout(() => {
      setFocusApresentation(false);
    }, 2000);

    setFocusApresentation(true);
  }

  function handleFocusGoals(): void {
    setTimeout(() => {
      setFocusGoals(false);
    }, 2000);

    setFocusGoals(true);
  }

  function handleFocusTechs(): void {
    setTimeout(() => {
      setFocusTechs(false);
    }, 2000);

    setFocusTechs(true);
  }

  function handleFocusProjects(): void {
    setTimeout(() => {
      setFocusProjects(false);
    }, 2000);

    setFocusProjects(true);
  }

  function handleFocusCourses(): void {
    setTimeout(() => {
      setFocusCourses(false);
    }, 2000);

    setFocusCourses(true);
  }

  function handleFocusSkills(): void {
    setTimeout(() => {
      setFocusSkills(false);
    }, 2000);

    setFocusSkills(true);
  }

  return (
    <FocusContext.Provider
      value={{
        handleFocusApresentation,
        handleFocusGoals,
        handleFocusTechs,
        handleFocusProjects,
        handleFocusCourses,
        handleFocusSkills,
        focusApresentation,
        focusCourses,
        focusGoals,
        focusProjects,
        focusSkills,
        focusTechs,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export function useFocus(): IContextData {
  const context = useContext(FocusContext);

  return context;
}
