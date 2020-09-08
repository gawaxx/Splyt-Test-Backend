let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']]
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

const translateTime = (meetingTime) => {
    meetingTimeArray = meetingTime.split(':')
    meetingTimeSeconds = meetingTimeArray[0]*3600 + meetingTimeArray[1]*60
    return meetingTimeSeconds
}

const meetingDuration = (meetingTime) => {
    let meetingStart = meetingTime[0];
    let meetingEnd = meetingTime[1];

    return meetingEnd - meetingStart
}