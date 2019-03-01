Dagaz.Sounds = [];

Dagaz.Sounds.move  = 0;
Dagaz.Sounds.drop  = 1;
Dagaz.Sounds.win   = 2;
Dagaz.Sounds.lose  = 3;
Dagaz.Sounds.draw  = 4;
Dagaz.Sounds.page  = 5;
Dagaz.Sounds.start = 6;
Dagaz.Sounds.hint  = 7;
Dagaz.Sounds.popup = 8;

Dagaz.Controller.soundOff = false;

(function() {

var sounds  = [];
var current = null;

var play = function(sound) {
    sound.play();
}

function Sound(src, duration) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.duration = duration;
    this.start = null;
    this.play = function(){
        var isDelayed = false;
        if (!_.isUndefined(this.duration)) {
            var now = Date.now();
            if (this.start !== null) {
                if (now - this.start < this.duration) {
                    isDelayed = true;
                } else {
                    this.start = null;
                }
            } else {
                this.start = now;
            }
        }
        if (isDelayed) {
            _.delay(play, 100, this);
        } else {
            this.sound.play();
        }
    }
    this.stop = function(){
        this.sound.pause();
    }
}

Dagaz.Controller.addSound = function(ix, src, duration) {
    sounds[ix] = new Sound(src, duration);
}

Dagaz.Controller.play = function(ix) {
    if (Dagaz.Controller.soundOff) return;
    if (!_.isUndefined(sounds[ix])) {
         current = sounds[ix];
         current.play();
    }
}

Dagaz.Controller.stop = function() {
    if (current !== null) {
        current.stop();
        current = null;
    }
}

Dagaz.Controller.sound = function() {
    if (Dagaz.Controller.soundOff) {
        sound.innerHTML = "no Sound";
        Dagaz.Controller.soundOff = false;
    } else {
        sound.innerHTML = "Sound";
        Dagaz.Controller.soundOff = true;
    }
}

})();

Dagaz.Controller.addSound(Dagaz.Sounds.move,  "../../sounds/clack.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.drop,  "../../sounds/on.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.win,   "../../sounds/tadam.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.lose,  "../../sounds/loss.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.draw,  "../../sounds/draw.ogg");
Dagaz.Controller.addSound(Dagaz.Sounds.page,  "../../sounds/page.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.hint,  "../../sounds/bird.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.popup, "../../sounds/popup.wav");
