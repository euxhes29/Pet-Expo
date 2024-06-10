document.addEventListener("DOMContentLoaded", () => {
    const dogSearch = document.getElementById('dogSearch');
    const dogCards = document.querySelectorAll('.dog-card');
    const dogPopup = document.getElementById('dogPopup');
    const dogPopupName = document.getElementById('dogPopupName');
    const dogPopupId = document.getElementById('dogPopupId');
    const dogPopupOrigin = document.getElementById('dogPopupOrigin');
    const dogPopupTemperament = document.getElementById('dogPopupTemperament');
    const dogPopupColors = document.getElementById('dogPopupColors');
    const dogPopupDescription = document.getElementById('dogPopupDescription');
    const dogPopupClose = document.querySelector('.dog-popup-close');

    dogSearch.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        dogCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    dogCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const name = card.getAttribute('data-name');
            const origin = card.getAttribute('data-origin');
            const temperament = card.getAttribute('data-temperament');
            const colors = card.getAttribute('data-colors');
            const description = card.getAttribute('data-description');

            dogPopupId.textContent = `${id}`;
            dogPopupName.textContent = name;
            dogPopupOrigin.textContent = `${origin}`;
            dogPopupTemperament.textContent = `${temperament}`;
            dogPopupColors.textContent = `${colors}`;
            dogPopupDescription.textContent = `${description}`;
            
            dogPopup.style.display = 'flex';
        });
    });

    dogPopupClose.addEventListener('click', () => {
        dogPopup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === dogPopup) {
            dogPopup.style.display = 'none';
        }
    });
});
