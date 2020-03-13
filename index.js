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
                    
                    } else if (nameInput.value.length < 2 || nameInput.value.length > 10) {
                        return alert("please enter a shorter name");
                    
                    } else {
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

        createBtn(["Warrior", "Hunter", "Mage", "Cleric"]);
            var classBtns = document.getElementById("classesDiv").getElementsByTagName("button");
                classBtns[0].id = "warriorBtn";
                classBtns[1].id = "hunterBtn";
                classBtns[2].id = "mageBtn";
                classBtns[3].id = "clericBtn";

            var classSelection;

            section.addEventListener("click", selectClass = (btn) => {
                if (btn.target.id == "warriorBtn") {
                    showClass("warrior")

                } else if (btn.target.id == "hunterBtn") {
                    showClass("hunter")
                    
                } else if (btn.target.id == "mageBtn") {
                    showClass("mage")

                } else if (btn.target.id == "clericBtn") {
                    showClass("cleric")
                }

        });

        var classesDiv = document.getElementById("classesDiv");
        section = createDiv("classesDescriptionDiv");
        classesDiv.appendChild(section);
    };

    showClass = (classSelection) => {

        addCurrentClassElements = (classHeader, classIcon, classDescription, classCreateBtn ) => {
            headerEl = document.createElement("p");
                headerEl.id = "classesDescriptionTitle"
                headerEl.className = "subHeadTxt";
            headerTxt = classHeader;
                headerEl.textContent = headerTxt;
                section.appendChild(headerEl);

            headerIcon = document.createElement("img");
                headerIcon.src = classIcon;
                headerIcon.className = "classIcon";
                section.appendChild(headerIcon);

            descriptionEl = document.createElement("p");
                descriptionEl.id = "classesDescriptionTxt"
                descriptionEl.className = "subHeadTxt";
            descriptionTxt = classDescription;
                descriptionEl.textContent = descriptionTxt;
                section.appendChild(descriptionEl);

                createBtn([classCreateBtn]);
        }
        

        if (classSelection == "warrior") {
            var icon = "images/sword.svg";
            var description = "Commonly seen on the front lines of battle, the mighty warrior is skilled in close quarters combat and brute force. Common weapons include two-handed swords, axes, and polearms. The warrior's main attribute is strength."
            removeCurrentClassElements();
            addCurrentClassElements("Warrior", icon, description, ["Select Warrior Class"])

        } else if (classSelection == "hunter") {
            var icon = "images/bow.svg";
            var description = "Offering a wider skill set than warriors, hunters can attack from distance as well as close quarters. Common weapons include: ranged weapons, one-handed swords and daggers. The hunter's main attribute is agility."
            removeCurrentClassElements();
            addCurrentClassElements("Hunter", icon, description, ["Select Hunter Class"])

        } else if (classSelection == "mage") {
            var icon = "images/orb.svg";
            var description = "Summoning the elements is the mage's specialty. A solely ranged attacker, the mage casts spells of various types to attack, as well as defend. Common spell types include: fire, ice, and illusion. the mage's main attribute is magic."
            removeCurrentClassElements();
            addCurrentClassElements("Mage", icon, description, ["Select Mage Class"])

        } else if (classSelection == "cleric") {
            var icon = "images/book.svg";
            var description = "A follower of a deity and a support spell caster. clerics are able to enhance it's parties attributes and abilities as well as hindering it's foes'. Common spell types include: healing, defense, and light. The cleric's main attribute is intuition."
            removeCurrentClassElements();
            addCurrentClassElements("Cleric", icon, description, ["Select cleric Class"])
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



