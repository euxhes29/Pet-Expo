document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('search-bar');
    const photoContainers = document.querySelectorAll('.cat-photo-container');
    const popup = document.getElementById('popup');
    const popupName = document.getElementById('popup-name');
    const popupId = document.getElementById('popup-id');
    const popupOrigin = document.getElementById('popup-origin');
    const popupTemperament = document.getElementById('popup-temperament');
    const popupColors = document.getElementById('popup-colors');
    const popupDescription = document.getElementById('popup-description');
    const closePopup = document.querySelector('.close');

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

            popupId.textContent = `${id}`;
            popupName.textContent = name;
            popupOrigin.textContent = `${origin}`;
            popupTemperament.textContent = `${temperament}`;
            popupColors.textContent = `${colors}`;
            popupDescription.textContent = `${description}`;
            
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
