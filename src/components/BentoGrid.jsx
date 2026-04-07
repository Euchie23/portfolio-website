import React from 'react';
import { BentoCard } from "./BentoCard";
import { RepoContent } from "../RepoContent";


export const BentoGrid = ({ repos, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.keys(repos).map((key) => (
        <BentoCard
          key={key}
          repoKey={key}
          repo={repos[key]}
          onClick={() => onCardClick(key)}
        />
      ))}
    </div>
  );
};
