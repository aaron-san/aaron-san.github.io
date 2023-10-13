See live site at https://aaron-san.github.io/.

## Deployment

Connected to GitHub pages

```shell
git add .
git commit -m ""
git push
npm run deploy
```

## Setup

**Starting in parent directory:**

```bash
npm install gh-pages --save-dev
npm i -D tailwindcss postcss autoprefixer
npm i react-router-dom react-icons
npm install react-icons --save
npm install --save chart.js react-chartjs-2
bash npx tailwindcss init -p
```

```shell
npm run build

git add .
git commit -m "first commit"
git push origin main
```

## Learn More

### Screen Size Breakpoints:

- Small: 640px

- Medium: 1007px

## Delete node_modules folder

```bash
rimraf --glob node_modules
```
