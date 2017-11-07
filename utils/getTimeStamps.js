// Return an array with the latest timestamps since the last day
const getTimeStamps = () => {
  const HOURS = 5;
  const HOUR_IN_MILISECONDS = 60 * 60 * 1000;
  const currentTimestamp = new Date().getTime();
  const timeStamps = [];

  for(let i=0; i < HOURS; i++) {
    timeStamps.push(currentTimestamp - (i * HOUR_IN_MILISECONDS));
  }
  return timeStamps;
}

module.exports = getTimeStamps;