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

var setColor = function (color) {
    $('body').css('background-color', "-webkit-radial-gradient(circle,white," + color + ")");
};

var getColor = function () {
    var hour = new Date().getHours();
    //var hour = 22;
    switch (hour) {
    case 5:
        return "rgb(255,147,41)";
        break;
    case 6:
        return "rgb(192,150,112)";
        break;
    case 7:
        return "rgb(128,153,183)";
        break;
    case 8:
        return "rgb(64,156,255)";
        break;
    case 9:
        return "rgb(64,156,255)";
        break;
    case 10:
        return "rgb(64,156,255)";
        break;
    case 11:
        return "rgb(64,156,255)";
        break;
    case 12:
        return "rgb(64,156,255)";
        break;
    case 13:
        return "rgb(64,156,255)";
        break;
    case 14:
        return "rgb(64,156,255)";
        break;
    case 15:
        return "rgb(64,156,255)";
        break;
    case 16:
        return "rgb(64,156,255)";
        break;
    case 17:
        return "rgb(64,156,255)";
        break;
    case 18:
        return "rgb(64,156,255)";
        break;
    case 19:
        return "rgbrgb(128,153,183)";
        break;
    case 20:
        return "rgb(192,150,112)";
        break;
    case 21:
        return "rgb(255,147,41)";
        break;
    default:
        return "rgb(0,0,102)";
        break;
    }
};

var interval = setInterval(setColor(getColor), 6000);

console.log(new Date().getHours() + ":" + new Date().getMinutes());

$(document).ready(function () {
    setColor();
});