const Username = document.getElementById("inputbox");
const OutputContainer = document.getElementById("OutputContainer");
const inputboxSearch = document.getElementById("inputboxSearch");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

inputboxSearch.addEventListener("click", function (e) {
  e.preventDefault();
  OutputContainer.style.display = "block";
  image1.src = ` https://github-readme-stats.vercel.app/api/top-langs/?username=${inputbox.value}&langs_count=10`;
  image2.src = `https://github-readme-stats.vercel.app/api?username=${inputbox.value}&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`;
});
