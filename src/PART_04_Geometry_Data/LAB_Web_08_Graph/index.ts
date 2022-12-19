export class Solution {
    constructor(view: any) {
        console.log("Let's learn Typescript for digital mapping and visualization!!");
        console.log("Typescript, Graph data Structure");
        console.log("=================================");
        // Codepan
        // Typescript: https://codepen.io/NJStudio/details/RwWxGXo
        // Javascript: https://codepen.io/NJStudio/details/bGdozYY

        //           N0
        //          /  \
        //        N1    N2
        //        /\    /\
        //      N3 N4  N5 N6

        let nodes: Node[] = [];

        for (let i = 0; i < 7; ++i) {
            nodes.push(new Node(i))
        }

        nodes[0].push(nodes[1]);
        nodes[0].push(nodes[2]);

        nodes[1].push(nodes[3]);
        nodes[1].push(nodes[4]);

        nodes[2].push(nodes[5]);
        nodes[2].push(nodes[6]);

        // nodes[3].push(nodes[6]);

        // ........................................... BFS
        let num = 0;
        let outSortedBFS = []
        const bfs = (nodes: Node[]) => {
            let queue: Node[] = [];
            nodes[0].visit = true;

            queue.push(nodes[0])
            outSortedBFS.push(nodes[0])

            while (queue.length > 0) {
                let current = queue.shift();

                for (let i = 0; i < current.connection.length; ++i) {
                    let other = current.connection[i];
                    if (!other.visit) {
                        other.visit = true;
                        outSortedBFS.push(other);
                        queue.push(other);
                    }
                }
                if (num++ > 100) { console.log('safeguard'); return; }
            }
            return outSortedBFS;
        }
        bfs(nodes);
        console.log("BFS!", outSortedBFS)
        console.log('done');

        // ........................................... DFS

        nodes = [];
        for (let i = 0; i < 7; ++i) {
            nodes.push(new Node(i))
        }

        nodes[0].push(nodes[1]);
        nodes[0].push(nodes[2]);

        nodes[1].push(nodes[3]);
        nodes[1].push(nodes[4]);

        nodes[2].push(nodes[5]);
        nodes[2].push(nodes[6]);
        
        let outSortedDFS = []
        const dfs = (node: Node) => {
            if (node.visit) { return; }
            node.visit = true;
            outSortedDFS.push(node);
            for (let i = 0; i < node.connection.length; ++i) {
                dfs(node.connection[i])
            }
        }

        dfs(nodes[0]);
        console.log("DFS!", outSortedDFS)
        console.log('done');


    }
    public destroy() {

    }
}

class Node {
    public visit: boolean = false;
    public id: number = -1;
    public connection: Node[] = [];
    constructor(id: number) {
        this.id = id;
    }
    public push(other: Node) {
        this.connection.push(other);
        other.connection.push(this);
    }
}