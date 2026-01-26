export default (t) => {
    const badges = [
        { icon: '🚀', title: 'Fast Integration', desc: 'Seamlessly connects with your existing workflow' },
        { icon: '🎯', title: '99% Accuracy', desc: 'Precision-engineered automation scripts' },
        { icon: '🛠️', title: '24/7 Monitoring', desc: 'Active surveillance of all automated tasks' },
        { icon: '💎', title: 'Premium Quality', desc: 'Clean, maintainable, and scalable code' }
    ];

    return /*html*/`
        <section class="trust-badges container">
            <div class="trust-badges__list">
                ${badges.map(badge => `
                    <div class="trust-badge">
                        <div class="trust-badge__icon">${badge.icon}</div>
                        <div class="trust-badge__content">
                            <div class="trust-badge__title">${badge.title}</div>
                            <div class="trust-badge__desc">${badge.desc}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};
