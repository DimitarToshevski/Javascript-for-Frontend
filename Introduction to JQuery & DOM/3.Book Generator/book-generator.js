/*Your function will receive 4 parameters - a string value representing a selector (for example "#wrapper" or ".root"),
 a string value representing the title of the book, a string value representing the author of the book and a number
  representing the ISBN of the book. After the book is created it should be attached to the passed in selector.
 The number in the Id of the containing div should be incremented by one for each successive book created
 (i.e. first book should have id = "book1", second id = "book2" and so on…). The title, author and ISBN should be
  paragraphs with a class equal to their respective role - class="title" for the title paragraph, class="author"
  for the author paragraph and class="isbn" for the ISBN paragraph. A book should also contain 2 buttons – [Select] and
   [Deselect], when the [Select] button is pressed the border of the div element should be set to "2px solid blue".
    When the [Deselect] button is pressed it should be set to "none".
*/

 let functionOnLoad = (()=> {
    let id = 0;
    return function createBook(selector, title, author, isbn) {
        let elementSelector = $(selector);
        let bookContainer = $(`<div id="${++id}">`);
        let bookTitle = $(`<p class="title">${title}</p>`);
        let bookAuthor = $(`<p class="author">${author}</p>`);
        let bookIsbn = $(`<p class="isbn">${isbn}</p>`);
        let btnSelect = $(`<button id="${id}">Select</button>`);
        let btnDeselect = $('<button>Deselect</button>');

        btnSelect.on('click',()=>{
            $(event.target).parent().css({'border':'2px solid blue'});
        });

        btnDeselect.on('click',()=>{
            $(event.target).parent().css('border','none');
        });

        bookContainer.append(bookTitle);
        bookContainer.append(bookAuthor);
        bookContainer.append(bookIsbn);
        bookContainer.append(btnSelect);
        bookContainer.append(btnDeselect);
        elementSelector.append(bookContainer);

    }
})();
$(functionOnLoad("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111));
$(functionOnLoad("#wrapper", "Alice in Wonderland2", "Lewis Carroll", 2222));
