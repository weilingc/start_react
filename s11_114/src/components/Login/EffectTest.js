import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (proprs) => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timeDuration } = props;

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
}
