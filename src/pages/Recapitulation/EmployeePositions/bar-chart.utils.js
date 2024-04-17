
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Statistik Jabatan',
        },
    },
    scales: {
        y: {
            ticks: {
                color: "#000000",
                precision: 0,
            }
        }
    },
};

export const labels = ['Jabatan'];
const colors = ['#1E0342', '#0E46A3', '#9AC8CD', '#E1F7F5', '#074173']

export const reformatAsChartData = (apiData) => {
    return {
        labels,
        datasets: apiData.map((x, i) => {
            let colorIndex = i;

            if (i > 4) colorIndex = i % 5

            return {
                label: x.name,
                data: [x.total],
                backgroundColor: colors[colorIndex],
            };
        }),
    };
}