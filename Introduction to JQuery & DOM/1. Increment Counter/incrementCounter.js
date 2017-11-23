/*You are tasked with creating a piece of HTML dynamically using JavaScript and appending it to a given element using
 a passed in selector.*/

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button class="btn" id="addBtn">Add</button>');
    let list = $('<ul>');

    //Text formation
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    //Buttons formation
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    //List formation
    list.addClass('results');

    //Events
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val()+1);
    });

    $(addBtn).on('click', () => {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    /*Adding multiple elements to the DOM can be expensive, instead of repeatedly adding to the DOM we can create a
    DocumentFragment and add the elements to it instead.*/

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

}
increment('div#wrapper');