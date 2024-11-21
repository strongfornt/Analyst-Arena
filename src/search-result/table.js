
  
 
  
  // Loop through the rows array and add rows dynamically
 export function tableRow(rows) {
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
  
 

  
  
  