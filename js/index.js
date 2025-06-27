document.querySelectorAll('.profile-container').forEach(container => {
    const usernameSpan = container.querySelector('.username');
    const fullName = usernameSpan.getAttribute("aria-valuetext").toString(); // Substitua pelo nome de usuário real
    let typingInterval;
  
    container.addEventListener('mouseenter', () => {
      usernameSpan.textContent = '';
      let index = 0;
      typingInterval = setInterval(() => {
        if (index < fullName.length) {
          usernameSpan.textContent += fullName.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);
    });
  
    container.addEventListener('mouseleave', () => {
      clearInterval(typingInterval);
      usernameSpan.textContent = '';
    });
  });
  