$(function () {
    Highcharts.chart('highcharts-stacked-bar-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Livingroom'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Energy Consumption (kWh)'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'TV',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Sound System',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Blueray',
            data: [3, 4, 4, 2, 5]
        }, {
            name: 'XBox',
            data: [2, 1, 1, 2, 2]
        }, {
            name: 'Lamps',
            data: [3, 2, 2, 2, 3]
        }]
    });
});