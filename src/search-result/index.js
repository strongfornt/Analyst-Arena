// import { tableRow } from "./table.js";
// import { rows } from "./data.js";
// import { dropdownData } from "./data.js";
// import { cardHTML } from "./techSector.js";
// import { toddCrusetCard } from "./toddCruset.js";

// get by id and class
const dropdownContainer = document.getElementById("dropdown-container");
const tableBody = document.getElementById("table-body");
const techCardContainer = document.getElementById("tech-card-container");
const toddCruesetContainer = document.getElementById("todd-crueset-container");
const seoTextBoxBtnContainer = document.getElementById(
  "seo-text-box-btn-container"
);

// Create the container div
const search = document.createElement("div");
search.classList.add(
  "flex",
  "items-center",
  "relative",
  "justify-center",
  "p-2.5",
  "gap-[8px]",
  "h-[44px]",
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
  dropdownContainer.innerHTML = "";

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

    dropdownContainer.appendChild(wrapper);
    dropdownContainer.appendChild(search);
  });
}
const dropdownData = [
  {
    label: "Analyst Type",
    options: ["All", "Option 1", "Option 2", "Option 3"],
  },
  {
    label: "Latest Rating",
    options: ["Within 7 days", "Within 14 days", "Within 30 days"],
  },
  {
    label: "Sector Covered",
    options: ["50 Ratings", "100 Ratings", "200 Ratings"],
  },
  {
    label: "Analyst Minimum Experience",
    options: ["2 years", "3 years", "5 years"],
  },
  {
    label: "Minimum Ratings",
    options: ["50", "100", "200"],
  },
];
// Call the function to generate the dropdowns
generateDropdowns(dropdownData);

//   right side table --

