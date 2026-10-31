const body = document.body;
    const darkButtons = [document.getElementById('topDarkMode'), document.getElementById('settingsDarkMode')];

    function toggleDarkMode() {
      body.classList.toggle('dark');
      const isDark = body.classList.contains('dark');
      darkButtons[0].textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
      darkButtons[1].textContent = isDark ? 'Switch to light ☀️' : 'Switch to dark 🌙';
    }
    darkButtons.forEach(button => button.addEventListener('click', toggleDarkMode));

    const settingsCard = document.getElementById('settingsCard');
    document.getElementById('openSettings').addEventListener('click', () => {
      settingsCard.classList.remove('collapsed');
      settingsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    document.getElementById('collapseSettings').addEventListener('click', () => {
      settingsCard.classList.toggle('collapsed');
      document.getElementById('collapseSettings').textContent =
        settingsCard.classList.contains('collapsed') ? '+' : '−';
    });

    const fontSize = document.getElementById('fontSize');
    const fontLabel = document.getElementById('fontLabel');
    fontSize.addEventListener('input', () => {
      document.documentElement.style.setProperty('--body-size', fontSize.value + 'px');
      fontLabel.textContent = fontSize.value + 'px';
      document.getElementById('fontScale').value =
        fontSize.value <= 15 ? '14px' : fontSize.value >= 18 ? '19px' : '16px';
    });
    document.getElementById('fontScale').addEventListener('change', event => {
      const size = event.target.value;
      document.documentElement.style.setProperty('--body-size', size);
      fontSize.value = parseInt(size, 10);
      fontLabel.textContent = size;
    });

    const followBtn = document.getElementById('followBtn');
    let following = false;
    followBtn.addEventListener('click', () => {
      following = !following;
      followBtn.textContent = following ? '✓ Following' : '＋ Follow';
      followBtn.style.background = following ? '#31a66a' : 'var(--accent)';
      document.getElementById('followers').textContent = following ? '1.3K' : '1.2K';
    });
