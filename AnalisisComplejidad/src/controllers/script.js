import dataTree from './dependencies.js';

document.getElementById('loadArray').addEventListener('click', async function() {
    try {
        const response = await fetch('../bussines.json');
        const dataset = await response.json();
        dataset.forEach(item => dataTree.add(item));
        document.getElementById('sortArray').disabled = false;

        alert('Elementos agregados correctamente');
    } catch (error) {
        console.error('Error loading the dataset:', error);
    }
});

document.getElementById('sortArray').addEventListener('click', function() {
    const startTime = performance.now();
    bubbleSort(dataTree);
    const endTime = performance.now();
    const sortTime = endTime - startTime;
    document.getElementById('sortTime').textContent = `Tiempo de ordenamiento: ${sortTime.toFixed(2)} ms`;
    for (let x=0;x<100;x++) {
        let item = document.createElement("li");
        item.textContent = dataTree[x].name;
        root.appendChild(item);
    }
});


