document.getElementById('followForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        followUser(username);
    } else {
        alert('Please enter a username.');
    }
});

const accessToken = 'EAAGNO4a7r2wBO5T9z5BNjQWRmwr0w7M60WCUF29Y5eTRoGCxhPugZAipz8TRWel9Eo0xH8Qsums6NPzbJeLkVIu3qFEetLJg3UvngcAjjmZCoigIbknIwLtsMxCDqWXkwq4bQ2q4JGMYlKDKVpvDJevl0A3xAZB602QUdryHhMGA437kf3JZC2mPfK9ixXDAkAZDZD';

function followUser(username) {
    fetch(`https://graph.facebook.com/v12.0/${username}/subscribers?access_token=${accessToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // ফলো সফল হলে সাকসেস মেসেজ দেখানো
        if (!data.error) {
            alert(`Successfully followed ${username}! 🎉`);
        } else {
            // ফলো ব্যর্থ হলে এরর মেসেজ দেখানো
            alert('Failed to follow user: ' + data.error.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
