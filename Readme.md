### Description

We need to determine if the area returned by the FAA is in a safe flying zone or not.

At first this means loading in a hardcoded no fly zone to sketch over (DTW). We would like this data to be restful in the future.

### Initial Approach

1. Create Trello board to manage work and understand problem
2. Start app and play with functionality
3. Open up devtools and inspect
   - No local storage
   - No local session
   - arcGIS.com Cookie
   - Lighthouse profile
   - Performance is real bad yikes!
4. Component Profiler Inspection
   - A root component with two children, Info and Map
5. Code Config Impressions
   - eslintrc.js & .eslintignore
   - prettier.config.js
   - gitignore
   - Babelconfig
   - Jestconfig
   - Tsconfig
   - Webpack.config.js
   - Added .nvmrc
6. Begin setup and coding

### Setup

Look through existing code and comment on what is familiar and what is not. I also made the decision to update the packages in the `package.json` -- this should provide some performance gains and bring up the code to spec with the associated docs. Next is identify libraries involved and reading through hints and documentation in order to get a better picture of what the problem is and how to solve it.

### Base Requirements Approach

In order to satisfy the base requirements we need to be able to display to the user if a sketch they just added to the map intersects with the no fly zone provided to us by the FAA. If there is an intersection we also want to display the area of that intersection in meters squared. The user is able to see the flight information in an information panel that is displayed over top the map and sketch tools.

1. Displaying observable data to user

   - intersectingAreas: Array to keep track of which intersecting areas to display to user
   - sketchState: String to sync the library Sketch state with the mobx sketchState
   - determining whether or not the flight is valid is based on whether or not the intersectingAreas array is empty or not

2. Displaying intersecting graphic on map
   - Compare input graphic passed to sketchCreate with the noFlyLayer graphic
     - Extract the intersection check into its own function for testing and readability
     - Calculate intersection geometry with small testable function
     - Calculate intersection area with small testable function

### Learnings/Notes

I hit a snag when attempting to make the `intersectingAreas` area observable. The code was still functional but mob x was emitting warnings that I was accessing a observable value in a non-reactive context whenever I would try to read from the array.

The solution was to make sure that when accessing the observable array, we use a computed value that returns a slice of the observable array instead of the proxy itself!

### UI Design

I used the [ant](https://ant.design/components/overview/) library that was already provided. I chose to use the Alert component to tell the user when their flights are valid or have intersecting paths in the no fly zone. I also made sure that the user cannot interact with the map unless the no fly zone succesfully loads. This is okay for now because the API call is mocked behind a 3 second timer and always suceeds. Error handling to come!

### Future Implementation Ideas
1. Deleting a sketch does not currently delete its underlying intersection polygon
2. Review and improve webpack configuration
3. Handle 1...n no fly zone geometries
4. Enable view layer toggling for the sketch layer and the no fly layer
7. Persist sketches in localStorage or some other data persistence solution so they survive page reloads
8. Create ability to save flight sketches
8. Create settings page to toggle different map options and sketch options etc.
9. Format the intersecting area
10. Complete Delete functionality from the sketch event
11. Complete Delete functionality from the Alert element
12. Have sketches that already exist update appropriately to changes in the NO FLY ZONE
13. Error handling for failed api calls