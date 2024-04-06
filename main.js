let modalBody = document.querySelector('.modal-body')
let mainRow = document.querySelector('#main-row')
let xml = new XMLHttpRequest();

/* API.getAll().then(function(data){
    makePage(data)
}) */

makePage();


async function makePage(){
  
    let data = await API.getAll()
    console.log(data);
    let html = ''
    data.forEach(product => {
        html+=`
        <div class="col-3 mt-3">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <span class="badge badge-sm bg-secondary">${product.brand}</span>
                <span class="badge badge-sm bg-danger">${product.price} $</span>

            </div>
            <div class="card-body">
                <img style="height:200px;" src="${product.thumbnail}" class="img-fluid">
            </div>
            <div class="card-footer">
                <h5>${product.title.substring(0,12)} ...</h5>
                <button data-id="${product.id}" class="btn btn-sm btn-info form-control info-btns">View more</button>
            </div>
        </div>
    </div>       `
    });
    mainRow.innerHTML=html;
    let infoBtns = document.querySelectorAll('.info-btns')
    infoBtns.forEach(btn=>btn.addEventListener('click',showModal))
}

async function showModal(e){ 
    let id = this.getAttribute('data-id');
    const myModal = new bootstrap.Modal('#one')
    let product = await API.getOne(id);
    
    modalBody.innerHTML=`
    <h1>${product.brand}</h1>
    <h2>${product.title}</h2>
    <h3 class="yellow">${product.description}</h3>
    <h3>${product.price} $</h3>
    <h3>Na stanju jos ${product.stock}</h3>
    <div class="img-wrapper">
    <img src="${product.images[0]}">
    <img src="${product.images[1]}">
    <img src="${product.images[2]}">
    <img src="${product.images[3]}">
    </div>
    `
    myModal.show();
    
}

 