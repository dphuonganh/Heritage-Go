// make function for show/hidden password
function show_password() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    var y = document.getElementById("password_button");
    if (y.className === "fas fa-lock") {
        y.className = "fas fa-unlock-alt";
    } else {
        y.className = "fas fa-lock"
    }
}

/* global mHeritageGoService */

// Render Photography Posts
function renderPhoto (image, photoPost, mainContent) {
  mHeritageGoService.getPhoto(image).then(photo => {
      let newPost = photoPost.clone()
      newPost.find('.avatar').attr('src', 'http:'+ photo.account.picture_url)
      newPost.find('.photo-text').html(photo.title[0].content)
      newPost.find('.photo-area-name').html(photo.area_name)
      newPost.find('.heritage-image').attr('src', 'http:' + photo.image_url + '?size=medium')

      if (photo.capture_time) {
        newPost.find('.photo-time').find('span').html(photo.capture_time)
      } else {
        newPost.find('photo-time').remove()
      }
      
      newPost.find('.count-like').html(photo.like_count)
      newPost.find('.count-comment').html(photo.comment_count)
      newPost.find('.count-view').html(photo.view_count)

      newPost.removeAttr('id')
      newPost.removeAttr('hidden')

      newPost.hide().appendTo(mainContent).fadeIn()
      $(window).scrollTop($(window).scrollTop() - 1)
      console.log('Load!')
    })
    .catch(error => {
      console.log(error)
    })
}

function renderPhotos (ignored) {
  let main = $('main')
  mHeritageGoService
    .getPhotos({
      limit: 3,
      offset: ignored
    })
    .then(photos => {
      let post = $('#defaultPost')
      console.log(photos)
      $(photos).each(function () {
        renderPhoto(this, post, main)
      })
    })
    .catch(error => {
      console.log(error)
    })
}

$(function () {
  let ignored = 3
  renderPhotos(ignored)
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(document).height() * 0.95 - $(window).height()) {
      console.log('Scrolled to the bottom !')
      ignored += 1
      renderPhotos(ignored)
    }
  })
})


//Translate
function translate(content, photo) {

  // translate the caption of the photo
  let photoId = "",
      caption = "",
      locale = "";
  let transIcon = content.find($(".translate-icon"));
  $(transIcon).click(function() {
      $(transIcon).removeClass("translate-icon-shake");
  });
  let langChoice = content.find($(".language-choice"));
  $(langChoice).click(function(item) {
      item.preventDefault();
      let lang = item.target.text
      if (lang === "English") {
          locale = "eng";
      } else if (lang === "Vietnamese") {
          locale = 'vie'
      }
      $(transIcon).removeClass("translate-icon");
      $(transIcon).addClass("translate-language");
      $(transIcon).text(lang);
      content.find($(".photo-text")).css("display", "none");
      content.find($(".post-new-text")).css("display", "block");

      let newCaption = content.find($(".post-new-text"));
      newCaption.submit(function(inp) {
          inp.preventDefault();
          let photoId = photo.photo_id;
          let caption = $(newCaption).find($("input")).val();
          mHeritageGoService.suggestPhotoCaption(photoId, caption, locale).catch(error => {
              alert(`${caption}\n${error.status}: ${error.statusText}\nServer is coming soon, wait for the great future!`);
              console.log(error);
          });

          $(transIcon).addClass("translate-icon");
          $(transIcon).addClass("translate-icon-shake");
          $(transIcon).removeClass("translate-language");
          $(transIcon).text("");

          content.find($(".photo-text")).css("display", "block");
          content.find($(".post-new-text")).css("display", "none");
      });
      $(document).click(function(event) {
          if (event.target.tagName.toLowerCase() != 'a' && event.target.tagName.toLowerCase() != 'input' && content.find($(".post-new-text")).prop('style')[0] == 'display') {
              content.find($(".photo-text")).css("display", "block");
              content.find($(".post-new-text")).css("display", "none");
              $(transIcon).addClass("translate-icon");
              $(transIcon).addClass("translate-icon-shake");
              $(transIcon).removeClass("translate-language");
              $(transIcon).text("");
          }
      });
      $(document).scroll(function(event) {
          content.find($(".photo-text")).css("display", "block");
          content.find($(".post-new-text")).css("display", "none");
          $(transIcon).addClass("translate-icon");
          $(transIcon).addClass("translate-icon-shake");
          $(transIcon).removeClass("translate-language");
          $(transIcon).text("");

      });
  });

}

