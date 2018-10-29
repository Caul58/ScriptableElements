// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: bus-alt; share-sheet-inputs: plain-text;
var metroTiming = async function (station, presentUI, callback) {

  let req = new Request("https://serviciosapp.metromadrid.es/servicios/rest/teleindicadores/" + station + "?")
  req.headers = {"Accept": "application/json"}
  let json = await req.loadJSON()

  let array = json["Vtelindicadores"]
  let table = new UITable()
  let speaksText = ""

  for (item of array) {

    let row = new UITableRow()
    let title = item["nombreest"] + " sentido " + item["sentido"]
    speaksText = speaksText + "Tren desde " + item["nombreest"] + " sentido " + item["sentido"] + ". "
    let subtitle = ""
    if (item["proximo"]["@nil"] == "true") {
      subtitle = "1 -> " + item["siguiente"] + " minutos"
      speaksText = speaksText + "El primero pasará en " + item["siguiente"] + " minutos. "
    } else if (item["siguiente"]["@nil"] == "true") {
      subtitle = "1 -> " + item["proximo"] + " minutos"
      speaksText = speaksText + "El primero pasará en " + item["proximo"] + " minutos. "
    } else {
      subtitle = "1 -> " + item["proximo"] + " minutos, 2 -> " + item["siguiente"] + " minutos"
      speaksText = speaksText + "El primero pasará en " + item["proximo"] + " minutos y el segundo en " + item["siguiente"] + " minutos. "
    }

    let titleCell = row.addText(title, subtitle)
    titleCell.widthWeight = 80

    row.height = 60
    row.cellSpacing = 10
    table.addRow(row)

  }

  if (presentUI) {
    QuickLook.present(table)
  }

  callback(speaksText)

};