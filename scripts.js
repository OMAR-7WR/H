document.getElementById('followForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        // এখানে ফেসবুক API কল করতে হবে
        console.log('Following user:', username);
        // এখানে অটো ফলোয়ার ফাংশনালিটি ইমপ্লিমেন্ট করুন
    } else {
        alert('Please enter a username.');
    }
});
