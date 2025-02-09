# **oakd React Component Library**

A scalable and efficient TypeScript React component library for modern applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Tests Passing](https://img.shields.io/badge/Tests-Passing-green.svg)
![Functional Coverage](https://img.shields.io/badge/Functional_Coverage-100%25-brightgreen.svg)
![Branch Coverage](https://img.shields.io/badge/Branch_Coverage-73%25-green.svg)
---

## 🚀 **Development**

### ✅ **Testing**
Run all tests using Jest:
```sh
npm run test
```

### 📦 **Building**
Compile the library for production:
```sh
npm run build
```

### 📖 **Storybook**
Start a live-reloading Storybook instance:
```sh
NODE_OPTIONS=--openssl-legacy-provider npm run storybook
```
Export Storybook as static files:
```sh
NODE_OPTIONS=--openssl-legacy-provider npm run storybook:export
```
Serve the generated `storybook-static/` folder.

---

## ✨ **Generating New Components**
Easily scaffold a new component using:
```sh
npm run generate YourComponentName
```
This generates:
```sh
/src/YourComponentName
  ├── YourComponentName.tsx
  ├── YourComponentName.stories.tsx
  ├── YourComponentName.test.tsx
  ├── YourComponentName.types.ts
  ├── YourComponentName.css
```
Modify templates under `util/templates` as needed.  
Don’t forget to export your new component in `index.ts`!

---

## 🔗 **Installing Locally**
To test `oakd` in another project (`test-app`) **without publishing**, run:
```sh
npm i --save ../oakd
```
This adds an entry in `package.json`:
```json
"dependencies": {
  "oakd": "file:../oakd"
}
```
### ⚠ **Common Issue: Invalid Hook Call**
If you see:
```sh
Invalid hook call. Hooks can only be called inside the body of a function component.
```
This likely means multiple versions of React are installed.  
Fix it by linking React from the consuming app:
```sh
npm link ../test-app/node_modules/react
```
Alternatively, configure Webpack as suggested [here](https://github.com/facebook/react/issues/13991#issuecomment-435587809).

---

## 📦 **Publishing**

### **📤 Publishing to NPM**
Ensure you're logged in:
```sh
npm login
```
Update `package.json` with your NPM package name, then publish:
```sh
npm publish
```
The `"prepublishOnly": "npm run build"` script ensures a fresh build before publishing.

### **🛠 Hosting via GitHub**
Alternatively, push the built package to GitHub and install it via:
```sh
npm i --save git+https://github.com/arkamedus/oakd.git#branch-name
```
or
```sh
npm i --save github:arkamedus/oakd#branch-name
```

---

## 🎨 **Styling**
### **Importing Styles**
Include the library’s styles in your project:
```tsx
import 'oakd/build/index.css';
```
### **Using CSS Variables**
Utilize predefined CSS variables from `variables.css`:
```css
.example-container {
    color: var(--col-white);
    background-color: var(--col-black);
}
```
More on [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

---

## 📌 **Usage Example**
After installation, use components like:
```tsx
import React from "react";
import { TestComponent } from "oakd";

const App = () => (
  <div className="app-container">
    <h1>Hello from oakd</h1>
    <TestComponent heading="Some heading" content={<div>Some content</div>} />
  </div>
);

export default App;
```

---

## 🛠 **Additional Features**

### **🌙 Dark Mode Support**
Automatically adapts to dark mode using:
```css
@media (prefers-color-scheme: dark) { ... }
```
Customization options are in [`src/index.css`](src/index.css).

### **📦 CSS Preprocessor Support**
Supports **Sass, Less, Stylus** via:
```sh
yarn add node-sass --dev  # Sass
yarn add stylus --dev      # Stylus
yarn add less --dev        # Less
```
For **CSS Modules**, update `rollup-config.js`:
```js
postcss({
  modules: true
})
```

### **💅 Styled Components**
See [this branch](https://github.com/HarveyD/react-component-library/tree/styled-components) for implementation.

### **📂 Code Splitting**
Load components on demand:
```tsx
import TestComponent from 'oakd/build/TestComponent';
```
For setup, refer to [this commit](https://github.com/HarveyD/react-component-library/commit/94631be5a871f3b39dbc3e9bd3e75a8ae5b3b759).

### **🖼 Supporting Image Imports**
Install the necessary Rollup plugin:
```sh
npm i -D @rollup/plugin-image
```
Then add it to `rollup-config.js`:
```js
plugins: [image(), ...]
```
Now, images can be imported:
```tsx
import logo from "./logo.png";
export const ImageComponent = () => <img src={logo} />;
```

### **📜 Supporting JSON Imports**
Install JSON plugin:
```sh
npm i -D @rollup/plugin-json
```
Add it to `rollup-config.js`:
```js
plugins: [json(), ...]
```
Now you can import JSON files:
```tsx
import data from "./some-data.json";
export const JsonDataComponent = () => <div>{data.description}</div>;
```

---

## 🔗 **Resources & Links**

- [📘 Storybook Docs](https://storybook.js.org/)
- [⚡ Rollup Plugins](https://github.com/rollup/plugins)
- [🎨 CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [💅 Styled Components](https://styled-components.com/)

---

## 🤝 **Contributing**
We welcome contributions! Open an issue or submit a PR to improve `oakd`.  
For detailed contribution guidelines, refer to our **[Contributing Guide](CONTRIBUTING.md)**.

---

### **📣 Join the Discussion**
Have questions or ideas? Feel free to reach out on GitHub Discussions or open an issue! 🚀