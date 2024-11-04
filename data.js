module.exports = function () {
    return {
        conservationAreas: [
            {
                id: 1,
                name: "Green Lake Conservation Area",
                description: "A beautiful lake surrounded by forest.",
                timeSlots: [
                    { id: 1, time: "9:00 AM - 12:00 PM", price: 10 },
                    { id: 2, time: "12:00 PM - 3:00 PM", price: 15 },
                    { id: 3, time: "3:00 PM - 6:00 PM", price: 20 }
                ]
            },
            {
                id: 2,
                name: "Sunny Hills Conservation Area",
                description: "Rolling hills with scenic views.",
                timeSlots: [
                    { id: 4, time: "9:00 AM - 12:00 PM", price: 10 },
                    { id: 5, time: "12:00 PM - 3:00 PM", price: 15 },
                    { id: 6, time: "3:00 PM - 6:00 PM", price: 20 }
                ]
            },
            {
                id: 3,
                name: "Mountain View Conservation Area",
                description: "Stunning views of the mountains.",
                timeSlots: [
                    { id: 7, time: "9:00 AM - 12:00 PM", price: 5 },
                    { id: 8, time: "12:00 PM - 3:00 PM", price: 10 },
                    { id: 9, time: "3:00 PM - 6:00 PM", price: 15 }
                ]
            },
            {
                id: 4,
                name: "River Bend Conservation Area",
                description: "A serene river setting perfect for relaxation.",
                timeSlots: [
                    { id: 10, time: "9:00 AM - 12:00 PM", price: 5 },
                    { id: 11, time: "12:00 PM - 3:00 PM", price: 10 },
                    { id: 12, time: "3:00 PM - 6:00 PM", price: 15 }
                ]
            }
        ],
        orders: []
    }
};