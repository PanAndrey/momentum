function getTimeOfDay() {
  const time = ["morning", "afternoon", "evening", "night"];
  const hours = new Date().getHours();
  let timeOfDay = hours / 6;
  switch (true) {
    case timeOfDay >= 0 && timeOfDay < 1:
      return time[3];
    case timeOfDay >= 1 && timeOfDay < 2:
      return time[0];
    case timeOfDay >= 2 && timeOfDay < 3:
      return time[1];
    case timeOfDay >= 3 && timeOfDay < 4:
      return time[2];

    default:
      return "day";
  }
}
export default getTimeOfDay;
