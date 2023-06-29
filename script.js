function toggleLists() {
    var monthlyList = document.querySelector('.monthly-list');
    var yearlyList = document.querySelector('.yearly-list');
    var toggleButton = document.querySelector('.toggle-button');
  
    if (toggleButton.getAttribute('data-state') === 'monthly') {
      monthlyList.style.display = 'none';
      yearlyList.style.display = 'block';
      toggleButton.setAttribute('data-state', 'yearly');
    } else {
      monthlyList.style.display = 'block';
      yearlyList.style.display = 'none';
      toggleButton.setAttribute('data-state', 'monthly');
    }
  }