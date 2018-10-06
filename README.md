# My Portfolio

This webpage is the personal developer portfolio of John Desrosiers. This site was built using the [Freelancer](https://startbootstrap.com/template-overviews/freelancer/) template from [Start Bootstrap](https://startbootstrap.com/).

## Deploying on Firebase

0. Ensure pre-requisites for deploying to Firebase are met.
1. Run `npm run build` to build the page if this hasn't already been done.
1. Run `firebase login`
1. From the root directory, run `firebase deploy`.

### Pre-requisites

- [Create a Firebase project](https://firebase.google.com/docs/web/setup).
- Firebase CLI must be installed on the machine. `npm i -g firebase-tools`.

## Usage/Editing Content

- Make edits to the page template in `/template/index.hbs`.
- Change the "Portfolio" section content by editing `/template/contactData.json`. Place project images in `/src/img/portfolio` and the html for the description should be placed in `template/partials/descriptions/` as a handlebars file. (hbs extension)
- Change the "Contact" section by editing the data `/template/contactData.json`.

After making changes, run `npm run build` to build the page.

`projects.json` entry format:

```json
{
  "title": "Project Title",
  "img": "project.jpg",
  "descriptionPartial": "triviaGame",
  "keyWords": ["JavaScript", "CSS", "Limit to 4 or 5 key words"],
  "demoUrl": "url for demo",
  "repoUrl": "url for GitHub repo",
  "date": "month year"
}
```

`contactData` entry format:

```json
{
  "href": "url",
  "fontAwesome": "font awesome class i.e. 'fa-twitter'"
}
```

## Manual Testing

`manual-testing-spec.md` is a bulleted work flow for manually testing the page after building it.

## Built With

- [Freelancer Template](https://startbootstrap.com/template-overviews/freelancer/) (MIT License)

## Author

John Desrosiers

## Copyright and License

Copyright 2017 John Desrosiers.
