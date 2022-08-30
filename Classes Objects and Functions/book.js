function Book(theTitle, theAuthor, thePrice) {
    this.title = theTitle;
    this.author = theAuthor;
    this.price = thePrice;
    this.show = showProps;
};

function showProps() {
    var result = '';
    for (var property in this) {
        if (property == 'show' || property == 'addTax') continue;
        result += property + '=' + this[property] + '<br>';
    }
    return result;
};