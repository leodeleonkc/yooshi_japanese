## How I worked on this project

My goal was to create a micro-ecommerce type web app.

- I designed this project in Figma: <a href="https://www.figma.com/file/K47EdzaSxOUfWjxO7fltOI/Yooshi-Japanese?node-id=0%3A1">Design File</a>
- I used GitHub desktop to for version control.

## How to navigate this project

 - useContext stateful logic: <a href="https://github.com/leodeleonkc/yooshi_japanese/blob/912c938d98a82876a1b1ca496d332ea4ee3b98d1/my-app/src/comps/context/Context.js">Sample Code</a>
 - Responsive CSS: <a href="https://github.com/leodeleonkc/yooshi_japanese/blob/912c938d98a82876a1b1ca496d332ea4ee3b98d1/my-app/src/css/hero.css">Sample Code</a>
 - The web app fetches data from a local JSON: Example of <a href="https://github.com/leodeleonkc/yooshi_japanese/blob/912c938d98a82876a1b1ca496d332ea4ee3b98d1/my-app/src/comps/Card.js">data transformation</a>.
 - The web app handles arrays in non-conventional ways, like when multiple sizes of one particular item are present <a href="https://github.com/leodeleonkc/yooshi_japanese/blob/912c938d98a82876a1b1ca496d332ea4ee3b98d1/my-app/src/comps/context/Context.js">sample code, line 30</a>.

 ## Why I built the project this way
 
 - I wanted to utilize my UX/UI skills to design something unique that I would love to see a real company use.
 - I wanted to demonstrate a case for the useContext hook in which data and useState capabilities are transfered between components. This was useful throughout the entire project, but I particularly enjoyed the funcionality in the cart items displayed in multiple places as the user adds or substracts items.
 - I wanted to experiment with in-line CSS in JSX.
 
 ## If I had more time I would change this
 
 - Add categories to the menu items, and create a separate instance of Router for a menu page.
 - Add more menu items and categories.
 - Add an about-us section to showcase the team behind the restaurant.
