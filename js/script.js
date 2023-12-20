// p1
const link = document.querySelector('#nn');

function getValDesktop1()
{
    const val1 = document.querySelector('#inp1d');

    if(val1.value == "")
    {
        val1.classList.add("erroinput");
    }
    else
    {
        val1.classList.remove("erroinput");
    }
}

function getValDesktop2()
{
    const val2 = document.querySelector('#inp2d');

    if(val2.value == "")
    {
        val2.classList.add("erroinput");
    }
    else
    {
        val2.classList.remove("erroinput");
    }
}

function getValDesktop3()
{
    const val3 = document.querySelector('#inp3d');

    if(val3.value == "")
    {
        val3.classList.add("erroinput");
    }
    else
    {
        val3.classList.remove("erroinput");
    }
}

function getValMobile1()
{
    const val1 = document.querySelector('#inp1m');

    if(val1.value == "")
    {
        val1.classList.add("erroinput");
    }
    else
    {
        val1.classList.remove("erroinput");
    }
}

function getValMobile2()
{
    const val2 = document.querySelector('#inp2m');

    if(val2.value == "")
    {
        val2.classList.add("erroinput");
    }
    else
    {
        val2.classList.remove("erroinput");
    }
}

function getValMobile3()
{
    const val3 = document.querySelector('#inp3m');

    if(val3.value == "")
    {
        val3.classList.add("erroinput");
    }
    else
    {
        val3.classList.remove("erroinput");
    }
}
// p1

// p2
function monthlyYearlyDesktop()
{
    const monthly = document.querySelector("#monthlyd");
    const yearly = document.querySelector("#yearlyd");
    if(monthly.classList == "selecaoazul")
    {
        monthly.classList.remove("selecaoazul");
        monthly.classList.add("selecaocinza");
        yearly.classList.remove("selecaocinza");
        yearly.classList.add("selecaoazul");
    }
    else
    {
        monthly.classList.remove("selecaocinza");
        monthly.classList.add("selecaoazul");
        yearly.classList.remove("selecaoazul");
        yearly.classList.add("selecaocinza");
    }
}

function monthlyYearlyMobile()
{
    const monthly = document.querySelector("#monthlym");
    const yearly = document.querySelector("#yearlym");
    if(monthly.classList == "selecaoazul")
    {
        monthly.classList.remove("selecaoazul");
        monthly.classList.add("selecaocinza");
        yearly.classList.remove("selecaocinza");
        yearly.classList.add("selecaoazul");
    }
    else
    {
        monthly.classList.remove("selecaocinza");
        monthly.classList.add("selecaoazul");
        yearly.classList.remove("selecaoazul");
        yearly.classList.add("selecaocinza");
    }
}
// p2