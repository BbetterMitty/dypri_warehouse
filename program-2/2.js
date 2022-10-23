const pos = document.querySelectorAll('.normal');

pos.forEach(po => {
    po.addEventListener('click', () => {
        removeStatus();
        po.classList.add('show');
    })
});

function removeStatus() {
    pos.forEach(po => {
        po.classList.remove('show');
    })
}