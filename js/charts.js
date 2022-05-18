function displayNFTRepartitionByQWTPrice() {

    const ctxQWT = document.getElementById('nftRepartitionQWT').getContext('2d');

    const dataQWT = {
        labels: [conf['gen0'][0].name, conf['gen0'][1].name, conf['gen0'][2].name,conf['gen0'][3].name, conf['gen0'][4].name],
        datasets: [{
            label: 'Nb NFT',
            data: [conf['gen0'][0].count * conf['gen0'][0].price, conf['gen0'][1].count * conf['gen0'][1].price, conf['gen0'][2].count * conf['gen0'][2].price,conf['gen0'][3].count * conf['gen0'][3].price, conf['gen0'][4].count * conf['gen0'][4].price],
            backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                    
            ],
            hoverOffset: 4
        }]
        };

    const myChartQWT = new Chart(ctxQWT, {
        type: 'doughnut',
        data: dataQWT,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'NFT Gen 0 Distribution ($QWT)'
                }
            }
        }
    });
}

function displayNFTRepartition() {
    const ctx = document.getElementById('nftRepartition').getContext('2d');

    const data = {
        labels: [conf['gen0'][0].name, conf['gen0'][1].name, conf['gen0'][2].name,conf['gen0'][3].name, conf['gen0'][4].name],
        datasets: [{
            label: 'Nb NFT',
            data: [conf['gen0'][0].count, conf['gen0'][1].count, conf['gen0'][2].count,conf['gen0'][3].count, conf['gen0'][4].count],
            backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                    
            ],
            hoverOffset: 4
        }]
        };

    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'NFT Gen 0 Distribution'
                }
            }
        }
    });
}