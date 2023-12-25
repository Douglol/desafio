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
var monthlyYearlyDP2 = false;
var monthlyYearlyDesktopP2 = function()
{
    const monthlyD = document.querySelector("#monthlyd");
    const yearlyD = document.querySelector("#yearlyd");
    if(monthlyD.classList == "selecaoazul")
    {
        monthlyD.classList.remove("selecaoazul");
        monthlyD.classList.add("selecaocinza");
        yearlyD.classList.remove("selecaocinza");
        yearlyD.classList.add("selecaoazul");
        document.getElementById("dv1").innerHTML = "$90/yr";
        document.getElementById("hdv1").innerHTML = "2 months free";
        document.getElementById("dv2").innerHTML = "$120/yr";
        document.getElementById("hdv2").innerHTML = "2 months free";
        document.getElementById("dv3").innerHTML = "$150/yr";
        document.getElementById("hdv3").innerHTML = "2 months free";
        monthlyYearlyDP2 = true;
    }
    else
    {
        monthlyD.classList.remove("selecaocinza");
        monthlyD.classList.add("selecaoazul");
        yearlyD.classList.remove("selecaoazul");
        yearlyD.classList.add("selecaocinza");
        document.getElementById("dv1").innerHTML = "$9/mo";
        document.getElementById("hdv1").innerHTML = "";
        document.getElementById("dv2").innerHTML = "$12/mo";
        document.getElementById("hdv2").innerHTML = "";
        document.getElementById("dv3").innerHTML = "$15/mo";
        document.getElementById("hdv3").innerHTML = "";
        monthlyYearlyDP2 = false;
    }
}

function optP2Over_1()
{
    const optionP2 = document.querySelector("#optiond1");
    optionP2.classList.add("optionP23");
}
function optP2Over_2()
{
    const optionP2 = document.querySelector("#optiond2");
    optionP2.classList.add("optionP23");
}
function optP2Over_3()
{
    const optionP2 = document.querySelector("#optiond3");
    optionP2.classList.add("optionP23");
}
// ------------------------------------
function optP2Out_1()
{
    const optionP2 = document.querySelector("#optiond1");
    optionP2.classList.remove("optionP23");
}
function optP2Out_2()
{
    const optionP2 = document.querySelector("#optiond2");
    optionP2.classList.remove("optionP23");
}
function optP2Out_3()
{
    const optionP2 = document.querySelector("#optiond3");
    optionP2.classList.remove("optionP23");
}
// ------------------------------------
var valor1P2D = 0;
var optP2D_slctd1 = function()
{
    var optP21D = document.querySelector("#optiond1");
    if(valor1P2D == 0 && valor2P2D == 0 && valor3P2D == 0)
    {
        optP21D.classList.add("optionDs");
        valor1P2D = 9;
    }
    else
    {
        optP21D.classList.remove("optionDs");
        valor1P2D = 0;
    }
}

var valor2P2D = 0;
var optP2D_slctd2 = function()
{
    var optP22D = document.querySelector("#optiond2");
    if(valor1P2D == 0 && valor2P2D == 0 && valor3P2D == 0)
    {
        optP22D.classList.add("optionDs");
        valor2P2D = 12;
    }
    else
    {
        optP22D.classList.remove("optionDs");
        valor2P2D = 0;
    }
}

