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
