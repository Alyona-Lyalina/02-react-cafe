// Notification.tsx
// Renders a message when no feedback has been given

import css from "./Notification.module.css";

export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}