document.addEventListener('DOMContentLoaded', function() {
    const pdfViewers = document.querySelectorAll('.pdf-viewer');
    
    const openPdfModal = (pdfPath) => {
        document.body.classList.add('pdf-modal-open');

        const modal = document.createElement('div');
        modal.className = 'pdf-modal';
        
        modal.innerHTML = `
            <div class="pdf-modal-content">
                <button class="modal-close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height: 1.5rem; width: 1.5rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe class="pdf-modal-iframe" src="${pdfPath}"></iframe>
            </div>
        `;
        
        document.body.appendChild(modal);

        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        const closeButton = modal.querySelector('.modal-close-button');
        
        closeButton.addEventListener('click', () => closeModal(modal));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        const escapeKeyListener = (e) => {
            if (e.key === 'Escape') {
                closeModal(modal, escapeKeyListener);
            }
        };
        document.addEventListener('keydown', escapeKeyListener);
    };

  
    
const closeModal = (modal, keyListener) => {
    modal.classList.remove('active');

    document.body.classList.remove('pdf-modal-open');

    modal.addEventListener('transitionend', () => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, { once: true });

    if (keyListener) {
        document.removeEventListener('keydown', keyListener);
    }
};
    pdfViewers.forEach(viewer => {
        viewer.addEventListener('click', () => {
            const pdfPath = viewer.dataset.pdfPath;
            if (pdfPath) {
                openPdfModal(pdfPath);
            } else {
                console.error('No PDF path specified for this element.');
            }
        });
    });
});
