const float = `

  <div class="vitals">
    <img src="${customers.results[0].picture.large}">
    <h2>${customers.results[0].name.first} ${customers.results[0].name.last}</h2>
    <h4>${customers.results[0].email}</h4>
      <p>${customers.results[0].location.city},
          ${customers.results[0].location.state}
          ${customers.results[0].location.postcode}</p>
          <p>${customers.results[0].phone}</p>
          <div id="ssn">
          <p>${customers.results[0].id.value}</p></div>
        </div>
  `;

document.querySelector('.maleframe').innerHTML = float

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
