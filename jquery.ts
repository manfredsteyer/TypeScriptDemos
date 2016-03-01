$(function() {

    $("#btn").click(function() {

        var von = $("#von").val();
        var nach = $("#nach").val();

        var urlParams = {
            abflugort : von,
            zielort: nach
        };

        $.ajax({
            type: "GET",
            url: "http://www.angular.at/api/flug",
            data: urlParams,
            processData: true,
            dataType: "json",
            success: function (fluege, status, req) {

                var html = "<table class='table table-striped'>";

                for(var i=0; i<fluege.length; i++) {
                    var flug = fluege[i];

                    html += "<tr><td>" + flug.id + "</td><td>" + flug.datum + "</td></tr>"
                }
                html += "</table>";

                $("#placeholder").html(html);

            },
            error: function (req, textStatus, errorThrown) {
                console.error("Error: " + req.status);
            }
        });


    });

});
