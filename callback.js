var checkForm = function(e)
  {
    var form = (e.target) ? e.target : e.srcElement;
    if(form.firstname.value == "") {
      alert("Please enter your First Name");
      form.firstname.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
    if(form.lastname.value == "") {
      alert("Please enter your Last Name");
      form.lastname.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
    if(form.email.value == "") {
      alert("Please enter a valid Email address");
      form.email.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
    if(form.company.value == "") {
      alert("Please enter Company Name");
      form.company.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
  };


  var modal_init_cb = function() {

    var modalWrapper = document.getElementById("modal_wrapper_cb");
    var modalWindow  = document.getElementById("modal_window_cb");

    var openModal = function(e)
    {
      modalWrapper.className = "overlay";
      var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
      if(overflow > 0) {
        modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
      }
      modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
      modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    var closeModal = function(e)
    {
      modalWrapper.className = "";
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    var clickHandler = function(e) {
      if(!e.target) e.target = e.srcElement;
      if(e.target.tagName == "DIV") {
        if(e.target.id != "modal_window_cb") closeModal(e);
      }
    };

    var keyHandler = function(e) {
      if(e.keyCode == 27) closeModal(e);
    };

    if(document.addEventListener) {
      document.getElementById("modal_open_cb").addEventListener("click", openModal, false);
      document.getElementById("modal_close_cb").addEventListener("click", closeModal, false);
      document.addEventListener("click", clickHandler, false);
      document.addEventListener("keydown", keyHandler, false);
    } else {
      document.getElementById("modal_open_cb").attachEvent("onclick", openModal);
      document.getElementById("modal_close_cb").attachEvent("onclick", closeModal);
      document.attachEvent("onclick", clickHandler);
      document.attachEvent("onkeydown", keyHandler);
    }

  };

  if(document.addEventListener) {
    document.getElementById("modal_feedback").addEventListener("submit", checkForm, false);
    document.addEventListener("DOMContentLoaded", modal_init_cb, false);
  } else {
    document.getElementById("modal_feedback").attachEvent("onsubmit", checkForm);
    window.attachEvent("onload", modal_init_cb);
  }

