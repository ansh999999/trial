function updateDateTime() {
    const now = new Date();
    
    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Rainbow color effect for seconds
    const rainbowColors = [
        '#FF2D75', // Pink
        '#FF785E', // Coral
        '#FFC845', // Yellow
        '#4CE0B3', // Teal
        '#2D9BEF', // Blue
        '#7D6BEF', // Purple
        '#FF5E9E'  // Hot Pink
    ];
    
    const secondsValue = now.getSeconds();
    const colorIndex = secondsValue % rainbowColors.length;
    document.getElementById('seconds').style.color = rainbowColors[colorIndex];
    document.getElementById('seconds').style.textShadow = `0 0 15px ${rainbowColors[colorIndex]}`;
    
    // Update calendar
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['J