// Target the table body
function tableRow(rows) {
  // Create an array to store rows
  const rowElements = [];

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.classList.add("border-b", "border-[#D4D4D4]");
  
    tr.innerHTML = `
    <td class="pl-3 pr-6 py-[6px] text-[12px] font-semibold text-[#000000]">${row.stock}</td>
    <td class="px-6 py-[6px]">
      <div class="flex items-center gap-2">
        <button class="text-[#2C2C2C] font-medium text-[12px] border border-[#6BE99D] rounded-[4px] p-1">${row.irr}</button>
        <div>
          <p>${row.analyst}</p>
          <p class="text-[12px] font-normal text-[#2C2C2C]">${row.company}</p>
        </div>
      </div>
    </td>
    <td class="px-6 py-[6px] text-[12px]   cursor-pointer">
      <button class="flex items-center gap-[6px]" >
         <span>${row.svg}</span>
      <span class="${row.actionColor}">${row.action}</span></button>
    </td>
  `;

    rowElements.push(tr);
  });

  // Return the array of rows
  return rowElements;
}
const rows = [
  {
    stock: "AAPL",
    irr: "58%",
    analyst: "K Miranda",
    company: "Barclay’s",
    action: "Buy",
    actionColor: "text-[#2C2C2C]",
    svg: `
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5092 5.62065L6.47858 0.275608C6.13274 -0.0918503 5.54878 -0.0918503 5.20295 0.275608L0.172285 5.62065C-0.205674 6.02227 0.0790349 6.68127 0.630535 6.68127H11.0509C11.6025 6.68127 11.8872 6.02227 11.5092 5.62065Z" fill="#34AF64"/>
      </svg>
    `,
  },
  {
    stock: "NVDA",
    irr: "58%",
    analyst: "K Miranda",
    company: "Barclay’s",
    action: "Hold",
    actionColor: "text-[#2C2C2C]",
    svg: `
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H10" stroke="#B9B9B9"/>
      </svg>
    `,
  },
  {
    stock: "MSFT",
    irr: "58%",
    analyst: "K Miranda",
    company: "Barclay’s",
    action: "Strong Buy",
    actionColor: "text-[#2C2C2C]",
    svg: `
     <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5092 12.6061L6.47858 7.26102C6.13274 6.89356 5.54878 6.89356 5.20295 7.26102L0.172285 12.6061C-0.205674 13.0077 0.0790349 13.6667 0.630535 13.6667H11.0509C11.6025 13.6667 11.8872 13.0077 11.5092 12.6061Z" fill="#34AF64"/>
<path d="M11.5092 5.92442L6.47858 0.57938C6.13274 0.211922 5.54878 0.211922 5.20295 0.57938L0.172285 5.92442C-0.205674 6.32605 0.0790349 6.98505 0.630535 6.98505H11.0509C11.6025 6.98505 11.8872 6.32605 11.5092 5.92442Z" fill="#34AF64"/>
</svg>

    `,
  },
  {
    stock: "MPW",
    irr: "58%",
    analyst: "K Miranda",
    company: "Barclay’s",
    action: "Sell",
    actionColor: "text-[#2C2C2C]",
    svg: `
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5092 1.06062L6.47858 6.40567C6.13274 6.77312 5.54878 6.77312 5.20295 6.40567L0.172285 1.06062C-0.205674 0.659 0.0790349 0 0.630535 0H11.0509C11.6025 0 11.8872 0.659 11.5092 1.06062Z" fill="#FF8181"/>
      </svg>
    `,
  },
  {
    stock: "INN",
    irr: "58%",
    analyst: "K Miranda",
    company: "Barclay’s",
    action: "Strong Sell",
    actionColor: "text-[#2C2C2C]",
    svg: `
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5092 1.3644L6.47858 6.70944C6.13274 7.0769 5.54878 7.0769 5.20295 6.70944L0.172285 1.3644C-0.205674 0.962772 0.0790349 0.303772 0.630535 0.303772H11.0509C11.6025 0.303772 11.8872 0.962772 11.5092 1.3644Z" fill="#FF8181"/>
        <path d="M11.5092 8.04604L6.47858 13.3911C6.13274 13.7585 5.54878 13.7585 5.20295 13.3911L0.172285 8.04604C-0.205674 7.64441 0.0790349 6.98541 0.630535 6.98541H11.0509C11.6025 6.98541 11.8872 7.64441 11.5092 8.04604Z" fill="#FF8181"/>
      </svg>
    `,
  },
  {
      stock: "SVC",
      irr: "58%",
      analyst: "K Miranda",
      company: "Barclay’s",
      action: "Hold",
      actionColor: "text-[#2C2C2C]",
      svg: `
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H10" stroke="#B9B9B9"/>
      </svg>
      `,
    },
    {
      stock: "M",
      irr: "58%",
      analyst: "K Miranda",
      company: "Barclay’s",
      action: "Strong Buy",
      actionColor: "text-[#2C2C2C]",
      svg: `
       <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5092 12.6061L6.47858 7.26102C6.13274 6.89356 5.54878 6.89356 5.20295 7.26102L0.172285 12.6061C-0.205674 13.0077 0.0790349 13.6667 0.630535 13.6667H11.0509C11.6025 13.6667 11.8872 13.0077 11.5092 12.6061Z" fill="#34AF64"/>
<path d="M11.5092 5.92442L6.47858 0.57938C6.13274 0.211922 5.54878 0.211922 5.20295 0.57938L0.172285 5.92442C-0.205674 6.32605 0.0790349 6.98505 0.630535 6.98505H11.0509C11.6025 6.98505 11.8872 6.32605 11.5092 5.92442Z" fill="#34AF64"/>
</svg>

      `,
    },
];

// Generate rows and append them to the table
const rowElements = tableRow(rows);
rowElements.forEach((tr) => tableBody.appendChild(tr));

