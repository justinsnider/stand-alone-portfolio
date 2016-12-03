// My Scripts


// Random Number Generator
var max = 3;
var randNum = Math.floor(Math.random() * max );
console.log(randNum);

// Store Images
var img0 = '/img/jimmy.jpg';
var img1 = '/img/walter.jpg';
var img2 = '/img/mega_man.jpg';


// Show Images

$('header img').attr('src', eval('img' + randNum) );

//Activate Gallery

$('figure').lightGallery({
    selector: 'a'
});







