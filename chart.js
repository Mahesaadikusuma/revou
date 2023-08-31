google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Account", "Amount"],
    ["Savings", 25000],
    ["Checking", 15000],
    ["Investments", 40000],
    ["Loans", 10000],
  ]);

  var options = {
    width: 500,
    height: 500,
  };
  var chart = new google.visualization.PieChart(document.getElementById("fundAllocationChart"));
  chart.draw(data, options);
}
