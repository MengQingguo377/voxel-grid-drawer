# Voxel Grid Drawer

A pure front-end browser tool for creating academic 3D voxel-grid and event-stream illustrations.

## Features

- Adjustable X / Y / Z voxel-grid dimensions
- Event-stream mode with red/blue event points inside a 3D spatiotemporal volume
- Reproducible uniform, clustered, and alternating-band event distributions
- Paper-oriented event-stream view with editable time arrow, slice ticks, and labels
- Free-rotation 3D view
- Paper-oriented schematic projection with an undistorted front face
- Adjustable Z-axis visual length
- Separate styling for visible outer lines and hidden/internal lines
- Editable colored voxel cells
- Configurable XYZ axes
- Export to SVG and PNG
- Export to editable PowerPoint (`.pptx`)
  - grid lines remain individual PowerPoint line objects
  - voxel faces remain individual editable vector shapes
  - axis lines and labels are editable
- Save/load voxel and event-stream project configuration as JSON
- No backend or database required

## Local use

Keep these two files in the same directory:

```text
index.html
jszip.min.js
```

Open `index.html` directly in a modern desktop browser.

## Deploy with GitHub Pages

1. Create a GitHub repository, for example `voxel-grid-drawer`.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save and wait for GitHub Pages to publish the site.

The resulting URL will normally look like:

```text
https://YOUR_USERNAME.github.io/voxel-grid-drawer/
```

## Deploy with Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel.
3. Choose **Add New → Project** and import the repository.
4. Framework preset: **Other**.
5. No build command is required.
6. Deploy.

## Notes

- The tool is entirely client-side.
- User drawings and project JSON data are not uploaded by this site.
- PPT export uses the local `jszip.min.js` file included in this directory.
- Before publishing the repository as open source, choose and add the software license you want to use.

## Recommended browser

Current versions of Chrome, Edge, Firefox, or Safari on desktop.
