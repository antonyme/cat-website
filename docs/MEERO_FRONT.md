# Objectif (FR)

- L'objectif du test est de créer une SPA (Single Page Application) en utilisant une API.
Il est recommandé d'utiliser un système de routing et une gestion des données via un store.

- Vous pouvez utiliser le framework javascript et UI de votre choix : 
    - Vue.js / React.js / Angular
    - Vuetify / Elements UI / Bootstrap...

- Il vous faudra respecter les standards ES6

- L'utilisation de Git et des commits est recommandée.

## Consignes

- API à utiliser : https://thecatapi.com/
L'API est gratuite et bien documentée. Il vous suffira de cliquer sur "SIGNUP FOR FREE" et de renseigner un email pour recevoir la clé API à utiliser.

https://en.wikipedia.org/api/rest_v1/
L'API Wikipedia sera utilisée pour récupérer des informations supplémentaires concernant la race de chat.


- Récupérer et afficher sous forme de cards la liste des races de chat : https://docs.thecatapi.com/api-reference/breeds/breeds-list
L'API vous rendra un objet contenant différentes informations concernant les races de chats.
La card devra contenir le nom de la race (name), l'origine (origin), et une image.

- Pour l'image, l'objet rendu par l'API contient la clé wikipedia_url. Elle vous permettra de récupérer une image et une courte description :
    - image : https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_media_title_revision
    - Description : https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_summary_title

- Ajouter un filtre en fonction de l'origine des chats. Exemple: en sélectionnant United States l'on ne devrait voir que les chats dont l'origine est United States.

- En cliquant sur la Card, afficher une modale ayant sa propre route contenant le nom de la race de chat, l'image, et la description. 

## Rendu

Le rendu se fera sous forme d'une archive (zip) ou sur un repository github publique contenant toutes les sources nécessaires au fonctionnement de la page.

---

# Goal (EN)

- The goal of this test is to create a SPA (Single Page Application) using an API.
It is recommmanded to use a routing system and to manage the data flow via a store.

- You can use the javascript and UI framework that you're the most comfortable with: 
    - Vue.js / React.js / Angular
    - Vuetify / Elements UI / Bootstrap...

- It is recommanded to use Git and commits to keep track of the project's changes

## Requirements

- API to use : https://thecatapi.com/
This API is free and well documented. You'll only need to click on the "SIGNUP FOR FREE" button. You'll be prompted to give your email in orderto get the API key to use. 

https://en.wikipedia.org/api/rest_v1/
The Wikipedia API will be used to gather additional information about the cat's breed.

- Fetch and display a list of cards containing information of the breeds from : 
https://docs.thecatapi.com/api-reference/breeds/breeds-list
The API will give you an object as a response. This object will contain information about cat breeds.
The information to display in the card are the name, the origin and an image.

- For the image, the breeds object contains a key called "wikipedia_url". It will allow to get an image and a summary from the Wikipedia API :
    - image : https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_media_title_revision
    - Summary : https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_summary_title
    
- Add a filter according to the breed's origin. Example : If the user selects United States from the filters, we should be able to see only the breeds that have United States as origin

- When clicking on the card, display in a modal that has its own route : 
    - The breed name
    - The image
    - The summary

## Result

A Zip archive or a link to a Github repository containing the project source files.