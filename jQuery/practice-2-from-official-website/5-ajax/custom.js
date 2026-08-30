
 /**
  * ----------------- load() ---------------------
  */

    // $(function() {
    //     $("body").load("other.html");
    //     // $("body").load("other2.html");        
    // });

    // load with callback function
    // $(function() {
    //     $('body').load('other.html', function(responseTxt, statusTxt, xhr) {
    //         if(statusTxt == 'success') {
    //             console.log('it went fine!')
    //         }
    //         else if(statusTxt == 'error') {
    //             console.log('Data: ' +  xhr.statusText)
    //         }
    //     });
    // });

    // example: specific element of a page is load in other page.
    // $(function() {
    //     $('body').load('other2.html ul ', function(html) {
    //         console.log('content uploaded');
    //         console.log(html)
    //     })
    // });



    /**
     * ---------------- get() -------------------
     */

    // $(function() {
    //     $.get("other.html", function(data, response) {
    //             $(".user-list").html(data);  
    //             console.log(response)
    //         //    or
    //         // window.setTimeout(function() {
    //         //     $(".user-list").html(data);

    //         // }, 4000);
    //     });
    // });

    // example
    // $(function() {
    //     $.get("other.html", function(data, response) {
    //         if(response === 'success') {
    //             $(".user-list").html(data);  
    //         }
    //     });
    // });




    /**
     * ------------- getJSON() -------------------
     */

    // $.getJSON("users.json", function(data) {
    //     $.each(data, function(idx, user) {
    //         // $(".user-list").append("<li>" + user.email + "</li>");
    //         $("<li>" + user.email + "</li>").appendTo(".user-list");
    //     });
    //     console.log(data)
    //     // console.log(data[0].firstName)
    // });


    /**
     * ------------------ ajax() ------------------------
     */

    // $.ajax({
    //     type: "GET",
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     dataType: "json"
    // }).done(function(data) {
    //     console.log(data);
    //     $.map(data, function(post, i) {
    //         $("body").append("<h3>" + post.title  + "</h3> <p>" + post.body  + "</p>");
    //     });
    // });


    // ajax() for POST
    $('#postForm').on('submit', function(env) {
        env.preventDefault();
        let userName = $('#firtName').val(),
            textbody = $('#textareabody').val(),
            url = $(this).attr('action');

        $.post(url, {
            title: userName,
            body: textbody
        }).done(function(data) {
            console.log(data)
            console.log(url)
        });


    });