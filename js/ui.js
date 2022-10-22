document.addEventListener("DOMContentLoaded", function () {
    //Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "left" });
    // Add Recipes
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });

  
  });
//Recipe Filter by category title and have a show all feature. 
  const categoryTitle = document.querySelectorAll('.category-title');
  const allRecipes = document.querySelectorAll('.all');
  
  for(let i = 0; i < categoryTitle.length; i++){
      categoryTitle[i].addEventListener('click', filterRecipes.bind(this, categoryTitle[i]));
  }
  
  function filterRecipes(item){
      changeActivePosition(item);
      for(let i = 0; i < allRecipes.length; i++){
          if(allRecipes[i].classList.contains(item.attributes.id.value)){
              allRecipes[i].style.display = "block";
          } else {
              allRecipes[i].style.display = "none";
          }
      }
  }
  
  function changeActivePosition(activeItem){
      for(let i = 0; i < categoryTitle.length; i++){
          categoryTitle[i].classList.remove('active');
      }
      activeItem.classList.add('active');
  };

  
//Table Filter Function
function tableFilter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("coffeeTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
