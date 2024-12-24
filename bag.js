
onLoad();
function onLoad(){
    displayBagItems();
}

function displayBagItems(){

    let element=document.querySelector('#contain1');
    if(element && items.length>0){
        let item = items[0];
        element.innerHTML=`
    <span class="closebtn">&times;</span>
            <img src="${item.item_image}" alt="" style="margin: 20px 0 20px 30px;">
            <span class="item1" style=" text-align: left; position: absolute; top:35% ;" >
                <div>${item.brand}</div>
                <div>${item.product_name}</div>
                <div>${item.original_price} |42% OFf|${item.current_price}</div>
                <div>15 days return available</div>
            </span>
    `;
    }
    

}
