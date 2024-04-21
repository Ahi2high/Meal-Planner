# Celiac Meal Planner

Welcome to the Celiac Meal Planner! This web application allows users to create and manage meal plans suitable for individuals with celiac disease.

## Pages

### Meal Planner
The Meal Planner page (`meal_planner.html`) allows users to select meals for breakfast, lunch, and dinner from a predefined list of options. Users can then generate a meal plan and save it for future reference.

### View/Edit Meal Plan
The View/Edit Meal Plan page (`meal_viewer.html`) enables users to view their current meal plan and make any necessary changes. Users can edit meal selections, print the meal plan, and download it as a CSV file. Additionally, users can select dates to add meals and view them in a list.

## How to Add or Change Meals

1. **Open the HTML files**: Navigate to the directory where your HTML files (`meal_planner.html` and `meal_viewer.html`) are located. Open these files in a text editor or an HTML editor of your choice.

2. **Locate the Dropdown Select Elements**: In both HTML files, you'll find three `<select>` elements for breakfast, lunch, and dinner meal selection. These elements have unique IDs: `breakfast-select`, `lunch-select`, and `dinner-select`.

3. **Add Options to Dropdown Selects**: Within each `<select>` element, you'll see a series of `<option>` elements. Each `<option>` represents a meal option. To add more options, simply add new `<option>` elements within the respective `<select>` element.

   Example:
   ```html
   <select id="breakfast-select">
       <option value="Scrambled Eggs">Scrambled Eggs</option>
       <option value="Omelette">Omelette</option>
       <!-- Add more options below -->
       <option value="New Breakfast Option">New Breakfast Option</option>
       <option value="Another Breakfast Option">Another Breakfast Option</option>
   </select>

Repeat this process for the lunch and dinner dropdown selects.

Save Changes: Once you've added the desired meal options, save the changes to the HTML files.
Testing: Open the HTML files in a web browser to ensure that the new meal options are displayed correctly in the dropdown menus.
Dependencies
Flatpickr (for date picker functionality)
PapaParse (for CSV parsing and formatting)
