document.addEventListener('DOMContentLoaded', () => {
    // Date picker
    if (typeof flatpickr !== 'undefined') {
        flatpickr("#date", {
            minDate: "today",
            maxDate: new Date().fp_incr(90),  // 90 days forward
            disable: [
                function(date) {
                    return (date.getDay() === 1); // disable Mondays (closed)
                }
            ],
            dateFormat: "D, d M Y"
        });

        // Time picker
        flatpickr("#time", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            minTime: "12:00",
            maxTime: "21:30",
            minuteIncrement: 30  // 30-min slots only
        });
    }

    // Form Validation (Bootstrap 5)
    const form = document.querySelector('#reservationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }
            
            // Show success message
            const successAlert = document.getElementById('successMessage');
            if (successAlert) {
                successAlert.classList.remove('d-none');
                
                // Hide success after a few seconds
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 5000);
            }
            
            this.reset();
            this.classList.remove('was-validated');
        });
    }
});
