export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);
  // Step 1: Access the current URL
  //   let currentURL = window.location.href;

  //   // Step 2: Check if there is a hash
  //   if (window.location.hash) {
  //     // Step 3: Remove the hash
  //     window.history.pushState("", document.title, currentURL.split("#")[0]);
  //   }

  // Scroll to Top of the Page
  scroll(0, 0);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  }
}
