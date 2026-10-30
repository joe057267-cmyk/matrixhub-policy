(function () {
  var tables = document.querySelectorAll('table');
  for (var t = 0; t < tables.length; t++) {
    var heads = [];
    var ths = tables[t].querySelectorAll('thead th');
    for (var h = 0; h < ths.length; h++) heads.push(ths[h].textContent.trim());
    if (!heads.length) continue;
    var rows = tables[t].querySelectorAll('tbody tr');
    for (var r = 0; r < rows.length; r++) {
      var cells = rows[r].children;
      for (var c = 0; c < cells.length; c++) {
        if (heads[c]) cells[c].setAttribute('data-label', heads[c]);
      }
    }
  }
})();
