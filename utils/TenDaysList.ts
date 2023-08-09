function generateDateArray() {
    const dateArray = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 3);

    for (let i = 0; i < 10; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();

        const dateString = `${day}/${month}/${year}`;
        let title;

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        if (currentDate.toDateString() === today.toDateString()) {
            title = 'Today';
        } else if (currentDate.toDateString() === yesterday.toDateString()) {
            title = 'Yesterday';
        } else if (currentDate.toDateString() === tomorrow.toDateString()) {
            title = 'Tomorrow';
        } else {
            title = `${day} ${currentDate.toLocaleDateString('en-US', { month: 'short' })}`;
        }

        dateArray.push({ key: dateString, title: title });
    }

    return dateArray;
}

const generatedArray = generateDateArray();

export default generatedArray;