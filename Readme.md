### Description

You can find the [site hosted here!](https://hyjeko.github.io/build/)

This site lets you draw sketches over no fly areas to determine if your flight path is valid or not.

As long as the alert in the top remains green and says "Flight Path Valid!"

We answer this question by intersecting the sketch geometries with the no fly areas.

If you create a sketch that overlaps with a no fly zone, then you will be shown an alert indicating the intersecting area in square miles.

Delete will remove the polygon selected and its associated intersecting area if any exist.

Deleting is accomplished by looping through the existing sketches to find the matching `intersectingArea` for the sketch being deleted. This is accomplished with the `attributes` property on the intersecting sketch `Graphic`. When a new intersecting area is added we are sure to include
```js
{
   isInterSectingGraphic: true,
   intersectingArea: intersectionArea,
}
```
so that we can then match the `intersectingArea` from the `Graphic` `attributes` to the delete sketch `Graphi` area

### Initial Approach

1. Create [Trello board](https://trello.com/b/xif1cI8h/airspace-link-coding-challenge) to manage work and understand problem
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

I used the [ant](https://ant.design/components/overview/) library that was already provided. I chose to use the Alert component to tell the user when their flights are valid or have intersecting paths in the no fly zone. I also made sure that the user cannot interact with the map unless the no fly zone succesfully loads. ~~This is okay for now because the API call is mocked behind a 3 second timer and always suceeds.~~ Error handling to come!

The responsive solution is to use a 3 column grid layout, where columns 0 and 2 represent horizontal space reserved for the sketch and map controls. Column 1 will hold the alert content the user is interested in to determine if their flight is valid.

### Future Implementation Ideas

1. Review and improve webpack configuration
2. Handle 1...n no fly zone geometries
3. Enable view layer toggling for the sketch layer and the no fly layer
4. Persist sketches in localStorage or some other data persistence solution so they survive page reloads
5. Create ability to save flight sketches
6. Create settings page to toggle different map options and sketch options etc.
7. Format the intersecting area
8. Have sketches that already exist update appropriately to changes in the NO FLY ZONE
9. Error handling for failed api calls
10. Implement drag and update functionality for sketches and their associated intersections

#Screenshots

![image](https://user-images.githubusercontent.com/6778101/178548542-dee881df-b043-40f0-ac86-720f37e0edeb.png)
