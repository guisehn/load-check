console.log("segment executed")

const script = document.createElement("script")
script.defer = true
script.src = "3rd-party.js"
document.head.appendChild(script)
