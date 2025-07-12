// src/data/DummyData.js

export const currentUserId = "user1";

export const users = [
  {
    id: "user1",
    name: "Amandeep Singh",
    bio: "Frontend Developer & Blogger",
  },
  {
    id: "user2",
    name: "Nishtha Sharma",
    bio: "UI/UX Designer with a love for minimalism.",
  },
];

export const blogs = [
  {
    id: "blog1",
    title: "Getting Started with React",
    content:
      `React: Making UI Development Painless and Powerful
      In today’s fast-paced world of web development, building interactive and responsive user interfaces can be a complex and time-consuming task. That's where React comes in. Developed and maintained by Facebook, React is a powerful JavaScript library that has become one of the most popular tools for building user interfaces, especially for single-page applications.

      What is React?
      React is a declarative, component-based JavaScript library used to build user interfaces. It allows developers to create large web applications that can change data without reloading the page. Its core principle is component-based architecture, which means you can break down the UI into small, reusable pieces—called components.

      Why Use React?
      Let’s look at some key reasons why React is loved by developers worldwide:

      1. Declarative Nature
      React makes it effortless to design interactive UIs. Instead of manually manipulating the DOM, you simply tell React what you want your UI to look like, and it takes care of the how. This declarative approach leads to code that is more readable and easier to debug.

      2. Component-Based Architecture
      Everything in React is a component. Each component encapsulates its structure, style, and behavior. This modularity makes your code more maintainable and easier to scale as your application grows.

      3. Virtual DOM
      React uses a Virtual DOM, a lightweight representation of the actual DOM. When changes occur, React updates the Virtual DOM first, calculates the most efficient way to make updates, and then applies those changes to the real DOM. This process leads to faster rendering and better performance.

      4. One-Way Data Binding
      React uses unidirectional (one-way) data flow. This makes the data flow predictable and easier to debug. When the state of a component changes, only that component and its children re-render.

      5. JSX – JavaScript + HTML
      React uses JSX, a syntax extension that allows you to write HTML-like code in your JavaScript. This makes the code more intuitive and easy to understand.`,
    category: "React",
    authorId: "user1",
    createdAt: "2025-07-01T10:00:00Z",
    likes: ["user2"],
    bookmarks: ["user2"],
    keywords: ["react", "javascript", "frontend"],
  },
  {
    id: "blog2",
    title: "Mastering CSS Flexbox",
    content:
          `🧠 Mastering CSS Flexbox
            In the world of web design, layout matters. Whether you're creating a responsive navigation bar, a clean product grid, or a perfectly centered element — CSS Flexbox makes it all possible with minimal effort.

            Flexbox, short for Flexible Box Layout, is a layout model in CSS that provides an efficient way to distribute space and align items in a container, even when their sizes are unknown or dynamic. It simplifies complex layouts that used to require hacks or extra markup.

            🔍 What Makes Flexbox Powerful?
            1. Directional Control
            Flexbox lets you control the direction of elements — either in a row or column — with ease. This gives you flexibility in how your content flows, making it perfect for both desktop and mobile designs.

            2. Easy Alignment
            Aligning items in the center of the screen used to be tricky. With Flexbox, vertical and horizontal alignment becomes a breeze, without needing floats or positioning.

            3. Dynamic Sizing
            Flexbox allows items to grow, shrink, or stay fixed depending on the available space. This means layouts can adapt beautifully to different screen sizes without media queries.

            4. Spacing and Wrapping
            Flexbox gives you full control over spacing between items and whether they should wrap to the next line if there's not enough room. This is especially useful for galleries, cards, or menus.

            💡 Why Should You Learn Flexbox?
            It drastically reduces the need for complex CSS hacks.

            It improves responsiveness and visual consistency across devices.

            It's supported in all modern browsers.

            It’s foundational for modern layout tools like CSS Grid and Tailwind CSS.

            🚀 Use Cases of Flexbox
            Building navigation bars

            Creating responsive card layouts

            Designing centered login forms or modals

            Arranging footers and headers

            Structuring sidebars and content areas

            🎯 Conclusion
            Learning and mastering CSS Flexbox will transform the way you build websites. It brings clarity, structure, and elegance to your layouts. Whether you're a beginner or an experienced developer, Flexbox is a must-have tool in your frontend skillset.

            So next time you're stuck trying to align something or build a layout that just won’t cooperate — Flexbox might be the perfect solution.`,
    category: "CSS",
    authorId: "user2",
    createdAt: "2025-07-02T14:30:00Z",
    likes: ["user1"],
    bookmarks: [],
    keywords: ["flexbox", "css", "design"],
  },
  {
    id: "blog3",
    title: "Why Tailwind CSS is Awesome",
    content:
      `🚀 What Makes Tailwind CSS So Powerful?
        1. Utility-First Approach
        Instead of writing custom CSS classes, Tailwind gives you utility classes like p-4, text-center, bg-blue-500, etc. These small, composable classes allow you to design directly in your HTML or JSX — faster and more efficiently.

        2. No More Naming Headaches
        With traditional CSS, naming classes and organizing styles can be frustrating. Tailwind eliminates that by letting you style elements inline using pre-defined utilities — no more card-container-wrapper vs. box-layout-row confusion.

        3. Responsive by Default
        Tailwind’s responsive design utilities (like sm:, md:, lg:) let you build mobile-first interfaces effortlessly — all from your markup.

        4. Highly Customizable
        With the tailwind.config.js file, you can easily:

        Extend the default theme

        Add custom colors and fonts

        Create design tokens

        Override breakpoints and spacing

        This makes Tailwind both scalable and brand-friendly.

        5. Perfect for Component-Based Frameworks
        Tailwind works exceptionally well with frameworks like React, Vue, and Next.js. You can easily pair it with component libraries or build your own design system from scratch.

        ⚡ Benefits of Using Tailwind
        Faster development — Design while you build.

        Cleaner codebase — No bloated CSS files.

        Better consistency — Use standardized utility classes.

        Low CSS bloat — Especially when using tools like PurgeCSS or Tailwind's built-in JIT engine.

        Great documentation — Tailwind's docs are super detailed and easy to follow.

        🎯 Where Tailwind Shines
        Portfolios and landing pages

        Dashboards and admin panels

        Startup MVPs

        Design systems

        Rapid prototyping

        💬 Developer Favorite
        Once you start using Tailwind, it’s hard to go back. The flexibility, control, and speed it offers make it a game-changer for modern web development. It brings design and code closer together — so developers can build polished UIs without needing a full design team.

        ✅ Conclusion
        Tailwind CSS isn’t just a framework — it’s a new way of thinking about styling. It gives you the tools to build anything, quickly and beautifully, all while keeping your codebase lean and manageable.

        If you haven’t tried Tailwind yet, now’s the time. Once you do, you’ll understand why so many developers say:
        "Tailwind just makes sense."`,
    category: "Tailwind",
    authorId: "user1",
    createdAt: "2025-07-03T09:15:00Z",
    likes: [],
    bookmarks: ["user1", "user2"],
    keywords: ["tailwind", "css", "design", "utility-first"],
  },
];
