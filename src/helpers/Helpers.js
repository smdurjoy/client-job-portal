import moment from "moment";

export const diffInDays = (fromDate, toDate) => {
    const fromDay = moment([fromDate]);
    const toDay = moment([toDate]);
    return fromDay.diff(toDay, 'days');
}