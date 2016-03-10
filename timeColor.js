var colors = {
    red: 0,
    blue: 0,
    green: 0,
    setColors: function (r, g, b) {
        this.red = r;
        this.blue = b;
        this.green = g
    },
    addTo: function (r, g, b) {
        this.red = this.red + r;
        this.green = this.green + g;
        this.blue = this.blue + b;
    }
};

var colorToRgb = function (color) {
    return "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
};

var setColor = function () {
    var hour = new Date().getHours();
    //var hour = 5;
    if (hour >= 5 && hour < 7) {
        if (colors.blue < 255) {
            colors.addTo(0, 0, 5);
            $('body').css("background-color", colorToRgb(colors));
        }
        console.log("morning");
    } else if (hour >= 7 && hour < 19) {
        console.log("day");
    } else if (hour >= 19 && hour < 20) {
        console.log("evening");
    } else {
        $('body').css("background-color", "#191970");
        console.log("night");
    }
};

var interval = setInterval(setColor, 6000);

console.log(new Date().getHours() + ":" + new Date().getMinutes());

$(document).ready(function () {
    setColor();
});
