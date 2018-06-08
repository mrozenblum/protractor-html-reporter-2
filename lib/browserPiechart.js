function drawBrowserChart(chartData) {
  var data = google.visualization.arrayToDataTable([
      ['Task', 'Browser Historic Results'],
      ['Passed', chartData.passed],
      ['Chrome', chartData.chrome],
      ['Firefox', chartData.firefox],
    ]);

  var options = {
    width: '100%',
    height: 270,
    title: chartData.title,
    is3D: true,
    fontSize: '12',
    colors: ['#5cb85c', '#f0ad4e', '#5bc0de', '#d9534f'],
    pieStartAngle: 100,
    backgroundColor: 'white',
    titleTextStyle: {
      fontSize: '13',
      color: '#5e5e5e'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_' + chartData.title.toLowerCase()));
  chart.draw(data, options);
}