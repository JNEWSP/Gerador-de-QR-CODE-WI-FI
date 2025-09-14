const ssidInput = document.getElementById('ssid');
const passwordInput = document.getElementById('password');
const qrCodeImg = document.getElementById('qr-code');
const printBtn = document.getElementById('print-btn');

function updateQRCode() {
  const ssid = ssidInput.value.trim();
  const password = passwordInput.value.trim();

  if (!ssid) {
    qrCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=';
    return;
  }

  // Formato padrão para QR code WiFi: WIFI:T:WPA;S:ssid;P:password;;
  // Se quiser suportar redes abertas, pode ajustar o tipo T: nopass
  const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`;
  const encoded = encodeURIComponent(wifiString);
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${encoded}`;
}

ssidInput.addEventListener('input', updateQRCode);
passwordInput.addEventListener('input', updateQRCode);

printBtn.addEventListener('click', () => {
  window.print();
});

// Inicializa o QR code vazio
updateQRCode();