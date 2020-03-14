const $resume = document.querySelector(".resume")
const $badge = document.createElement("div")
$badge.innerHTML = `
  <a href="kyle-coberly-resume.pdf" target="_BLANK">PDF</a>
`
$badge.classList.add("print")

Object.assign($badge.style, {
  "background-color": "hsl(220, 50%, 50%)",
  color: "hsl(220, 50%, 95%)",
  "font-size": "16px",
  position: "fixed",
  padding: "12px 125px",
  bottom: "0",
  right: "0",
  transform: "translateX(110px) rotate(-45deg) translateY(-15px)",
  "font-weight": "700",
})
$resume.append($badge)
