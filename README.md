
# Repository Explorer with Infinite Scroll

Description
This project, "Repository Explorer", is a web application built using Nuxt 3. It features an infinite scroll functionality to dynamically load GitHub repositories. As the user scrolls down, the application fetches and displays additional repositories, 10 at a time, up to a minimum of 30 repositories.


## Features

- Infinite scrolling to load additional GitHub repositories.
- Responsive design for various screen sizes.
- Error handling for API requests.
- ESLint and Prettier integration for consistent code style, following Airbnb's style guide.



## Installation

To get this project up and running on your local machine, follow these steps:

Clone the Repository:

```bash
git clone https://github.com/Kal-elSam?tab=repositories
```         

Install Dependencies:
```bash
 npm install
```     
Run the Development Server
```bash
npm run dev
```    
Visit http://localhost:3000 in your browser to view the application.
## Usage
Scroll down through the list of GitHub repositories. As you reach the bottom of the page, the application will automatically load more repositories.


## Tech Stack

**Client:** Nuxt 3, Vue 3, Tailwind CSS

**Server:** Node

Intersection Observer API for implementing infinite scroll


## GitHub API
This project uses the GitHub API to fetch repositories. It initially loads repositories from the following GitHub users:

-midudev
-Kal-ElSam
-Klerith

If you have used different or additional GitHub users for repository data, please update this section accordingly.


## ESLint and Prettier Configuration

ESLint and Prettier are configured according to the Airbnb style guide.

To ensure code quality and style consistency, make sure to lint your code regularly:


```bash
 npm run lint
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

 - Thanks to the GitHub API for providing a vast amount of data to work with.
 - Appreciation to Nuxt/Vue team for their excellent framework.