//tech card container part -- /
const cardHTML = `
<div class="px-2 py-4 flex items-center justify-between border-b border-[#D4D4D4] rounded-[4px]">
  <!-- left side -->
  <div>
    <button class="rounded-[99px] bg-[#EBEBEC] text-[#0A0A0A] text-[16px] font-bold px-3 py-1">Tech Sector</button>

    <!-- second part -->
    <div class="text-[#0A0A0A] font-normal text-sm flex justify-between mt-1 items-center">
      <span>Jim Murphy </span>
      <span>
        <svg width="2" height="23" viewBox="0 0 2 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33331 0V23" stroke="#D4D4D4" />
        </svg>
      </span>
      <span> 123% ROI </span>
      <img src="./../assests/search-result/startup.png" class="h-[31px] w-[30px]" alt="" />
    </div>
    <!-- third part -->
    <p class="text-[#686868] font-normal text-sm mt-3">85% Accuracy , 73 ratings</p>
    <p class="text-[#686868] font-normal text-sm mt-2">
      Bank of America, 3 years <br />
      Tech, Oil & Gas, Util Coverage <br />
      Mega and larger caps
    </p>
  </div>

  <!-- right side -->
  <div class="space-y-[7.59px]">
    <svg width="156" height="68" viewBox="0 0 156 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 67.4032L27.5613 39.6346L52.9152 53.1567L78.5106 1L104.106 26.5954L129.701 13.7977L155.297 53.1567" stroke="#467599" stroke-width="0.965864" />
      <path d="M1.24219 66.9204L27.562 13.7979L52.9159 26.1126L78.2699 39.8762L104.107 53.3983L129.702 39.8762L155.539 26.1126" stroke="#E2E2E2" stroke-width="0.965864" />
    </svg>

    <div class="flex items-center gap-[10.12px]">
      <button class="cursor-default text-[#4F4F4F] font-normal text-[10px] flex items-center gap-[5.06px]">
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.0237427" y="0.264771" width="13.2806" height="5.05929" fill="#467599" />
        </svg>
        <p>Analyst</p>
      </button>
      <button class="cursor-default text-[#4F4F4F] font-normal text-[10px] flex items-center gap-[5.06px]">
        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.0593262" y="0.264771" width="13.2806" height="5.05929" fill="#E2E2E2" />
        </svg>
        <p>SP500</p>
      </button>
    </div>
  </div>
</div>
`;
// Append the card three times
for (let i = 0; i < 3; i++) {
  techCardContainer.innerHTML += cardHTML;
}

// Remove the border-b from the last card
const allCards = techCardContainer.querySelectorAll("div.border-b");
if (allCards.length > 0) {
  allCards[allCards.length - 1].classList.remove("border-b");
}

// todd cruset card goes here --

