const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function roadsToGraph(roads) {
    const graph = Object.create(null);
    for (let road of roads) {
        const [from, to] = road.split('-');
        if (Object.prototype.hasOwnProperty.call(graph, from)) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    return graph;
}

function roadsToGraphFunctional(roads) {
    const graph = Object.create(null);
    roads.map(road => road.split('-')).forEach(([from, to]) => {
        if (Object.prototype.hasOwnProperty.call(graph, from)) {
            graph[from].push(to)
        } else {
            graph[from] = [to]
        }
    })
    return graph;
}

forEach[roads]

const graph = roadsToGraph(roads);
console.log(Object.keys(graph));
console.log(graph);