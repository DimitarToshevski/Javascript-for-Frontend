function domDynamicForm(selector) {
    let selectorHTML = $(selector);
    let fragment = document.createDocumentFragment();

    //Add controls
    let divAddControls = $('<div class="add-controls">');
    let labelInput = $('<label for="input">Enter text: </label>');
    let inputAdd = $('<input type="text" id="input" placeholder="Enter items to add...">');
    let anchorAdd = $('<a href="#" class="button" style="display:inline-block;">Add</a>');
    anchorAdd.on('click', addItems);
    labelInput.appendTo(divAddControls);
    inputAdd.appendTo(divAddControls);
    anchorAdd.appendTo(divAddControls);

    //Search controls
    let divSearchControls = $('<div class="search-controls">');
    let labelSearch = $('<label for="search">Search: </label>');
    let inputSearch = $('<input type="text" id="search" placeholder="Search items...">');
    let searchedItem = '';
    inputSearch.on('change keyup paste keypress', () => {
        searchedItem = inputSearch.val();
        if(searchedItem.length == 0){
            $('.list-item').css('display','block');
        }
        $(`strong:not(:contains(${searchedItem}))`).parent("li").css('display','none');
    });
    labelSearch.appendTo(divSearchControls);
    inputSearch.appendTo(divSearchControls);

    //Results controls
    let divResultControls = $('<div class="result-controls">');
    let ulResults = $('<ul class="items-list">');
    ulResults.appendTo(divResultControls);

    divAddControls.appendTo(fragment);
    divSearchControls.appendTo(fragment);
    divResultControls.appendTo(fragment);

    selectorHTML.append(fragment);

    function addItems() {
        let inputVal = inputAdd.val();
        if(inputVal.length !== 0) {
            let li = $(`<li class="list-item"><strong>${inputVal}</strong></li>`);
            let anchorDeleteLi = $('<a href="#" class="button">X</a>');
            anchorDeleteLi.on('click',() => {
             $(anchorDeleteLi).parent().remove();
            });
            anchorDeleteLi.prependTo(li);
            li.appendTo(ulResults);
            inputAdd.val('');
        }
    }

}
