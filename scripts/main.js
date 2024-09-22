const staffDatabase = [
  {
    image: "https://img.freepik.com/free-photo/smiling-elegant-businessman_23-2147626595.jpg?ga=GA1.1.1431077215.1701617831&semt=ais_hybrid",
    name: "John Doe",
    position: "Software Engineer",
    id: 101,
    joinDate: "2020-01-15",
    expirationDate: "2025-01-15",
    bloodGroup: "O+",
    companyWeb: "Gomycode.com",
    companyName: "GOMYCODE"
  },

  {
    image: "https://img.freepik.com/free-photo/executive-sitting-desk_23-2147626271.jpg?ga=GA1.1.1431077215.1701617831&semt=ais_hybrid",
    name: "Jane Smith",
    position: "Product Manager",
    id: 102,
    joinDate: "2019-06-01",
    expirationDate: "2024-06-01",
    bloodGroup: "A+",
    companyName: "GOMYCODE"
  },
  {
    image: "https://img.freepik.com/free-photo/manager-business-attire_1098-13834.jpg?ga=GA1.1.1431077215.1701617831&semt=ais_hybrid",
    name: "Emily Johnson",
    position: "UX Designer",
    id: 103,
    joinDate: "2021-03-22",
    expirationDate: "2026-03-22",
    bloodGroup: "B+",
    companyName: "GOMYCODE"
  },
  {
    image: "https://img.freepik.com/premium-photo/man-is-smiling-while-holding-tablet-cup-coffee_1030879-88209.jpg?ga=GA1.1.1431077215.1701617831&semt=ais_hybrid",
    name: "Emily Johnson",
    position: "UX Designer",
    id: 103,
    joinDate: "2021-03-22",
    expirationDate: "2026-03-22",
    bloodGroup: "B+",
    companyName: "GOMYCODE"
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
    companyImage.src = staffDatabase[i].image;
    newDiv.appendChild(companyImage);

    let staffName =document.createElement("h2");
    staffName.setAttribute("class", "workerName");
    staffName.innerHTML =staffDatabase[i].name;
    newDiv.appendChild(staffName);

    let staffOccupation = document.createElement("h4");
    staffOccupation.setAttribute("class", "staffPosition");
    staffOccupation.innerHTML = staffDatabase[i].position;
    newDiv.appendChild(staffOccupation);

    let idNum = document.createElement("p");
    idNum.innerHTML = "iD No: "+ staffDatabase[i].id;
    newDiv.appendChild(idNum);

    let idDate = document.createElement("p");
    idDate.innerHTML = "iD Dt: "+ staffDatabase[i].joinDate;
    newDiv.appendChild(idDate);

    let idEx = document.createElement("p");
    idEx.innerHTML = "iD Ex: "+ staffDatabase[i].expirationDate;
    newDiv.appendChild(idEx);
    
    let blood = document.createElement("p");
    blood.innerHTML = "iD No: "+ staffDatabase[i].bloodGroup;
    newDiv.appendChild(blood);

    let borderBelow = document.createElement("div");
    borderBelow.setAttribute("class", "lineBelow");
    newDiv.appendChild(borderBelow)


    newDom.appendChild(newDiv);
    
  }

}



