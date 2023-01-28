const title = document.querySelector("#title");

const handleClick = () => (title.style.color = "red");

title.addEventListener("click", handleClick);
