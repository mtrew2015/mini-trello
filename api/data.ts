import { NowRequest, NowResponse } from '@now/node'

const cards = [
    {id: "1", name:"Create Project In Github", "category":"Backlog"},
    { id: "2", name: "Organize The Team", "category": "In Progress" },
    { id: "3", name: "Wireframe", "category": "Completed" }
]

export default function (req: NowRequest, res: NowResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(cards)
}