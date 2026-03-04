import Path from "@/components/Path.js";
import "styles/pages/contact.sass";

export default (t) => {
    const contactTexts = t;
    const formTexts = contactTexts.form;

    return /*html*/ `
        <div class="contact-page">
            <div class="container container--split">
                <div class="contact-text-side">
                    <div class="contact-badge stagger-1">${contactTexts.title}</div>
                    <h1 class="contact-title stagger-2">${contactTexts.subtitle}</h1>
                    <h2 class="contact-action stagger-3">${contactTexts.action}</h2>
                    <p class="contact-description stagger-4">${contactTexts.description}</p>
                </div>
                
                <div class="contact-form-side stagger-6">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">${formTexts.name}</label>
                            <input type="text" id="name" name="name" placeholder="${formTexts.name_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="company">${formTexts.company}</label>
                            <input type="text" id="company" name="company" placeholder="${formTexts.company_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">${formTexts.email}</label>
                            <input type="email" id="email" name="email" placeholder="${formTexts.email_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">${formTexts.phone}</label>
                            <input type="tel" id="phone" name="phone" placeholder="${formTexts.phone_placeholder}">
                        </div>

                        <div class="form-group">
                            <label for="subject">${formTexts.subject}</label>
                            <input type="text" id="subject" name="subject" placeholder="${formTexts.subject_placeholder}" required>
                        </div>

                        <div class="form-group">
                            <label for="message">${formTexts.message}</label>
                            <textarea id="message" name="message" placeholder="${formTexts.message_placeholder}" required rows="4"></textarea>
                        </div>

                        <div class="form-footer">
                            <button type="submit" class="button button--submit button__primary">
                                <span class="button-text">${formTexts.submit}</span>
                                <span class="button-loader" style="display: none;">Sending...</span>
                                <span class="button-success" style="display: none;">Sent Successfully!</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};
