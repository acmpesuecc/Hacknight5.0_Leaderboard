## Developing

1. Fork this repo and clone it to your local system
2. Run `npm install` to install all the dependencies
3. Start a development server on your local system with

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

```bash
npm run build
```

## File Structure

```src
├── app.css
├── app.html
├── lib
│   └── index.js
└── routes
    ├── Background.svelte
    ├── +layout.svelte
    ├── leaderboard
    │   ├── CardRow.svelte
    │   ├── Card.svelte
    │   └── +page.svelte
    ├── +page.svelte
    ├── repos
    │   └── +page.svelte
    └── [slug]
        ├── +page.js
        └── +page.svelte

6 directories, 12 files
```

Every folder inside the `routes/` folder is a route. Every folder I mentioned, has a `+page.svelte` inside it. This defines the contents of that particular page. The `+page.svelte` inside the routes folder and outside any other folder inside the `routes/` directory defines what's there in the root route. Refer the Svelte Documentation for more information. Feel free to approach the maintainer too. 

## Issues

- We made this website and we think it's perfect, hence, the lack of issues
- We expect the contributors to make issues and they will be awarded extra for the same
- So go give our site some criticism and solve them!

## Maintainer

Anurag Rao [@anuragrao04](https://github.com/anuragrao04)

email: [raoanu2004@gmail.com](mailto:raoanu2004@gmail.com)

phone: 9663006833
