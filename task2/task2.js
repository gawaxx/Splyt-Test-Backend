let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

let meetingLength = 50

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

    let finalResults = []

    schedules.map( row => {

        let rowResult = isBusinessManFree(row, meetingLength)

        if ( rowResult === null ) {
            finalResults.push('NaN')
        } else {
            finalResults.push(rowResult[0])
        }

    })
    
    if ( !!(Math.max.apply(null, finalResults)) ) {
        let highestValue = Math.max.apply(null, finalResults)
        let convertHighestValue = convertFromSecondsToMinutes(highestValue)
        console.log( "The earliest meeting time is " + convertHighestValue )
    } else {
        console.log("Sorry no free space can be found for this meeting length")
    }

}

areAllBusinessMenFree(schedules, meetingLength)