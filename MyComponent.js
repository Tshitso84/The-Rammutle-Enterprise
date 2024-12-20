function openModal(projectId) {
    event.preventDefault(); // Prevent link click
    document.getElementById('shareModal').classList.add('active');
    document.getElementById('shareLink').textContent = `https://yourwebsite.com/project/${projectId}`;
}

function closeModal() {
    document.getElementById('shareModal').classList.remove('active');
}

function copyLink() {
    const link = document.getElementById('shareLink').textContent;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle heart icon clicks
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent link click
        this.style.fill = this.style.fill === 'red' ? 'none' : 'red';
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});