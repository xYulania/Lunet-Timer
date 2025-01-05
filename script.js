const lunaTimerDisplay = document.getElementById("timer")
const lunaStartBtn = document.getElementById("start")
const lunaStopBtn = document.getElementById("stop")
const lunaResetBtn = document.getElementById("reset")

let lunaStartTime = 0
let lunaElapsedTime = 0
let lunaTimerInterval

const lunaStartTimer = () => {
    lunaStartTime = Date.now() - lunaElapsedTime

    lunaTimerInterval = setInterval(() => {
        lunaElapsedTime = Date.now() - lunaStartTime
        lunaTimerDisplay.textContent = formatLunaTime(lunaElapsedTime)
    }, 10)

    lunaStartBtn.disabled = true
    lunaStopBtn.disabled = false
}

const formatLunaTime = (lunaElapsedTime) => {
    const milliseconds = Math.floor((lunaElapsedTime % 1000) / 10)
    const seconds = Math.floor((lunaElapsedTime % (1000 * 60)) / 1000)
    const minutes = Math.floor((lunaElapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    const hours = Math.floor(lunaElapsedTime / (1000 * 60 * 60))
    return (
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds) + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    )
}

const lunaStopTimer = () => {
    clearInterval(lunaTimerInterval)
    lunaStartBtn.disabled = false;
    lunaStopBtn.disabled = true;
}

const lunaResetTimer = () => {
    clearInterval(lunaTimerInterval)

    lunaElapsedTime = 0;
    lunaTimerDisplay.textContent = "00:00:00";

    lunaStartBtn.disabled = false;
    lunaStopBtn.disabled = true;
}

lunaStartBtn.addEventListener("click", lunaStartTimer)
lunaStopBtn.addEventListener("click", lunaStopTimer)
lunaResetBtn.addEventListener("click", lunaResetTimer)
