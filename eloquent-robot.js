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
    function addEdge(to, from) {
        if (Object.prototype.hasOwnProperty.call(graph, from)) {
            graph[from].push(to);
        } else {
            graph[to].push(from);
        }
    }
    roads.map(road => road.split(' ')).forEach(([from, to]) => {
        addEdge(from, to);
        addEdge(to, from);
    }) 
    return graph;
}

function roadsToGraphFunctional(roads) {
    const graph = Object.create(null);
    roads.map(road => road.split('-')).forEach(([from, to]) => {
        graph[from] = graph[from] ? [...graph[from], to] : [to]
        graph[to] = graph[to] ? [...graph[to], from] : [from];
    })
    return graph;
}


const graph = roadsToGraphFunctional(roads);
console.log(Object.keys(graph));
console.log(graph);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!graph[this.place].includes(destination)) {
            return this;
        } else {
            const parcels = this.parcels.map(p => {
                if (this.place !== p.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place !== p.address)
            return new VillageState(destination, parcels);
        }
    }

    static random(parcelCount) {
        const parcels = [];
        for (let i = 0; i < parcelCount; i += 1) {
            const address = randomPick(Object.keys(graph));
            let place;
            do {
                place = randomPick(Object.keys(graph))
            } while (place === address);
            parcels.push({place, address})
        }
        return new VillageState("Post Office", parcels)
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);


function randomPick(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

function randomRobot(state) {
    return {direction: randomPick(graph[state.place])};
}

console.log(randomRobot(first));

const state = VillageState.random(5);
console.log(state.place, state.parcels)
