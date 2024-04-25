import moment from 'moment';

export function createBodyWithDates(currentDate, datesNumber) {
    const date = moment.utc(currentDate);

    const formattedDates = [];
    for (let i = 0; i < datesNumber; i++) {
        const formattedDate = date.format('"YYYY-MM-DD"');
        formattedDates.push(formattedDate);
        date.add(1, 'days');
    }

    return `{"dates":[${formattedDates.toString()}]}`;
}
