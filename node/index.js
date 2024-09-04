const express = require('express');
const app = express();
const port = 3000;

// Endpoint 1: /check
app.get('/check', (req, res) => {
    res.status(200).send('OK');
});

// Endpoint 2: /
app.get('/', (req, res) => {
    const jsonResponse = {
        Instancia: "Instancia #1 - API #1",
        Curso: "Seminario de sistemas 1",
        Seccion: "Seccion A",
        Periodo: "2do Semestre 2024",
        Estudiante: "Jose David Panaza Batres - 202111478"
    };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`JavaScript API running at http://localhost:${port}`);
});