var valor3P2D = 0;
var optP2D_slctd3 = function()
{
    var optP23D = document.querySelector("#optiond3");
    if(valor1P2D == 0 && valor2P2D == 0 && valor3P2D == 0)
    {
        optP23D.classList.add("optionDs");
        valor3P2D = 15;
    }
    else
    {
        optP23D.classList.remove("optionDs");
        valor3P2D = 0;
    }
}
var P2ToP4D = function()
{
    localStorage.setItem('myP2D', monthlyYearlyDP2);
    localStorage.setItem('v1P2D', valor1P2D);
    localStorage.setItem('v2P2D', valor2P2D);
    localStorage.setItem('v3P2D', valor3P2D);
    window.location.href = 'p4.html';
}
/* ----------------------------------------------------- */
/* Mobile */
/* ----------------------------------------------------- */
var monthlyYearlyMP2 = false;
var monthlyYearlyMobileP2 = function()
{
    const monthlyM = document.querySelector("#monthlym");
    const yearlyM = document.querySelector("#yearlym");
    if(monthlyM.classList == "selecaoazul")
    {
        monthlyM.classList.remove("selecaoazul");
        monthlyM.classList.add("selecaocinza");
        yearlyM.classList.remove("selecaocinza");
        yearlyM.classList.add("selecaoazul");
        document.getElementById("mv1").innerHTML = "$90/yr";
        document.getElementById("hmv1").innerHTML = "2 months free";
        document.getElementById("mv2").innerHTML = "$120/yr";
        document.getElementById("hmv2").innerHTML = "2 months free";
        document.getElementById("mv3").innerHTML = "$150/yr";
        document.getElementById("hmv3").innerHTML = "2 months free";
        monthlyYearlyMP2 = true;
    }
    else
    {
        monthlyM.classList.remove("selecaocinza");
        monthlyM.classList.add("selecaoazul");
        yearlyM.classList.remove("selecaoazul");
        yearlyM.classList.add("selecaocinza");
        document.getElementById("mv1").innerHTML = "$9/mo";
        document.getElementById("hmv1").innerHTML = "";
        document.getElementById("mv2").innerHTML = "$12/mo";
        document.getElementById("hmv2").innerHTML = "";
        document.getElementById("mv3").innerHTML = "$15/mo";
        document.getElementById("hmv3").innerHTML = "";
        monthlyYearlyMP2 = false;
    }
}
// ------------------------------------
var valor1P2M = 0;
var optP2M_slctd1 = function()
{
    var optP2_1M = document.querySelector("#optionm_1");
    var optP21M = document.querySelector(".optionm1");
    if(valor1P2M == 0 && valor2P2M == 0 && valor3P2M == 0)
    {
        optP21M.classList.add("optionMs");
        valor1P2M = 9;
    }
    else
    {
        optP21M.classList.remove("optionMs");
        valor1P2M = 0;
    }
}

var valor2P2M = 0;
var optP2M_slctd2 = function()
{
    var optP2_2M = document.querySelector("#optionm_2");
    var optP22M = document.querySelector(".optionm2");
    if(valor1P2M == 0 && valor2P2M == 0 && valor3P2M == 0)
    {
        optP22M.classList.add("optionMs");
        valor2P2M = 12;
    }
    else
    {
        optP22M.classList.remove("optionMs");
        valor2P2M = 0;
    }
}

