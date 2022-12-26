export const getYear = (date) => {
    const myDate = new Date(date);
    const year = myDate.getFullYear();
    return year
}
