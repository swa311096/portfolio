# Portfolio

Personal portfolio with social links, an about section, and Substack writing organized into customizable category buckets.

## Layout

1. **Top**: Social account icons + about section (name and bio).
2. **Middle**: Category buckets for Substack posts. Click a bucket to expand and see all posts in that category. Links open the Substack articles.

## Editing your content

All editable content lives in the `content/` folder. No code changes required.

### Site info (name, about, social links)

Edit **`content/site.json`**:

- **`name`**: Your name (optional; leave empty string to hide).
- **`about`**: Your short bio. Use `\n` for line breaks, or type multiple lines in the string.
- **`social`**: Array of links. Each item:
  - `id`: unique key (e.g. `"twitter"`, `"linkedin"`).
  - `label`: accessible label (e.g. `"Twitter / X"`).
  - `url`: full URL to your profile.
  - `icon`: one of `twitter`, `linkedin`, `github`, `substack` (or `default`).

Add more icons by adding entries to `content/site.json` and reusing an existing `icon` value, or the code can be extended to support new icon names.

### Categories and Substack posts

Edit **`content/categories.json`**. It’s an array of category objects. Each category has:

- **`id`**: unique slug (e.g. `"pm-interview-prep"`). Used for expand/collapse; no spaces.
- **`name`**: Display name (e.g. `"PM Interview Prep"`).
- **`description`**: Optional short line under the name.
- **`posts`**: Array of Substack posts in this bucket. Each post:
  - **`title`**: Post title.
  - **`url`**: Full Substack URL (e.g. `https://yoursubstack.substack.com/p/...`).
  - **`date`**: Date string (e.g. `"2024-01-15"`).
  - **`excerpt`**: Optional one- or two-line summary.

#### Add a category

Append a new object to the `categories.json` array:

```json
{
  "id": "new-bucket",
  "name": "New Bucket",
  "description": "Optional description.",
  "posts": [
    {
      "title": "First post",
      "url": "https://yoursubstack.substack.com/p/first-post",
      "date": "2024-06-01",
      "excerpt": "Optional excerpt."
    }
  ]
}
```

#### Edit or update a category

Change `name`, `description`, or any post field in that category’s object. Reorder or add/remove items in `posts` as needed.

#### Remove a category

Delete that category’s entire `{ ... }` object from the array, including the comma before or after it so the JSON stays valid.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
