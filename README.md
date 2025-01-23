# BlogNest

BlogNest is a simple blog viewer application built with **Next.js** that demonstrates key web development concepts including routing, server and client components, dynamic routes, authentication, and data fetching. This app allows users to view blog posts, read details about specific posts, and access a protected profile page.

## Features

- **Home Page**: Displays a list of blog post titles fetched from a mock API.
- **Blog Details Page**: View detailed content of each blog post by clicking on its title.
- **Profile Page**: A protected profile page that requires authentication (via **Kinde Auth**) to access.
- **Authentication**: Users must log in to access the profile page. They are redirected to the login page if they are not authenticated.
- **Navigation**: Includes navigation links to "Home" and "Profile" pages, with dynamic login/logout button based on authentication status.

## Tech Stack

- **Next.js** - React framework for building the app.
- **Tailwind CSS** - Utility-first CSS framework for styling the app.
- **Kinde Auth** - Authentication service used for securing the Profile page.
- **Mock API** - JSONPlaceholder API used for fetching blog posts.

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/khairul1036/blog-view-website-next-js
cd BlogNest
