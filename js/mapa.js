document.addEventListener("DOMContentLoaded", function() {
    const worldMap = document.getElementById('world-map');
    const areas = document.querySelectorAll('area');

    const areaImages = {
        'area-europe': 'img/europe.jpg',
        'area-asia': 'img/asia.jpg',
        'area-america': 'img/america.jpg',
        'area-africa': 'img/africa.jpg',
        'area-australia': 'img/australia.jpg'
    };

    areas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            worldMap.src = areaImages[area.id];
        });

        area.addEventListener('mouseleave', () => {
            worldMap.src = 'img/nic.jpg';
        });
    });
});