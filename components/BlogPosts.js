import React from "react";

const blogPosts = [
  {
    title: "Publish a React App in GitHub Pages with Custom Subdomain",
    url:
      "https://dev.to/danivijay/the-lazy-man-s-journey-to-publish-an-react-app-in-github-pages-with-custom-subdomain-43li"
  },
  {
    title: "3 Things you must know before attending NodeJS interview",
    url:
      "https://medium.com/the-web-club/3-things-you-must-know-before-attending-nodejs-interview-6c621f8fc85a"
  },
  {
    title: "5 Android Apps I Use Daily to Increase Productivity",
    url:
      "https://medium.com/swlh/5-android-apps-i-use-daily-to-increase-productivity-45b1a3756e1b"
  },
  {
    title:
      "Write and Deploy Your First Serverless Function in 10 Minutes, or Less",
    url:
      "https://codeburst.io/write-and-deploy-your-first-serverless-function-within-10-minutes-or-less-d7552fcd6550"
  },
  {
    title: "How I built a Chrome Extension to enhance my productivity",
    url:
      "https://codeburst.io/how-i-built-a-chrome-extension-to-enhance-my-productivity-99e441ba786d"
  },
  {
    title: "Background Sync - Steroid for Web Apps",
    url:
      "https://medium.com/beginners-guide-to-mobile-web-development/background-sync-steroid-for-web-apps-3c3233cffbff"
  },
  {
    title: "Taming IndexedDB - Part 3",
    url:
      "https://medium.com/beginners-guide-to-mobile-web-development/taming-indexeddb-3-3-de3ff29f0038"
  },
  {
    title: "Taming IndexedDB - Part 2",
    url:
      "https://medium.com/beginners-guide-to-mobile-web-development/taming-indexeddb-2-tbd-7c1a7e4bac80"
  },
  {
    title: "Taming IndexedDB - Part 1",
    url:
      "https://medium.com/beginners-guide-to-mobile-web-development/taming-indexeddb-1-tbd-96a222512ea1"
  },
  {
    title: "Stanford’s CS101 — in a web dev’s view",
    url:
      "https://medium.com/the-web-club/stanfords-cs101-in-a-web-dev-s-view-c160b74feef5"
  },
  {
    title: "Google Mobile Sites certified — how to",
    url:
      "https://medium.com/the-web-club/google-mobile-sites-certified-how-to-e936b10c93e9"
  }
];

const BlogPosts = () => {
  return (
    <div>
      <hr />
      <h2>Blog</h2>
      <div style={{ marginBottom: "10px" }}>
        I'm an occasional writer. Authored for publications like{" "}
        <a
          href="https://medium.com/swlh"
          target="_blank"
          rel="nofollow noopener"
        >
          The Startup
        </a>{" "}
        and{" "}
        <a href="https://codeburst.io/" target="_blank" rel="nofollow noopener">
          Codeburst.io
        </a>{" "}
        in the past. Not gonna lie, nowadays mostly I writes for self reference.
        Here are few public scribbles.
      </div>
      {blogPosts.map(({ title, url }) => (
        <div className="blog-posts" key={url}>
          <a href={url} target="_blank" rel="nofollow noopener">
            {title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
