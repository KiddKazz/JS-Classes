function WebLanguage(myName, myBestPart, myEaseToLearn, myRating) {
    this.name = myName;
    this.bestPart = myBestPart;
    this.easeToLearn = myEaseToLearn;
    this.rating = myRating;
};

function show(languageShow) {
    document.write('Language Name: ' + languageShow.name + '<br>');
    document.write('Best Part: ' + languageShow.bestPart + '<br>');
    document.write('Ease of Learning: ' + languageShow.easeToLearn + '<br>');
    document.write('Rating 1 to 10: ' + languageShow.rating + '<br>');
    document.write('<br>')
};

var javaScript = new WebLanguage('JavaScript', 'Makes cool effects', 'Moderate', 10);
var java = new WebLanguage('Java', 'Makes platform-independent applications', 'Hard', 8);
var html = new WebLanguage('HTML5/CSS', 'Makes pretty pages', 'Easy', 9);

function start() {
    document.write('<h1>JavaScript Specialist</h1>');
    document.write('<h3>Rating Web Languages</h3>');
    show(javaScript);
    show(java);
    show(html);
};