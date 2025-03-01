
function updateDate() {
    const now = new Date();

    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day').textContent = weekday;

    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').textContent = formattedDate;
  }
  setInterval(updateDate, 1000); 
    updateDate(); 