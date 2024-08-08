// this is preloader
// Function to hide the loader and show the content after 1 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.About-me').style.display = 'block';
    }, 1000); // Adjust the delay as needed (in milliseconds)
}); 
//this is botton up.
let btnup = document.getElementById('btnup');
window.onscroll = function()
{
    if(scrollY >= 600)
    {
        btnup.style.display = 'block';
    }
    else
    {
        btnup.style.display = 'none';
    }
}
btnup.onclick = function()
{
    scroll({
        left:0,
        top:0,
        behavior: 'smooth'
    })
}
