# Tailwind CSS Docker Source Configuration Example

This is a demo project built with [TanStack Start](https://tanstack.com/start) and [Tailwind CSS](https://tailwindcss.com/) to demonstrate a common issue when deploying with Docker.

## Try it Online

🚀 [Open in StackBlitz](https://stackblitz.com/github/tommerty/tailwind-source-example)


## About

This showcases the solution to a specific Docker deployment issue with Tailwind v4. While this works perfectly in local development and builds, it requires special configuration for Docker builds.

# Configuration

When deploying your application with Docker, you may encounter issues with Tailwind not being bundled correctly causing two CSS files on build that cause FOUC. This is specifically related to the `@import` statement for Tailwind in your `/src/styles.css` file.

## How to Identify the Problem

You'll know this issue is affecting your application when:

- You see a 404 error for a CSS file in your browser's dev tools network tab when running from Docker
- You experience FOUC on initial page load

## Resolution

The solution depends on your project structure. In this example project, our `styles.css` is located within the `src` folder, so we need to specify the source directory in the `@import` statement:

```css
@import "tailwindcss" source("../src");
```

This tells Tailwind CSS to scan the `../src` directory (relative to the CSS file) for class usage during the build process.

Depending on your project structure, you might need different paths.

## Examples

- [This project](https://github.com/tommerty/tailwind-source-example) - Demonstrates the proper configuration
- [Project where this was initially discovered](https://github.com/dorasto/ui) ([Website](https://ui.doras.to))

---

**Note**: Files prefixed with `demo` can be safely deleted. For complete TanStack documentation, visit [tanstack.com](https://tanstack.com). This example should not be used as a template.
