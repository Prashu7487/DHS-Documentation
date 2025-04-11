# DHS-Documentation

# useful commands

```
npx create-docusaurus@latest website classic
# choose javascript
```

```
npm run docusaurus docs:version 1.0
npm run start

```

<!-- Integrating tailwind -->

```
# npm install prism-react-renderer@1.3.5

# tailwind setup
rm -rf node_modules package-lock.json
npm cache clean --force

npm install -D tailwindcss@3.3.5 postcss autoprefixer
ls ./node_modules/.bin/tailwindcss  # this should list tailwindcss
npx tailwindcss init -p

<!-- tailwind.config.js -->
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ ONLY apply Tailwind to src/
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- src/css/custom.css -->

@tailwind base;
@tailwind components;
@tailwind utilities;

```

