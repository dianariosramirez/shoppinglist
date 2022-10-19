// Selectors for interaction
let button = document.getElementById( "enter" );
let input = document.getElementById( "userinput" );
let ul = document.querySelector( "ul" );

// Input text length 
function inputLength() {
	return input.value.length;
}

// Create the new element to the shopping list
function createListElement() {
	let text = input.value;
	let li = document.createElement( "li" );
	let p = document.createElement( "p" );

	p.classList.add( "product" );
	p.textContent = text;

	li.appendChild( p );
	li.appendChild( addDeleteBtn() );
	ul.appendChild( li );

	input.value = "";
}

// Add the new element to the shopping list whit click or enter
function addListAfterClick( event ) {
	if ( inputLength() > 0 ) {
		button.disabled = false;
		event.preventDefault();
		createListElement();
	} else {
		event.preventDefault();
		// button.disabled = true;
	}
}

function addListAfterKeypress( event ) {
	if ( inputLength() > 0 && event.keyCode === 13 ) {
		event.preventDefault();
		createListElement();
	} 
}

// Remove elements from the list on click
function deleteProduct( event ) {
	let item = event.target.parentElement;
	ul.removeChild( item );
}

// Function to add delete button to new list items
function addDeleteBtn() {
	let deleteBtn = document.createElement( 'button' );
	deleteBtn.textContent = "x";
	deleteBtn.className = "delete";

	deleteBtn.addEventListener( 'click', deleteProduct ); 
	return deleteBtn;
}

// Function to delete or underline existing elements in the list
function editExistingProduct( event ) {
	if ( event.target.className === "delete" ) {
		event.target.parentElement.remove();		
	} else if ( event.target.tagName === "P" ) {
		event.target.classList.toggle( "done" );
	}
}

button.addEventListener( "click", addListAfterClick );
input.addEventListener( "keypress", addListAfterKeypress );
ul.addEventListener( "click", editExistingProduct );
