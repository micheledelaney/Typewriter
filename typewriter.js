var Typewriter = function(element, period) {
        this.element = element;
        this.strings = JSON.parse(element.getAttribute('data-typewriter-strings'));
        this.classes = JSON.parse(element.getAttribute('data-typewriter-classes'));
        this.period = period;
        this.index = 0;
        this.stringIndex = 1;
        this.type();
    };

    Typewriter.prototype.removeCursor= function() {
        document.querySelector('.typewriterCursor').classList.remove("typewriterCursor");
    };

    Typewriter.prototype.type = function() {
        this.element.innerHTML = "";
        for (var i = 0; i < this.index; i++) {
            var typeSpan = document.createElement("span");
            typeSpan.classList.add(this.classes[i]);
            typeSpan.innerHTML = this.strings[i];
            this.element.appendChild(typeSpan);
        }
        var typeSpanCurrent  = document.createElement("span");
        typeSpanCurrent.classList.add(this.classes[i], "typewriterCursor");
        typeSpanCurrent.innerHTML = this.strings[this.index].substring(0, this.stringIndex);
        this.element.appendChild(typeSpanCurrent);
        if (this.stringIndex == this.strings[this.index].length) {
            this.index += 1;
            this.stringIndex = 1;
        } else {
            this.stringIndex += 1;
        }
        var that = this;
        if (this.index < this.strings.length) {
            setTimeout(function() {
                that.type();
            }, this.period);
        } else {
            setTimeout(function() {
                that.removeCursor();
            }, this.period * 2);
        }
    };

