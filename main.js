function populate(id){
const template2 = `<section>
  <div class="object">
    <img src="${customers.results[id].picture.large}">
    <h1>${customers.results[id].name.first} ${customers.results[id].name.last}</h1>
  </div>
  <div class="content">
  <p>${customers.results[id].location.city},
            ${customers.results[id].location.state}
           ${customers.results[id].location.postcode}</p>
        <p>${customers.results[id].phone}</p>
       <div class="ssn">
     <p>${customers.results[id].id.value}</p></div>
     </div>
  </div>
  </section>`;
  document.querySelector(".directory").innerHTML = template2;
  document.write(template2);
  console.log(template2);
}
let i=0;
while(i<customers.results.length){
  // let name = document.querySelector(".object");
    populate(i);
    i++;
  }


// function populate(id){
// const float = `
//
// <section>
//   <div class="vitals">
//     <img src="${customers.results[id].picture.large}">
//     <h2>${customers.results[id].name.first} ${customers.results[id].name.last}</h2>
//     <h4>${customers.results[id].email}</h4>
//       <p>${customers.results[id].location.city},
//           ${customers.results[id].location.state}
//           ${customers.results[id].location.postcode}</p>
//           <p>${customers.results[id].phone}</p>
//           <div id="ssn">
//           <p>${customers.results[id].id.value}</p></div>
//         </div>
//         </section>
//   `;
//
//       document.querySelector('.directory').innerHTML = float
//         document.write(float);
//           console.log(float);
//
// }
// let i=0;
// while(i<customers.results.length){
//   // let name = document.querySelector('.vitals');
//     populate(i);
//     i++;
//   }


  // document.querySelector(".directory").innerHTML = template2;
  // document.write(template2);
  // console.log(template2);

// photo ids are gender specific
// function (){
//  if gender ="male";
// }

// function out whether male female?

// const template = ` <article> <h2>${blogPost.title}</h2> <div class="meta">
// <span class="date">Written on ${blogPost.meta.date}</span> </div> <div
// class="post"> <img src="${blogPost.post.image}"> ${blogPost.post.content}
// </div> <div class="site"> Part of this content was pulled from <a
// href="${blogPost.site.url}">${blogPost.site.name}</a> </div> </article> `; // //
// Insert the template onto our page
// document.querySelector('.male_frame').innerHTML = float
