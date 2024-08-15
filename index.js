// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const notes = document.querySelectorAll('.note');

    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        if (text.includes(query)) {
            note.style.display = '';
        } else {
            note.style.display = 'none';
        }
    });
});
