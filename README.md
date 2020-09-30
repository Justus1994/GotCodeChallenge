# GotCodeChallenge

This project is part of an application process.

The Repository is structed as follows:

  - [desgin](desgin) includes images of the mockup and color palette
  - [frontend](frontend) includes a Vue SPA


# Frontend
The Frontend uses the [Game of Thrones API](https://anapioficeandfire.com/).

Run the prod frontend with docker

  ```bash
  docker run -d -p 8080:80 justus1994/got-code-challenge && open http://localhost:8080
  ```

or clone and run in dev

  ```bash
  npm run serve
  ```
