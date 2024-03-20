window.onload = function () {
    if (window.location.pathname.includes('menu.html')) {
        const menuGallery = document.getElementById('menu-gallery');

        const starters = [
            { image: 'salad5.png', description: 'Chicken Caesar Salad with Romaine Lettuce, Grilled Chicken, Parmesan Cheese, and Caesar Dressing' },
            { image: 'salad3.png', description: 'Classic Cobb Salad with Grilled Chicken, Avocado, Bacon, Hard-Boiled Eggs, Tomatoes, and Blue Cheese Dressing' },
            { image: 'salad8.png', description: 'Asian Chicken Salad with Shredded Chicken, Mandarin Oranges, Crispy Wontons, and Sesame Ginger Dressing' }

        ];
        const mainCourses = [
            { image: 'salad9.png', description: 'Southwest Chicken Salad with Grilled Chicken, Corn, Black Beans, Avocado, Tomatoes, and Chipotle Ranch Dressing' },
            { image: 'salad6.png', description: 'Grilled Chicken Salad with Mixed Greens, Grilled Chicken, Cherry Tomatoes, Red Onion, and Balsamic Vinaigrette' },
            { image: 'salad2.png', description: 'Greek Chicken Salad with Grilled Chicken, Feta Cheese, Cucumbers, Kalamata Olives, and Lemon-Olive Oil Dressing' },
            { image: 'salad4.png', description: 'Buffalo Chicken Salad with Crispy Chicken Tenders, Mixed Greens, Carrots, Celery, Blue Cheese Crumbles, and Buffalo Ranch Dressing' }
        ];
        const sandwiches = [
            { image: 'sandwich3.png', description: 'Grilled Chicken Panini with Mozzarella Cheese, Roasted Red Peppers, and Pesto Mayo' },
            { image: 'sandwich2.png', description: 'Chicken Salad Sandwich with Shredded Chicken, Grapes, Almonds, and Lettuce on Whole Wheat Bread' },
            { image: 'sandwich3.png', description: 'Buffalo Chicken Wrap with Crispy Chicken Tenders, Mixed Greens, Blue Cheese Crumbles, and Buffalo Ranch Dressing in a Flour Tortilla' }
        ];
        const sides = [
            { image: 'fries.jpeg', description: 'Sweet potatoes fries' },
            { image: 'fries2.webp', description: 'Garlic Parmesan Fries' },
            { image: 'grilled.jpeg', description: 'Grilled Corn, Aspergus, Red Bell Pepper, Red Onion' }
        ];

        createMenuSection(menuGallery, 'Starters', starters);
        createMenuSection(menuGallery, 'Main Courses', mainCourses);
        createMenuSection(menuGallery, 'Sandwiches', sandwiches);
        createMenuSection(menuGallery, 'Sides', sides);
    };
}

function createMenuSection(menuGallery, category, item) {
    const section = document.createElement('section');

    const title = document.createElement('h2');
    title.textContent = category;
    section.appendChild(title);


    item.forEach(image => {
        const container = document.createElement('div');
        container.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = 'pictures/' + image.image;
        img.alt = 'Menu Item';
        img.style.height = '150px';
        section.appendChild(img);

        const description = document.createElement('p');
        description.textContent = image.description;
        container.appendChild(description);

        section.appendChild(container);
    });

    menuGallery.appendChild(section);
}