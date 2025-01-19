// banner , main working 

const button = document.querySelector(".button")
let u = false

button.addEventListener("click", () => {
 
    if(u){
      let links =  document.querySelector(".buttonLinks")
      links.classList.add("display")
      u = !u
    }else{
    let  links =  document.querySelector(".buttonLinks")
      links.classList.remove("display")
      links.classList.add("buttonLinks")
  u = !u
    }
} )

// cards 


const service = [{
    "photo":"https://img.freepik.com/free-vector/butterfly-colorful-logo-template_361591-1587.jpg?t=st=1737253541~exp=1737257141~hmac=834f99fdfc24929ebcbdf183f9907b6a3b3e947e67d5c697d00b86401e884e2f&w=740",
    "service": "Logo Design",
    "description": "Professional logo design services to create a unique and memorable brand identity.",
    "price": "$100 - $500",
    "contact": "email@example.com"
},
{
    "photo":"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    "service": "Web Development",
    "description": "Custom web development services to build responsive and functional websites.",
    "price": "$500 - $3000",
    "contact": "webdev@example.com"
},
{   "photo":"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/06/whats-the-difference-between-photo-editing-and-graphic-design.jpg",
    "service": "Graphic Design",
    "description": "Creative graphic design services for brochures, posters, social media graphics, and more.",
    "price": "$50 - $300",
    "contact": "graphicdesign@example.com"
},
{
    "photo":"https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
    "service": "Mobile App Development",
    "description": "Developing user-friendly and high-performing mobile applications for both Android and iOS platforms.",
    "price": "$1000 - $5000",
    "contact": "appdev@example.com"
},
{   
    "photo":"https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp",
    "service": "SEO Optimization",
    "description": "Boost your website's visibility on search engines with expert SEO services.",
    "price": "$200 - $1000",
    "contact": "seo@example.com"
},
{   

    "photo":"https://media.istockphoto.com/id/902787158/photo/woman-hands-with-pen-writing-on-notebook-in-the-office.jpg?s=612x612&w=0&k=20&c=AFrTZ8bU1XrEifN4GU57k9PK8HYd3a3whGB_0pFp29E=",
    "service": "Content Writing",
    "description": "High-quality content writing services for blogs, articles, website content, and more.",
    "price": "$30 - $200",
    "contact": "content@example.com"
},
{
    "photo":"https://www.adobe.com/express/learn/blog/media_114b76a23afe9ee97a6d31503ae2ce6edf0140dd2.jpeg?width=1200&format=pjpg&optimize=medium",
    "service": "Social Media Management",
    "description": "Manage and grow your social media presence with professional social media management services.",
    "price": "$150 - $800",
    "contact": "socialmedia@example.com"
},
{   
    "photo":"https://media.istockphoto.com/id/1270608484/photo/video-editing-process.jpg?s=612x612&w=0&k=20&c=Z_TdtEBAX4irabwj7jAzG3AzgQEXcs-emgg9a09lbWg=",
    "service": "Video Editing",
    "description": "Professional video editing services for marketing videos, YouTube content, and more.",
    "price": "$100 - $600",
    "contact": "videoedit@example.com"
},
{
    "photo":"https://media.istockphoto.com/id/96810440/photo/amateur-photographer.jpg?s=612x612&w=is&k=20&c=w0KtNY86e6F4nDPSf0eVe9VVsl6_zWhxTnzc7CsmIQg=",
    "service": "Photography",
    "description": "Capture stunning photographs for events, products, and more with our professional photography services.",
    "price": "$200 - $1000",
    "contact": "photo@example.com"
},
{
    "photo":"https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
    "service": "Digital Marketing",
    "description": "Comprehensive digital marketing services to increase your online presence and engagement.",
    "price": "$300 - $2000",
    "contact": "marketing@example.com"
}
]


for(let i of service){
     console.log(i.service)
    const services = document.getElementById("services")
     localStorage.setItem(`${i.service}`,JSON.stringify(i))
    const div = document.createElement("div")
    div.classList.add("img-container")
     div.innerHTML = `<a href=/html/cards.html?${encodeURIComponent(i.service)}><img class=img src=${i.photo}  /></a>`
     services.appendChild(div)

}