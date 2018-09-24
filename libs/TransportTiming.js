// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: bus-alt; share-sheet-inputs: plain-text;
var metroTiming = function (station) {
  let req = new Request("https://serviciosapp.metromadrid.es/servicios/rest/teleindicadores/" + station + "?")
  let promiseResponse = req.loadJSON()
  promiseResponse.then(json => {

    let array = json["Vtelindicadores"]
    let table = new UITable()

    for (item of array) {

      let row = new UITableRow()
      let title = item["nombreest"] + " sentido " + item["sentido"]
      let subtitle = ""
      if (item["proximo"]["@nil"] == "true") {
        subtitle = "1 -> " + item["siguiente"] + " minutos"
      } else if (item["siguiente"]["@nil"] == "true") {
        subtitle = "1 -> " + item["proximo"] + " minutos"
      } else {
        subtitle = "1 -> " + item["proximo"] + " minutos, 2 -> " + item["siguiente"] + " minutos"
      }

      let titleCell = row.addText(title, subtitle)
      titleCell.widthWeight = 80

      row.height = 60
      row.cellSpacing = 10
      table.addRow(row)
    }
    QuickLook.present(table)
  })
};

