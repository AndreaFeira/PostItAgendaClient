$(function() {
    $('#example').puidatatable({
        caption: 'Memo',
            paginator: {
                rows: 10
            },
            columns: [
                {field: 'id', headerText: 'id'},
                {field: 'testo', headerText: 'testo'},
                {field: 'dataCreazione', headerText: 'Data crezione'},
                {field: 'dataScadenza', headerText: 'Data scadenza'}
            ],
        datasource: function (callback) {
            $.ajax({
                type: "GET",
                url: 'http://localhost:8080/PostAgenda/RestServices/memos/',
                dataType: "json",
                context: this,
                success: function (response) {
                    callback.call(this, response);
                }
            });
        }
    });
});