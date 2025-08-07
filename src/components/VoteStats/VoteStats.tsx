// import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface Props {
  votes: Votes;
}

export default function VoteStats({ votes }: Props) {
  const total = votes.good + votes.neutral + votes.bad;
  const positive = total > 0 ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}