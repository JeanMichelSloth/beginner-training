window.setInterval(() => {
    let timeToDisplay = createTimeFromDate(new Date());
    displayTime(timeToDisplay);
}, 1000);

function createTimeFromDate(dateInput) {
    let formattedHours = formatTimeItem(dateInput.getHours());
    let formattedMinutes = formatTimeItem(dateInput.getMinutes());
    let formattedSeconds = formatTimeItem(dateInput.getSeconds());
    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
}

function formatTimeItem(timeItemToFormat) {
    return timeItemToFormat > 9 ? timeItemToFormat : '0' + timeItemToFormat;
}

function displayTime(timeToDisplay) {
    document.getElementById('time').innerHTML = timeToDisplay;
}