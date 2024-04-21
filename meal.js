document.addEventListener('DOMContentLoaded', function() {
    const breakfastOptions = [
        // Breakfast options
    ];

    const lunchOptions = [
        // Lunch options
    ];

    const dinnerOptions = [
        // Dinner options
    ];

    const breakfastList = document.getElementById('breakfast-options');
    const lunchList = document.getElementById('lunch-options');
    const dinnerList = document.getElementById('dinner-options');
    const mealPlanCalendar = document.getElementById('calendar');

    // Display meal options
    function displayMealOptions(options, list) {
        list.innerHTML = '';
        options.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            li.addEventListener('click', function() {
                selectMeal(option, list);
            });
            list.appendChild(li);
        });
    }

    // Select meal option
    function selectMeal(option, list) {
        const selected = list.querySelector('.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        list.previousElementSibling.textContent = option;
        list.dataset.selected = option;
    }

    // Initialize meal options
    displayMealOptions(breakfastOptions, breakfastList);
    displayMealOptions(lunchOptions, lunchList);
    displayMealOptions(dinnerOptions, dinnerList);

    // Return to previous meal planner page
    document.getElementById('return-btn').addEventListener('click', function() {
        window.location.href = 'meal_planner.html';
    });

    // Initialize calendar
    const calendar = new FullCalendar.Calendar(mealPlanCalendar, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            const selectedDate = info.dateStr;
            const breakfast = breakfastList.dataset.selected || '';
            const lunch = lunchList.dataset.selected || '';
            const dinner = dinnerList.dataset.selected || '';
            const mealPlan = `${selectedDate}: Breakfast - ${breakfast}, Lunch - ${lunch}, Dinner - ${dinner}`;
            alert(`Meal plan for ${selectedDate}:\n${mealPlan}`);
        }
    });

    calendar.render();

    // Download meal plan as CSV
    document.getElementById('download-csv-btn').addEventListener('click', function() {
        const csvContent = `Date,Breakfast,Lunch,Dinner\n`;
        calendar.getEvents().forEach(event => {
            const date = event.startStr;
            const meals = event.title.split('\n').slice(1); // Exclude the first line (date)
            csvContent += `${date},${meals.join(',')}\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meal_plan.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
