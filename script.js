var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#592795');
gradient.addColorStop(1, '#4D91A5');

var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, '#1970D6');
gradient2.addColorStop(1, '#364FB8');

var gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
gradient3.addColorStop(0, '#592795');
gradient3.addColorStop(1, '#4D91A5');
var chart = new Chart(ctx, {

  type: 'line',
  data: {
    labels: ['5nov', '6nov', '7nov', '8nov', '9nov', '10nov', '11nov', '12nov', '13nov', '14nov', '15nov'],
    datasets: [{
      label: '',
      data: [0, 600, 250, 450, 120, 400, 230, 400, 400, 600, 100],
      borderColor: '#592795',
      backgroundColor: '#4D91A5',
      borderColor: gradient,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 4,
      borderRadius:4,
      lineTension: 0.2,
        //   pointRadius: 10,
        //   pointBackgroundColor: 'rgba(255, 99, 132, 0.7)',

    },
    {
        label: '',
        data: [null, 240, 500, 600, 600, 300, 550, 400, 600, 650, 200],
        borderColor: '#592795',
        backgroundColor: '#4D91A5',
        borderColor: gradient2,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 4,
        borderRadius:4,
        lineTension: 0.2,
      },
      {
        label: '',
        data: [null, null, null, null, 500, 400, 600, 200, 450, 300, 500],
        borderColor: '#592795',
        backgroundColor: '#4D91A5',
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 4,
        borderRadius:4,
        lineTension: 0.2,
        display:false,
      }]
  },
  options: {
    responsive: true,
    display:false,
    plugins: {
        legend: {
            display:false
        }
    },
    scales: {
      y: {
        min: 100,
        max: 700,
        stepSize: 100
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        }
      }
    }
  }
});

