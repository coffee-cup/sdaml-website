Website for UVic SDAML
=======

This website is a small React app. Templates are in `jsx`, styles are in `scss`, and it is built with Webpack.

The directory structure is 

```
app/
    assets/
    components/
    images/
    scss/
    index.jsx
public/
build/
```


- New `jsx` components go in **components**. The React router is setup in `index.jsx`
- Styles in **scss**. The `scss` is entered through `scss/styles.scss`
- Logos and icons go in **assets**
- Images in **images**

## Development 🚀

1. Clone repo
2. `npm install` to install all dependencies
3. `npm run start` to watch for changes and start a dev server on [localhost:8080](http://localhost:8080)
4. `npm run build` to minify/uglify for production

_Commits are better with emojis 🍒_
