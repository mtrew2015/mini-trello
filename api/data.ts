import { NowRequest, NowResponse } from '@now/node'

const cards = [
    {id: "1", name:"Create Project In Github", "Category":"Backlog"},
    { id: "2", name: "Organize The Team", "Category": "In Progress" },
    { id: "3", name: "Wireframe", "Category": "Completed" }
]

export default function (req: NowRequest, res: NowResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(cards)
}