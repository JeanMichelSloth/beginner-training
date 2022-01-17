window.setInterval(() => {
    const timeToDisplay = createTimeFromDate(new Date());
    displayTime(timeToDisplay);
}, 1000);

function createTimeFromDate(dateInput) {
    const formattedHours = formatTimeItem(dateInput.getHours());
    const formattedMinutes = formatTimeItem(dateInput.getMinutes());
    const formattedSeconds = formatTimeItem(dateInput.getSeconds());
    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}

function formatTimeItem(timeItemToFormat) {
    return timeItemToFormat > 9 ? timeItemToFormat : '0' + timeItemToFormat;
}

function displayTime(timeToDisplay) {
    document.getElementById('time').innerHTML = timeToDisplay;
}