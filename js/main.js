function attivaScheda(id) {
    const scheda = document.getElementById(idScheda); // Check if element exists
    if (scheda) {
      for (const scheda of schede) {
        scheda.classList.remove('attiva');
      }
      scheda.classList.add('attiva');
    } else {
      console.error(`Scheda with id "${idScheda}" not found.`); // Handle missing element
    }
  }
  

  function redirectPost(url) {
    window.location.href = url;
}