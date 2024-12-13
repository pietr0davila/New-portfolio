document.addEventListener("DOMContentLoaded", () => {
const data = {
    labels: [
        "HTML",
        "CSS",
        "Python",
        "React.js",
        "PHP",
        "MySQL",
        "Javascript",
        "C++",
        "Pentesting",
        
    ],
    datasets: [{
        label: "Minhas Habilidades",
        data: [90, 90, 90, 80, 75, 75, 70, 65, 50],
        backgroundColor: [
            '#e44c27',
            '#0171be', 
            '#4b8abc', 
            '#243b6f',
            '#777bb3', 
            '#43b7fe', 
            '#d6bb33', 
            '#004580',
            '#cd1f24', 
          ],

    }]
}
const config = {
    type: "doughnut",
    data: data,
}

let ctx = document.getElementById("skillRadar")
ctx.getContext("2d")
new Chart(ctx, config)
})