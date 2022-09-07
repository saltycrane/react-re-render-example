# react-re-render-example

## Usage

- Install project dependencies and run the dev server

    ```
    $ npm install
    $ npm run dev
    ```

- Install [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

- Open the browser Dev Tools

- Go to the React Dev Tools "Profiler" tab

- Click the gear icon to open the React Dev Tools settings

- Ensure "Highlight updates when components render" is checked

- Go to http://localhost:3000/non-optimized-grid and see that all the cells render whenever one of the "Increment" buttons are clicked

- Go to http://localhost:3000/optimized-grid and see that only one cell renders when its "Increment" button is clicked

- Go to http://localhost:3000/broken-memo-grid and see that it behaves the same as http://localhost:3000/non-optimized-grid
