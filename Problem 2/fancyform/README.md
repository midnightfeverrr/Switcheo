
# Fancy Form

This is a React project that creates a fancy form for converting between different cryptocurrencies. 
https://switcheo-tosc.vercel.app/

## Step 1: Install dependencies

```sh
npm install
```

## Step 2: Run the development server

```sh
npm start
```

## Step 3: Open http://localhost:3000 in your browser

You should see a form that allows you to convert between different cryptocurrencies.

## Code Explanation

The code for this project is located in the `src` directory. The main component is the `App` component, which is located in the `App.tsx` file. The `App` component is responsible for rendering the form and handling the user input.

The `App` component consists of a few components. The components of the application includes the following:

* `Particles`: The Particles component is a React-based integration of the lightweight particle animation library using the "react-tsparticles" package. It allows you to easily add interactive and visually appealing particle animations to your web applications. With customizable options for particle appearance, movement, and interactivity, you can create dynamic backgrounds, animations, or special effects to enhance the user experience of your website or application. 
* `Header`: The Header component is a basic React component designed to render a header with the title "Fancy Form".
* `InputForm`: This component is the main form component and logic. The InputForm contains a few handle functions and is where the center box rendered. It consists of a few more components, such as Modal, Popup, and Loading.
* `Modal`: The Modal component is a versatile React component designed for creating customizable modal dialogs in your web applications. It allows to display the popup content in a modal overlay, enhancing the user experience. The component offers the following features:
  * Customizable Size: You can specify the size of the modal as "small," "medium," or "large" based on your content's requirements.
  * Keyboard Interaction: The modal automatically listens for the "Escape" key press and closes the modal when pressed.
  * Backdrop: A backdrop overlay is displayed behind the modal, which provides a visual indication of the modal's focus and can be clicked to close the modal.
  * Custom Styling: You can customize the modal's appearance and behavior through various props, including customizing the background color and shadow.
* `Popup`: The Popup component is a versatile React-based modal that facilitates token selection within your web application. It offers the following features:
  * Token Selection: Users can choose from a list of available tokens.
  * Search Functionality: The component provides a search bar that allows users to filter tokens based on their names.
  * Customizable Styling: You can customize the appearance of the modal, including the search bar and token buttons, to match your application's design.
  * Integration of Token Icons: It integrates token icons (SVGs) alongside token names for a visually appealing and user-friendly experience.
  * Close Button: The modal includes a close button to dismiss the modal when needed.
* `Loading`: The Loading component is a React-based component designed to display a visually appealing loading animation in your web application, implemented to mimick the behavior of fetching the currency from an external API. Key features of this component include:
  * Customizable Animation: The component allows you to specify the type of loading animation to be displayed by passing the type prop. Different types can be used to match the visual style of your application.
  * Sleek Design: The loading animation is designed with a smooth, wave-like motion and a gradient background, creating an engaging and user-friendly loading experience.
 
## Screenshots
![movingParticle](https://github.com/midnightfeverrr/Switcheo/blob/main/Problem%202/fancyform/screenshots/Screenshot-1.gif)
![input](https://github.com/midnightfeverrr/Switcheo/blob/main/Problem%202/fancyform/screenshots/Screenshot-2.gif)
