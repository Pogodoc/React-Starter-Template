// Extend the window object to include the pogodoc data
declare global {
  interface Window {
    // eslint-disable-next-line
    __POGODOC_DATA__: any;
  }
}

// Fallback data to preview the template while developing locally
let pogodocData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  city: "Anytown",
  address: "123 Main St, Anytown, USA",
};

// When pogodoc is generating a document the data will be here
if (window.__POGODOC_DATA__) {
  pogodocData = window.__POGODOC_DATA__;
}

export { pogodocData };
