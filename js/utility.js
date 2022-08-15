const stringifyDate = (date) => {
    const options = { day: 'numeric', Month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}