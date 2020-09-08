let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

let meetingLength = 50

let personA = schedules[0]
let personB = schedules[1]
let personC = schedules[2]


// const createBusinessMenSingularSchedules = (schedules, meetingLength) => {
//     let allPersons = {}
//     schedules.map( row => {
//         // return allPersons.push({ person: row })
//         Object.assign(allPersons, { person: row })
//         areAllBusinessMenFree(allPersons, meetingLength)
//     })
// }

const translateTime = (meetingTime) => {
    meetingTimeArray = meetingTime.split(':')
    meetingTimeSeconds = meetingTimeArray[0] * 3600 + meetingTimeArray[1] * 60
    return meetingTimeSeconds
}

const convertFromSecondsToMinutes = (meetingTime) => {
    let hours = Math.floor(meetingTime / 3600)
    meetingTime %= 3600;
    let minutes = Math.floor(meetingTime / 60);

    return `${hours}:${minutes}`
}

const meetingLengthToSeconds = (meetingLength) => {
    return meetingLength*60
}

const isBusinessManFree = (personNumber, meetingLength) => {
    
    let schedule = convertEmployeeScheduleTime(personNumber)
    let meetingLengthInSeconds = meetingLengthToSeconds(meetingLength)

    // console.log('\n', '\n')
    // console.log(schedule)

    let i = 0
    let freeTime = []
    let freeSlotBegining = []

    while ( i < schedule.length - 1 ) {
        freeTime.push(schedule[i+1][0] - schedule[i][1])
        ++i
    }

    freeTime.filter( time => {
        if (time >= meetingLengthInSeconds) {
            freeSlotBegining.push(schedule[(freeTime.indexOf(time))][1]) //work out which part of the schedule the freetime slot corresponds to, and return the ending of the previous meeting.
        } else {
            return null
        }
    })

    return freeSlotBegining.length > 0? freeSlotBegining : null
    
}

const convertEmployeeScheduleTime = (schedule) => {
    
    let translatedSchedules = schedule.map( cell => {
        return cell.map( time => {
            return translateTime(time)
        })
    })

    return translatedSchedules
}

const areAllBusinessMenFree = (schedules, meetingLength) => {

    // console.log(allPersons)

    let finalResults = []

    schedules.map( row => {

        let rowResult = isBusinessManFree(row, meetingLength)

        if ( rowResult === null ) {
            console.log("Sorry, the meeting does not fit the schedule.")
        } else {
            // console.log('here')
            // console.log(rowResult[0])
            finalResults.push(rowResult[0])
            // let highestValue = Math.max(personAfree[0], personBfree[0], personCfree[0])
            // let convertHighestValue = convertFromSecondsToMinutes(highestValue)
            // console.log( "The earliest meeting time is " + convertHighestValue )
        }
    })

    let highestValue = Math.max.apply(null, finalResults)
    let convertHighestValue = convertFromSecondsToMinutes(highestValue)
    console.log( "The earliest meeting time is " + convertHighestValue )


    // Object.keys(allPersons).map( key, person => {
    //     isBusinessManFree(allPersons[person], meetingLength)
    //     if ( allPersons[person] === null ) {
    //         console.log("Sorry, the meeting does not fit the schedule.")
    //     } else {
    //         console.log('here')
    //         // let highestValue = Math.max(personAfree[0], personBfree[0], personCfree[0])
    //         // let convertHighestValue = convertFromSecondsToMinutes(highestValue)
    //         // console.log( "The earliest meeting time is " + convertHighestValue )
    //     }
    // })

    // let personAfree = isBusinessManFree(personA, meetingLength)
    // let personBfree = isBusinessManFree(personB, meetingLength)
    // let personCfree = isBusinessManFree(personC, meetingLength)

    // if ( (personAfree || personBfree || personCfree) === null ) {
    //     console.log("Sorry, the meeting does not fit the schedule.")
    // } else {
    //     let highestValue = Math.max(personAfree[0], personBfree[0], personCfree[0])
    //     let convertHighestValue = convertFromSecondsToMinutes(highestValue)
    //     console.log( "The earliest meeting time is " + convertHighestValue )
    // }
}

// createBusinessMenSingularSchedules(schedules)
areAllBusinessMenFree(schedules, meetingLength)