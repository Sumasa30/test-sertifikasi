window.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Terjadi kesalahan saat mengambil data pengguna.');
        }
        const userData = await response.json();

        const editForm = document.getElementById('editForm');
        editForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            let newName = editForm.querySelector('#name').value;
            let newEmail = editForm.querySelector('#email').value;
            let newUsername = editForm.querySelector('#username').value;
            let newPassword = editForm.querySelector('#password').value;
            let newPhone = editForm.querySelector('#phone').value;
            let newGender = editForm.querySelector('#gender').value;

            try {
                const editResponse = await fetch(`http://localhost:3000/api/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: newName,
                        email: newEmail,
                        username: newUsername,
                        password: newPassword,
                        phone: newPhone,
                        gender: newGender })
                });

                if (!editResponse.ok) {
                    throw new Error('Terjadi kesalahan saat mengedit data.');
                }

                alert('Data berhasil diubah!');
                window.location.href = 'daftar.html'; // Redirect kembali ke halaman utama setelah berhasil mengedit
            } catch (error) {
                console.error('Error:', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            }
        });

        // Mengisi formulir dengan data pengguna
        document.getElementById('name').value = userData.name;
        document.getElementById('email').value = userData.email;
        document.getElementById('username').value = userData.username;
        document.getElementById('password').value = userData.password;
        document.getElementById('phone').value = userData.phone;
        document.getElementById('gender').value = userData.gender;



    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    }
});

// komang