# React <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" width="32" alt="React Icons">

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Luncheon App Structure

Header

- Logo
- Navigation Items

Body

- Search
- RestaurantContainer
  - RestaurantCard
    - Image
    - Name of Restaurant
    - Star Rating
    - Cuisine Type
    - Delivery Time

Footer

- Copyright
- Links
- Address
- Contact

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in React
- useEffect()

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# React LifeCycle Method

- ## Mounting
- Constructor (dummy)
- Render (dummy)
  <Html (dummy)>
- Component Did Mount
  API Call
  this.setState -> state variable is updated

- ## Updating
- Render (API data)
  <Html (API data)>
- Component Did Update

# Chunking also known as

- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On-demand Loading
- Dynamic Import

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector
