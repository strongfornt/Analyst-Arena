import { tableRow } from "./table.js";
import { rows } from "./data.js";
import { dropdownData } from "./data.js";
import { cardHTML } from "./techSector.js";
import {toddCrusetCard} from "./toddCruset.js"

// get by id and class
const container = document.getElementById("dropdown-container");
const tableBody = document.getElementById("table-body");
const techCardContainer = document.getElementById("tech-card-container");
const toddCruesetContainer  = document.getElementById('todd-crueset-container');

// Create the container div
const search = document.createElement("div");
search.classList.add(
  "flex",
  "items-center",
  "relative",
  "justify-center",
  "p-2.5",
  "gap-[8px]",
  "h-[42px]",
  "border",
  "rounded-md",
  "border-[#467599]",
  "bg-[#467599]"
);

// Create the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.classList.add("absolute", "left-[31%]");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "21");
svg.setAttribute("height", "20");
svg.setAttribute("viewBox", "0 0 21 20");
svg.setAttribute("fill", "none");
svg.classList.add("text-white");

// Create the path inside the SVG
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  "M18.3484 17.1295L14.2174 13.0646C15.2992 11.8893 15.9639 10.335 15.9639 8.62455C15.9633 4.96568 12.9496 2 9.23176 2C5.51389 2 2.50018 4.96568 2.50018 8.62455C2.50018 12.2834 5.51389 15.2491 9.23176 15.2491C10.8381 15.2491 12.3115 14.6935 13.4688 13.7698L17.6157 17.8507C17.8178 18.0498 18.1458 18.0498 18.3479 17.8507C18.5504 17.6517 18.5504 17.3286 18.3484 17.1295ZM9.23176 14.2299C6.08604 14.2299 3.53593 11.7203 3.53593 8.62455C3.53593 5.52881 6.08604 3.01923 9.23176 3.01923C12.3775 3.01923 14.9276 5.52881 14.9276 8.62455C14.9276 11.7203 12.3775 14.2299 9.23176 14.2299Z"
);
path.setAttribute("fill", "white");
svg.appendChild(path);

// Create the input field
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Find Top Analysts");
input.classList.add(
  "ml-14",
  "bg-transparent",
  "text-white",
  "placeholder-white",
  "outline-none",
  "font-roboto",
  "text-sm"
);

// Append the SVG and input field to the search
search.appendChild(svg);
search.appendChild(input);

// Function to generate the dropdowns dynamically
function generateDropdowns(data) {
  // Clear any existing content inside the container
  container.innerHTML = "";

  data.forEach((item) => {
    // Create the label for the dropdown
    const label = document.createElement("label");
    label.setAttribute("for", item.label);
    label.classList.add("text-[#FFFFFF]", "font-medium", "text-sm");
    label.innerText = item.label;

    // Create the select element
    const select = document.createElement("select");
    select.classList.add(
      "appearance-none",
      "w-full",
      "px-4",
      "py-[10px]",
      "text-sm",
      "text-[#1C1B1B]",
      "font-roboto",
      "font-normal",
      "tracking-[0.14px]",
      "bg-white",
      "border",
      "border-[#FFF]",
      "rounded-[4px]",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-[#467599]"
    );

    // Add options to the select element
    item.options.forEach((optionText) => {
      const option = document.createElement("option");
      option.textContent = optionText;
      select.appendChild(option);
    });

    // Create the dropdown arrow icon
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.classList.add(
      "absolute",
      "top-[45%]",
      "right-2",
      "pointer-events-none"
    );

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 14.5L17 9.5H7L12 14.5Z");
    path.setAttribute("fill", "#1C1B1B");
    svg.appendChild(path);

    // Create the wrapper div for each dropdown
    const wrapper = document.createElement("div");
    wrapper.classList.add("relative", "w-full", "space-y-3");
    wrapper.appendChild(label);
    wrapper.appendChild(select);
    wrapper.appendChild(svg);

    // Append the wrapper to the container

    container.appendChild(wrapper);
    container.appendChild(search);
  });
}

// Call the function to generate the dropdowns
generateDropdowns(dropdownData);

//   right side table --

// Target the table body

// Generate rows and append them to the table
const rowElements = tableRow(rows);
rowElements.forEach((tr) => tableBody.appendChild(tr));

//tech card container part -- /
// Append the card three times
for (let i = 0; i < 3; i++) {
  techCardContainer.innerHTML += cardHTML;
}

// Remove the border-b from the last card
const allCards = techCardContainer.querySelectorAll('div.border-b'); 
if (allCards.length > 0) {
  allCards[allCards.length - 1].classList.remove('border-b');
}


// todd cruset card goes here --
for (let i = 0; i < 8; i ++ ) {
  toddCruesetContainer.innerHTML +=toddCrusetCard
}
