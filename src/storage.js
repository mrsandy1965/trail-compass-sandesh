import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const res = await AsyncStorage.getItem(KEY);
    console.log("loaded" , res)
    return res ? JSON.parse(res) : [] ;
  } catch {
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    console.log("saving", pins)
    const p = JSON.stringify(pins)
    await AsyncStorage.setItem(KEY,p);
    console.log("saved")
  } catch {}
}
