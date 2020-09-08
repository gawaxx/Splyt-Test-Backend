let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

let meetingLength = 50

let personA = schedules[0]
let personB = schedules[1]
let personC = schedules[2]

const translateTime = (meetingTime) => {
    meetingTimeArray = meetingTime.split(':')
    meetingTimeSeconds = meetingTimeArray[0] * 3600 + meetingTimeArray[1] * 60
    return meetingTimeSeconds
}

const meetingLengthToSeconds = (meetingLength) => {
    return meetingLength*60
}

const isBusinessManFree = (personNumber, meetingLength) => {
    
    let schedule = convertEmployeeScheduleTime(personNumber)
    let meetingLengthInSeconds = meetingLengthToSeconds(meetingLength)

    console.log('\n', '\n')
    console.log(schedule)

    let i = 0
    let freeTime = []
    let freeSlotBegining = []

    while ( i < schedule.length - 1 ) {
        freeTime.push(schedule[i+1][0] - schedule[i][1])
        ++i
    }

    freeTime.filter( time => {
        if (time >= meetingLengthInSeconds) {
            freeSlotBegining.push(schedule[(freeTime.indexOf(time))][1])
        } else {
            return null
        }
    })

    return freeSlotBegining
    
}

const convertEmployeeScheduleTime = (schedule) => {
    
    let translatedSchedules = schedule.map( cell => {
        return cell.map( time => {
            return translateTime(time)
        })
    })

    return translatedSchedules
}

const areAllBusinessMenFree = (personA, personB, personC, meetingLength) => {
    let personAfree = isBusinessManFree(personA, meetingLength)
    let personBfree = isBusinessManFree(personB, meetingLength)
    let personCfree = isBusinessManFree(personC, meetingLength)

    console.log(personAfree, personBfree, personCfree)
}

areAllBusinessMenFree(personA, personB, personC, meetingLength)