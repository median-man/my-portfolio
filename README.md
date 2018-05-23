# My Portfolio
This webpage is the personal developer portfolio of John Desrosiers. This site was built using the [Freelancer](https://startbootstrap.com/template-overviews/freelancer/) template from [Start Bootstrap](https://startbootstrap.com/).

## Usage
* Make edits to the page template in `/template/index.hbs`.
* Change the "Portfolio" section contenty by editing `/template/contactData.json`. Place project images in `/src/img/portfolio` and the html for the description should be placed in `template/partials/descriptions/` as a handlebars file. (hbs extension)
* Change the "Contact" section by editing the data `/template/contactData.json`.

After making changes, run `npm run-script build` to build the page.

`projects.json` entry format:
```json
{
  "title": "Project Title",
  "img": "project.jpg",
  "descriptionPartial": "triviaGame",
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

## Built With
* [Freelancer Template](https://startbootstrap.com/template-overviews/freelancer/) (MIT License)

## To Do
* Replace profile image with my headshot.
* Add alt attr to portfolio images (including modals)
* Find or create favicon
* Customzie colors and styling
* Create node contact form and server and deploy

## Author
John Desrosiers

## Copyright and License
Copyright 2017 John Desrosiers.
