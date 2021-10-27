/*
Exam One - Batch 364
Total 60 (40 + 20) Marks
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine studentss

*/
const studentUL = document.getElementById('student-list');
const singleStudentUL = document.getElementById('student-details');
const nothing =  document.getElementById('nothing-details');

function showPage() {
    data.forEach( function (singledata){
      singleStudentUL.textContent='';
      nothing.textContent='';
        // console.log(singledata.picture.large);
        const img = (singledata.picture.large);
        const li = document.createElement("li");
        li.classList.add("student-item");
        li.innerHTML = `
        <div class="student-details">
          <img class="avatar" src=${img}>
          <h3>${singledata.name.title} ${singledata.name.first} ${singledata.name.last} </h3>
          <span class="email">${singledata.email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${singledata.registered.date}</span>
        </div>`
     studentUL.appendChild(li);
     
    });
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

/*
(Bonus Task)
Create the `searchPage` function
This function will search and display results from all students
Only the filtered result will be displayed in the view
*/


function searchPeople() {
  //search then make input field blank
  const searchID = document.getElementById("search");
  const searchText = searchID.value;
  searchID.value = '';

  //if no results found
  if (searchText === '') {
    studentUL.textContent=''
    singleStudentUL.textContent='';
    nothing.textContent='';
    const h1 = document.createElement("h1");
    h1.classList.add("student-item");
    h1.innerText = 'Nothing Found';
   nothing.appendChild(h1);

  } else {
    studentUL.textContent=''
    singleStudentUL.textContent='';
    nothing.textContent='';
    let result = data.filter(datas => datas.name.first == searchText);
    // console.log(result);
    result.forEach( function (resultdata){
      // console.log(resultdata.name.first);
      const img = resultdata.picture.large;
      const li = document.createElement("li");
      li.classList.add("student-item");
      li.innerHTML = `
      <div class="student-details">
        <img class="avatar" src=${img}>
        <h3>${resultdata.name.title} ${resultdata.name.first} ${resultdata.name.last} </h3>
        <span class="email">${resultdata.email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${resultdata.registered.date}</span>
      </div>`
      singleStudentUL.appendChild(li);
   
  });
}
};


// Call functions
showPage() ;