let results = [];

function cleanScreen(hidden, show){
    let clean = document.getElementById(hidden);
    let print = document.getElementById(show);

    clean.setAttribute("hidden", "");
    print.removeAttribute("hidden");
}

function loadValue(identifier){
    return document.getElementById(identifier).value;
}

function loadElement(identifier){
    return document.getElementById(identifier);
}

function nextPage1(){
    let selected0 = loadValue("rama");

    results.push(selected0);

    if(results[0]=="back"){
        cleanScreen("react", "c#");
        cleanScreen("vue", "java");
    }

    cleanScreen("first", "second");
}

function nextPage2(){
    if(results[0]=="back"){
        cleanScreen("react", "c#");
        cleanScreen("vue", "java");
    }

    let selected1 = loadValue("language");
    let selected2 = loadValue("specialize");

    results.push(selected1);
    results.push(selected2);

    cleanScreen("second", "third");
}

function add(){
    let selected3 = loadValue("other-tech");
    let clean = loadElement("other-tech");

    results.push(selected3);

    clean.value = "";
}

function finish(){
    cleanScreen("third", "results");
    let a = 0;
    let print1 = loadElement("select3");

    while(a < 3){
        let print = loadElement(`select${a}`);

        print.innerHTML = results[a];
        a++;
    }

    while(a > 2 && a < results.length){
        print1.innerHTML += results[a]+"<br>";
        a++;
    }
}
