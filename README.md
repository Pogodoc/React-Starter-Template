# Pogodoc React Starter Template

This is a starter project for creating [Pogodoc](https://pogodoc.com) document templates using React, TypeScript, and Vite.

It provides a basic setup to get you started quickly with building dynamic and complex document templates.

## Getting Started

To get the development server running:

1.  Install the dependencies:

    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

## Project Structure

Here are the key files in this project:

- `src/App.tsx`: The main application component. This is a great place to start building your template's UI.
- `src/config.ts`: A helper file to access the data injected by Pogodoc in a type-safe manner.

## Accessing Template Data

When Pogodoc renders your template, it injects your JSON data into the `window` object under the `__POGODOC_DATA__` property.

This starter project includes a pre-configured helper file at `src/config.ts` to access this data easily:

```ts
declare global {
  interface Window {
    // eslint-disable-next-line
    __POGODOC_DATA__: any;
  }
}

export const pogodocData = window.__POGODOC_DATA__;
```

This code declares a global `__POGODOC_DATA__` property on the `window` object and exports the data for easy use throughout your application.

### Example Usage

You can import and use this data in any of your components. Here's an example from `src/App.tsx` that displays a `name` property from the injected data:

```tsx
import { pogodocData } from "./config";

function App() {
  return (
    <div>
      <h1>Hello, {pogodocData.name}!</h1>
      {/* Rest of your template */}
    </div>
  );
}

export default App;
```

When you run this template in Pogodoc with data like `{"name": "John Doe"}`, it will render "Hello, John Doe!".

## Building Your Template

After you have finished creating your template, you need to build it to generate the static HTML, CSS, and JavaScript files.

Run the build command:

```bash
npm run build
```

This will create a `dist` directory containing your bundled application. You can then zip the contents of the `dist` folder and upload it to Pogodoc as a new template.

> ⚠️ **Important:** Only the contents of the `dist` folder should be zipped, not the `dist` folder itself.
