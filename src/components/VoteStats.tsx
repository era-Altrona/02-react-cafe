
import { type Votes } from '../types/votes';
import styles from '../style/VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positivePercentage: number;
}

export const VoteStats = ({ votes, totalVotes, positivePercentage }: VoteStatsProps) => {
  const { good, neutral, bad } = votes;
  
  return (
    <div>
      <div className={styles.container}>
  <p className={styles.stat}>Good: <strong>{good}</strong></p>
  <p className={styles.stat}>Neutral: <strong>{neutral}</strong></p>
  <p className={styles.stat}>Bad: <strong>{bad}</strong></p>
  <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
  <p className={styles.stat}>Positive: <strong>{positivePercentage}%</strong></p>
</div>

    </div>
  );
};