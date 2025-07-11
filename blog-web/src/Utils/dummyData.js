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
      "React is a JavaScript library for building user interfaces. It makes creating interactive UIs painless...",
    category: "React",
    authorId: "user1",
    createdAt: "2025-07-01T10:00:00Z",
    likes: ["user2"],
    bookmarks: ["user2"],
  },
  {
    id: "blog2",
    title: "Mastering CSS Flexbox",
    content:
      "Flexbox is a powerful layout tool in CSS. It lets you design responsive layouts with ease...",
    category: "CSS",
    authorId: "user2",
    createdAt: "2025-07-02T14:30:00Z",
    likes: ["user1"],
    bookmarks: [],
  },
  {
    id: "blog3",
    title: "Why Tailwind CSS is Awesome",
    content:
      "Tailwind is a utility-first CSS framework. It offers low-level utility classes to build custom designs directly in markup...",
    category: "Tailwind",
    authorId: "user1",
    createdAt: "2025-07-03T09:15:00Z",
    likes: [],
    bookmarks: ["user1", "user2"],
  },
];
