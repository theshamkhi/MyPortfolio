# CS50 Web Programming Final Project - MyPortfolio

Welcome to MyPortfolio, an innovative web application designed to elevate your online presence. Unlike traditional portfolios, MyPortfolio redefines the way you showcase your professional identity. This platform offers a seamless blend of modern design, interactivity, and personalization, ensuring that your portfolio is not just a static display but a living representation of your evolving skills and accomplishments.  

## Distinctiveness and Complexity

This portfolio distinguishes itself through a perfect blend of design aesthetics and advanced functionality. The frontend, powered by HTML, CSS, and JavaScript, incorporates Bootstrap for a sleek and responsive layout. Notably, the scrolling slider on the homepage, interactive menu icon, and dynamic project visibility effects add a unique and engaging dimension to the user interface. Unlike static portfolios, this web app provides a personalized experience, allowing users to explore projects and dynamic elements tailored to the user's identity.

On the backend, Django models (`Portfolio`, `Project`, `ProjectDetail`) provide a structured approach to managing portfolio data. The inclusion of a user's picture, name, job title, projects, and an about section adds a layer of personalization. Importantly, this data is not hardcoded; it's changeable through the Django admin interface, providing flexibility for users to update their information seamlessly. The integration of media handling for images and dynamic calculations for section heights contributes to the project's complexity.

## File Descriptions

- **`models.py`**: Defines Django models - `Portfolio`, `Project`, and `ProjectDetail`.
- **`views.py`**: Implements a Django view (`index`) to render the portfolio page.
- **`urls.py`**: Specifies URL patterns, including the main view and media file serving in debug mode.

- **`static` Directory**:
  - **`styles.css`**: Contains the styling for the entire project.
  - **`portfolio.js`**: Manages various frontend functionalities.

- **`templates` Directory**:
  - **`index.html`**: The main HTML file containing the structure of the portfolio webpage.

- **`media` Directory**:
  - **`users/`**: Contains user profile pictures.
  - **`projects/`**: Contains project screenshot images.  

## Project Demonstration

For a comprehensive demonstration of the project's functionality, please click on the image below:  

[![Portfolio](https://blogger.googleusercontent.com/img/a/AVvXsEhv3_ehrekr2CVamLrn7PRH5lPsx7ncvOwMSPlPrsoblTSiH8fPcT00ZDwbdRHuk2hvX2t-QZ2xSH8x68MkwZy1Izn8-blbElsy8g8BILKyeFGMEz71QC0AjaCwtfy8uTyR7Sr1u5AyMvxMvF9wLk0nHFCer0vJMGUDtKBweERnztrMbAOz4JYilMYdUZU)](https://thechamkhi.pythonanywhere.com/)

## Running the Application

To run the application locally, follow these steps:

1. Ensure you have Python and Django installed on your system.
2. Clone the project repository.
3. Navigate to the project directory in the terminal.
4. Run the following commands:
   ```bash
   pip install -r requirements.txt
   python manage.py makemigration
   python manage.py migrate
   python manage.py runserver
