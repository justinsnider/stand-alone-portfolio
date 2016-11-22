// My Scripts


// Random Number Generator
var max = 3;
var randNum = Math.floor(Math.random() * max );
console.log(randNum);

// Store Images
var img0 = '/img/fullsize/1.jpg';
var img0 = '/img/fullsize/2.jpg';
var img0 = '/img/fullsize/3.jpg';


// Show Images

$('header img').attr('src', eval('img' + randNum) );

//Activate Gallery

$('figure').lightGallery({
    selector: 'a'
});