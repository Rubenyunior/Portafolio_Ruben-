const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Dark';
  }
});

