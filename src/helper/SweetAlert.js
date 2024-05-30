// SweetAlert.js
import Swal from "sweetalert2";

export const showErrorAlert = (message) => {
    Swal.fire({
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 2000,
        background: 'var(--card-primary)',
        color: "#FFF",
    });
};

export const showSuccessAlert = (message) => {
    Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 2000,
        background: 'var(--card-primary)',
        color: '#FFF'
    });
};
export const showPopupLucky = (message) => {
    Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 3000,
        background: 'var(--card-primary)',
        color: '#FFF'
    });
};
export const showConfirmationAlert = (onConfirm) => {
    Swal.fire({
        title: 'คุณต้องการออกจากระบบหรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        background: 'var(--card-primary)',
        color: '#FFF',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
        didOpen: () => {
            Swal.getConfirmButton().blur();
            Swal.getCancelButton().blur();
        }
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};
