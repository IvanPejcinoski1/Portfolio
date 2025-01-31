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
      title: "Memory Game",
      description:
        "Sharpen your mind with this fun and addictive memory challenge!",
      mainImage: "/images/MemoryGame/PreviewImageMemory.png",
      allImages: [
        "/images/MemoryGame/PreviewImageMemory.png",
        "/images/MemoryGame/SelectMode.png",
        "/images/MemoryGame/MemoryInGame.png",
      ],
      details: `The Memory Game is a fun and challenging puzzle game that tests your memory and attention to detail. The objective is to match pairs of cards by flipping them over one at a time. When you find a matching pair, both cards stay flipped. The goal is to match all pairs with the fewest number of attempts.
      This digital version of the classic game offers a clean, engaging user interface with smooth animations and a variety of exciting features. You can play alone, challenge your memory, and track your progress as you advance through the game.
The project combines modern web development technologies to deliver an interactive experience that is both fun and educational.`,
      features: [
        "Interactive Gameplay: Flip cards to reveal matching pairs.",
        "Card Shuffle: Cards are shuffled before each game, ensuring a fresh challenge every time.",
        "Animated Transitions: Smooth card flipping and fade-in animations for a delightful experience.",
        "Attempts Tracking: Track how many attempts were made before finishing game.",
        "Screen Resolutions: Optimized for screens with a resolution of 1920×1080px and automatically adapts to devices with predefined DPI scaling (e.g., 1.25 or higher) set at the operating system level.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Next JS: For server-side rendering, providing faster initial page loads and SEO benefits.",
        "Tailwind CSS and SCSS: For styling.",
        "TypeScript: For type safety and better code maintainability.",
        "Framer motion: For smooth animations  and transitions.",
        "React.memo and useMemo: Used to optimize performance by preventing unnecessary re-renders of components. ",
        "Next.js API Route: Utilizes Next.js API route functionality to handle server-side logic within the application.",
      ],
      url: "https://memory-game-ivan-pejcinoski.vercel.app/",
    },
    {
      id: 3,
      title: "Designo Multi Page Website",
      description:
        "Website for design agency that offers creative services for both individuals and businesses. ",
      mainImage: "/images/Designo/HomePage.png",
      allImages: [
        "/images/Designo/HomePage.png",
        "/images/Designo/AboutUs.png",
        "/images/Designo/Design.png",
      ],
      details: `Designo is a design agency that offers creative services for both individuals and businesses. The website showcases their web and graphic design projects, aiming to bring client ideas to life with innovative design and development.

This multi-page website highlights Designo's services in a simple, easy-to-navigate platform. With elegant design, smooth transitions, and user-friendly navigation, the site ensures a great experience for visitors.`,
      features: [
        "Multiple Pages: The website includes dedicated pages for About, Services, Portfolio, and Contact to provide detailed information about the agency and its offerings.",
        "Responsive Design: Fully optimized for all devices",
        "Smooth Navigation",
        "Portfolio Gallery: A showcase of previous design projects, complete with hover effects and interactive elements to engage visitors.",
        "Contact Form: A simple, user-friendly form for potential clients to easily reach out and get in touch with the agency.",
      ],
      technologies: [
        "React: For building the user interface.",
        "Next.js:: For server-side rendering, ensuring faster loading.",
        "TypeScript: For type safety and better code maintainability.",
        "Bootstrap and SCSS: For styling.",
        "React Hook Form: For handling form submissions and validation with minimal re-renders.",
        "Zod: For schema validation and type-safe form handling.",
      ],
      url: "https://designo-multi-page-website-frontend-mentor.vercel.app/",
    },
    {
      id: 4,
      title: "Dine Scout Restaurants Website",
      description:
        "This platform helps you discover a wide variety of restaurants",
      mainImage: "/images/RestaurantWebsite/HomePage.png",
      allImages: [
        "/images/RestaurantWebsite/HomePage.png",
        "/images/RestaurantWebsite/RestaurantDetails.png",
        "/images/RestaurantWebsite/FavouriteRestaurants.png",
      ],
      details: `Looking for the perfect place to eat? Explore a variety of restaurants, read real reviews, and find new favorites. Whether you're craving something familiar or want to try something new, we've got you covered.
      Discover great places to dine, save your favorites, and share your experiences with others. If you can't decide, let us surprise you with a random restaurant suggestion!
        With real user feedback and an ever-growing list of options, finding your next meal has never been easier. Bon appétit!`,
      features: [
        "Local storage: The reviews are stored Localy on the browser.",
        "Screen Resolutions: Optimized for screens with a resolution of 1920×1080px and automatically adapts to devices with predefined DPI scaling (e.g., 1.25 or higher) set at the operating system level.",
      ],
      technologies: [
        "React: For building the user interface.",
        "TypeScript: For type safety and better code maintainability",
        "React Context API: For state sharing across components",
        "Boostrap and SCSS: For styling.",
      ],
      url: "https://dine-scout-restaurant-website.vercel.app/",
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
