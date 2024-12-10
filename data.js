const data = {
  projects: [
    {
      id: 1,
      title: "Hangman Game",
      description: "Hangman, the classic word-guessing game",
      mainImage: "/images/HangmanGame/MainMenu.png",
      allImages: [
        "/images/HangmanGame/MainMenu.png",
        "/images/HangmanGame/CategoryPick.png",
        "/images/HangmanGame/Ingame.png",
      ],
      details:
        "Welcome to the Hangman game! In this version, instead of drawing a figure, you’ll see your life bar decrease with each incorrect guess. The goal is to guess the word before your life bar runs out. You’ll start with a set of blank spaces representing the letters in the word. Each time you guess a letter, it will either fill in the corresponding position in the word if correct or cause your life bar to drop slightly if incorrect. At the start of the game, you can choose from six categories to play with, each offering unique and fun challenges. Continue guessing until either you fill in the entire word or your life bar is depleted. Guess carefully, and good luck!",
      features: [
        "Multiple Categories: Choose from categories like movies, animals, sports, and more.",
        "Dynamic Word Selection: Avoid repeated words with random selections from a JSON dataset.",
        "Interactive UI: Guess letters using an on-screen keyboard or your physical keyboard.",
        "Progress Tracking: Visualize mistakes with a progress bar.",
        "Sound Effects: Audio feedback for correct and incorrect guesses.",
        "Screen Resolutions: Optimized for screens 1920x1080px and 1440x900px.",
      ],
      technologies: [
        "React: For building the user interface.",
        "TypeScript: For type safety and better code maintainability.",
        "React Router: For navigation and URL management.",
        "React Context API: For state sharing across components.",
        "Bootstrap: For styling.",
        "SCSS: For enhanced CSS styling.",
      ],
      url: "https://hangman-game-projects.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind.",
      mainImage: "/images/portfolio-website.jpg",
      allImages: [
        "/images/portfolio-website.jpg",
        "/images/portfolio-website-1.jpg",
        "/images/portfolio-website-2.jpg",
      ],
      details: "A personal portfolio to showcase projects and skills.",
      features: [
        "Responsive Design: Optimized for all screen sizes.",
        "Project Showcase: Display projects with detailed descriptions.",
        "Interactive UI: Seamless navigation and user experience.",
        "Personal Branding: A sleek design highlighting personal identity.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Tailwind CSS: For utility-first styling.",
        "JavaScript: For client-side interactivity.",
      ],
      url: "",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "An application to fetch and display weather data for different locations.",
      mainImage: "/images/weather-app.jpg",
      allImages: ["/images/weather-app.jpg", "/images/weather-app-2.jpg"],
      details: "Check current weather and forecasts for any location.",
      features: [
        "Real-time Weather: Get live weather data using an API.",
        "Search Locations: Find weather for any city or location.",
        "Forecast: View future weather predictions.",
        "Interactive UI: Visualize weather data with dynamic elements.",
      ],
      technologies: [
        "React: For building the user interface.",
        "OpenWeather API: For fetching weather data.",
        "CSS: For styling the app.",
      ],
      url: "",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce platform with payment integration.",
      mainImage: "/images/e-commerce-platform.jpg",
      allImages: [
        "/images/e-commerce-platform.jpg",
        "/images/e-commerce-platform-1.jpg",
      ],
      details:
        "An online store with product listing and secure payment options.",
      features: [
        "Product Listings: Display products with descriptions and prices.",
        "User Authentication: Secure login and registration process.",
        "Shopping Cart: Add products to the cart and proceed to checkout.",
        "Payment Integration: Secure payment processing.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Stripe: For payment processing.",
        "Node.js: For backend services.",
        "MongoDB: For data storage.",
      ],
      url: "",
    },
    {
      id: 5,
      title: "Task Manager",
      description:
        "An application to manage tasks and organize projects effectively.",
      mainImage: "/images/task-manager.jpg",
      allImages: ["/images/task-manager.jpg", "/images/task-manager-1.jpg"],
      details: "A tool for task management and project organization.",
      features: [
        "Task Management: Create, edit, and delete tasks.",
        "Project Organization: Group tasks by project and priority.",
        "User Authentication: Sign up and log in to track your tasks.",
        "Progress Tracker: Visualize task completion status.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Node.js: For backend logic.",
        "MongoDB: For storing tasks and projects.",
        "CSS: For styling.",
      ],
      url: "",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "A dashboard to monitor social media metrics and performance.",
      mainImage: "/images/social-media-dashboard.jpg",
      allImages: [
        "/images/social-media-dashboard.jpg",
        "/images/social-media-dashboard-1.jpg",
      ],
      details: "Track social media stats and insights in one place.",
      features: [
        "Social Media Integration: Connect and track your accounts.",
        "Metrics Visualization: View stats like followers, likes, and shares.",
        "Real-time Updates: Get live updates on your social media performance.",
      ],
      technologies: [
        "React: For building the user interface.",
        "API Integration: For connecting to social media APIs.",
        "CSS: For styling.",
      ],
      url: "",
    },
    {
      id: 7,
      title: "Chat Application",
      description: "A real-time chat application using WebSocket and Node.js.",
      mainImage: "/images/chat-application.jpg",
      allImages: [
        "/images/chat-application.jpg",
        "/images/chat-application-1.jpg",
      ],
      details: "Chat with others in real-time using WebSocket.",
      features: [
        "Real-time Messaging: Send and receive messages instantly.",
        "User Authentication: Register and log in to the app.",
        "Message History: View previous messages in the chat.",
      ],
      technologies: [
        "Node.js: For backend services.",
        "WebSocket: For real-time communication.",
        "React: For the front-end interface.",
        "MongoDB: For message storage.",
      ],
      url: "",
    },
    {
      id: 8,
      title: "Blog Platform",
      description:
        "A platform to create and manage blog posts with a sleek editor.",
      mainImage: "/images/blog-platform.jpg",
      allImages: ["/images/blog-platform.jpg", "/images/blog-platform-1.jpg"],
      details: "A blogging platform with an easy-to-use editor.",
      features: [
        "Post Creation: Write and publish blog posts.",
        "Rich Text Editor: Use an advanced editor for formatting posts.",
        "Comment System: Allow readers to comment on posts.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Node.js: For backend logic.",
        "MongoDB: For storing blog posts and comments.",
      ],
      url: "",
    },
    {
      id: 9,
      title: "Personal Finance",
      description: "An app to track income and expenses for personal finance.",
      mainImage: "/images/finance-tracker.jpg",
      allImages: [
        "/images/finance-tracker.jpg",
        "/images/finance-tracker-1.jpg",
      ],
      details: "Manage your personal finances and track expenses.",
      features: [
        "Income/Expense Tracking: Record and categorize income and expenses.",
        "Budgeting: Set monthly budget limits for different categories.",
        "Reports: View visual reports of your financial status.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Node.js: For backend logic.",
        "MongoDB: For storing financial data.",
      ],
      url: "",
    },
    {
      id: 10,
      title: "Quiz App",
      description:
        "A quiz application with dynamic questions and scoring system.",
      mainImage: "/images/quiz-app.jpg",
      allImages: ["/images/quiz-app.jpg", "/images/quiz-app-1.jpg"],
      details: "Answer quiz questions and track your score.",
      features: [
        "Question Bank: Dynamic selection of questions from a large database.",
        "Timer: Set time limits for each question.",
        "Score Tracking: Keep track of your score throughout the quiz.",
      ],
      technologies: [
        "React: For building the user interface.",
        "JavaScript: For quiz functionality.",
        "CSS: For styling the app.",
      ],
      url: "",
    },
    {
      id: 11,
      title: "Online Learning Platform",
      description: "A platform for hosting and attending online courses.",
      mainImage: "/images/learning-platform.jpg",
      allImages: [
        "/images/learning-platform.jpg",
        "/images/learning-platform-1.jpg",
      ],
      details: "Learn new skills through interactive online courses.",
      features: [
        "Course Creation: Instructors can create and publish courses.",
        "Video Lessons: Watch video lectures and tutorials.",
        "Quizzes: Test your knowledge with in-course quizzes.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Node.js: For backend services.",
        "MongoDB: For storing courses and user data.",
      ],
      url: "",
    },
    {
      id: 12,
      title: "Photography Gallery",
      description: "A gallery website to showcase photography work.",
      mainImage: "/images/photography-gallery.jpg",
      allImages: [
        "/images/photography-gallery.jpg",
        "/images/photography-gallery-1.jpg",
      ],
      details: "Showcase and display photography projects.",
      features: [
        "Image Gallery: Upload and display a collection of photos.",
        "Categorization: Organize photos by categories.",
        "Slideshow: View images in full-screen slideshow mode.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Node.js: For backend services.",
        "MongoDB: For storing image metadata.",
      ],
      url: "",
    },
  ],
};

export default data;
