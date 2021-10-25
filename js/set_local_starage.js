function setLocalStorage() {
  const name = document.querySelector(".name");
  localStorage.setItem("name", name.value);
}

export default setLocalStorage;
