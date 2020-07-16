
document.getElementById("countdown").addEventListener("click", countdownTimer);
document.getElementById("countdown").addEventListener("click", setTimerInterval);
document.getElementById("countdown").addEventListener("click", showOrHide);

function countdownTimer() {
    const today = new Date();
    const difference = +new Date("2021-05-14 16:00:00") - +new Date();
    const parts = {
        days: (Math.floor(difference / (1000 * 60 * 60 * 24))).toString(),
        hours: (Math.floor((difference / (1000 * 60 * 60)) % 24)).toString(),
        minutes: (Math.floor((difference / 1000 / 60) % 60)).toString(),
        seconds: (Math.floor((difference / 1000) % 60)).toString(),
    };
    const remaining = Object.keys(parts)
        .map((part) => {
            if (!parts[part]) return;
            if (parts[part] != "1") {
                return `${parts[part]} ${part}`;
            } else {
                return `${parts[part]} ${part}`.slice(0, -1);
            }
        })
        .join(", ");


    const display = `Time remaining until graduation: ${remaining}`

    document.getElementById("countdownDisplay").innerHTML = display;


}

function showOrHide() {
    var x = document.getElementById("countdownDisplay");

    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("countdown").innerHTML = "Show Countdown";
    } else {
        x.style.display = "block";
        document.getElementById("countdown").innerHTML = "Hide Countdown";
    }
}

function setTimerInterval() {
    setInterval(countdownTimer, 1000);
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
//    var panel = document.getElementById("experience_panel");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



