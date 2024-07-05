document.getElementById('userInfoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    window.location.href = 'survey.html';
});

// After submitting the MI survey, redirect to personality test
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform your existing survey submission logic here...

    // After submission, redirect to personality test
    window.location.href = 'personality.html';
});

// Particles.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
