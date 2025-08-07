import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface Props {
  onVote: (type: VoteType) => void;
  onReset: () => void;
}

export default function VoteOptions({ onVote, onReset }: Props) {
  return (
    <div>
      <button onClick={() => onVote("good")}>Good</button>
      <button onClick={() => onVote("neutral")}>Neutral</button>
      <button onClick={() => onVote("bad")}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
