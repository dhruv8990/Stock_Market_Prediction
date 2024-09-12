document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const stockName = document.getElementById('stockName').value;
    
    // Simulate analysis (replace this with actual API call or logic)
    const actualPrice = Math.random() * 1000;
    const predictedPrice = actualPrice + (Math.random() * 50 - 25);
    
    // Show results
    document.getElementById('actualPrice').innerText = `$${actualPrice.toFixed(2)}`;
    document.getElementById('predictedPrice').innerText = `$${predictedPrice.toFixed(2)}`;
    
    document.getElementById('results').classList.remove('hidden');
});
