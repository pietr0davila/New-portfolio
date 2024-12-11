document.addEventListener("DOMContentLoaded", () => {
const data = {
    labels: [
        "HTML",
        "CSS",
        "Python",
        "PHP",
        "MySQL",
        "Javascript",
        "Pentesting"
    ],
    datasets: [{
        label: "Minhas Habilidades",
        data: [90, 90, 90, 75, 75, 70, 50],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}
const config = {
    type: "radar",
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
}

let ctx = document.getElementById("skillRadar")
ctx.getContext("2d")
new Chart(ctx, config)
})