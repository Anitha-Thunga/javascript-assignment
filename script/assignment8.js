// Library array to store all book objects
let library = [];

// Function to add a new book
function addBook() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author name:");
  const isReadInput = prompt("Have you read this book? (yes/no)");
  const isRead = isReadInput.toLowerCase() || isReadInput.toUpperCase() === "yes";

  const newBook = {
    title: title,
    author: author,
    isRead: isRead
  };

  library.push(newBook);
  alert(`Book "${title}" added successfully!`);
}

// Function to list all books
function listBooks() {
  //console.clear();
  if (library.length === 0) {
    console.log("Library is empty.");
    return;
  }
  
  console.log(" Your Library:");
  library.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author} - ${book.isRead ? "Read" : " Not Read"}`);
  });
}

// Function to mark a book as read
function markAsRead(title) {
  const book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
  if (book) {
    book.isRead = true;
    alert(`"${book.title}" has been marked as read!`);
  } else {
    alert(`Book titled "${title}" not found.`);
  }
}

// BONUS: remove a book
function removeBook(title) {
  const index = library.findIndex(b => b.title.toLowerCase() === title.toLowerCase());
  if (index !== -1) {
    const removedBook = library.splice(index, 1)[0];
    alert(`"${removedBook.title}" was removed from your library.`);
  } else {
    alert(`Book titled "${title}" not found.`);
  }
}

// BONUS: list only unread books
function listUnreadBooks() {
  const unread = library.filter(b => ! b.isRead);
  if (unread.length === 0) {
    console.log("All books have been read! ");
    return;
  }

  console.log(" Unread Books:");
  unread.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author}`);
  });
}

// Main Menu
function showMenu() {
  let choice;
  do {
    choice = prompt(
      "Book Tracker Menu:\n" +
      "1. Add a book\n" +
      "2. List all books\n" +
      "3. Mark a book as read\n" +
      "4. Remove a book (bonus)\n" +
      "5. List unread books (bonus)\n" +
      "0. Exit\n\n" +
      "Enter your choice:"
    );

    switch(choice) {
      case "1":
        addBook();
        break;
      case "2":
        listBooks();
        break;
      case "3":
        const titleToMark = prompt("Enter the title of the book to mark as read:");
        markAsRead(titleToMark);
        break;
      case "4":
        const titleToRemove = prompt("Enter the title of the book to remove:");
        removeBook(titleToRemove);
        break;
      case "5":
        listUnreadBooks();
        break;
      case "0":
        alert("Goodbye!");
        break;
      default:
        alert("Invalid option. Please enter a number from 0 to 5.");
    }

  } while (choice !== "0");
}

// Run the menu
showMenu();
