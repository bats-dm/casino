# Slot Machine Game SPA

To start playing just:

- Run
```
docker compose up -d
```

- Open http://localhost:7777/ in a browser


### Technology stack:

- **Front-end:** React, Typescript, Redux, RTK Query, MUI
- **API:** Nest.js framework (node.js)


### Improvements

- Backend sessions was used just to speed up the process. In real applications it is not a good option and 
they can be replaced by JWT auth and database storage.
- The code design can be improved also, but it requires additional time.
- Also it would be great to cover at least back-end logic by tests, especially the calculations.
- UI can be improved also, it is just a basic functionality.