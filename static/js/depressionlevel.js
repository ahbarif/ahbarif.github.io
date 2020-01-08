var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Academic/Career', 'Relationship', 'Family', 'Friends', 'Others'],
        datasets: [{
            label: '# of Votes',
            data: [50, 22, 28, 22, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'

            ],
            borderWidth: 4
        }]
    },
    options: {

        rresponsive: false,
        width: 100,
        height: 100,
        scaleShowGridLines: false,
        showScale: false,
        maintainAspectRatio: this.maintainAspectRatio,
        barShowStroke: false,

        title: {
            display: true,
            text: 'Reasons behind students depression'
        },
        legend: {
            position: "right",
            align: "left",
        }
    }
});
