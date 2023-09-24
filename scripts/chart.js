//DATA
const d3DataDoughunt = {
    labels: [
        'Loading',
        'Scripting',
        'Rendering',
        'Painting',
        'System',
        'Idle',
        'Total'
    ],
    datasets: [{
        label: 'ms',
        data: [5, 3595, 1339, 248, 51, 21, 5259],
        backgroundColor: [
            'rgb(102, 36, 40)',
            'rgb(245, 202, 23)',
            'rgb(174, 30, 30)',
            'rgb(69, 91, 145)',
            'rgb(240, 81, 81)',
            'rgb(118, 50, 107)',
            'rgb(245, 121, 61)'

        ],
        hoverOffset: 10
    },]
};

const cytoDataDoughunt = {
    labels: [
        'Loading',
        'Scripting',
        'Rendering',
        'Painting',
        'System',
        'Idle',
        'Total'
    ],
    datasets: [{
        label: 'ms',
        data: [4, 1653, 6, 12, 42, 4740, 6457],
        backgroundColor: [
            'rgb(102, 36, 40)',
            'rgb(245, 202, 23)',
            'rgb(174, 30, 30)',
            'rgb(69, 91, 145)',
            'rgb(240, 81, 81)',
            'rgb(118, 50, 107)',
            'rgb(245, 121, 61)'

        ],
        hoverOffset: 10
    },]
}

//CONFIG
const d3ConfigDoughunt = {
    type: 'doughnut',
    data: d3DataDoughunt,
    options: {
        maintainAspectRation: false,
        responsive: true,
    }
};

const cytoConfigDoughunt = {
    type: 'doughnut',
    data: cytoDataDoughunt,
    options: {
        maintainAspectRation: false,
        responsive: true,
    }
};


//RENDER
const d3Doughunt = new Chart(
    document.getElementById('d3Chart_doughunt'),
    d3ConfigDoughunt
);

const cytoDouhunt = new Chart(
    document.getElementById('cytoChart_doughunt'),
    cytoConfigDoughunt

)
