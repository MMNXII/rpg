(function() {

    var container = document.getElementById("container");
    var section;
    var name;

    createDiv = (divClassId) => {
        section = document.createElement("div");
        section.id = divClassId;
        container.appendChild(section);
        
        return section;
    }

    createBtn = (names) => {
        var btnNames = names;
            btnNames.forEach(btn => {

            var button = document.createElement("button");
                button.textContent = btn;

                section.appendChild(button);

                return button;

            })
    };

    noAlert = () => {
        alert("Be Gone Then!!");
    }



    showNameSection = () => {
        section = createDiv("name");

        var headerTxt = "Very well, what shall thy name be?";
        var headerEl = document.createElement("p");
            headerEl.className = "headerText";
            headerEl.textContent = headerTxt;
            section.appendChild(headerEl);

        var nameInput = document.createElement("input");
            nameInput.setAttribute("type", "text");

            section.appendChild(nameInput);

            

        createBtn(["Enter Name"]);
            var nameBtn = document.getElementById("name").getElementsByTagName("button")[0];
                nameBtn.addEventListener("click", enterName = () => {
                    if (nameInput.value == "") {
                        return alert("please enter a name");
                    }
                    else {
                        name = nameInput.value;
                    }
                    
                    classes();
                });
    }


    classes = () => {
        section = createDiv("classes");

        var headerEl = document.createElement("p");
        var headerTxt = `${name}, which class will thy represent?`;
            headerEl.className = "headerText";
            headerEl.textContent = headerTxt;
            section.appendChild(headerEl);

        var subHeaderEl = document.createElement("p");
        var headerTxt = "(click class to preview)";
            subHeaderEl.textContent = headerTxt;
            section.appendChild(subHeaderEl);    

        createBtn(["Warrior", "Hunter", "Mage", "Priest"]);
            var classBtns = document.getElementById("classes").getElementsByTagName("button");
                classBtns[0].id = "warriorBtn";
                classBtns[1].id = "hunterBtn";
                classBtns[2].id = "mageBtn";
                classBtns[3].id = "priestBtn";

            var classSelection;

            section.addEventListener("click", selectClass = (btn) => {
                if (btn.target.id == "warriorBtn") {
                    showClass("warrior")

                } else if (btn.target.id == "hunterBtn") {
                    showClass("hunter")
                    
                } else if (btn.target.id == "mageBtn") {
                    showClass("mage")

                } else if (btn.target.id == "priestBtn") {
                    showClass("priest")
                }

        });

        var classesDiv = document.getElementById("classes");
        section = createDiv("classDescription");
        classesDiv.appendChild(section);
    };

    showClass = (classSelection) => {

        removeCurrentClassElements = () => {
            if (section.hasChildNodes()) {
                section.innerHTML = "";
            }
        }
        addCurrentClassElements = (classHeader, classDescription, classCreateBtn ) => {
            headerEl = document.createElement("p");
            headerTxt = classHeader;
                headerEl.textContent = headerTxt;
                section.appendChild(headerEl);
            descriptionEl = document.createElement("p");
            descriptionTxt = classDescription;
                descriptionEl.textContent = descriptionTxt;
                section.appendChild(descriptionEl);

                createBtn([classCreateBtn]);
        }
        

        if (classSelection == "warrior") {
            var description = "Warrior description"
            removeCurrentClassElements();
            addCurrentClassElements("Warrior", description, ["Select Warrior Class"])

        } else if (classSelection == "hunter") {
            var description = "Hunter description"
            removeCurrentClassElements();
            addCurrentClassElements("Hunter", description, ["Select Hunter Class"])

        } else if (classSelection == "mage") {
            var description = "Mage description"
            removeCurrentClassElements();
            addCurrentClassElements("Mage", description, ["Select Mage Class"])

        } else if (classSelection == "priest") {
            var description = "Priest description"
            removeCurrentClassElements();
            addCurrentClassElements("Priest", description, ["Select Priest Class"])
        }
    }


    (header = () => {
        section = createDiv("header");

        var head = document.createElement("p");
            head.textContent = "RPG";
            head.id = "headerText";
            section.appendChild(head);
    })();        

    
    


    (intro = () => {
        
        section = createDiv("intro");

        var introTxt = "Welcome adventurer to *. A land of enchantment and intrigue, a great journey awaits thee here...are thou ready to begin?"
        var introEl = document.createElement("p");
            introEl.textContent = introTxt;
            section.appendChild(introEl);


        createBtn(["Enter The Realm!", "Nayeth!"]);
        var introBtnYes = document.getElementById("intro").getElementsByTagName("button")[0];
            introBtnYes.addEventListener("click", showNameSection);

        var introBtnNo = document.getElementById("intro").getElementsByTagName("button")[1];
            introBtnNo.addEventListener("click", noAlert);

    })();

})()



