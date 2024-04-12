for(let i=0;i<16;i+=4)
{
    $('.boxes').append(
        '<div style="display:flex;justify-content:center;">'
            + '<div class="box box-light"></div>'
            + '<div class="box box-light"></div>'
            + '<div class="box box-light"></div>'
            + '<div class="box box-light"></div>'
        + '</div>'
    );
}

$('.box-light').on('click', function()
{
    $(this).toggleClass('box-dark')

});