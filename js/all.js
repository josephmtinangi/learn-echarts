var lineChart = echarts.init(document.getElementById('line'));
var barChart = echarts.init(document.getElementById('bar'));

var xAxis = ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"];
var data = [5, 20, 36, 10, 10, 20];

var lineChartOption = {
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
        data: ['Sales']
    },
    xAxis: {
        data: xAxis
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'line',
        data: data
    }]
};

var barChartOption = {
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
        data: ['Sales']
    },
    xAxis: {
        data: xAxis
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: data
    }]
};

lineChart.setOption(lineChartOption);
barChart.setOption(barChartOption);

