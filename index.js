const jsonArray = [
    {
        transaction_date: '2023-01-08',
        transaction_time: '17:48:46',
        transaction_qty: '1',
        store_id: '3',
        store_location: 'Astoria',
        product_id: '1',
        unit_price: 18,
        total_price: 18,
        product_category: 'Coffee beans',
        product_type: 'Organic Beans',
        product_detail: 'Brazilian - Organic',
    },
    {
        transaction_date: '2023-01-08',
        transaction_time: '17:48:46',
        transaction_qty: '1',
        store_id: '3',
        store_location: 'Astoria',
        product_id: '1',
        unit_price: 18,
        total_price: 18,
        product_category: 'Coffee beans',
        product_type: 'Organic Beans',
        product_detail: 'Brazilian - Organic',
    },
    {
        transaction_date: '2023-02-08',
        transaction_time: '10:15:30',
        transaction_qty: '2',
        store_id: '2',
        store_location: 'Brooklyn',
        product_id: '2',
        unit_price: 10,
        total_price: 20,
        product_category: 'Coffee beans',
        product_type: 'Regular Beans',
        product_detail: 'Colombian',
    },
    {
        transaction_date: '2023-01-08',
        transaction_time: '12:30:00',
        transaction_qty: '3',
        store_id: '1',
        store_location: 'Manhattan',
        product_id: '3',
        unit_price: 15,
        total_price: 45,
        product_category: 'Coffee beans',
        product_type: 'Specialty Beans',
        product_detail: 'Ethiopian',
    },
];

const result = {
    labels: [],
    data: [],
};

const dataMap = {};

// Iterate over each transaction
jsonArray.forEach((item) => {
    const label = item.product_type;
    const quantity = parseInt(item.transaction_qty, 10);

    // If the date is already in the map, add the quantity, otherwise set it
    if (dataMap[label]) {
        dataMap[label] += quantity;
    } else {
        dataMap[label] = quantity;
    }
});

// Populate the result object
for (const date in dataMap) {
    result.labels.push(date);
    result.data.push(dataMap[date]);
}

console.log(result);
