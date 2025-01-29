const startLoopButton = document.getElementById('herojump');
    const audioLoop = document.getElementById('audioLoop');

    startLoopButton.addEventListener('click', () => {
      audioLoop.play(); // Memulai audio looping
    });

    // Mengatur event listener untuk semua tombol dengan kelas "playButton"
    const buttons = document.querySelectorAll('.jump');
    const audioPlayer = document.getElementById('audioPlayer');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio'); // Mendapatkan sumber audio
        audioPlayer.src = audioSrc; // Mengatur sumber audio
        audioPlayer.currentTime = 0; // Memastikan audio dimulai dari awal
        audioPlayer.play(); // Memutar audio
      });
    });
    
    
