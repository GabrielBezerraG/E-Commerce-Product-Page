# E-Commerce-Product-Page
This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## My Process
This time I decided to build the page using Next.Js along with styled-components that I both recently learned. It was a bit difficult at first coming from Create React App but I was able to make it work. Some things that I did differently than the previous challenges:
- Use only functional components and useState instead of a main class component with setState
- Use styled-components for each component and for global styles but only one CSS file for resetting predefined browser styles
- Since there was a lot of prop drilling, I decided to create an object in the main component with all properties and pass it down to all the children. I don't know if it's the best approach but it definitely worked and made my code much more organized. I even used destructuring assignment to pass the object directly to every component
- I deployed the app to Vercel instead of GitHub pages

## 🔧 Built With
- Next.Js
- Styled-components
- React
- Git
- Css Grid
- Flexbox
- Media Queries
