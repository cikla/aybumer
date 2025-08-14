function checkPassword() {
  // --- ÖNEMLİ ---
  // Bu şifreyi kişisel ve gizli bir şeyle değiştirin!
  // Bu, eşinizin girmesi gereken şifredir.
  const correctPassword = '1'; // örn: "25.10.2015" veya "askim"

  const passwordInput = document.getElementById('password-input').value;
  const passwordProtection = document.getElementById('password-protection');
  const mainContent = document.getElementById('main-content');
  const wrongPasswordMessage = document.getElementById('wrong-password');

  if (passwordInput === correctPassword) {
    // Şifre ekranını yavaşça kapat
    passwordProtection.style.opacity = '0';
    setTimeout(() => {
      passwordProtection.style.display = 'none';
    }, 600); // Bunu CSS'deki geçiş süresiyle eşleştirin

    // Ana içeriği göster ve yavaşça ortaya çıkar
    mainContent.style.display = 'block';
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 10); // Görüntü özelliğinin etkili olduğundan emin olmak için hafif bir gecikme
  } else {
    // "Yanlış şifre" mesajını göster
    wrongPasswordMessage.style.display = 'block';
    // İsteğe bağlı: girişi temizle
    document.getElementById('password-input').value = '';
  }
}

// Yumuşak geçişler için CSS geçişleri ekle
document.addEventListener('DOMContentLoaded', () => {
  const passwordProtection = document.getElementById('password-protection');
  const mainContent = document.getElementById('main-content');

  passwordProtection.style.transition = 'opacity 0.6s ease-out';
  mainContent.style.opacity = '0';
  mainContent.style.transition = 'opacity 0.8s ease-in';
});
