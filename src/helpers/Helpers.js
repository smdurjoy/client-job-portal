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