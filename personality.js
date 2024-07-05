document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { question: "I am the life of the party.", category: "extraversion" },
        { question: "I don't mind being the center of attention.", category: "extraversion" },
        { question: "I start conversations.", category: "extraversion" },
        { question: "I feel comfortable around people.", category: "extraversion" },
        { question: "I talk to a lot of different people at parties.", category: "extraversion" },

        { question: "I sympathize with others' feelings.", category: "agreeableness" },
        { question: "I take time out for others.", category: "agreeableness" },
        { question: "I feel others' emotions.", category: "agreeableness" },
        { question: "I make people feel at ease.", category: "agreeableness" },
        { question: "I have a soft heart.", category: "agreeableness" },

        { question: "I am always prepared.", category: "conscientiousness" },
        { question: "I pay attention to details.", category: "conscientiousness" },
        { question: "I get chores done right away.", category: "conscientiousness" },
        { question: "I like order.", category: "conscientiousness" },
        { question: "I follow a schedule.", category: "conscientiousness" },

        { question: "I get stressed out easily.", category: "emotionalStability" },
        { question: "I get upset easily.", category: "emotionalStability" },
        { question: "I have frequent mood swings.", category: "emotionalStability" },
        { question: "I worry about things.", category: "emotionalStability" },
        { question: "I am easily disturbed.", category: "emotionalStability" },

        { question: "I have a vivid imagination.", category: "openness" },
        { question: "I have a rich vocabulary.", category: "openness" },
        { question: "I have excellent ideas.", category: "openness" },
        { question: "I spend time reflecting on things.", category: "openness" },
        { question: "I am full of ideas.", category: "openness" }
    ];

    const personalityForm = document.getElementById('personalityForm');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('form-group');
        div.innerHTML = `
            <label>${index + 1}. ${q.question}</label>
            <div>
                <input type="radio" name="q${index}" value="1"> 1
                <input type="radio" name="q${index}" value="2"> 2
                <input type="radio" name="q${index}" value="3"> 3
                <input type="radio" name="q${index}" value="4"> 4
                <input type="radio" name="q${index}" value="5"> 5
            </div>
        `;
        personalityForm.appendChild(div);
    });

    personalityForm.innerHTML += '<button type="submit" class="btn btn-primary btn-block">Submit</button>';

    personalityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(personalityForm);
        const scores = {
            extraversion: 0,
            agreeableness: 0,
            conscientiousness: 0,
            emotionalStability: 0,
            openness: 0
        };
        const questionCount = {
            extraversion: 0,
            agreeableness: 0,
            conscientiousness: 0,
            emotionalStability: 0,
            openness: 0
        };

        questions.forEach((q, index) => {
            const score = formData.get(`q${index}`);
            if (score) {
                scores[q.category] += parseInt(score);
                questionCount[q.category]++;
            }
        });

        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');

        const data = {
            name: name,
            email: email,
            extraversion: ((scores.extraversion / (questionCount.extraversion * 5)) * 100).toFixed(2),
            agreeableness: ((scores.agreeableness / (questionCount.agreeableness * 5)) * 100).toFixed(2),
            conscientiousness: ((scores.conscientiousness / (questionCount.conscientiousness * 5)) * 100).toFixed(2),
            emotionalStability: ((scores.emotionalStability / (questionCount.emotionalStability * 5)) * 100).toFixed(2),
            openness: ((scores.openness / (questionCount.openness * 5)) * 100).toFixed(2)
        };

        fetch('https://script.google.com/macros/s/AKfycbz8bKrhVIToCc-HvPuh7PMjJe0mZRX_gs0AbVhpAMk5EbXbeSwqlFkdRc2OMZaqmZ6yxA/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                window.location.href = 'result.html';
            }
        });
    });
});

// Particles.js configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