const toddCrusetCard = `
<div class="bg-[#FFF] py-3 flex items-center gap-[42px] px-2 mt-6">
          <!-- part 1  -->
          <div class="flex items-center w-fit">
            <!-- left one  -->
            <div class="mr-[15px]">
              <!-- heading part  -->
              <div class="flex items-center gap-6 justify-between">
                <button
                  class="text-[#2E2A47] font-bold text-[16px] bg-[#C2EFEB] px-3 py-[6px] rounded-[4px]"
                >
                  Todd Crueset
                </button>
                <div class="flex items-center gap-2">
                  <p class="text-[12px] font-semibold text-[#467599]">
                    #1
                    <span
                      class="text-[#4EABA3] inline-flex font-normal  items-center"
                      >(<span class="inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="9"
                          viewBox="0 0 8 9"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2_580)">
                            <path
                              d="M7.1418 3.43251C7.14091 3.4316 7.14 3.43071 7.13909 3.4298L4.34228 0.629312C4.32006 0.60721 4.2955 0.58758 4.26906 0.570746L4.18853 0.526817L4.13362 0.508507H4.09334C4.03164 0.497164 3.96837 0.497164 3.90664 0.508507H3.87004H3.82611L3.76387 0.541454C3.72919 0.560295 3.69717 0.583684 3.66869 0.611003L0.860893 3.4298C0.672873 3.61632 0.671654 3.91997 0.858182 4.10799C0.859074 4.1089 0.859983 4.10979 0.860893 4.1107C1.05042 4.29153 1.34859 4.29153 1.53814 4.1107L3.2111 2.44139C3.28328 2.37062 3.39918 2.37176 3.46994 2.44395C3.50287 2.47753 3.52161 2.52249 3.52226 2.56952V8.0204C3.52225 8.28526 3.73693 8.49998 4.00179 8.5C4.26666 8.50001 4.48136 8.28533 4.4814 8.02046V8.0204V2.56952C4.48282 2.46845 4.56591 2.38765 4.66698 2.38907C4.714 2.38974 4.75897 2.40846 4.79255 2.44139L6.45821 4.1107C6.64822 4.29386 6.9491 4.29386 7.13911 4.1107C7.32713 3.92417 7.32835 3.62053 7.1418 3.43251Z"
                              fill="#4EABA3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_580">
                              <rect
                                width="8"
                                height="8"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg> </span
                      >3)</span
                    >
                  </p>

                  <img src="./../assests/search-result/startup.png" alt="" />
                  <img src="./../assests/search-result/cooking.png" alt="" />
                </div>
              </div>
              <!-- little title  -->
              <p
                class="px-3 text-[#686E80] font-normal text-[8px] leading-[18px]"
              >
                Wall St Analyst
              </p>
              <!-- list part --  -->
              <div>
                <label
                  for=""
                  class="text-[12px] font-semibold text-[#2E2A47] leading-[24px]"
                  >Wells Fargo, 5 years</label
                >
                <ul
                  class="text-[12px] font-normal list-disc ml-5 text-[#686E80] leading-[24px]"
                >
                  <li>Tech, Oil & Gas, Util Coverage</li>
                  <li>Growth and dividend strategy</li>
                  <li>Best picks: SBUX: '22, OXY: ‘21, DIS '24</li>
                </ul>
              </div>
            </div>
            <!-- line svg  -->
            <svg
              width="6"
              height="121"
              viewBox="0 0 6 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L2.99999 118"
                stroke="#E2E2E2"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>

            <!-- middle one -  -->
            <div class="ml-[22px]">
              <!-- head title  -->
              <h2 class="text-[16px] font-bold text-[#2E2A47]">
                12% Return with 85% accuracy
              </h2>

              <!-- table & chart  -->
              <div class="mt-[10px] flex items-center gap-[16px]">
                <table class="w-full border-collapse text-left">
                  <thead>
                    <tr class="border-b text-right border-[#E0E0E0]">
                      <th
                        class="px-3 py-1 text-[#686E80] text-[12px] font-normal"
                      ></th>
                      <th
                        class="px-3 py-1 text-[#686E80] text-[12px] font-normal"
                      >
                        1 year
                      </th>
                      <th
                        class="px-3 py-1 text-[#686E80] text-[12px] font-normal"
                      >
                        5 year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="px-3 py-1 text-[#2E2A47] text-[12px] font-semibold"
                      >
                        IRR
                      </td>
                      <td
                        class="px-3 py-1 text-[#2E2A47] text-[12px] text-right font-semibold"
                      >
                        12.60%
                      </td>
                      <td
                        class="px-3 py-1 text-[#2E2A47] text-[12px] text-right font-semibold"
                      >
                        11.3%
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-3 py-1 text-[#686E80] text-[12px] font-normal"
                      >
                        vs SP500
                      </td>
                      <td
                        class="px-3 py-1 text-[#686E80] text-[12px] text-right font-normal"
                      >
                        45.30%
                      </td>
                      <td
                        class="px-3 py-1 text-[#686E80] text-[12px] text-right font-normal"
                      >
                        40.8%
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-3 py-1 text-[#686E80] text-[12px] font-normal"
                      >
                        Volatility
                      </td>
                      <td
                        class="px-3 py-1 text-[#686E80] text-right text-[12px] font-normal"
                      >
                        1.5
                      </td>
                      <td
                        class="px-3 py-1 text-[#686E80] text-[12px] text-right font-normal"
                      >
                        1.2
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="156"
                    height="68"
                    viewBox="0 0 156 68"
                    fill="none"
                  >
                    <path
                      d="M1 67.4032L27.5613 39.6346L52.9152 53.1567L78.5106 1L104.106 26.5954L129.701 13.7977L155.297 53.1567"
                      stroke="#467599"
                      stroke-width="0.965864"
                    />
                    <path
                      d="M1.24219 66.9204L27.562 13.7979L52.9159 26.1126L78.2699 39.8762L104.107 53.3983L129.702 39.8762L155.539 26.1126"
                      stroke="#E2E2E2"
                      stroke-width="0.965864"
                    />
                  </svg>
                  <div class="flex items-center gap-[10.12px] mt-[7.59px]">
                    <button
                      class="text-[#4F4F4F] text-[10px] font-normal flex items-center gap-[5.06px] cursor-default"
                    >
                      <svg
                        width="14"
                        height="6"
                        viewBox="0 0 14 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0237122"
                          y="0.264771"
                          width="13.2806"
                          height="5.05929"
                          fill="#467599"
                        />
                      </svg>
                      <span> Analyst </span>
                    </button>
                    <button
                      class="text-[#4F4F4F] text-[10px] font-normal flex items-center gap-[5.06px] cursor-default"
                    >
                      <svg
                        width="14"
                        height="6"
                        viewBox="0 0 14 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.0592957"
                          y="0.264771"
                          width="13.2806"
                          height="5.05929"
                          fill="#E2E2E2"
                        />
                      </svg>

                      <span> SP500 </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- part 2  -->
          <div class="flex-grow">
            <!-- heading with icon  -->
            <div class="flex items-center justify-between">
              <h3 class="text-[#2E2A47] text-[16px] font-bold">73 Ratings</h3>
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.66667 14.6667C6.66667 10.9753 9.16241 7.87435 12.5493 6.94642C12.196 6.4955 12 5.94055 12 5.33332C12 3.86666 13.2 2.66666 14.6667 2.66666C16.1333 2.66666 17.3333 3.86666 17.3333 5.33332C17.3333 5.94534 17.1341 6.50424 16.7756 6.95706C20.0627 7.89792 22.4465 10.9804 22.6523 14.5047C22.2228 14.4357 21.7823 14.4 21.3333 14.4C16.7677 14.4 13.0667 18.1011 13.0667 22.6667C13.0667 23.5997 13.2213 24.4967 13.5063 25.3333H11.4H4L6.18667 19.8533C6.50667 19.0667 6.66667 18.2267 6.66667 17.3867V14.6667ZM16.0575 29.0311C15.3445 28.4395 14.7327 27.7304 14.2515 26.9335H11.4658C11.8698 28.3196 13.1505 29.3333 14.6665 29.3333C15.1645 29.3333 15.6349 29.2255 16.0575 29.0311ZM28 22.6667C28 26.3485 25.0152 29.3333 21.3333 29.3333C17.6515 29.3333 14.6667 26.3485 14.6667 22.6667C14.6667 18.9848 17.6515 16 21.3333 16C25.0152 16 28 18.9848 28 22.6667ZM17.3333 23.4667H20.5333V26.6667H22.1333V23.4667H25.3333V21.8667H22.1333V18.6667H20.5333V21.8667H17.3333V23.4667Z"
                    fill="#467599"
                  />
                </svg>
              </button>
            </div>
            <!-- card -  -->
            <ul
              class="bg-[#C2EFEB] text-[#2E2A47] grid grid-cols-3 text-[12px] font-normal leading-normal w-fit mt-[12.6px] rounded-[4px] p-3 items-start gap-x-[15px] gap-y-[8px]"
            >
              <li>Oct 3</li>
              <li>AAPL</li>
              <li>Strong Buy</li>
              <li>Oct 1</li>
              <li>NVDA</li>
              <li>Buy</li>
              <li>Sep 12</li>
              <li>CSCO</li>
              <li>Strong Buy</li>
              <li>+65 more</li>
            </ul>
          </div>
        </div>
`;
for (let i = 0; i < 8; i++) {
  toddCruesetContainer.innerHTML += toddCrusetCard;
}

//Seo text box button
const seoButtonTexts = [
  "Market Analysis",
  "Investment Returns",
  "Financial Insights",
  "Market Trends",
  "High Returns",
  "New Stock rates",
];

seoButtonTexts.forEach((text) => {
  const btn = `<button class="text-[12px] font-normal font-['Inter'] px-2 py-1 bg-[#C2EFEB] rounded-[4px] text-[#686868]" >
                  ${text}
                </button>`;

  seoTextBoxBtnContainer.innerHTML += btn;
});
