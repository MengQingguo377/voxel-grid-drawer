# Deployment checklist

## Before publishing

- [ ] Rename the GitHub repository if desired.
- [ ] Add a repository description and preview image.
- [ ] Choose a software license if you want others to reuse the source code.
- [ ] Test SVG export.
- [ ] Test PNG export.
- [ ] Test editable PPT export.
- [ ] Test project JSON save/load.
- [ ] Test the site in Chrome and Edge.

## GitHub Pages

Repository structure:

```text
/
├── index.html
├── jszip.min.js
├── README.md
└── .nojekyll
```

Then enable **Settings → Pages → Deploy from a branch → main / root**.

## Vercel

Import the GitHub repository and deploy it as a static site. No build command is needed.
