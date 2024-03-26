document.addEventListener('DOMContentLoaded', async function () {
    const form = document.querySelector('.form');
    const tableBody = document.querySelector('#peserta-table tbody');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('Username').value;
        const password = document.getElementById('Password').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;

        var genderSelect = document.getElementById("gender");
        var selectedGender = genderSelect.options[genderSelect.selectedIndex].value;



        if (selectedGender === "male") {
            discountInfo = "Diskon 50%";
        } else if (selectedGender === "female") {
            discountInfo = "Gratis";
        } else {
            discountInfo = "";
        }


        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, username, password, phone, gender,discountInfo }),
            });

            console.log(response)
            if (!response.ok) {
                throw new Error('Terjadi kesalahan saat membuat data.');
            }

            const result = await response.json();
            alert('Data berhasil disimpan!');
            // Setelah data disimpan, panggil ulang fetchData untuk menampilkan data terbaru
            // fetchData();
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi 1.');
        }
    });

    //   function checkGender() {
    //       var genderSelect = document.getElementById("gender");
    //       var selectedGender = genderSelect.options[genderSelect.selectedIndex].value;
    //       var discountInfo = document.getElementById("discount-info");

    //       if (selectedGender === "male") {
    //           discountInfo.innerHTML = "Diskon 50%";
    //       } else if (selectedGender === "female") {
    //           discountInfo.innerHTML = "Gratis";
    //       } else {
    //           discountInfo.innerHTML = "";
    //       }
    //   }

    // async function fetchData() {
    //     try {
    //         // tableBody.innerHTML = ''; // Menghapus semua data sebelum menambahkan yang baru
    //         const response = await fetch('http://localhost:3000/api/users');
    //         const data = await response.json();

    //         data.forEach(user => {
    //             const row = `
    //               <tr>
    //                   <td>${user.name}</td>
    //                   <td>${user.email}</td>
    //                   <td>${user.username}</td>
    //                   <td>${user.phone}</td>
    //                   <td>${user.gender}</td>
    //                   <td>
    //                       <button class="delete-btn" data-id="${user._id}">Hapus</button>
    //                       <button class="edit-btn" data-id="${user._id}">Edit</button>
    //                   </td>
    //                   <td class="discount-cell"></td>
    //               </tr>
    //           `;
    //             // tableBody.innerHTML += row;

    //             // Tambahkan diskon berdasarkan jenis kelamin
    //             // const discountCell = tableBody.querySelector(`tr:last-child .discount-cell`);
    //             // if (user.gender === 'male') {
    //             //     discountCell.textContent = 'Diskon 50%';
    //             // } else if (user.gender === 'female') {
    //             //     discountCell.textContent = 'Gratis';
    //             // } else {
    //             //     discountCell.textContent = '';
    //             // }
    //         });

    //         // Tambahkan event listener untuk setiap tombol Hapus
    //         const deleteButtons = document.querySelectorAll('.delete-btn');
    //         deleteButtons.forEach(button => {
    //             button.addEventListener('click', async function () {
    //                 const userId = button.getAttribute('data-id');
    //                 try {
    //                     const deleteResponse = await fetch(`http://localhost:3000/api/users/${userId}`, {
    //                         method: 'DELETE'
    //                     });

    //                     if (!deleteResponse.ok) {
    //                         throw new Error('Terjadi kesalahan saat menghapus data 2. ');
    //                     }

    //                     // Hapus baris dari tabel setelah berhasil dihapus
    //                     button.closest('tr').remove();
    //                 } catch (error) {
    //                     console.error('Error:', error);
    //                     alert('Terjadi kesalahan. Silakan coba lagi 3 .');
    //                 }
    //             });
    //         });

    //         // Tambahkan event listener untuk setiap tombol Edit
    //         const editButtons = document.querySelectorAll('.edit-btn');
    //         editButtons.forEach(button => {
    //             button.addEventListener('click', async function () {
    //                 const userId = button.getAttribute('data-id');
    //                 const newName = prompt('Masukkan nama baru:');
    //                 if (newName !== null) {
    //                     try {
    //                         const editResponse = await fetch(`http://localhost:3000/api/users/${userId}`, {
    //                             method: 'PUT',
    //                             headers: {
    //                                 'Content-Type': 'application/json',
    //                             },
    //                             body: JSON.stringify({ name: newName })
    //                         });

    //                         if (!editResponse.ok) {
    //                             throw new Error('Terjadi kesalahan saat mengedit data.');
    //                         }

    //                         // Update tampilan setelah berhasil mengedit
    //                         const editedUser = await editResponse.json();
    //                         button.closest('tr').querySelector('.nama').textContent = editedUser.name;
    //                         alert('Data berhasil diubah!');
    //                     } catch (error) {
    //                         console.error('Error:', error);
    //                         alert('Terjadi kesalahan. Silakan coba lagi 5.');
    //                     }
    //                 }
    //             });
    //         });

    //     } catch (error) {
    //         console.log(error)
    //         alert('Terjadi kesalahan. Silakan coba lagi 6.');
    //     }
    // }



    // // Panggil fetchData untuk pertama kali saat halaman dimuat
    // fetchData();
});

// komang
