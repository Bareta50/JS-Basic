console.log(document); // Logs the entire document (The HTML)

// We can eccess everything we keep in the document(html via the document object)
console.log(document.head);
console.log(document.URL);
// Accessing elements by id

const firstParagraph = document.getElementById("first_paragraph");
console.log("First paragraph", firstParagraph);

// Acccesing elements by class name
//Always returns an array of elements so if we want to acces a specific element we need to acces it via its id
const explanationDiv = document.getElementsByClassName("dom-explanation");
console.log("Div's with dom-explanation class", explanationDiv);
const firstExplanationDIv = explanationDiv[0];
console.log("First Explanation Div", firstExplanationDIv);

// Accessing elements by tag name
//Always returns an array of elements so if we want to acces a specific element we need to acces it via its id
const allParagraphs = document.getElementsByTagName("p");
console.log("All P elements", allParagraphs);
console.log("Last <p> tag", allParagraphs[allParagraphs.length - 1]);

//QUERY SELECTORS

//Accessing elements by id using query selectors

const thirdParagraph = document.querySelector("#third_paragraph");
console.log("Third Paragraph", thirdParagraph);

//Accessing elements by class using query selectors
// QUERY selectors always returns the first element that matches the given selector!!
const domExplanationByQuertSelectors =
  document.querySelector(".dom-explanation");
console.log("DOM-Explanation", domExplanationByQuertSelectors);

// Accessing multiple elements using querySelectorAll

const listItems = document.querySelectorAll("#node_types li");
console.log("All list items", listItems);

// Traversing through DOM tree
// Accessing parent element

const secondParagraph = document.getElementById("second_paragraph");
const parentDIV = secondParagraph.parentElement;
console.log("Parent Div", parentDIV);

// Accessing sibling elements
// Next sibling returns the whole node
// NextElementSibling returns just the next element
const nextSibling = secondParagraph.nextElementSibling;
const prevSibling = secondParagraph.previousElementSibling;

console.log("Next Sibling", nextSibling);
console.log("Previous Sibling", prevSibling);

//Accessing chiled elements

const ListTypes = document.getElementById("node_types");
const childrenOfLists = ListTypes.children;
console.log("Children of list", childrenOfLists);

// Accessing the last child of an element

const lastChildElement = firstExplanationDIv.lastElementChild;
console.log("Last element child", lastChildElement);

// Accessing a specific child element

const secondChildEl = ListTypes.children[1];
console.log("Secons list item", secondChildEl);
