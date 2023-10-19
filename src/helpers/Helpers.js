import moment from "moment";

export const diffInDays = (fromDate, toDate) => {
    const fromDay = moment(fromDate);
    const toDay = moment(toDate);
    const difference = toDay.diff(fromDay, 'days') + 1;
    if (difference < 0) {
        return 0;
    }
    return difference;
}

export const isAppliedToJob = (appliedJobs, jobId) => {
    let isApplied = false;
    if (appliedJobs && jobId) {
        isApplied = appliedJobs?.some(val => val.id == jobId);
    }
    return isApplied;
}

export const formatDate = (newDate) => {
    const day = newDate?.$D.toString().padStart(2, '0');
    const month = newDate?.$M.toString().padStart(2, '0');
    return `${newDate?.$y}-${month}-${day}`
}