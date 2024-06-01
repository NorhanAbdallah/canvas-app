## Proven's frontend challenge

This project is a single-page application built with React, Next.js, and TypeScript. It displays an image with overlaid boxes on a canvas. Each box contains text, positioning coordinates, and a classification from a predefined list. The boxes are color-coded based on their classification and can be edited via a popup menu on double-click. Additionally, a sidebar lists all boxes grouped by their classifications, allowing quick access for editing. The application dynamically scales the boxes to maintain alignment across different screen sizes.

## Deployment link
You can find the app on [canvas-app](https://canvas-app-taupe.vercel.app/)

## Running Instructions

In the project directory, you can run:

### `yarn install`

Installs node modules

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view homePage it in the browser.

## Project Structure
```
├───assets
│   └───canvas-data
├───router
└───view
    ├───Canvas
    │   └───components
    │       └───Popup
    ├───Home
    └───Sidebar
```
## Libraries used

- react
- react-router
- typscript

## Deployment
 
 -Vercel 

 ## Enhancements 
 - Use context to handle data instead of state
 - Use package to handle form as "react-hook-form"
 - Add tests