# Trail Compass

A tiny React Native app that visualizes your **device heading** with a **gradient box** and lets you **save / view / share** simple location pins. Built to practice **useState/useEffect**, **permissions**, **basic trig**, **AsyncStorage**, and **clean UI** with React Native Paper.

> You will complete small, numbered TODOs directly in the code. This guide explains the goals and formulas — not the answers. Finish inside class; polish after.

---

## Run locally

```js
npm install
```
```js
npm start
```
> Use a **physical device**.

---

## Project structure
```
App.js
/src/navigation/RootNavigator.js
/src/screens/CompassScreen.js   # main exercise (TODOs)
/src/screens/PinsScreen.js      # list + share + delete (TODOs)
/src/storage.js                 # AsyncStorage helpers (given)
/src/utils/geo.js               # tiny helpers (given)
```
Do not rename files. Work inside the TODOs.

---

## The TODOs (what to implement)

### TODO (1) — Permission + initial position + heading watcher
In `CompassScreen.js`:
- Ask for foreground **Location** permission.
- Read one-time position and store `{ latitude, longitude }` in state.
- Load saved pins using the provided storage helper.

**APIs to use** (search docs if needed):  
`Location.requestForegroundPermissionsAsync()`  
`Location.getCurrentPositionAsync()`  
`Location.watchHeadingAsync((e) => e.trueHeading)`

---

### TODO (2) — Drop & save a pin
When **Drop Pin** is pressed:
- Create a pin object `{ id, lat, lon, heading, ts }` (use the helper `nowISO()` for `ts`).
- Prepend it to the existing list in state.
- Persist with `savePins(next)`.
- Show a short Snackbar message.

---

### TODO (3) — Copy current coordinates
- Copy a string like `"12.971600, 77.594600"` to the clipboard.
- Confirm with a Snackbar.

**API**: `Clipboard.setStringAsync(text)`

---

### TODO (4) — Share current location
- Share a message that includes latitude, longitude, and heading.  
  Example format (free to tweak):  
  `I am here: <lat>, <lon> (<CARDINAL> <DEGREES>°)`

**APIs**: `Share.share({ message })`, and the helper `toCardinal(deg)`.

---

### TODO (5) — Load pins on Pins screen
In `PinsScreen.js`:
- On mount, load the saved pins into state using `loadPins()`.

### TODO (6) — Delete a pin
- Remove by `id` from state and storage, then show a Snackbar.

### TODO (7) — Share a pin
- Share an individual pin with a friendly message and timestamp.

---

## Tips & constraints
- Keep the gradient in the provided card; don’t rebuild layouts.
- Use the provided helpers from `/src/storage.js` and `/src/utils/geo.js`.
- Short, readable code > clever code.

---

## Troubleshooting
- **Heading is null or frozen** → Use a physical device, grant permission, step away from metal desks/elevators; rotate slowly.
- **Gradient doesn’t rotate** → Log the heading value; ensure you call `pointsForHeading(((heading ?? 0) + 180) % 360)`.
- **Pins don’t persist** → Confirm `await savePins(next)` and that you call `loadPins()` on mount.

---
