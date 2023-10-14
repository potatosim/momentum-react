import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getValueFromLocalStorage, saveValueToLocalStorage } from 'helpers/localStorage';
import { LocalStorageKeys } from 'enum/LocalStorageKeys';
import { getDate, getTimeOfTheDay } from 'helpers/getTimeAndDate';
import classes from './MainPage.module.scss';

const MainPage = () => {
  const [name, setName] = useState<string>(getValueFromLocalStorage(LocalStorageKeys.Name) || '');
  const [date, setDate] = useState(getDate());
  const [timesOfDay, setTimesOfDay] = useState(getTimeOfTheDay());

  const timeRef = useRef<HTMLTimeElement>(null);

  useEffect(() => {
    const startTimer = setInterval(() => {
      const curDate = getDate();
      const curTimeOfDay = getTimeOfTheDay();
      if (timeRef.current) {
        timeRef.current.innerText = new Date().toLocaleTimeString();
      }
      if (date !== curDate) {
        setDate(curDate);
      }
      if (timesOfDay !== curTimeOfDay) {
        setTimesOfDay(curTimeOfDay);
      }
    }, 1000);

    return () => clearInterval(startTimer);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveValueToLocalStorage(LocalStorageKeys.Name, name);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [name]);

  return (
    <div className={classes.dateWrapper}>
      <time ref={timeRef} className={classes.time} />
      <div className={classes.date}>{date}</div>
      <div className={classes.greetingContainer}>
        <span className={classes.greeting}>Good {timesOfDay},</span>
        <input
          className={classes.name}
          placeholder="Enter your name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MainPage;
