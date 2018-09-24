// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: bus;
const libraryName = "TransportTiming";

const scriptableFilesPath = "/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/libs/";
const libraryPath = `${scriptableFilesPath}${libraryName}.js`;

let fmLocal = FileManager.local();

eval(fmLocal.readString(libraryPath));

metroTiming("902");