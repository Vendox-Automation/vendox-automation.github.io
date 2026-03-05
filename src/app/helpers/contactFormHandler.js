export default () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const btn = form.querySelector('.button--submit');
    const btnText = btn.querySelector('.button-text');
    const btnLoader = btn.querySelector('.button-loader');
    const btnSuccess = btn.querySelector('.button-success');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Show Loading State
        btn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';

        // 2. Prepare Data
        const formData = new FormData(form);
        const data = {
            "Full Name": formData.get('name'),
            "Company": formData.get('company'),
            "E-mail": formData.get('email'),
            "Phone": formData.get('phone') || 'Not provided',
            "Subject (Project)": formData.get('subject'),
            "Message": formData.get('message'),
            "_template": "table",
            "_subject": `New Business Enquiry: ${formData.get('subject')}`
        };

        try {
            // 3. Send AJAX Request to FormSubmit
            const response = await fetch("https://formsubmit.co/ajax/bryan@4896.co", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // 4. Show Success State
                btnLoader.style.display = 'none';
                btnSuccess.style.display = 'inline';
                form.reset();

                setTimeout(() => {
                    btnSuccess.style.display = 'none';
                    btnText.style.display = 'inline';
                    btn.disabled = false;
                }, 5000);
            } else {
                throw new Error();
            }
        } catch (error) {
            alert("Oops! Something went wrong. Please try emailing us directly at dummypoerr@gmail.com");
            btnLoader.style.display = 'none';
            btnText.style.display = 'inline';
            btn.disabled = false;
        }
    });
};
