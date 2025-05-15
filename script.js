// Handle Enter key in search input
document.getElementById("urlsearch").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        window.location.href = "https://www.google.com/search?q=" + this.value;
    }
});

// Handle search button click
document.getElementById("searchbtn").addEventListener("click", function() {
    const searchValue = document.getElementById("urlsearch").value;
    window.location.href = "https://www.google.com/search?q=" + searchValue;
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById("digitalClock").textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();


document.getElementById("youtubeButton").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com";
});

document.getElementById("gmailButton").addEventListener("click", function() {
    window.location.href = "https://mail.google.com";
});

document.getElementById("telegramButton").addEventListener("click", function() {
    window.location.href = "https://web.telegram.org";
});

document.getElementById("whatsappButton").addEventListener("click", function() {
    window.location.href="https://web.whatsapp.com";
})

document.getElementById("twitterButton").addEventListener("click", function() {
    window.location.href="https://x.com";
})

document.getElementById("instagramButton").addEventListener("click", function() {
    window.location.href="https://www.instagram.com";
})

document.getElementById("discordButton").addEventListener("click", function() {
    window.location.href="https://discord.com";
})

document.getElementById("githubButton").addEventListener("click", function() {
    window.location.href="https://github.com";
})

document.getElementById("githubButtonDev").addEventListener("click", function() {
    window.location.href="https://github.com/Deaptayan";
})
