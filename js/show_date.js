function showDate() {
  const date = document.querySelector(".date");
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };
  const currentDate = new Date().toLocaleDateString("en-En", options);
}

export default showDate;
