import "./App.css";

// Import the pogodoc data from the config.ts file
import { pogodocData } from "./config";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>User Profile</h1>
        <p>
          <strong>Name:</strong> {pogodocData.name}
        </p>
        <p>
          <strong>Email:</strong> {pogodocData.email}
        </p>
        <p>
          <strong>Phone:</strong> {pogodocData.phone}
        </p>
        <p>
          <strong>City:</strong> {pogodocData.city}
        </p>
        <p>
          <strong>Address:</strong> {pogodocData.address}
        </p>
      </div>
    </div>
  );
}

export default App;
