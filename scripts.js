document.getElementById('followForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        followUser(username);
    } else {
        alert('Please enter a username.');
    }
});

const accessToken = 'YOUR_FACEBOOK_ACCESS_TOKEN';

function followUser(username) {
    fetch(`https://graph.facebook.com/v12.0/${username}/subscribers?access_token=${accessToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (!data.error) {
            alert('Successfully followed user: ' + username);
        } else {
            alert('Failed to follow user: ' + data.error.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
