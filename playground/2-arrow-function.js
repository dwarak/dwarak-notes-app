// const square = function (x) {
//     return x * x
// }
// console.log(square(3)) 

// const square = (x) => {
//      return x*x
// }
// console.log(square(3))

// const square = (x) => x*x
// console.log(square(2))

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()

// const event = {
//     name: 'Birthday Party',
//     printGuestList() {
//         console.log('Guest list for ' + this.name)
//     }
// }
// event.printGuestList()

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Dwarak', 'Ajay', 'Mohit'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name)
//         this.guestList.forEach(function(guest) {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }
// event.printGuestList()

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Dwarak', 'Ajay', 'Mohit'],
//     printGuestList() {
//         const that = this
//         console.log('Guest list for ' + this.name)
//         this.guestList.forEach(function(guest) {
//             console.log(guest + ' is attending ' + that.name)
//         })
//     }
// }
// event.printGuestList()

const event = {
    name: 'Birthday Party',
    guestList: ['Dwarak', 'Ajay', 'Mohit'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()