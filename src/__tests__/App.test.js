import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App/>)

  const nameInput = screen.getByLabelText(/enter your name/i)
  const emailInput = screen.getByLabelText(/enter your email address/i)

  expect (nameInput).toBeInTheDocument()
  expect (emailInput).toBeInTheDocument()

});``

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App/>)
const checkBoxOne = screen.getByRole("checkbox", {name: /one/i})
const checkBoxTwo = screen.getByRole("checkbox", {name: /two/i})
const checkBoxThree = screen.getByRole("checkbox", {name: /three/i})

expect(checkBoxOne).toBeInTheDocument();
expect(checkBoxTwo).toBeInTheDocument();
expect(checkBoxThree).toBeInTheDocument();


});

test("the checkboxes are initially unchecked", () => {
  // your test code here
render(<App/>)

const checkBoxOne = screen.getByRole("checkbox", {name: /one/i})
const checkBoxTwo = screen.getByRole("checkbox", {name: /two/i})
const checkBoxThree = screen.getByRole("checkbox", {name: /three/i})

expect(checkBoxOne).not.toBeChecked()
expect(checkBoxTwo).not.toBeChecked()
expect(checkBoxThree).not.toBeChecked()
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
 render(<App/>)

 const nameInput = screen.getByPlaceholderText(/name/i)
  const emailInput = screen.getByPlaceholderText(/email address/i)

  userEvent.type(nameInput, "Collins")
  userEvent.type(emailInput, "Collins")

  expect (nameInput).toHaveValue("Collins")
  expect (emailInput).toHaveValue("Collins")

});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
   render(<App/>)
const checkBoxOne = screen.getByRole("checkbox", {name: /one/i})
const checkBoxTwo = screen.getByRole("checkbox", {name: /two/i})
const checkBoxThree = screen.getByRole("checkbox", {name: /three/i})

userEvent.click(checkBoxOne)
expect(checkBoxOne).toBeChecked();

userEvent.click(checkBoxTwo)
expect(checkBoxTwo).toBeChecked();

userEvent.click(checkBoxThree)
expect(checkBoxThree).toBeChecked();



});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
render(<App/>)

const button = screen.getByRole('button', {name: /Submit this/i})

userEvent.click(button)

expect(screen.getByRole("heading", 
  {
    name: /this/i,
    level: 2

})).toBeInTheDocument();

});
