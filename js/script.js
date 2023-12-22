// p1 --------------------------------------------------
/* ----------------------------------------------------- */
/* Desktop */
/* ----------------------------------------------------- */
const linkd = document.querySelector('#nnd');

var b1d = false;
var b2d = false;
var b3d = false;
var getValDesktop1 = function()
{
    const val1 = document.querySelector('#inp1d');

    if(val1.value == "")
    {
        val1.classList.add("erroinput");
        document.getElementById("herro1d").innerHTML = "This field is required";
    }
    else
    {
        val1.classList.remove("erroinput");
        document.getElementById("herro1d").innerHTML = "";
        b1d = true;
    }
    if(b1d && b2d && b3d)
    {
        linkd.classList.remove("disabled-link");
    }
}

var getValDesktop2 = function()
{
    const val2 = document.querySelector('#inp2d');

    if(val2.value == "")
    {
        val2.classList.add("erroinput");
        document.getElementById("herro2d").innerHTML = "This field is required";
    }
    else
    {
        val2.classList.remove("erroinput");
        document.getElementById("herro2d").innerHTML = "";
        b2d = true;
    }
    if(b1d && b2d && b3d)
    {
        linkd.classList.remove("disabled-link");
    }
}

var getValDesktop3 = function()
{
    const val3 = document.querySelector('#inp3d');

    if(val3.value == "")
    {
        val3.classList.add("erroinput");
        document.getElementById("herro3d").innerHTML = "This field is required";
    }
    else
    {
        val3.classList.remove("erroinput");
        document.getElementById("herro3d").innerHTML = "";
        b3d = true;
    }
    if(b1d && b2d && b3d)
    {
        linkd.classList.remove("disabled-link");
    }
}
/* ----------------------------------------------------- */
/* Mobile */
/* ----------------------------------------------------- */
const linkm = document.querySelector('#nnm');

var b1m = false;
var b2m = false;
var b3m = false;
var getValMobile1 = function()
{
    const val1 = document.querySelector('#inp1m');

    if(val1.value == "")
    {
        val1.classList.add("erroinput");
        document.getElementById("herro1m").innerHTML = "This field is required";
    }
    else
    {
        val1.classList.remove("erroinput");
        document.getElementById("herro1m").innerHTML = "";
        b1m = true;
    }
    if(b1m && b2m && b3m)
    {
        linkm.classList.remove("disabled-link");
    }
}

var getValMobile2 = function()
{
    const val2 = document.querySelector('#inp2m');

    if(val2.value == "")
    {
        val2.classList.add("erroinput");
        document.getElementById("herro2m").innerHTML = "This field is required";
    }
    else
    {
        val2.classList.remove("erroinput");
        document.getElementById("herro2m").innerHTML = "";
        b2m = true;
    }
    if(b1m && b2m && b3m)
    {
        linkm.classList.remove("disabled-link");
    }
}

var getValMobile3 = function()
{
    const val3 = document.querySelector('#inp3m');

    if(val3.value == "")
    {
        val3.classList.add("erroinput");
        document.getElementById("herro3m").innerHTML = "This field is required";
    }
    else
    {
        val3.classList.remove("erroinput");
        document.getElementById("herro3m").innerHTML = "";
        b3m = true;
    }
    if(b1m && b2m && b3m)
    {
        linkm.classList.remove("disabled-link");
    }
}
// p1

// p2 --------------------------------------------------
/* ----------------------------------------------------- */
/* Desktop */
/* ----------------------------------------------------- */
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
        document.getElementById("dv1").innerHTML = "$90/yr";
        document.getElementById("hdv1").innerHTML = "2 months free";
        document.getElementById("dv2").innerHTML = "$120/yr";
        document.getElementById("hdv2").innerHTML = "2 months free";
        document.getElementById("dv3").innerHTML = "$150/yr";
        document.getElementById("hdv3").innerHTML = "2 months free";
    }
    else
    {
        monthly.classList.remove("selecaocinza");
        monthly.classList.add("selecaoazul");
        yearly.classList.remove("selecaoazul");
        yearly.classList.add("selecaocinza");
        document.getElementById("dv1").innerHTML = "$9/mo";
        document.getElementById("hdv1").innerHTML = "";
        document.getElementById("dv2").innerHTML = "$12/mo";
        document.getElementById("hdv2").innerHTML = "";
        document.getElementById("dv3").innerHTML = "$15/mo";
        document.getElementById("hdv3").innerHTML = "";
    }
}

function optP2Over_1()
{
    const optionP2 = document.querySelector(".optiond1");
    optionP2.classList.add("optionP23");
}
function optP2Over_2()
{
    const optionP2 = document.querySelector(".optiond2");
    optionP2.classList.add("optionP23");
}
function optP2Over_3()
{
    const optionP2 = document.querySelector(".optiond3");
    optionP2.classList.add("optionP23");
}
// ------------------------------------
function optP2Out_1()
{
    const optionP2 = document.querySelector(".optiond1");
    optionP2.classList.remove("optionP23");
}
function optP2Out_2()
{
    const optionP2 = document.querySelector(".optiond2");
    optionP2.classList.remove("optionP23");
}
function optP2Out_3()
{
    const optionP2 = document.querySelector(".optiond3");
    optionP2.classList.remove("optionP23");
}
/* ----------------------------------------------------- */
/* Mobile */
/* ----------------------------------------------------- */
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
        document.getElementById("mv1").innerHTML = "$90/yr";
        document.getElementById("hmv1").innerHTML = "2 months free";
        document.getElementById("mv2").innerHTML = "$120/yr";
        document.getElementById("hmv2").innerHTML = "2 months free";
        document.getElementById("mv3").innerHTML = "$150/yr";
        document.getElementById("hmv3").innerHTML = "2 months free";
    }
    else
    {
        monthly.classList.remove("selecaocinza");
        monthly.classList.add("selecaoazul");
        yearly.classList.remove("selecaoazul");
        yearly.classList.add("selecaocinza");
        document.getElementById("mv1").innerHTML = "$9/mo";
        document.getElementById("hmv1").innerHTML = "";
        document.getElementById("mv2").innerHTML = "$12/mo";
        document.getElementById("hmv2").innerHTML = "";
        document.getElementById("mv3").innerHTML = "$15/mo";
        document.getElementById("hmv3").innerHTML = "";
    }
}
// p2

// P3
/* ----------------------------------------------------- */
/* Desktop */
/* ----------------------------------------------------- */
function optP3Over_1()
{
    const optionP2 = document.querySelector(".service_1");
    optionP2.classList.add("optionP23");
}
function optP3Over_2()
{
    const optionP2 = document.querySelector(".service_2");
    optionP2.classList.add("optionP23");
}
function optP3Over_3()
{
    const optionP2 = document.querySelector(".service_3");
    optionP2.classList.add("optionP23");
}
// ------------------------------------
function optP3Out_1()
{
    const optionP2 = document.querySelector(".service_1");
    optionP2.classList.remove("optionP23");
}
function optP3Out_2()
{
    const optionP2 = document.querySelector(".service_2");
    optionP2.classList.remove("optionP23");
}
function optP3Out_3()
{
    const optionP2 = document.querySelector(".service_3");
    optionP2.classList.remove("optionP23");
}
// ------------------------------------