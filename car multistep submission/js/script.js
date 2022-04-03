  var myAge;

  $(document).ready(function () {



      //Searching pop-up functionality
      var percent;
      var needleDegree;
      var outerCircle = document.querySelector("#circle");
      var meter_needle = document.querySelector("#pin");
      var cf = 600;

      function startSpeedooMeter() {
          percent = percent + 1;
          needleDegree = needleDegree + 0.36346153846;
          if ((percent <= 520) && needleDegree <= 100) {
              $(".svg").show();
              $(".congrates").hide();
              // var meter_value = semi_cf - ((percent * semi_cf) / 100);
              outerCircle.setAttribute("stroke-dasharray", percent + "," + cf);
              meter_needle.style.transform = "rotate(" +
                  needleDegree + "deg)";
              //lbl.textContent = percent + "%";
          } else {
              $(".svg").hide();
              $(".congrates").show();
              $("#searchStatus").html("Loan Programs Available in:")
              clearInterval(interval);
          }
      }



      var searchInput = 'search_input';

      $(document).ready(function () {

          var defaultBounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(-33.8902, 151.1759),
              new google.maps.LatLng(-33.8474, 151.2631));

          var input = document.getElementById('search_input');
          var options = {
              bounds: defaultBounds,
              types: ['geocode'],
              componentRestrictions: {
                  country: 'gb'
              }

          };

          autocomplete = new google.maps.places.Autocomplete(input, options);
          autocomplete.setFields(['address_component']);

          // When the user selects an address from the drop-down, populate the
          // address fields in the form.
          autocomplete.addListener('place_changed', fillInAddress);
 function fillInAddress() {
              var place = autocomplete.getPlace();
              var City = place.address_components[4];

              for (var i = 0; i < place.address_components.length; i += 1) {
                  var addressObj = place.address_components[i];
                  for (var j = 0; j < addressObj.types.length; j += 1) {
                      if (addressObj.types[j] === 'postal_town') {
                          City = addressObj.long_name; // confirm that this is the country name
                      }
                      if (addressObj.types[j] === 'postal_code') {
                          postalCode = addressObj.long_name; // confirm that this is the country name
                      } else {
                          postalCode = '';
                      }
                  }
              }
              $(".searching-popup-location").html(City);
              var addressText = $('#search_input').val() + ', ' + postalCode;

              $('#addrMessage').html(addressText);
              $('#address-value').val(addressText);

          }



      });
      $("#search_input").keyup(function () {

          $('#addressSelectionMessage').css({
              opacity: '0'
          });
      });
      $("#search_input").change(function () {
          setTimeout(addressShow, 200);
      });

      function addressShow() {

          $('#addressSelectionMessage').css({
              opacity: '1',
              transition: '.2s',
              top: '82px'
          });
      }




      // where are you looking vehicle
      $('#lookingVehicle').click(function () {
          debugger;
          if ($("#addrMessage").html() == "") {
              $("#erroraddress").text("Begin Typing and Make a Selection");
              $("#search_input").addClass("errorinput");
              $('#search_input').focus();
              $('html, body').animate({
                  scrollTop: ($('#search_input').offset().top - 250)
              }, 500);
              return;

          } else {

              $("#search_input").removeClass("errorinput");
          }
          percent = 0;
          needleDegree = -89;

          interval = setInterval(startSpeedooMeter, 5);

          $('.searching-popup').addClass('button_loader');
          window.setTimeout(function () {
              $('.searching-popup').removeClass('button_loader');
          }, 6000);

      });

      $('#search_input').on('keyup', function () {
          if (this.value.length > 0) {
              $("#erroraddress").text("");
              $("#search_input").removeClass("errorinput");
              return;
          } else {
              $("#erroraddress").text("Begin Typing and Make a Selection");
              $("#search_input").addClass("errorinput");
          }
      });



      //Sleep Function defined
      function sleep(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
      }


      $('.next1_2').click(function () {
          var pgrbar = 2 * 5.56;
          $('#step-1').css('display', 'none');
          $('#step-2').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-2').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);

      });

      $('.next2_3').click(function () {
          var pgrbar = 3 * 5.56;
          $('#step-2').css('display', 'none');
          $('#step-3').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-3').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.next3_4').click(function () {
          var pgrbar = 4 * 5.56;
          $('#step-3').css('display', 'none');
          $('#step-4').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-4').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.next4_5').click(function () {
          var pgrbar = 5 * 5.56;
          $('#step-4').css('display', 'none');
          $('#step-5').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-5').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.next5_6').click(function () {
          var pgrbar = 6 * 5.56;
          $('#step-5').css('display', 'none');
          $('#step-6').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-6').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });






      $('.next7_8').click(function () {
          if ($("#addrMessage").html() == "") {
              $("#erroraddress").text("Begin Typing and Make a Selection");
              $("#search_input").addClass("errorinput");
              return;

          }
          var pgrbar = 8 * 5.56;
          sleep(6000).then(() => {
              $('#step-7').css('display', 'none');
              $('#step-8').css('display', 'block');
              $('.progress-bar').width(pgrbar + '%');
              $('html, body').animate({
                  scrollTop: $('.app-container').offset().top
              }, 100);
          });
          $('#step-8').removeClass("slideInLeft").addClass("slideInRight");
      });



      $('.next8_9').click(function () {
          var pgrbar = 9 * 5.56;
          $('#step-8').css('display', 'none');
          $('#step-9').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-9').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.next9_10').click(function () {
          var pgrbar = 10 * 5.56;
          $('#step-9').css('display', 'none');
          $('#step-10').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-10').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.next10_11').click(function () {
          var pgrbar = 11 * 5.56;
          $('#step-10').css('display', 'none');
          $('#step-11').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-11').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.next11_12').click(function () {
          var pgrbar = 12 * 5.56;
          $('#step-11').css('display', 'none');
          $('#step-12').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-12').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.next12_13').click(function () {
          var pgrbar = 13 * 5.56;
          $('#step-12').css('display', 'none');
          $('#step-13').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-13').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.next13_14').click(function () {
          var pgrbar = 14 * 5.56;
          $('#step-13').css('display', 'none');
          $('#step-14').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-14').removeClass("slideInLeft").addClass("slideInRight");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.next14_15').click(function () {

          $('#step-15').removeClass("slideInLeft").addClass("slideInRight");
          monthlyIncome = document.getElementById('monthlyIncome').value;
          if (monthlyIncome == '') {
              var msg = 'Required';
              $('#errormonthlyIncome').text(msg);
              $('#monthlyIncome').addClass('errorinput');
              $('#monthlyIncome').focus();
              $('#step-14').css('display', 'block');
              $('#step-15').css('display', 'none');
              $('html, body').animate({
                  scrollTop: ($('#monthlyIncome').offset().top - 300)
              }, 500);


          } else {
              var msg = '';
              var pgrbar = 15 * 5.56;
              $('#step-14').css('display', 'none');
              $('#step-15').css('display', 'block');
              $('.progress-bar').width(pgrbar + '%');
              $('#errormonthlyIncome').text(msg);
              $('#monthlyIncome').removeClass('errorinput');
              $('html, body').animate({
                  scrollTop: $('.app-container').offset().top
              }, 100);
          }
      });

      $('#monthlyIncome').on('keyup', function () {
          if (this.value.length > 0) {
              var msg = '';
              $('#errormonthlyIncome').text(msg);
              $('#monthlyIncome').removeClass('errorinput');
              return;
          } else {
              var msg = 'Required';
              $('#errormonthlyIncome').text(msg);
              $('#monthlyIncome').addClass('errorinput');
          }
      });
      $('input[type="number"]').on('keyup', function (e) {
          if (/\D/g.test(this.value)) {
              // Filter non-digits from input value.
              this.value = this.value.replace(/\D/g, '');
          }
      });

      $('.next15_16').click(function () {

          $('#step-16').removeClass("slideInLeft").addClass("slideInRight");
          companyname1 = document.getElementById('companyname1').value;
          jobtitle1 = document.getElementById('jobtitle1').value;

          if (companyname1 == '') {
              var msg = 'This field is required';
              $('#errorcompany').text(msg);
              $('#companyname1').addClass('errorinput');
              $('#companyname1').focus();
              $('#step-15').css('display', 'block');
              $('#step-16').css('display', 'none');
              $('html, body').animate({
                  scrollTop: ($('#companyname1').offset().top - 300)
              }, 500);

          } else if (jobtitle1 == '') {
              var msg = 'This field is required';
              $('#errortitle').text(msg);
              $('#jobtitle1').addClass('errorinput');
              $('#jobtitle1').focus();
              $('#step-15').css('display', 'block');
              $('#step-16').css('display', 'none');
              $('html, body').animate({
                  scrollTop: ($('#jobtitle1').offset().top - 300)
              }, 500);


          } else {

              document.getElementById("level15Value").value = "Company Name : " + companyname1 + " and Job Titel : " + jobtitle1;
              var msg = '';
              var pgrbar = 16 * 5.56;
              $('#step-15').css('display', 'none');
              $('#step-16').css('display', 'block');
              $('.progress-bar').width(pgrbar + '%');
              $('#errorcompany').text(msg);
              $('#errortitle').text(msg);
              $('#companyname1').removeClass('errorinput');
              $('#jobtitle1').removeClass('errorinput');
              $('html, body').animate({
                  scrollTop: $('.app-container').offset().top
              }, 100);
          }

      });

      $('#companyname1').on('keyup', function () {
          if (this.value.length > 0) {
              var msg = '';
              $('#errorcompany').text(msg);
              $('#companyname1').removeClass('errorinput');
              return;
          } else {
              var msg = 'This field is required';
              $('#errorcompany').text(msg);
              $('#companyname1').addClass('errorinput');
          }
      });
      $('#jobtitle1').on('keyup', function () {
          if (this.value.length > 0) {
              var msg = '';
              $('#errortitle').text(msg);
              $('#jobtitle1').removeClass('errorinput');
              return;
          } else {
              var msg = 'This field is required';
              $('#errortitle').text(msg);
              $('#jobtitle1').addClass('errorinput');
          }
      });


      $('.next17_18').click(function () {
          $('#step-18').removeClass("slideInLeft").addClass("slideInRight");
          firstName = document.getElementById('firstName').value;
          lastName = document.getElementById('lastName').value;

          if (firstName == '') {
              var msg = 'This field is required';
              $('#fnameerror').text(msg);
              $('#firstName').addClass('errorinput');
              $('#step-17').css('display', 'block');
              $('#step-18').css('display', 'none');
              $('html, body').animate({
                  scrollTop: ($('#firstName').offset().top - 300)
              }, 500);


          } else if (lastName == '') {
              var msg = 'This field is required';
              $('#lnameerror').text(msg);
              $('#lastName').addClass('errorinput');
              $('#step-17').css('display', 'block');
              $('#step-18').css('display', 'none');
              $('html, body').animate({
                  scrollTop: ($('#lastName').offset().top - 300)
              }, 500);


          } else {
              var msg = '';
              var pgrbar = 18 * 5.56;
              $('#step-17').css('display', 'none');
              $('#step-18').css('display', 'block');
              $('.progress-bar').width(pgrbar + '%');
              $('#fnameerror').text(msg);
              $('#lnameerror').text(msg);
              $('#companyname1').removeClass('errorinput');
              $('#jobtitle1').removeClass('errorinput');
              $('html, body').animate({
                  scrollTop: $('.app-container').offset().top
              }, 100);
          }
      });

      $('#firstName').on('keyup', function () {
          if (this.value.length > 0) {
              var msg = '';
              $('#fnameerror').text(msg);
              $('#firstName').removeClass('errorinput');
              return;
          } else {
              var msg = 'This field is required';
              $('#fnameerror').text(msg);
              $('#firstName').addClass('errorinput');
          }
      });
      $('#lastName').on('keyup', function () {
          if (this.value.length > 0) {
              var msg = '';
              $('#lnameerror').text(msg);
              $('#lastName').removeClass('errorinput');
              return;
          } else {
              var msg = 'This field is required';
              $('#lnameerror').text(msg);
              $('#lastName').addClass('errorinput');
          }
      });


      $("#formId").validate({
          rules: {
              email: {
                  required: true,
                  email: true
              },
              phone: {
                  required: true,
                  minlength: 11
              }
          },
          submitHandler: function (form) {
              form.ajaxSubmit({
                  type: 'post',
                  url: form.attr('action'),
                  data: form.serialize(),
                  success: function () {
                      finalSubmit.attr('disabled', false);
                      location.reload();
                  }
              });
              return false;
          }
      });





      $('.finalSubmit').click(function () {
          email = document.getElementById('email').value;
          number = document.getElementById('number').value;
          if (email == "" || number == "") {
              $('html, body').animate({
                  scrollTop: ($('#email').offset().top - 300)
              }, 500);

          }
      });

      $('.prev2_1').click(function () {
          var pgrbar = 1 * 5.56;
          $('#step-2').css('display', 'none');
          $('#step-1').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-1').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev3_2').click(function () {
          var pgrbar = 2 * 5.56;
          $('#step-3').css('display', 'none');
          $('#step-2').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-2').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev4_3').click(function () {
          var pgrbar = 3 * 5.56;
          $('#step-4').css('display', 'none');
          $('#step-3').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-3').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev5_4').click(function () {
          var pgrbar = 4 * 5.56;
          $('#step-5').css('display', 'none');
          $('#step-4').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-4').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev6_5').click(function () {
          var pgrbar = 5 * 5.56;
          $('#step-6').css('display', 'none');
          $('#step-5').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-5').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev7_6').click(function () {
          var pgrbar = 6 * 5.56;
          $('#step-7').css('display', 'none');
          $('#step-6').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-6').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);


      });
      $('.prev8_7').click(function () {
          var pgrbar = 7 * 5.56;
          $('#step-8').css('display', 'none');
          $('#step-7').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-7').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev9_8').click(function () {
          var pgrbar = 8 * 5.56;
          $('#step-9').css('display', 'none');
          $('#step-8').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-8').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev10_9').click(function () {
          var pgrbar = 9 * 5.56;
          $('#step-10').css('display', 'none');
          $('#step-9').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-9').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.prev11_10').click(function () {
          var pgrbar = 10 * 5.56;
          $('#step-11').css('display', 'none');
          $('#step-10').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-10').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev12_11').click(function () {
          var pgrbar = 11 * 5.56;
          $('#step-12').css('display', 'none');
          $('#step-11').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-11').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev13_12').click(function () {
          var pgrbar = 12 * 5.56;
          $('#step-13').css('display', 'none');
          $('#step-12').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-12').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.prev14_13').click(function () {
          var pgrbar = 13 * 5.56;
          $('#step-14').css('display', 'none');
          $('#step-13').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-13').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev15_14').click(function () {
          var pgrbar = 14 * 5.56;
          $('#step-15').css('display', 'none');
          $('#step-14').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-14').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev16_15').click(function () {
          var pgrbar = 15 * 5.56;
          $('#step-16').css('display', 'none');
          $('#step-15').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-15').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });
      $('.prev17_16').click(function () {
          var pgrbar = 16 * 5.56;
          $('#step-17').css('display', 'none');
          $('#step-16').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-16').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });

      $('.prev18_17').click(function () {
          var pgrbar = 17 * 5.56;
          $('#step-18').css('display', 'none');
          $('#step-17').css('display', 'block');
          $('.progress-bar').width(pgrbar + '%');
          $('#step-17').removeClass("slideInRight").addClass("slideInLeft");
          $('html, body').animate({
              scrollTop: $('.app-container').offset().top
          }, 100);
      });


      $(".custom-box input:checkbox").on('click', function () {
          // in the handler, 'this' refers to the box clicked on
          var $box = $(this);
          if ($box.is(":checked")) {
              // the name of the box is retrieved using the .attr() method
              // as it is assumed and expected to be immutable
              var group = "input:checkbox[name='" + $box.attr("name") + "']";
              // the checked state of the group/box on the other hand will change
              // and the current value is retrieved using .prop() method
              $(group).prop("checked", false);
              $box.prop("checked", true);
          } else {
              $box.prop("checked", false);
          }
      });

      if ($(window).width() < 900) {
          $('.myBox').click(function () {
              var step = $(this).data('step');
              $('div[data-step="' + step + '"]').removeClass('custom-box-clicked');
              $(this).addClass('custom-box-clicked');
              $('html, body').animate({
                  scrollTop: ($('.app-btn').offset().top + 230)
              }, 500);
          });
      };
      $('#currentAddress').click(function () {
          livedYears = document.getElementById('livedYears').value;
          livedMonths = document.getElementById('livedMonths').value;
          if (livedYears == '') {
              $('html, body').animate({
                  scrollTop: ($('#livedYears').offset().top - 300)
              }, 500);

          }
      });
      $('#myNext9.3').click(function () {
          previouslivedYears = document.getElementById('previouslivedYears').value;
          previouslivedMonths = document.getElementById('previouslivedMonths').value;
          if (previouslivedYears == '') {
              $('html, body').animate({
                  scrollTop: ($('#livedYears').offset().top - 300)
              }, 500);

          }
      });

      $('#wMyNext').click(function () {
          emYear = document.getElementById('emYear').value;
          emMonth = document.getElementById('emMonth').value;
          if (emYear == '') {
              $('html, body').animate({
                  scrollTop: ($('#livedYears').offset().top - 300)
              }, 500);

          }
      });
      $('#MyNext16.3').click(function () {
          emYearPrevious = document.getElementById('emYearPrevious').value;
          emMonthemMonthPrevious = document.getElementById('emMonthPrevious').value;
          if (emYearPrevious == '') {
              $('html, body').animate({
                  scrollTop: ($('#livedYears').offset().top - 300)
              }, 500);

          }
      });

     
      $('.next6_7').click(function () {
          var size = document.getElementById('dob').value.length;
          $('#step-7').removeClass("slideInLeft").addClass("slideInRight");
          var birthday = document.getElementById('dob').value;
          var firstDate = moment($('#dob').val(), 'DD/MM/YYYY').format();
          var optimizedBirthday = firstDate.replace(/-/g, "/");

          var myBirthday = new Date(firstDate);

          var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
          myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
          if (birthday == '') {
              var msg = 'This field is required';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
              $('#step-6').css('display', 'block');
              $('#step-7').css('display', 'none');
              $('#dob').focus();
              $('html, body').animate({
                  scrollTop: ($('#dob').offset().top - 300)
              }, 500);

          } else if (birthday && birthday > 31) {
              var msg = 'Invalid Day';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
              $('#step-6').css('display', 'block');
              $('#step-7').css('display', 'none');
              $('#dob').focus();
              $('html, body').animate({
                  scrollTop: ($('#dob').offset().top - 300)
              }, 500);
          } else if ((size == 5 && Number(document.getElementById('dob').value.split('/')[1]) > 12)) {
              var msg = 'Invalid Month';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
              $('#step-6').css('display', 'block');
              $('#step-7').css('display', 'none');
              $('#dob').focus();
              $('html, body').animate({
                  scrollTop: ($('#dob').offset().top - 300)
              }, 500);
          } else if (birthday && myAge < 18) {
              var msg = 'You must be between 18 and 99 years old';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
              $('#step-6').css('display', 'block');
              $('#step-7').css('display', 'none');
              $('#dob').focus();
              $('html, body').animate({
                  scrollTop: ($('#dob').offset().top - 300)
              }, 500);
          } else if (birthday && myAge > 99) {
              var msg = 'You must be between 18 and 99 years old';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
              $('#step-6').css('display', 'block');
              $('#step-7').css('display', 'none');
              $('#dob').focus();
              $('html, body').animate({
                  scrollTop: ($('#dob').offset().top - 300)
              }, 500);
          } else {
              var pgrbar = 7 * 5.56
              $('.progress-bar').width(pgrbar + '%');
              $('#error').text();
              $('#dob').removeClass('errorinput');
              $('#step-6').css('display', 'none');
              $('#step-7').css('display', 'block');
              $('html, body').animate({
                  scrollTop: $('.app-container').offset().top
              }, 100);
          }

      });

      $('#dob').on('input', function () {
          var size = document.getElementById('dob').value.length;
          var birthday = document.getElementById('dob').value;
          var firstDate = moment($('#dob').val(), 'DD/MM/YYYY').format();
          var optimizedBirthday = firstDate.replace(/-/g, "/");

          var myBirthday = new Date(firstDate);

          var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
          myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

          if ((size == 5 && Number(document.getElementById('dob').value.split('/')[1]) > 12)) {
              var msg = 'Invalid Month';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
          } else {
              var msg = '';
              $('#error').text(msg);
              $('#dob').removeClass('errorinput');
          }


      });

      $('#dob').on('keyup', function () {
          if (document.getElementById('dob').value > 31) {
              var msg = 'Invalid Day';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');

          }
          var size = document.getElementById('dob').value.length;
          var birthday = document.getElementById('dob').value;
          if ((Number(document.getElementById('dob').value.split('/')[1]) > 12)) {
              var msg = 'Invalid Month';
              $('#error').text(msg);
              $('#dob').addClass('errorinput');
          }
      });



  });

  var el = document.getElementById("dob");

  el.onkeyup = function (evt) {
      if ((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 &&
              evt.keyCode <= 105)) {
          evt = evt || window.event;

          var size = document.getElementById('dob').value.length;

          if ((size == 2 && document.getElementById('dob').value < 32) || (size == 5 && Number(document.getElementById('dob').value.split('/')[1]) < 13)) {
              document.getElementById('dob').value += '/';
          }




      }
  }


  //progrerss bar 

  var p_pusher2_3 = document.getElementById("p_pusher2_3");

  p_pusher2_3.onclick = function () {
      document.getElementById("p_title").innerHTML = "2-3 minutes from finish";
  }



  var p_pusher3_2 = document.getElementById("p_pusher3_2");

  p_pusher3_2.onclick = function () {
      document.getElementById("p_title").innerHTML = "3 minutes from finish";
  }

  var p_pusher6_7 = document.getElementById("dateOfBirthValidation");

  p_pusher6_7.onclick = function () {
      document.getElementById("p_title").innerHTML = "1-2 minutes from finish";
  }

  var p_pusher7_6 = document.getElementById("p_pusher7_6");
  p_pusher7_6.onclick = function () {
      document.getElementById("p_title").innerHTML = "2-3 minutes from finish";
  }

  var p_pusher12_13 = document.getElementById("p_pusher12_13");
  p_pusher12_13.onclick = function () {
      document.getElementById("p_title").innerHTML = "Less than 1 minute from finish";
  }


  var p_pusher13_12 = document.getElementById("p_pusher13_12");
  p_pusher13_12.onclick = function () {
      document.getElementById("p_title").innerHTML = "2-3 minutes from finish";
  }
