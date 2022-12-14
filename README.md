# react-re-render-example

Three example pages with a grid of 100 cells to demonstrate re-rendering behavior when using React:

- [Non-optimized example](http://localhost:3000/non-optimized-grid) - shows updating a cell causes all other cells to re-render
- [Optimized example](http://localhost:3000/optimized-grid) - uses React's [`memo`](https://reactjs.org/docs/react-api.html#reactmemo) and [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) so that only one cell is re-rendered on update
- [Broken memo example](http://localhost:3000/broken-memo-grid) - shows how adding a prop can break memoization

## Usage

- Install project dependencies and run the dev server

    ```
    $ npm install
    $ npm run dev
    ```
    
#### Use React Dev Tools to highlight updates when components render

- Install [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

- Open the browser Dev Tools

- Go to the React Dev Tools "Profiler" tab

- Click the gear icon to open the React Dev Tools settings

- Ensure "Highlight updates when components render" is checked

- Go to http://localhost:3000/non-optimized-grid and see that all the cells render whenever one of the "Increment" buttons are clicked

- Go to http://localhost:3000/optimized-grid and see that only one cell renders when its "Increment" button is clicked

- Go to http://localhost:3000/broken-memo-grid and see that it behaves the same as http://localhost:3000/non-optimized-grid

#### Alternatively, look in the "Console" for render counts

- Open the browser Dev Tools

- Go to the "Console" tab

- Go to http://localhost:3000/non-optimized-grid and see that "render" is logged 100 times whenever one of the "Increment" buttons are clicked

- Go to http://localhost:3000/optimized-grid and see that "render" is logged only 1 time when a cell's "Increment" button is clicked

- Go to http://localhost:3000/broken-memo-grid and see that it behaves the same as http://localhost:3000/non-optimized-grid

#### `useWhyDidYouUpdate` to show that `potentiallyMemoBreakingProp` is not equal

- Open the browser Dev Tools

- Go to the "Console" tab

- Go to http://localhost:3000/broken-memo-grid?wdyu=1 and see that [`useWhyDidYouUpdate`](https://twitter.com/brunolemos/status/1090377532845801473) shows that the `potentiallyMemoBreakingProp` prop passed to `MemoizedCell` is not equal whenever one of the "Increment" buttons are clicked
