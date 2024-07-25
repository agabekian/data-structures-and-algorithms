const {Stack} = require("../stack-and-queue/stack-and-queue");

//woo that was hard!
function organizeTickets(stack) {
    let end = "";
    let ORIGINS = [];
    let DESTINATIONS = [];
    let map = new Map();

    // track origins and destinations
    while (stack.peek()) {
        let cur = stack.pop();
        ORIGINS.push(cur.origin);
        DESTINATIONS.push(cur.dest);
        map.set(cur.dest, cur.origin); //had to reverse
    }

    // Find the destination
    for (let d of DESTINATIONS) {
        if (!ORIGINS.includes(d)) {
            end = d;
            console.log("Found the FINAL destination: ", end);
            break;
        }
    }
    let res = new Stack();
    // Rebuild the order, cool stuff:
    while (map.has(end)) {
        let origin = map.get(end); //map is "reversed", since we'll push this into stack
        res.push({"origin": origin, "dest": end});
        end = origin; //sweet neat trick
    }
    return res;
}

let t1 = {"origin": "SEA", "dest": "CHI"};
let t2 = {"origin": "CHI", "dest": "JFK"};
let t3 = {"origin": "SNO", "dest": "SEA"};
let t4 = {"origin": "JFK", "dest": "PAR"};
let stack = new Stack();

stack.push(t1);
stack.push(t2);
stack.push(t3);
stack.push(t4);

let orderedStack = organizeTickets(stack);

// Print the resulting ordered stack
while (orderedStack.peek()) {
    console.log(orderedStack.pop());
}

// ----> O(N)
//July 3 2024 heatwave cometh