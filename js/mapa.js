document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = this.href;
    });

    area.addEventListener('mouseover', function() {
        const continentId = this.alt.toLowerCase();
        const continentImage = document.getElementById(continentId);
        if (continentImage) {
            continentImage.style.opacity = '1';
        }
    });

    area.addEventListener('mouseout', function() {
        const continentId = this.alt.toLowerCase();
        const continentImage = document.getElementById(continentId);
        if (continentImage) {
            continentImage.style.opacity = '0';
        }
    });
});