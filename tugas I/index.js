const app = document.getElementById('app');
const output = document.getElementById('output');
const btncari = document.getElementById('btn');
const input = document.getElementById('input');

const generateHewan = () => {
  const hasil = input.value;
  const lower = hasil.toLowerCase();
  if (lower == 'burung') {
    output.innerHTML = '<img id="gambar" src="manuk.jpg" alt="">';
    gambar.style.width = '300px';
  } else if (lower == 'harimau') {
    output.innerHTML = '<img id="gambar" src="harimau.jpg" alt="">';
    gambar.style.width = '300px';
  } else if (lower == 'kucing') {
    output.innerHTML = '<img id="gambar" src="kucing.jpg" alt="">';
    gambar.style.width = '300px';
  } else {
    output.innerHTML = '<img id="gambar" src="manusia.jpg" alt="">';
    gambar.style.width = '300px';
  }
};

btncari.addEventListener('click', generateHewan);
