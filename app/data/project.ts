// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Project 1",
    company: "100Devs", 
    overview: "Project 1 Overview",
    mainImage: "/exp/todo.png",
    link: "https://todolist-nzmg.onrender.com/",
  
    techStack: [
      {
        category: "Frontend",
        items: ["Node.js", "Express", "mongoDB"]
      }
    ],
    achievements: [
      {
        metric: "Performance Improvement",
        value: "95%",
        change: 95
      }
    ]
  },
  2: {
    id: 2,
    title: "Project 2",
    company: "100Devs",
    overview: "Project 2 Overview",
    mainImage: "/exp/recipe.png",
    link: "https://foodrecipes-website.netlify.app/",

    techStack: [
      {
        category: "Backend",
        items: ["JavaScript", "HTML", "CSS"]
      }
    ],
    achievements: [
      {
        metric: "User Satisfaction",
        value: "50%",
        change: 50
      }
    ]
  }
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}