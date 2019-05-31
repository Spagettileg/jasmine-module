Calculator = function() { /* New Calculator Object - Source Data */
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number; /* running total will be incremented by this number */
    }else {
        alert("Error!");
    }
}