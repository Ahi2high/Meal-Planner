document.addEventListener('DOMContentLoaded', function() {
    const breakfastOptions = [
        'Scrambled Eggs',
        'Fried Eggs',
        'Boiled Eggs',
        'Omelette (with gluten-free fillings such as vegetables, cheese, or ham)',
        'Berry Smoothie (using gluten-free fruits like strawberries, blueberries, and raspberries)',
        'Green Smoothie (spinach, kale, banana, and almond milk)',
        'Tropical Smoothie (pineapple, mango, banana, coconut milk)',
        'Gluten-Free Oatmeal with toppings like fruits, nuts, seeds, and honey',
        'Quinoa Porridge with cinnamon and fruit',
        'Buckwheat Porridge with almond milk and berries',
        'Greek Yogurt (ensure it\'s certified gluten-free)',
        'Dairy-free Yogurt Alternatives made from coconut, almond, or soy',
        'Yogurt Parfait with layers of yogurt, gluten-free granola, and fruit',
        'Gluten-Free Pancakes made with alternative flours like rice flour, almond flour, or coconut flour',
        'Waffles made with gluten-free flour blend',
        'Gluten-Free Toast with toppings like avocado, smoked salmon, or nut butter',
        'Rice Cakes with various toppings',
        'Corn Tortillas filled with scrambled eggs, vegetables, and cheese',
        'Fresh Fruit Salad with a drizzle of honey or yogurt',
        'Acai Bowls topped with gluten-free granola, fruit, and coconut flakes',
        'Chia Seed Pudding with layers of fruit and nuts',
        'Gluten-Free Tortillas filled with scrambled eggs, black beans, salsa, and cheese',
        'Breakfast Wraps with spinach, eggs, cheese, and turkey bacon',
        'Homemade Gluten-Free Muffins (blueberry, banana, chocolate chip, etc.)',
        'Store-bought Gluten-Free Breakfast Bars or Granola Bars',
        'Gluten-Free Cereals like rice crisps, corn flakes, or quinoa flakes',
        'Gluten-Free Granola with nuts, seeds, and dried fruits'
    ];

    const lunchOptions = [
        'Grilled Chicken Salad with Mixed Greens and Balsamic Vinaigrette',
        'Quinoa Salad with Vegetables and Feta Cheese',
        'Gluten-Free Wrap filled with Turkey, Lettuce, Tomato, and Avocado',
        'Vegetable Stir-Fry with Tofu or Chicken over Rice Noodles',
        'Gluten-Free Pizza with Vegetable Toppings (using a gluten-free crust)',
        'Salmon with Roasted Vegetables and Quinoa',
        'Bean and Rice Burrito Bowl with Guacamole and Salsa',
        'Gluten-Free Pasta Salad with Pesto, Cherry Tomatoes, and Mozzarella Balls',
        'Turkey and Avocado Sandwich on Gluten-Free Bread',
        'Vegetable and Chickpea Curry with Basmati Rice',
        'Tuna Salad Lettuce Wraps with Cucumber and Tomato Slices',
        'Shrimp Tacos with Corn Tortillas, Cabbage Slaw, and Avocado',
        'Baked Sweet Potato with Black Beans, Corn, and Salsa',
        'Gluten-Free Sushi Rolls with Vegetables and Avocado',
        'Eggplant Parmesan with Gluten-Free Breadcrumbs and Marinara Sauce',
        'Grilled Vegetable Panini on Gluten-Free Bread with Pesto Mayo',
        'Asian-style Beef and Broccoli with Rice',
        'Chicken Caesar Salad with Gluten-Free Croutons',
        'Mediterranean Quinoa Bowl with Olives, Cucumber, and Feta Cheese',
        'Gluten-Free Veggie Burger with Sweet Potato Fries',
        'Spinach and Feta Stuffed Chicken Breast with Roasted Potatoes',
        'Thai Peanut Chicken Salad with Rice Noodles',
        'Lentil Soup with Gluten-Free Bread',
        'Caprese Salad with Gluten-Free Croutons and Balsamic Glaze',
        'Gluten-Free Falafel Wrap with Hummus and Tzatziki Sauce',
        'Beef and Vegetable Kabobs with Quinoa Pilaf',
        'Zucchini Noodles with Pesto and Cherry Tomatoes',
        'Chicken and Rice Soup with Gluten-Free Crackers',
        'Black Bean Quesadilla with Guacamole and Salsa'
    ];

    const dinnerOptions = [
        'Grilled Salmon with Roasted Vegetables and Quinoa',
        'Gluten-Free Pasta with Marinara Sauce and Grilled Chicken',
        'Stir-Fried Shrimp with Vegetables over Rice',
        'Baked Chicken Breast with Sweet Potato Mash and Steamed Broccoli',
        'Beef Stir-Fry with Bell Peppers and Snow Peas over Rice Noodles',
        'Roasted Vegetable and Chickpea Buddha Bowl with Tahini Dressing',
        'Gluten-Free Pizza with Pepperoni, Mushrooms, and Olives (using a gluten-free crust)',
        'Turkey Meatballs with Zucchini Noodles and Marinara Sauce',
        'Grilled Steak with Baked Potatoes and Green Beans',
        'Lemon Garlic Roasted Chicken with Quinoa Pilaf and Asparagus',
        'Shrimp Scampi with Gluten-Free Linguine',
        'Vegetarian Chili with Cornbread Muffins',
        'Teriyaki Glazed Tofu with Stir-Fried Vegetables and Rice',
        'Pesto Shrimp with Gluten-Free Pasta and Cherry Tomatoes',
        'Honey Mustard Glazed Pork Chops with Roasted Carrots and Potatoes',
        'Baked Cod with Lemon Herb Butter and Steamed Green Beans',
        'Gluten-Free Lasagna with Spinach and Ricotta',
        'Thai Green Curry with Chicken and Jasmine Rice',
        'Vegetable and Bean Enchiladas with Salsa Verde',
        'Grilled Portobello Mushrooms with Polenta and Roasted Tomatoes',
        'Sesame Ginger Beef with Broccoli and Brown Rice',
        'Cauliflower Crust Pizza with Chicken, BBQ Sauce, and Red Onions',
        'Black Bean and Quinoa Stuffed Bell Peppers with Avocado',
        'Coconut Curry Chicken with Basmati Rice',
        'Gluten-Free Beef Tacos with Lettuce Wraps and Pico de Gallo',
        'Mediterranean Stuffed Peppers with Ground Turkey and Rice',
        'Salmon Cakes with Roasted Sweet Potatoes and Brussels Sprouts',
        'Vegetable Pad Thai with Rice Noodles',
        'Lemon Herb Grilled Swordfish with Roasted Vegetables'
    ];

    const breakfastList = document.getElementById('breakfast-options');
    const lunchList = document.getElementById('lunch-options');
    const dinnerList = document.getElementById('dinner-options');
    const randomizeBtn = document.getElementById('randomize-btn');
    const saveMealPlanBtn = document.getElementById('save-meal-plan');
    const mealPlanCalendar = document.getElementById('calendar');

    // Display meal options
    function displayMealOptions(options, list) {
        list.innerHTML = '';
        options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            list.appendChild(li);
        });
    }

    // Randomize meal selections
    function randomizeSelections() {
        const randomBreakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
        const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
        const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
        
        const mealPlan = `
            <p><strong>Breakfast:</strong> ${randomBreakfast}</p>
            <p><strong>Lunch:</strong> ${randomLunch}</p>
            <p><strong>Dinner:</strong> ${randomDinner}</p>
        `;
        
        mealPlanCalendar.innerHTML = mealPlan;
    }

    // Save meal plan to JSON file
    function saveMealPlan() {
        const mealPlanData = {
            breakfast: breakfastList.textContent,
            lunch: lunchList.textContent,
            dinner: dinnerList.textContent
        };

        const blob = new Blob([JSON.stringify(mealPlanData, null, 2)], {type : 'application/json'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'meal_plan.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Initialize meal options
    displayMealOptions(breakfastOptions, breakfastList);
    displayMealOptions(lunchOptions, lunchList);
    displayMealOptions(dinnerOptions, dinnerList);

    // Randomize button click event
    randomizeBtn.addEventListener('click', randomizeSelections);

    // Save meal plan button click event
    saveMealPlanBtn.addEventListener('click', saveMealPlan);

    // Calendar initialization
    const calendar = new FullCalendar.Calendar(mealPlanCalendar, {
        initialView: 'dayGridMonth'
    });

    calendar.render();
});
