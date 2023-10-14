export const getTimeOfTheDay = () => {
  const currentTime = Math.floor(new Date().getHours());

  if (currentTime >= 0 && currentTime < 6) {
    return 'night';
  }
  if (currentTime >= 6 && currentTime < 12) {
    return 'morning';
  }
  if (currentTime >= 12 && currentTime < 18) {
    return 'afternoon';
  }
  return 'evening';
};

export const getDate = () => {
  const currentDate = new Date().toLocaleDateString('en-EN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return currentDate;
};
