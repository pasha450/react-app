"use strict";

$(document).ready(function () {


  $(".toggle-btn").on("click", function () {
    $("body").toggleClass("collapse-sidebar");
  });
  $(".menu-overlay,.mobile-menu-close").on("click", function () {
    $("body").removeClass("collapse-sidebar");
  });

  /*>>>> input file <<<<<< */
  $("#FileInput").on("change", function (e) {
    var labelVal = $(".file-title").text();
    var oldfileName = $(this).val();
    var fileName = e.target.value.split("\\").pop();

    if (oldfileName == fileName) {
      return false;
    }

    if (fileName) {
      if (fileName.length > 10) {
        $(".profile-img .file-title").text(fileName);
      } else {
        $(".profile-img .file-title").text(fileName);
      }
    } else {
      $(".profile-img .file-title").text(labelVal);
    }
  });
});
