const newsContainer =
document.getElementById("newsContainer");

const cyberNews = [

{
title:"Critical Windows Vulnerability",
desc:"Microsoft releases emergency patch for actively exploited flaw."
},

{
title:"Banking Phishing Campaign",
desc:"Thousands of users targeted through fake banking login pages."
},

{
title:"New Ransomware Variant",
desc:"Researchers discover advanced encryption techniques."
},

{
title:"Cloud Security Alert",
desc:"Misconfigured cloud storage exposed sensitive records."
},

{
title:"Zero-Day Exploit Found",
desc:"Security teams investigate attacks using unknown vulnerabilities."
},

{
title:"Credential Theft Surge",
desc:"Phishing kits targeting enterprise users increasing rapidly."
}

];

function loadNews(){

newsContainer.innerHTML="";

cyberNews.forEach(news=>{

const card=document.createElement("div");

card.classList.add("news-card");

card.innerHTML=`

<h3>${news.title}</h3>

<p>${news.desc}</p>

`;

newsContainer.appendChild(card);

});

}

loadNews();