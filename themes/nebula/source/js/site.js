/*
*   nebula - site.js
*   javascript executed on every page goes here
*/

var highlightedBlocks;

var navOpen;

window.onload = function() {

    navOpen = false;

    // ** NOTE **
    // For highlighting to work, do NOT use external highlight.js - use Hexo's built in
    // In the site's _config.yml, set 'enable' to true and 'hljs' to false

    // Grab all highlighted code and put "copy to clipboard" buttons above
    highlightedBlocks = document.getElementsByClassName("highlight");
    for (i = 0; i < highlightedBlocks.length; i++) {
        var codeText = highlightedBlocks[i].querySelector("td.code").innerText;
        var copyBtn = "<a class='copy-code-btn' href='javascript:copyCode(" + i + ");'>Copy to clipboard</a>";
        highlightedBlocks[i].innerHTML += "<p>" + copyBtn + "</p><br>"; // Inserts button at bottom of snippet
        //console.log("highlightedBlock #" + i);
    }

}

// Copies code to clipboard
// Creates a hidden text area to copy from
// i = index of .highlight block (this method is called from onLoad function above)
function copyCode(i) {
    var copyTextArea = document.createElement("textarea");
    document.body.appendChild(copyTextArea);
    copyTextArea.value = highlightedBlocks[i].querySelector("td.code").innerText;
    copyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextArea);
    highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copied!";
    setTimeout(function() {
        highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copy to clipboard";
    }, 3000);
}

// For navigation
function toggleNav() {
    if (navOpen) {
        document.getElementById("navbar--content").style.width = "0";
        navOpen = false;
    } else {
        document.getElementById("navbar--content").style.width = "300px";
        navOpen = true;
    }
}