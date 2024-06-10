document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('birdSearch');
    const photoContainers = document.querySelectorAll('.bird-card');
    const popup = document.getElementById('birdPopup');
    const popupName = document.getElementById('birdPopupName');
    const popupId = document.getElementById('birdPopupId');
    const popupOrigin = document.getElementById('birdPopupOrigin');
    const popupTemperament = document.getElementById('birdPopupTemperament');
    const popupColors = document.getElementById('birdPopupColors');
    const popupDescription = document.getElementById('birdPopupDescription');
    const closePopup = document.querySelector('.bird-popup-close');

    searchBar.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        photoContainers.forEach(container => {
            const name = container.getAttribute('data-name').toLowerCase();
            if (name.includes(searchValue)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    });

    photoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const id = container.getAttribute('data-id');
            const name = container.getAttribute('data-name');
            const origin = container.getAttribute('data-origin');
            const temperament = container.getAttribute('data-temperament');
            const colors = container.getAttribute('data-colors');
            const description = container.getAttribute('data-description');

            popupId.innerHTML = `<strong>ID:</strong> ${id}`;
            popupName.textContent = name;
            popupOrigin.innerHTML = `<strong>Origin:</strong> ${origin}`;
            popupTemperament.innerHTML = `<strong>Temperament:</strong> ${temperament}`;
            popupColors.innerHTML = `<strong>Colors:</strong> ${colors}`;
            popupDescription.innerHTML = `<strong>Description:</strong> ${description}`;
            
            popup.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
