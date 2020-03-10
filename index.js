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

    removeCurrentClassElements = () => {
        if (section.id == "classesDescriptionDiv") {
            section.innerHTML = "";
        }
        else if (section.hasChildNodes()) {
            container.removeChild(section);
        }
    }

    noAlert = () => {
        alert("Be Gone Then!!");
    }



    showNameSection = () => {
        removeCurrentClassElements();

        section = createDiv("enterNameDiv");

        var headerTxt = "Very well, what shall thy name be?";
        var headerEl = document.createElement("p");
            headerEl.className = "subHeadTxt";
            headerEl.id = "enterNameTxt";
            headerEl.textContent = headerTxt;
            section.appendChild(headerEl);

        var nameInput = document.createElement("input");
            nameInput.setAttribute("type", "text");

            section.appendChild(nameInput);

            

        createBtn(["Enter Name"]);
            var nameBtn = document.getElementById("enterNameDiv").getElementsByTagName("button")[0];
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
        removeCurrentClassElements();
        section = createDiv("classesDiv");

        var headerEl = document.createElement("p");
        var headerTxt = `${name}, which class will thy represent?`;
            headerEl.className = "subHeadTxt";
            headerEl.id = "classesHeaderTxt";
            headerEl.textContent = headerTxt;
            section.appendChild(headerEl);

        var subHeaderEl = document.createElement("p");
        var subHeaderTxt = "(click class to preview)";
            subHeaderEl.className = "subHeadTxt";
            subHeaderEl.id = "classesSubHeaderTxt"
            subHeaderEl.textContent = subHeaderTxt;
            section.appendChild(subHeaderEl);    

        createBtn(["Warrior", "Hunter", "Mage", "Priest"]);
            var classBtns = document.getElementById("classesDiv").getElementsByTagName("button");
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

        var classesDiv = document.getElementById("classesDiv");
        section = createDiv("classesDescriptionDiv");
        classesDiv.appendChild(section);
    };

    showClass = (classSelection) => {

        addCurrentClassElements = (classHeader, classDescription, classCreateBtn ) => {
            headerEl = document.createElement("p");
            headerEl.id = "classesDescriptionTitle"
            headerEl.className = "subHeadTxt";
            headerTxt = classHeader;
                headerEl.textContent = headerTxt;
                section.appendChild(headerEl);
            descriptionEl = document.createElement("p");
            descriptionEl.className = "subHeadTxt";
            descriptionEl.id = "classesDescriptionTxt"
            descriptionTxt = classDescription;
                descriptionEl.textContent = descriptionTxt;
                section.appendChild(descriptionEl);

                createBtn([classCreateBtn]);
        }
        

        if (classSelection == "warrior") {
            var description = "Commonly seen on the front lines of battle, the mighty warrior is skilled in close quarters combat and brute force. Common weapons include two-handed swords, axes, and polearms. The warrior's main attribute is strength."
            removeCurrentClassElements();
            addCurrentClassElements("Warrior", description, ["Select Warrior Class"])

        } else if (classSelection == "hunter") {
            var description = "Offering a wider skill set than warriors, hunters can attack from distance as well as close quarters. Common weapons include: ranged weapons, one-handed swords and daggers. The hunter's main attribute is agility."
            removeCurrentClassElements();
            addCurrentClassElements("Hunter", description, ["Select Hunter Class"])

        } else if (classSelection == "mage") {
            var description = "Summoning the elements is the mage's specialty. A solely ranged attacker, the mage casts spells of various types to attack, as well as defend. Common spell types include: fire, ice, and illusion. the mage's main attribute is magic."
            removeCurrentClassElements();
            addCurrentClassElements("Mage", description, ["Select Mage Class"])

        } else if (classSelection == "priest") {
            var description = "A follower of a deity and a support spell caster. Priests are able to enhance it's parties attributes and abilities as well as hindering it's foes'. Common spell types include: healing, defense, and light. The priest's main attribute is intuition."
            removeCurrentClassElements();
            addCurrentClassElements("Priest", description, ["Select Priest Class"])
        }
    }


    (title = () => {
        section = createDiv("titleDiv");

        var head = document.createElement("p");
            head.textContent = "Ye Olde RPG";
            head.id = "titleTxt";
            section.appendChild(head);
    })();        

    
    


    (intro = () => {
        
        section = createDiv("introDiv");

        var introTxt = "Welcome adventurer to *. A land of enchantment and intrigue, a great journey awaits thee here...are thoust ready to begin?"
        var introEl = document.createElement("p");
            introEl.className = "subHeadTxt";
            introEl.id = "introTxt";
            introEl.textContent = introTxt;
            section.appendChild(introEl);


        createBtn(["Enter The Realm!", "Nayeth!"]);
        var introBtnYes = document.getElementById("introDiv").getElementsByTagName("button")[0];
            introBtnYes.addEventListener("click", showNameSection);

        var introBtnNo = document.getElementById("introDiv").getElementsByTagName("button")[1];
            introBtnNo.addEventListener("click", noAlert);

    })();

})()



