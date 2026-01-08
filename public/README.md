# Public Folder

This folder is for static assets like images, logos, and other files that will be served directly.

## How to Use

1. Add your image files to this folder (e.g., `logo.png`, `banner.jpg`)
2. Reference them in your code like this:

```tsx
<img src="/your-image.png" alt="description" />
```

Note: The leading `/` is important - it references files from the public folder.

## Example

If you add `my-logo.png` to this folder, you can use it in your React component:

```tsx
<img src="/my-logo.png" alt="My Logo" />
```

## Supported File Types

- Images: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`
- Other assets: `.ico`, `.woff`, `.woff2`, etc.
