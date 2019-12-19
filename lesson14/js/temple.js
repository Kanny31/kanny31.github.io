const requestURL = 'http://kanny31.github.io/lesson14/js/temples.json';
fetch(requestURL)
.then(function(response))
    return response.json();
})
.then(function(jsonObject) {

    const temples = jsonObject["temple"];

    for (let i=0; i<temples.length; i++) {

    }
    let sec = document.createElement("section");
    let temple = document.createElement("h3");
    let add = document.createElement("p");
    let mail = document.createElement("p");
    let services = document.createElement("p");
    let endowment = document.createElement("p");
    let baptism = document.createElement("p");
    let sealing = document.createElement("p");
    let inititory = document.createElement("p");
    let templeclosures = document.createElement("p");
    let milestones = document.createElement("p");
    let baptism = document.createElement("p");

    temple.textContent = temples[i].name;
    add.textContent = "Address: " + temples[i].address;
    mail.textContent = temples[i].email;
    services.textContent = "Services: " + temples[i].services;
    session.textContent = "Endowment Schedule: " + temples[i].endowmentschedule;
    session.textContent = "Baptism Schedule: " + temples[i].baptismschedule;
    session.textContent = "Sealing Schedule: " + temples[i].sealingschedule;
    session.textContent = "Inititory Schedule: " + temples[i].inititoryschedule;
    closures.textContent = "Temple Closures: " + temples[i].templeclosures;
    milestones.textContent = "Milestones: " + temples[i].milestones;

    temple.textContent = temples[i].name;

            sec.appendChild(temple);
            sec.appendChild(add);
            sec.appendChild(mail);
            sec.appendChild(service);
            sec.appendChild(endowment);
            sec.appendChild(baptism);
            sec.appendChild(sealing);
            sec.appendChild(inititory);
            sec.appendChild(closures);
            sec.appendChild(milestones);
        }


});