// new update
let title = document.querySelector('.title');

window.addEventListener('load', function() {
    const errorMessage = document.querySelector('.container');
    if (navigator.onLine) {
        errorMessage.style.display = 'none'; // Hide error message if online
        document.body.classList.remove('hide-content'); // Show content if online
    } else {
        errorMessage.style.display = 'block'; // Show error message if offline
        document.body.classList.add('hide-content'); // Hide content if offline
        title.textContent = 'Offline Now';
        title.style.color = 'red';
    }
});

window.addEventListener('online', function() {
    const errorMessage = document.querySelector('.container');
    errorMessage.style.display = 'none'; // Hide error message when online
    document.body.classList.remove('hide-content'); // Show content when online
});

window.addEventListener('offline', function() {
    const errorMessage = document.querySelector('.container');
    errorMessage.style.display = 'block'; // Show error message when offline
    document.body.classList.add('hide-content'); // Hide content when offline
    title.textContent = 'Offline Now';
    title.style.color = 'red';
});
    
