# Cinematic-o

## Overview

The _cinematic-o_ app is a simple app that allows a user to browse and search for movies from the [OMDb API](http://www.omdbapi.com/).
The features are basic and are mostly there to be part of larger discussion points, please be advised when dwelving into the code!

### Features

- Searching & Filtering
- Basic routing

## Tech

Besides what was part of the foundaton I've decided to add the following tooling and packages to help me develop _cinematic-o_

- [react-router](https://reactrouter.com/home)
- [react-query](https://tanstack.com/query/latest)
- [axios](https://axios-http.com/)

## Assumptions

- That it's not going to be production ready
- That there are no CI/CD or deployment pipelines needed.
- Code quality tooling like sonarqube and test % gates are not needed
- Basically anything that has to do with the overall architecture of the app that would otherwise be needed when going into a production environment.

- I also won't be focusing on keeping any deprecated tooling up to date (i.e eslint for this project is currently deprecated)

## Further development

One of the reasonings I have for this projects is to allow for a further development, which I think is paramount to think about in the start of a project.
Tackle complexity by laying a strong foundation is a good moto!

Therefore I've decided to move towards a feature-driven design, inspired by "Screaming Architecture" by Uncle Bob.

## Take aways

Todo: I will fill in after I'm done to reflect on any possible adjustments that could have been made along the way.
