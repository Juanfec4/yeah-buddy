import "./styles.scss";
import { useState, useEffect, useRef } from "react";
import CategoryTag from "../categoryTag";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [elapsedTime, setElapsedTime] = useState("");
  const intervalRef = useRef();

  const increaseSeconds = () => setSeconds((prev) => prev + 1);

  useEffect(() => {
    intervalRef.current = setInterval(increaseSeconds, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const timeString = new Date(seconds * 1000).toISOString().slice(11, 19);
    setElapsedTime(timeString);
  }, [seconds]);

  return <CategoryTag content={elapsedTime} />;
};

export default Timer;
