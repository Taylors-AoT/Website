export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' })
    };
};
