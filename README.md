# Mohamed Shokr — Portfolio

Personal portfolio and blog, built with [Astro](https://astro.build) and SCSS. It has a magazine-style home page, a career timeline, featured work, essays, and a contact form.

## What's in it

- **Home:** a pinned header, scrolling featured articles and an experience sidebar with a ticker.
- **Career, Work and Blog:** pages generated from Markdown files in `src/content`.
- **Tags:** an automatic page for every tag.
- **Contact:** a form that sends email through [Formspree](https://formspree.io), then shows a thank-you page.
- **Light and dark themes:** a toggle that remembers the choice and follows the system setting by default.
- **Resume:** a download button in the menu, served from `public/`.
- **RSS feed and sitemap.**

## Getting started

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve the built site locally
```

## Project layout

```
src/
  content/      Markdown for posts, work and career entries
  pages/        Routes (home, blog, career, work, tags, contact, thanks)
  components/   Menu, sidebar, ticker, theme toggle, and so on
  layouts/      BaseLayout (home) and PageLayout (inner pages)
  styles/       global.scss and themes.scss (colour tokens)
public/         Static files: favicons, resume PDF
```

## Editing content

Each Markdown file in `src/content` has frontmatter (title, dates, tags, type and so on) that is validated by the schema in `src/content.config.ts`. Add a file to add an entry.

To change colours, edit the tokens in `src/styles/themes.scss`. To update the resume, replace `public/Mohamed-Shokr-Resume.pdf`.

## Checks and deployment

CI runs `npm run format:check` (Prettier) and `npm run build` on every push and pull request. Run `npm run format` to fix formatting. The site is fully static, so it deploys to any static host, such as Vercel.

## Credits

Based on the [Self Esteem](https://github.com/m-durana/self-esteem-astro) Astro template, whose layout is by [Aysenur Turk](https://codepen.io/TurkAysenur/pen/gOmMgpx). Released under the license in `LICENSE`.
