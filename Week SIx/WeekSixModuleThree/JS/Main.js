$(function () {

    getProducts(10, 1);

    $('#pagination').on('click', function(e){
        debugger
        if( $(e.target).is("a")){
            getProducts(10, $(e.target).data("page"))
        }
    })
       
    

    function updatePagination(totalPages, currentPage)
    {
        let $pagination = $('#pagination') ;
        $pagination.html('');
        debugger
        for(let i = 1; i < totalPages+1; i++)
        {
            
            if(currentPage == i){

                $pagination.append(`
                <a data-page="${i}" class='current'>${i}</a>
                `)

            }else{

                $pagination.append(`
                <a data-page="${i}">${i}</a>
                `)

            }
            
        }
    }

    function getProducts(productsPerPage, page) {

        $.ajax({

            url: 'https://dummyjson.com/products',
            data: {
                limit: productsPerPage,
                skip: (page - 1)* productsPerPage
            }
        }).done(function (result) {
            
            let totalpage = Math.ceil(result.total / productsPerPage);
            debugger
            updatePagination(totalpage, page);
            displayProducts(result.products);

        })


     }
        



    function displayProducts(products) {


        let $productElement = $('#products');
        $productElement.html('');

        $(products).each(function () {

            $productElement.append(`
            <div class='product'>
                <h2>${this.title}</h2>
                <h3>${this.id}</h3>
                <img src='${this.thumbnail}'>
                <p>
                 ${this.description}
                </p>
            </div>
            `)

        });
    }


});