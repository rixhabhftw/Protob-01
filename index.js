document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    window.location.href = 'survey.html';
});

// Particles.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
