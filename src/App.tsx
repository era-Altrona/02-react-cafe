import css from './App.module.css'
import { CafeInfo } from './components/CafeInfo/CafeInfo'
import { useState } from 'react'
import { type Votes, type VoteType } from './types/votes'
import { VoteOptions } from './components/VoteOptions/VoteOptions'
import { VoteStats } from './components/VoteStats/VoteStats'
import Notification from './components/Notification/Notification'

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

const handleVote = (type: VoteType): void => {
  setVotes(prevVotes => ({
    ...prevVotes,
    [type]: prevVotes[type] + 1
  }));
  }; 

  const resetVotes = (): void => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positivePercentage = totalVotes > 0 
    ? Math.round((votes.good / totalVotes) * 100) 
    : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes > 0 ? (
      <VoteStats votes={votes} totalVotes={totalVotes} positivePercentage={positivePercentage} /> ) : (
        <Notification />
      )}
    </div>
  )
}

