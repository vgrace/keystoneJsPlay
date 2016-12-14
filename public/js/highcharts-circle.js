$(function () {
    Highcharts.chart('highcharts-circle-chart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Devices',
            colorByPoint: true,
            data: [{
                name: 'Livingroom',
                y: 56.33
            }, {
                name: 'Kitchen',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Dishwasher',
                y: 10.38
            }, {
                name: 'Washing machine',
                y: 4.77
            }, {
                name: 'Entertainment system',
                y: 0.91
            }, {
                name: 'TV',
                y: 0.2
            }]
        }]
    });
});