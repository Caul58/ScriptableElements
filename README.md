# Scriptable Elements

Metro Madrid has launched a feature to know how long does the next metro train will takes to get to a station. With this scripts it's possible to integrate this functionality with Siri, asking for the waiting times.

To implement this for a concrete station, it's needed to implement a new script where indicates the number of the station, if Siri have to present UI with the information as a Table and a callback function where the complete information is passed as String.

```javascript
    metroTiming(<Metro Station Number as String>, <Siri will present UI or not as bool>, <callback function>)
```

For example:

This script is used to Barrio del Pilar Station and Siri will speaks all the information returned by the request.

```javascript
    let completionCallback = function(text){
        Speech.speak(text)
    }

    metroTiming("902", false, completionCallback);
```