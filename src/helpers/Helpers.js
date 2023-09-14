import moment from "moment";

export const diffInDays = (fromDate, toDate) => {
    const fromDay = moment([fromDate]);
    const toDay = moment([toDate]);
    return fromDay.diff(toDay, 'days');
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