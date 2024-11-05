# My-Portfolio

My-Portfolio is a responsive personal portfolio website built with React, Vite, Tailwind CSS, Material UI, and Framer Motion. This project showcases skills, projects, and contact information, providing an interactive and visually appealing experience for visitors. The project includes well-organized components for each section of the portfolio and utilizes Email.js for the contact form.


## Features

- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on both desktop and mobile.
- **Smooth Animations**: Framer Motion is used for subtle, smooth animations throughout the site.
- **Tailwind CSS Styling**: Rapidly styled and customized with Tailwind CSS.
- **Material UI Icons**: Icons for social links and UI components with a professional look.
- **Contact Form with Email.js**: Allows visitors to easily reach out through a contact form connected to Email.js for email delivery.


## Technologies Used

- **React** with Vite for fast and efficient front-end development.
- **Tailwind CSS** for custom styling and responsive design.
- **Material UI** for icons and UI components.
- **Framer Motion** for animations.
- **Email.js** for handling form submissions in the Contact Me section.


## Folder Structure

Below is the main structure of the project:

my-portfolio/
├── public/
│   └── images/           # Contains all images used in the website
│
├── src/
│   ├── components/       # Contains all individual components
│   │   ├── About/        # About section component
│   │   ├── Projects/     # Projects section component
│   │   ├── Skills/       # Skills section component
│   │   ├── Contact/      # Contact Me section component
│   │   ├── Card/         # Contains Project Card component for displaying projects
│   │
│   ├── data/             # Contains data files for skills and projects
│   │   ├── skills.js     # Skills data file
│   │   ├── projects.js   # Projects data file
│   │
│   └── App.js            # Main app file for rendering the website
│
├── README.md             # Documentation file
└── package.json          # Project dependencies and scripts



## Getting Started

### Prerequisites

- Node.js (v14 or above)
- Yarn or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sumitkhandegar/My_Portfolio.git

2. Navigate to the project directory:

   ```bash
   cd My_Portfolio

3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm run dev

5. Open the app in your browser at http://localhost:5173.


## Usage
This project is structured with components and data files to allow easy addition and modification of portfolio content:

- components: Contains React components for each section (About, Projects, Skills, Contact). The Card folder includes the Project Card component for displaying project details.
- data: Holds data files (skills.js and projects.js) to manage content for the Skills and Projects sections.


## Deployment
To deploy this app, you can use Vercel, Netlify, or any static hosting service that supports Vite apps.
