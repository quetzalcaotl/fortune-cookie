## Fortune Cookies
### A repo dedicated to displaying a random fortune in a visually appealing manner.
---

### Getting Started

In order to sucessfully start up this repo perform the `npm install` command:

```sh
$ npm install
```

Once the modules have been installed, ensure the bundler runs for the most up-to-date version of this repo's front-end:
```sh
$ npm run build
```

Once the bundler has run, start the server using the following command:
```sh
$ npm start
```

---
### API Routes

This application will accept two different kinds of requests:
 - GET (For each new fortune to display)
 - POST (For submissions of new fortunes)

In order to succesfully request a new fortune from the database, the request must come in the below format.

*The below request is a sample jQuery AJAX GET Request*
```js
$.ajax({
  url: "http://localhost:3099/fortunes",
  method: "GET",
});
```

In order to sucessfully submit a new fortune, the request must come in the below format.

*The below request is a sample jQuery AJAX POST Request*
```js
$.ajax({
  url: "http://localhost:3099/fortunes",
  method: "POST",
  body: {
    author: "Reddy Cueless",
    quote: "Forever time is lost - to those who choose not to cherish it",
    luckyNumbers: [23, 45, 78, 129];
  },
});
```

Users should feel free to submit any content. There is no limitation on the types of information which can be submitted other than the types and structure provided above.

---