var valor3P2M = 0;
var optP2M_slctd3 = function()
{
    var optP2_3M = document.querySelector("#optionm_3");
    var optP23M = document.querySelector(".optionm3");
    if(valor1P2M == 0 && valor2P2M == 0 && valor3P2M == 0)
    {
        optP23M.classList.add("optionMs");
        valor3P2M = 15;
    }
    else
    {
        optP23M.classList.remove("optionMs");
        valor3P2M = 0;
    }
}
var P2ToP4M = function()
{
    localStorage.setItem('myP2M', monthlyYearlyMP2);
    localStorage.setItem('v1P2M', valor1P2M);
    localStorage.setItem('v2P2M', valor2P2M);
    localStorage.setItem('v3P2M', valor3P2M);
    window.location.href = 'p4.html';
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
var valor1P3D = 0;
var optP3D_slctd1 = function()
{
    var optP31D = document.querySelector(".service_1");
    if(valor1P3D == 0)
    {
        optP31D.classList.add("optionDs");
        valor1P3D = 1;
    }
    else
    {
        optP31D.classList.remove("optionDs");
        valor1P3D = 0;
    }
}

var valor2P3D = 0;
var optP3D_slctd2 = function()
{
    var optP32D = document.querySelector(".service_2");
    if(valor2P3D == 0)
    {
        optP32D.classList.add("optionDs");
        valor2P3D = 2;
    }
    else
    {
        optP32D.classList.remove("optionDs");
        valor2P3D = 0;
    }
}

var valor3P3D = 0;
var optP3D_slctd3 = function()
{
    var optP33D = document.querySelector(".service_3");
    if(valor3P3D == 0)
    {
        optP33D.classList.add("optionDs");
        valor3P3D = 2;
    }
    else
    {
        optP33D.classList.remove("optionDs");
        valor3P3D = 0;
    }
}
var P3ToP4D = function()
{
    localStorage.setItem('v1P3D', valor1P3D);
    localStorage.setItem('v2P3D', valor2P3D);
    localStorage.setItem('v3P3D', valor3P3D);
    window.location.href = 'p4.html';
}
/* ----------------------------------------------------- */
/* Mobile */
/* ----------------------------------------------------- */
var valor1P3M = 0;
var optP3M_slctd1 = function()
{
    var optP31M = document.querySelector(".service_1");
    if(valor1P3M == 0)
    {
        optP31M.classList.add("optionMs");
        valor1P3M = 1;
    }
    else
    {
        optP31M.classList.remove("optionMs");
        valor1P3M = 0;
    }
}

var valor2P3M = 0;
var optP3M_slctd2 = function()
{
    var optP32M = document.querySelector(".service_2");
    if(valor2P3M == 0)
    {
        optP32M.classList.add("optionMs");
        valor2P3M = 2;
    }
    else
    {
        optP32M.classList.remove("optionMs");
        valor2P3M = 0;
    }
}

var valor3P3M = 0;
var optP3M_slctd3 = function()
{
    var optP33M = document.querySelector(".service_3");
    if(valor3P3M == 0)
    {
        optP33M.classList.add("optionMs");
        valor3P3M = 2;
    }
    else
    {
        optP33M.classList.remove("optionMs");
        valor3P3M = 0;
    }
}
var P3ToP4M = function()
{
    localStorage.setItem('v1P3M', valor1P3M);
    localStorage.setItem('v2P3M', valor2P3M);
    localStorage.setItem('v3P3M', valor3P3M);
    window.location.href = 'p4.html';
}
// P3

// P4
/* ----------------------------------------------------- */
/* Desktop */
/* ----------------------------------------------------- */
// valor da P2
var myP2toP4D = localStorage.getItem("myP2D");
var v1P2toP4D = localStorage.getItem("v1P2D");
v1P2toP4D = Number(v1P2toP4D);
var v2P2toP4D = localStorage.getItem("v2P2D");
v2P2toP4D = Number(v2P2toP4D);
var v3P2toP4D = localStorage.getItem("v3P2D");
v3P2toP4D = Number(v3P2toP4D);

if(myP2toP4D == "true")
{
    if(v1P2toP4D != 0)
    {
        v1P2toP4D = 90;
    }
    if(v2P2toP4D != 0)
    {
        v2P2toP4D = 120;
    }
    if(v3P2toP4D != 0)
    {
        v3P2toP4D = 150;
    }
}
// valor da P2
// valor da P3
var currentURL_D = window.location.pathname;
if(currentURL_D == "/p3.html")
{
    if(myP2toP4D == "false")
    {
        document.querySelector(".adicaop3D1").innerHTML = "+1/mo";
        document.querySelector(".adicaop3D2").innerHTML = "+2/mo";
        document.querySelector(".adicaop3D3").innerHTML = "+2/mo";
    }
    else
    {
        document.querySelector(".adicaop3D1").innerHTML = "+10/yr";
        document.querySelector(".adicaop3D2").innerHTML = "+20/yr";
        document.querySelector(".adicaop3D3").innerHTML = "+20/yr";
    }
}
// valor da P3
// resultado P4
if(currentURL_D == "/p4.html")
{
    var v1P3toP4D = localStorage.getItem("v1P3D");
    v1P3toP4D = Number(v1P3toP4D);
    var v2P3toP4D = localStorage.getItem("v2P3D");
    v2P3toP4D = Number(v2P3toP4D);
    var v3P3toP4D = localStorage.getItem("v3P3D");
    v3P3toP4D = Number(v3P3toP4D);

    var valortotald = 0;

    if(myP2toP4D == "false")
    {
        if(v1P3toP4D == 1)
        {
            document.getElementById("totalP4D_1v").innerHTML = "Online Service";
            document.getElementById("totalP4D_2v").innerHTML = "+1/mo";
            valortotald = valortotald + 1;
        }

        if(v2P3toP4D == 2)
        {
            document.getElementById("totalP4D_3v").innerHTML = "Larger storage";
            document.getElementById("totalP4D_4v").innerHTML = "+2/mo";
            valortotald = valortotald + 2;
        }

        if(v3P3toP4D == 2)
        {
            document.getElementById("totalP4D_5v").innerHTML = "Customizable profile";
            document.getElementById("totalP4D_6v").innerHTML = "+2/mo";
            valortotald = valortotald + 2;
        }

        if(v1P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Arcade(Monthly)";
            document.getElementById("totalP4D_2").innerHTML = "$9/mo";
            valortotald = valortotald + 9;
        }
        if(v2P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Advanced(Monthly)";
            document.getElementById("totalP4D_2").innerHTML = "$12/mo";
            valortotald = valortotald + 12;
        }
        if(v3P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Pro(Monthly)";
            document.getElementById("totalP4D_2").innerHTML = "$15/mo";
            valortotald = valortotald + 15;
        }
        
        document.getElementById("totalP4D_7").innerHTML = "Total (per month)";
        document.getElementById("totalP4D_8").innerHTML = "$"+valortotald+"/mo";
    }
    else
    {
        if(v1P3toP4D != 0)
        {
            v1P3toP4D = 10;
        }
        if(v2P3toP4D != 0)
        {
            v2P3toP4D = 20;
        }
        if(v3P3toP4D != 0)
        {
            v3P3toP4D = 20;
        }

        if(v1P3toP4D == 10)
        {
            document.getElementById("totalP4D_1v").innerHTML = "Online Service";
            document.getElementById("totalP4D_2v").innerHTML = "+10/yr";
            valortotald = valortotald + 10;
        }

        if(v2P3toP4D == 20)
        {
            document.getElementById("totalP4D_3v").innerHTML = "Larger storage";
            document.getElementById("totalP4D_4v").innerHTML = "+20/yr";
            valortotald = valortotald + 20;
        }

        if(v3P3toP4D == 20)
        {
            document.getElementById("totalP4D_5v").innerHTML = "Customizable profile";
            document.getElementById("totalP4D_6v").innerHTML = "+20/yr";
            valortotald = valortotald + 20;
        }

        if(v1P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Arcade(Yearly)";
            document.getElementById("totalP4D_2").innerHTML = "$90/yr";
            valortotald = valortotald + 90;
        }
        if(v2P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Advanced(Yearly)";
            document.getElementById("totalP4D_2").innerHTML = "$120/yr";
            valortotald = valortotald + 120;
        }
        if(v3P2toP4D != 0)
        {
            document.getElementById("totalP4D_1").innerHTML = "Pro(Yearly)";
            document.getElementById("totalP4D_2").innerHTML = "$150/yr";
            valortotald = valortotald + 150;
        }

        document.getElementById("totalP4D_7").innerHTML = "Total (per year)";
        document.getElementById("totalP4D_8").innerHTML = "$"+valortotald+"/yr";
    }
}
/* ----------------------------------------------------- */
/* Mobile */
/* ----------------------------------------------------- */
// valor da P2
var myP2toP4M = localStorage.getItem("myP2M");
var v1P2toP4M = localStorage.getItem("v1P2M");
v1P2toP4M = Number(v1P2toP4M);
var v2P2toP4M = localStorage.getItem("v2P2M");
v2P2toP4M = Number(v2P2toP4M);
var v3P2toP4M = localStorage.getItem("v3P2M");
v3P2toP4M = Number(v3P2toP4M);

if(myP2toP4M == "true")
{
    if(v1P2toP4M != 0)
    {
        v1P2toP4M = 90;
    }
    if(v2P2toP4M != 0)
    {
        v2P2toP4M = 120;
    }
    if(v3P2toP4M != 0)
    {
        v3P2toP4M = 150;
    }
}
// valor da P2
// valor da P3
var currentURL_M = window.location.pathname;
if(currentURL_M == "/p3.html")
{
    if(myP2toP4M == "false")
    {
        document.querySelector(".adicaop3M1").innerHTML = "+1/mo";
        document.querySelector(".adicaop3M2").innerHTML = "+2/mo";
        document.querySelector(".adicaop3M3").innerHTML = "+2/mo";
    }
    else
    {
        document.querySelector(".adicaop3M1").innerHTML = "+10/yr";
        document.querySelector(".adicaop3M2").innerHTML = "+20/yr";
        document.querySelector(".adicaop3M3").innerHTML = "+20/yr";
    }
}
// valor da P3
// resultado P4
if(currentURL_M == "/p4.html")
{
    var v1P3toP4M = localStorage.getItem("v1P3M");
    v1P3toP4M = Number(v1P3toP4M);
    var v2P3toP4M = localStorage.getItem("v2P3M");
    v2P3toP4M = Number(v2P3toP4M);
    var v3P3toP4M = localStorage.getItem("v3P3M");
    v3P3toP4M = Number(v3P3toP4M);

    var valortotalm = 0;

    if(myP2toP4M == "false")
    {
        if(v1P3toP4M == 1)
        {
            document.getElementById("totalP4M_1v").innerHTML = "Online Service";
            document.getElementById("totalP4M_2v").innerHTML = "+1/mo";
            valortotalm = valortotalm + 1;
        }

        if(v2P3toP4M == 2)
        {
            document.getElementById("totalP4M_3v").innerHTML = "Larger storage";
            document.getElementById("totalP4M_4v").innerHTML = "+2/mo";
            valortotalm = valortotalm + 2;
        }

        if(v3P3toP4M == 2)
        {
            document.getElementById("totalP4M_5v").innerHTML = "Customizable profile";
            document.getElementById("totalP4M_6v").innerHTML = "+2/mo";
            valortotalm = valortotalm + 2;
        }

        if(v1P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Arcade(Monthly)";
            document.getElementById("totalP4M_2").innerHTML = "$9/mo";
            valortotalm = valortotalm + 9;
        }
        if(v2P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Advanced(Monthly)";
            document.getElementById("totalP4M_2").innerHTML = "$12/mo";
            valortotalm = valortotalm + 12;
        }
        if(v3P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Pro(Monthly)";
            document.getElementById("totalP4M_2").innerHTML = "$15/mo";
            valortotalm = valortotalm + 15;
        }
        
        document.getElementById("totalP4M_7").innerHTML = "Total (per month)";
        document.getElementById("totalP4M_8").innerHTML = "$"+valortotalm+"/mo";
    }
    else
    {
        if(v1P3toP4M != 0)
        {
            v1P3toP4M = 10;
        }
        if(v2P3toP4M != 0)
        {
            v2P3toP4M = 20;
        }
        if(v3P3toP4M != 0)
        {
            v3P3toP4M = 20;
        }

        if(v1P3toP4M == 10)
        {
            document.getElementById("totalP4M_1v").innerHTML = "Online Service";
            document.getElementById("totalP4M_2v").innerHTML = "+10/yr";
            valortotalm = valortotalm + 10;
        }

        if(v2P3toP4M == 20)
        {
            document.getElementById("totalP4M_3v").innerHTML = "Larger storage";
            document.getElementById("totalP4M_4v").innerHTML = "+20/yr";
            valortotalm = valortotalm + 20;
        }

        if(v3P3toP4M == 20)
        {
            document.getElementById("totalP4M_5v").innerHTML = "Customizable profile";
            document.getElementById("totalP4M_6v").innerHTML = "+20/yr";
            valortotalm = valortotalm + 20;
        }

        if(v1P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Arcade(Yearly)";
            document.getElementById("totalP4M_2").innerHTML = "$90/yr";
            valortotalm = valortotalm + 90;
        }
        if(v2P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Advanced(Yearly)";
            document.getElementById("totalP4M_2").innerHTML = "$120/yr";
            valortotalm = valortotalm + 120;
        }
        if(v3P2toP4M != 0)
        {
            document.getElementById("totalP4M_1").innerHTML = "Pro(Yearly)";
            document.getElementById("totalP4M_2").innerHTML = "$150/yr";
            valortotalm = valortotalm + 150;
        }

        document.getElementById("totalP4M_7").innerHTML = "Total (per year)";
        document.getElementById("totalP4M_8").innerHTML = "$"+valortotalm+"/yr";
    }
}