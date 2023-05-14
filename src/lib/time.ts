export function msToMinutesAndSeconds(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return seconds == 60
    ? `${String(minutes + 1)}:00`
    : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
