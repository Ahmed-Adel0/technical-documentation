# technical-documentation

The task is to add an icon on each code sample, so user can copy the code to clipboard by clicking on this icon.
Added an icon on each code sample, so user can copy the code to clipboard by clicking on this icon

# Additions

In this version of the documentation, a new feature has been added to allow users to copy code samples to their clipboard by clicking on an icon next to each code snippet.
This feature enhances the usability of the documentation, making it easier for users to utilize the code examples in their own projects.

# Changes

To implement the copy-to-clipboard functionality, the following changes have been made to the HTML and JavaScript files:

- HTML Changes:
  1- Added a new button element with the class "copy-icon" next to each code snippet.
  2- Added the Material Symbols Outlined icon font library to display the copy icon.
- JavaScript Changes (script.js):
  1- Added an event listener to each copy icon button.
  2- Defined a new function named "copyToClipboard" to handle the copy functionality.
  When a copy icon button is clicked, the function retrieves the corresponding code snippet and copies it to the clipboard using the navigator.clipboard.writeText() method.
  If the copying is successful, the button text is temporarily changed to "Copied!" and then reverted back to the default icon after a brief delay.
  If an error occurs while copying, an error message is logged to the console.

  # Functionalities

  The copy-to-clipboard functionality provides the following benefits to users:

- Easy Code Copying: Users can click on the copy icon next to any code snippet to quickly copy the code to their clipboard.
- Efficient Code Reuse: Copied code can be easily pasted into the user's own projects or code editors, saving time and effort.
- Visual Feedback: The copy icon changes temporarily to indicate that the code has been successfully copied, providing a visual confirmation to the user.

# How it Works

When the page loads, the JavaScript code selects all elements with the class "copy-icon" using querySelectorAll().
For each copy icon button, an event listener is added to listen for the click event.
When a copy icon button is clicked, the event triggers the copyToClipboard function.
The function locates the parent section of the clicked button using closest(), then finds the code snippet within that section using querySelector("code").
The code content is extracted using the textContent property.
The code is then copied to the clipboard using the navigator.clipboard.writeText() method.
If the copying is successful, the button text is temporarily changed to "Copied!" and then reverted back to the default icon after a brief delay.
If an error occurs during copying, an error message is logged to the console.
By following these steps, users can easily copy code snippets from the documentation and utilize them in their own projects.

That's it!
