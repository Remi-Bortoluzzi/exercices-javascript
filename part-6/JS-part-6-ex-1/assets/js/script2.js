const years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028','2029', '2030'];
let info = "Mes chat s'appellent ";
const paragraphe = document.querySelector('p');

for (let i = 0; i < years.length; i++) {
    let splitYears = years[i].split(',');
    if (splitYears == '2020', '2024', '2028') {
      splitYears.style.color = 'red';
    } 
  }