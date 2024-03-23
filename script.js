document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('Email').value;
      const username = document.getElementById('Username').value;
      const password = document.getElementById('Password').value;
      const phone = document.getElementById('phone').value;
  
      try {
        const response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, username, password, phone }),
        });
        console.log(response)
        if (!response.ok) {
          throw new Error('Terjadi kesalahan saat membuat data.');
        }
  
        const result = await response.json();
        alert('Data berhasil disimpan!');
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    });
  });
  