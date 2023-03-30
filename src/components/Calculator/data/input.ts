const inputs = [
    {
        id: 1,
        label: 'Avg. deal size',
        name: 'deal',
        val: 20000,
        type: 'number',
        min: 1,
        max: 1000000
    },
    {
        id: 2,
        label: 'Revenue goal',
        name: 'revGoal',
        val: 1000000,
        type: 'number',
        min: 1,
        max: 100000000
    },
    {
        id: 3,
        title: 'Suppose you have 100 opportunities. How many of them are converting into deals?',
        name: 'opp_deal',
        val: 5,
        type: 'percentage',
        min: 1,
        max: 100
    },
    {
        id: 4,
        label: 'Suppose you have 100 cold meetings. How many of them are converting into opportunities?',
        name: 'meet_opp',
        val: 33,
        type: 'percentage',
        min: 1,
        max: 100
    },
    {
        id: 5,
        label: 'Suppose you have reached 100 leads. How many of them are converting into meetings?',
        name: 'leads_meet',
        val: 2,
        type: 'percentage',
        min: 1,
        max: 100
    }
]


export default inputs;