var g_open1 = 0;
var g_open2 = 0;
var g_open1_card = 0;
var g_open2_card = 0;
var g_locked = new Array();
var g_delay = 0;
var g_moves = 0;
var g_pairsFound = 0;
var g_sMoves = "";

function init_cards(sTime, sMoves)
{
    g_sMoves = sMoves;

    for (i = 0; i <= 100; i++)
    {
        g_locked[i] = 0;
    }
    setTimeLimit(300);
    decreaseCounter(sTime);
}

function hoverCard(i)
{
    if (!g_locked[i] && g_delay == 0)
    {
        var elm = document.getElementById("card" + i);
        elm.style.borderStyle = "dotted";
    }
}

function unhoverCard(i)
{
    var elm = document.getElementById("card" + i);
        elm.style.borderStyle = "solid";
}

function clickCard(i, card)
{
    if (!g_locked[i] && g_delay == 0)
    {
        increaseMoves();
        if (g_open1 == 0) {
            g_open1 = i;
            g_open1_card = card;
            showCard(i, card);
            g_locked[i] = true;
        }
        else if (g_open2 == 0) {
            g_open2 = i;
            g_open2_card = card;
            showCard(i, card);
            g_locked[i] = true;

            if (g_open1_card == g_open2_card) {
                g_pairsFound++;
                resetOpenCards();
                checkWin();
            }
            else {
                g_delay = setTimeout("opened2()", 3000);
            }
        }
    }
}

function increaseMoves()
{
    g_moves++;
    var elm = document.getElementById("moves");
    elm.innerHTML = g_sMoves + " " + g_moves;

    elm = document.getElementById("movesValue");
    elm.value = g_moves;
}

function checkWin()
{
    if (g_pairsFound == 10)
    {
        var elm = document.getElementById("wins");
        elm.value = 1;
        document.mainForm.submit();
    }
}

function resetOpenCards()
{
    g_open1 = 0;
    g_open2 = 0;
    g_open1_card = 0;
    g_open2_card = 0;
    g_delay = 0;
}

function opened2()
{
    hideCard(g_open1);
    hideCard(g_open2);
    g_locked[g_open1] = false;
    g_locked[g_open2] = false;

    resetOpenCards();
}

function showCard(i, card)
{
    var elm = document.getElementById("card" + i);
    elm.src = "./game/mastermind/image/" + card + ".jpg";
}

function hideCard(i)
{
    var elm = document.getElementById("card" + i);
    elm.src = "./game/mastermind/image/0.jpg";
}
