var TxtType = function (el, toRotate, period, toDelete) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.toDelete = toDelete;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { 
        delta /= 2; 
    }

    if (!this.isDeleting && this.toDelete === "true" && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '' && this.toDelete === "true") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    if (this.toDelete === "false") {
        this.isDeleting = false;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    setTimeout(() => {    
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            var toDeleteVar = elements[i].getAttribute('toDelete');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period, toDeleteVar);
            }
        }
    }, 1000);
};
