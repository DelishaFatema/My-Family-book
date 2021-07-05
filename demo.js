var names = [
    "2. My father (Abrar Ahmad)",
    "3. My mother (Nazia Taskeen)",
    "4. Me (Delisha Fatema)",
    "5. My younger brother (Hamdan Ahmad)",
    "6. My youngest brother (Rafay Ahmad)"
];

var images = [
    "dad.jpg",
    "mom.jpg",
    "me.jpg",
    "bro1.jpg",
    "bro2.jpg"
];

var i = 0;

function nextslide() {
    document.getElementById("one").innerHTML = names[i];
    document.getElementById("family_img").src = images[i];
    i++;

    if (i == 5) {
        i = 0;
    }
}