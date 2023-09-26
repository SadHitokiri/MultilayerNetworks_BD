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

const visDataDoughunt = {
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
        data: [3, 14595, 3, 0, 15, 40, 14657],
        backgroundColor: [
            'rgb(102, 36, 40)',
            'rgb(245, 202, 23)',
            'rgb(174, 30, 30)',
            'rgb(69, 91, 145)',
            'rgb(240, 81, 81)',
            'rgb(118, 50, 107)',
            'rgb(245, 121, 61)'

        ]
        ,
        hoverOffset: 10,

    },]
}

const totalData = {

    labels: ['Loading D3.js',
        'Loading Cytoscape.js',
        'Loading Vis.js',
        'Scripting D3.js',
        'Scripting Cytoscape.js',
        'Scripting Vis.js',
        'Rendering D3.js',
        'Rendering Cytoscape.js',
        'Rendering Vis.js',
        'Painting D3.js',
        'Painting Cytoscape.js',
        'Painting Vis.js',
        'System D3.js',
        'System Cytoscape.js',
        'System Vis.js',
        'Idle D3.js',
        'Idle Cytoscape.js',
        'Idle Vis.js',
        'Total D3.js',
        'Total Cytoscape.js',
        'Total Vis.js'],
    datasets: [{
        label: 'ms',
        data: [5, 4, 3, 3595, 1653, 14595, 1339, 6, 3, 248, 12, 0, 51, 42, 15, 21, 4740, 40, 5259, 6457, 14657],
        backgroundColor: [
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(256, 107, 3, 0.2)',
            'rgba(255, 255, 0, 0.2)',
            'rgba(0, 255, 255, 0.2)',
        ],
        borderColor: [
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
            'rgb(0, 0, 0)',
        ],
        borderWidth: 1
    }]
};

//CONFIG
const d3ConfigDoughunt = {
    type: 'doughnut',
    data: d3DataDoughunt,
    options: {
        maintainAspectRation: false,
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: 'Results'
            }
        }
    }
};

const cytoConfigDoughunt = {
    type: 'doughnut',
    data: cytoDataDoughunt,
    options: {
        maintainAspectRation: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Results'
            }
        }
    }
};

const visConfigDoughunt = {
    type: 'doughnut',
    data: visDataDoughunt,
    options: {
        maintainAspectRation: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Results'
            }
        }
    }
};

const totalConfig = {
    type: 'bar',
    data: totalData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Total Results'
            },
        }

    },
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

const visDouhunt = new Chart(
    document.getElementById('visChart_doughunt'),
    visConfigDoughunt

)

const totalBar = new Chart(
    document.getElementById('totalBar'),
    totalConfig
)

