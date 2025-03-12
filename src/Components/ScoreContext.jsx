import { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [percentile, setPercentile] = useState(50);
  const [rank, setRank] = useState(10);
  const [currentScore, setCurrentScore] = useState(12);

  return (
    <ScoreContext.Provider
      value={{
        percentile,
        setPercentile,
        rank,
        setRank,
        currentScore,
        setCurrentScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
