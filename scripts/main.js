const staffDatabase = [
  {
    // image: "https://example.com/images/staff1.jpg",
    name: "John Doe",
    position: "Software Engineer",
    id: 101,
    joinDate: "2020-01-15",
    expirationDate: "2025-01-15",
    bloodGroup: "O+",
    companyWeb: "Gomycode.com"
  },

  {
    // image: "https://example.com/images/staff2.jpg",
    name: "Jane Smith",
    position: "Product Manager",
    id: 102,
    joinDate: "2019-06-01",
    expirationDate: "2024-06-01",
    bloodGroup: "A+"
  },
  {
    // image: "https://example.com/images/staff3.jpg",
    name: "Emily Johnson",
    position: "UX Designer",
    id: 103,
    joinDate: "2021-03-22",
    expirationDate: "2026-03-22",
    bloodGroup: "B+"
  },
  {
    // image: "https://example.com/images/staff3.jpg",
    name: "Emily Johnson",
    position: "UX Designer",
    id: 103,
    joinDate: "2021-03-22",
    expirationDate: "2026-03-22",
    bloodGroup: "B+"
  }
]


// grabbing form by id
// let fullname = document.getElementById("name").value;
// let position = document.getElementById("position").value;
// let idNumber = document.getElementById("idNumber").value;
// let joinDate = document.getElementById("joinDate").value;
// let expired = document.getElementById("expDate").value;
// let bloodGroup = document.getElementById("blood").value;
// let clickBtn = document.getElementById("summit").value;


let newForm = document.getElementById("summitForm")
console.log(newForm)

// console.log(fullname)
function pushToArray(e) {
  e.preventDefault();
  console.log("form submit")
  const newObj =  {
    // image: "https://example.com/images/staff2.jpg",
    name: newForm.name.value,
    position: newForm.position.value,
    id: newForm.idNumber.value,
    joinDate: newForm.joinDate.value,
    expirationDate: newForm.expDate.value,
    bloodGroup: newForm.blood.value

  }

  staffDatabase.push(newObj)
  addCards()

  
}

newForm.addEventListener("submit", pushToArray);


function addCards() {
  let newDom = document.getElementById("dom");
  
  // Clear the cards to avoid duplicate
  newDom.innerHTML = "";
  for (let i = 0; i < staffDatabase.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "idBody");

    
    let companyTitle = document.createElement("h3");
    companyTitle.setAttribute("class", "headerTitle");
    companyTitle.innerHTML = staffDatabase[i].companyName;
    newDiv.appendChild(companyTitle)

    let companyImage = document.createElement("img");
    companyImage.setAttribute("class", "headImage");
    companyImage.src = staffDatabase[i].image
    newDiv.appendChild(companyImage)


    newDom.appendChild(newDiv)
    
  }

}

