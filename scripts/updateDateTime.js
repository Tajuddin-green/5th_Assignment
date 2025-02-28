
function updateDate() {
    const now = new Date();

    // Format time
    // const time = now.toLocaleTimeString();
    // document.getElementById('time').textContent = time;

    // Get weekday
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day').textContent = weekday;

    // Format date as "March 1, 2025"
    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').textContent = formattedDate;
  }
  setInterval(updateDate, 1000); // Update every second
    updateDate(); // 