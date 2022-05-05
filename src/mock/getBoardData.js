const boardData = () => {
    return [{
        id: 'Backlog',
        tasks: [],
        canAddFrom: null
    }, {
        id: 'Ready',
        tasks: [],
        canAddFrom: ['Backlog']
    }, {
        id: 'In Progress',
        tasks: [],
        canAddFrom: ['Ready'],
    }, {
        id: 'Finished',
        tasks: [],
        canAddFrom: ['In Progress']
    }]
}

export default boardData