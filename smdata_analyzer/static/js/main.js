//alert('loaded')
// const baseUrl = "http://localhost:8000/api/stock/";
const handleActions = (stockData) => {
    const deleteBtns = document.getElementsByClassName('delete-btn');
    const updateBtns = document.getElementsByClassName('update-btn');

    for (let i of deleteBtns) {
        i.addEventListener('click', (e) => {
        let id = e.target.dataset.pk;
        const element = document.getElementById(`row-${id}`);

        console.log("id: ",id);
        deleteData(id, baseUrl, element);
        })
}
}


function deleteData(id, url, element) {
    fetch(url + `/${id}/`, {
        method: 'delete',
    })
    .then(response => response)
    .then(response => {
        console.log(response.status)
        element.remove();
    })
}
  