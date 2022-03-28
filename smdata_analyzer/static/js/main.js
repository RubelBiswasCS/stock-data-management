//alert('loaded')
// const baseUrl = "http://localhost:8000/api/stock/";
const handleActions = (stockData) => {
    const deleteBtns = document.getElementsByClassName('delete-btn');
    const updateBtns = document.getElementsByClassName('update-btn');
    const commitUpdateBtn = document.getElementById('commit-update');
    commitUpdateBtn.addEventListener('click', (e) => {
      commitUpdate(baseUrl);
      console.log('updated successfully')
    })
    // const form = document.getElementsByTagName('form')[0].elements
    // for (var item of form) {
    //     console.log("id :",item.id,'value: ',item.value);
    //   }

  for (let i of deleteBtns) {
    i.addEventListener('click', (e) => {
      let id = e.target.dataset.pk;
      const element = document.getElementById(`row-${id}`);
      console.log("id: ", id);
      deleteData(id, baseUrl, element);
    })
  }

  for (let i of updateBtns) {
    i.addEventListener('click', (e) => {
      let id = e.target.dataset.pk;
      const element = document.getElementById(`row-${id}`);
      console.log("el phase 1: ", element);
      updateData(id, baseUrl, element);
    })
  }
}

function updateData(id, url, element) {

  const date = document.getElementById('date')
  const trade_code = document.getElementById('trade_code')
  const high = document.getElementById('high')
  const low = document.getElementById('low')
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  const volume = document.getElementById('volume')
  const form = document.getElementsByTagName('form')[0]
  
      fetch(url + `/${id}/`, {
        method: 'get',
      })
      .then(response => response.json())
      .then(response => {
          console.log(response.date)

          // formData.date=response.date
          // formData.trade_code=response.trade_code
          // formData.high=response.high
          // formData.low=response.low
          // formData.open=response.open
          // formData.close=response.close
          // formData.volume=response.volume
          // console.log(formData)
          date.value=response.date
          trade_code.value=response.trade_code
          high.value=response.high
          low.value=response.low
          open.value=response.open
          close.value=response.close
          volume.value=response.volume
          form.dataset.id=response.id
          
      })
  

  const newData = {
    "date": "2020-07-02",
    "trade_code": "Valid E",
    "high": 31.9,
    "low": 31.9,
    "open": 31.9,
    "close": 31.9,
    "volume": "75"
  }
 
}
// JSON.stringify({
//   newData
// })
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
  

function commitUpdate(url){
  const form = document.getElementsByTagName('form')[0]
  const id = form.dataset.id
  //const formData = new FormData(form);
  const element = document.getElementById(`row-${id}`)

  const date = document.getElementById('date').value
  const trade_code = document.getElementById('trade_code').value
  const high = document.getElementById('high').value
  const low = document.getElementById('low').value
  const open = document.getElementById('open').value
  const close = document.getElementById('close').value
  const volume = document.getElementById('volume').value
  const newData = {
    "date": date,
    "trade_code": trade_code,
    "high": high,
    "low": low,
    "open": open,
    "close": close,
    "volume": volume
  }
  fetch(url + `/${id}/`, {
    method: 'patch',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData),
  })
  .then((response) => response.json())
  .then((response) => {
      let row = response;
      console.log("current row",row)
      console.log(element.innerText[0])
      let i = element.innerText[0];
      element.innerHTML='';
      console.log("el phase 2: ", element);
      element.innerHTML= `
        <th scope="row">${i}</th>
        <td>${ row.date }</td>
        <td>${ row.trade_code }</td>
        <td>${ row.high }</td>
        <td>${ row.low }</td>
        <td>${ row.open }</td>
        <td>${ row.close }</td>
        <td>${ row.volume }</td>
        <td>
          <button type="button" id="delete-btn-${ row.id }" data-pk="${ row.id }" class="btn btn-outline-danger btn-sm delete-btn" >Delete</button>
          <button type="button" id="update-btn-${ row.id }" data-pk="${ row.id }" class="btn btn-outline-warning btn-sm update-btn" data-bs-toggle="modal" data-bs-target="#stockDataModal" data-bs-whatever="@mdo">Update</button>
        </td>`;
        // console.log("el phase 3: ", element);
      console.log(response);
    })
  .catch(err => {
    console.error(err)
  })
}