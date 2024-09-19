const staffDatabase = [
      {
        companyName: "GoMyCode",
        image: "https://example.com/images/staff1.jpg",
        name: "John Doe",
        position: "Software Engineer",
        id: 101,
        joinDate: "2020-01-15",
        expirationDate: "2025-01-15",
        bloodGroup: "O+",
        companyWeb: "Gomycode.com"
      },
      {
        companyName: "GoMyCode",
        image: "https://example.com/images/staff2.jpg",
        name: "Jane Smith",
        position: "Product Manager",
        id: 102,
        joinDate: "2019-06-01",
        expirationDate: "2024-06-01",
        bloodGroup: "A+",
        companyWeb: "Gomycode.com"
      },
      {
        companyName: "GoMyCode",
        image: "https://example.com/images/staff3.jpg",
        name: "Emily Johnson",
        position: "UX Designer",
        id: 103,
        joinDate: "2021-03-22",
        expirationDate: "2026-03-22",
        bloodGroup: "B+",
        companyWeb: "Gomycode.com"
      }
    ];
  
//   console.log(staffDatabase);
let newDom = document.getElementById("dom");
  
  for (let i = 0; i < staffDatabase.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "idBody");

    let companyTitle = document.createElement("h3");
    companyTitle.setAttribute("class", "headerTitle");
    companyTitle.innerHTML = staffDatabase[i].companyName;
    newDiv.appendChild(companyTitle)

  }