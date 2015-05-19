var sumOfFonts = fonts.reduce(function(sum, fontFamily){
  return sum + fontFamily.win;
}, 0);

var average = sumOfFonts / fonts.length;

var sumOfFonts = fonts.reduce(function(sum, fontFamily){
  return sum + fontFamily.mac;
}, 0);

var average = sumOfFonts / fonts.length;


var filterOfFonts = fonts.filter(function(fontFamily){
  return fontFamily.win >= 90 && fontFamily.mac >= 90;
});
console.log(filterOfFonts);

var htmlArr =
    filterOfFonts.map(function(font){
  return "<li><span class=\"family\"> "+font.fontFamily + " " +font.type + " "+ "</span><span class=\"stats\"><span class=\"win\"><em>Windows</em> "+ font.win+ "" +"% </span><span class=\"mac\"><em>Mac</em> "+font.mac+"%</span></span></li>";
  });


document.querySelector('.fonts-list').innerHTML = htmlArr;
