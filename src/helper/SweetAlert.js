// SweetAlert.js
import Swal from "sweetalert2";

export const showErrorAlert = (message) => {
    Swal.fire({
        icon: "error",
          title: message,
          showConfirmButton: false,
          timer: 2000,
          background: "#242424",
          color: "#fff",
    });
};

export const showSuccessAlert = (message) => {
    Swal.fire({
        icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 3000,
          background: "#242424",
    });
};


export const showConfirmationAlert = (onConfirm) => {
    Swal.fire({
        title: 'ຢືນຢັນ?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonText: 'ຕົກລົງ'
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'ສຳເລັດ!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
};
