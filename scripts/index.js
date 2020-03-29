(function() {

    // var anime = require("anime");

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

    fadeDownAnime = (target) => {
        var animation = anime({
            targets: target,
            duration: 800,
            easing: "easeInOutSine",
            translateY: ["-1rem", 0],
            opacity: [0, 1],
            direction: "normal"
        });
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

        fadeDownAnime("#enterNameDiv");                
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

            section.addEventListener("click", selectClass = (btn) => {

                if (btn.target.id == "warriorBtn") {
                    showClass("warrior")

                } else if (btn.target.id == "hunterBtn") {
                    showClass("hunter")
                    
                } else if (btn.target.id == "mageBtn") {
                    showClass("mage")

                } else if (btn.target.id == "clericBtn") {
                    showClass("cleric")

                } else if (btn.target != btn) {
                    
                    
                }                

        });

        var classesDiv = document.getElementById("classesDiv");
        section = createDiv("classesDescriptionDiv");
        classesDiv.appendChild(section);

        fadeDownAnime("#classesDiv");
        

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
                headerIcon.id = classHeader.toLowerCase() + "Icon";
                section.appendChild(headerIcon);

            descriptionEl = document.createElement("p");
                descriptionEl.id = "classesDescriptionTxt"
                descriptionEl.className = "subHeadTxt";
                descriptionEl.style.width = "70%";
            descriptionTxt = classDescription;
                descriptionEl.textContent = descriptionTxt;
                section.appendChild(descriptionEl);

            createBtn([classCreateBtn]);

            var classSelect = document.getElementById("classesDescriptionTxt").nextSibling;
                classSelect.addEventListener("click", enterClass);

                fadeDownAnime(section);
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
            addCurrentClassElements("Cleric", icon, description, ["Select Cleric Class"])
        }
    }

    enterClass = () => {
        section.parentNode.remove();

        section = createDiv("classSelect");
        var headerIcon = document.createElement("img");
            headerIcon.className = "classIcon";
            headerIcon.style.width = "70px";
            headerIcon.style.height = "70px";
            headerIcon.style.marginBottom = "1em";
        
        if (headerEl.textContent == "Warrior") {
            headerIcon.src = "images/sword.svg";
            section.appendChild(headerIcon);
            showAttr([60,70,20,10,10]);

        } else if (headerEl.textContent == "Hunter") {
            headerIcon.src = "images/bow.svg";
            section.appendChild(headerIcon);
            showAttr([50,30,70,10,10]);

        } else if (headerEl.textContent == "Mage") {
            headerIcon.src = "images/orb.svg";
            section.appendChild(headerIcon);
            showAttr([40,10,20,70,30]);

        } else if (headerEl.textContent == "Cleric") {
            headerIcon.src = "images/book.svg";
            section.appendChild(headerIcon);
            showAttr([40,10,10,70,40]);

        }

    }

    showAttr = (attrValues) => {

        var classDisplay = document.createElement("div");
            classDisplay.id = "classDisplayDiv";
            section.appendChild(classDisplay);

        var attrList = document.createElement("ul");
            classDisplay.appendChild(attrList);

        var attrNames = ["Health", "Strength", "Agility", "Magic", "Intuition"];

        for (var i = 0; i < 5; i++) {
            var attrItem = document.createElement("li");
                attrItem.className = "attribute";
                attrItem.style.display = "inline-block";
                attrItem.textContent = `${attrNames[i]}: ${attrValues[i]}`;

                attrList.appendChild(attrItem);

            var infoArrow = document.createElement("img");
                infoArrow.className = "infoArrow";
                infoArrow.id = i;
                infoArrow.src = "images/pointArrow.svg"
                attrList.appendChild(infoArrow);
        }

        (attrDescription = () => {
            var arrow = document.getElementById("classDisplayDiv").getElementsByClassName("infoArrow");
            var arrowArray = Array.from(arrow);
    
    
                arrowArray.forEach(arr => {
                    arr.addEventListener("mouseover", showStats = () => {
                        var arrAnime = anime({
                            targets: arr,
                            duration: 300,
                            easing: "easeInOutSine",
                            opacity: [1,0],
                            direction: "alternate"
                        })
                        
    
                        statDiv = document.createElement("div");
                            statDiv.id = "statDiv";

                        statDesc = document.createElement("p");
                            statDesc.className = "statDescription";
                        
                            if (arr.id == "0") {
                                statDiv.style.bottom = "180px";
                                statDesc.textContent = "The player's vitality, it's what keeps them alive!";

                            } else if (arr.id == "1") {
                                statDiv.style.bottom = "150px";
                                statDesc.textContent = "Enables the player to wield heavier weapons, and fight with fists!";

                            } else if (arr.id == "2") {
                                statDiv.style.bottom = "115px";
                                statDesc.textContent = "Quickness and elusiveness, especially useful in battle";

                            } else if (arr.id == "3") {
                                statDiv.style.bottom = "80px";
                                statDesc.textContent = "The Magic power within the player, used to cast spells";

                            } else if (arr.id == "4") {
                                statDiv.style.bottom = "45px";
                                statDesc.textContent = "Gives the player awareness of their surroundings, provides an advtange in battle";

                            }    
    
                        attrAnime = (x) => {
                            var x = window.matchMedia("(max-width: 700px)");
                            x.addListener(attrAnime);


                            if (x.matches) {
                                var statDivAnime = anime({
                                    targets: statDiv,
                                    duration: 1000,
                                    width: "200px",
                                    translateY: [0,"12em"],
                                    height: "100px",
                                    direction: "normal",
        
                                })
                                var statTxtAnime = anime({
                                    targets: statDesc,
                                    duration: 1000,
                                    delay: 300,
                                    opacity: [0,1]
                                })
                                
                            } else {
                                var statDivAnime = anime({
                                    targets: statDiv,
                                    duration: 1000,
                                    width: "200px",
                                    translateX: [0,"12em"],
                                    height: "100px",
                                    direction: "normal",
        
                                })
                                var statTxtAnime = anime({
                                    targets: statDesc,
                                    duration: 1000,
                                    delay: 300,
                                    opacity: [0,1]
                                })
            
                            }

                        }

                        attrAnime();

                        section.appendChild(statDiv);
                        statDiv.appendChild(statDesc);
                    })
    
                    arr.addEventListener("mouseout", removeStats = () => {
                        section.removeChild(statDiv);
                    })
                })
        })();


        
        
        fadeDownAnime(headerIcon);
        
        var iconRotate = anime({
            targets: ".classIcon",
            duration: 1000,
            easing: "easeInOutSine",
            rotate: [0,360],
            opacity: [0, 1],
            easing: "easeInOutSine"
        })
        var arrowAppear = anime({
            targets: ".infoArrow",
            duration: 1000,
            delay: 3000,
            easing: "easeInOutSine",
            opacity: [0, 1],
            easing: "easeInOutSine"
        })
        var attrdisplayCreateX = anime({
            targets: "#classDisplayDiv",
            duration: 1000,
            width: ["0px", "170px"],
            easing: "easeInOutSine"
        })
        var attrdisplayCreateY = anime({
            targets: "#classDisplayDiv",
            height: "183px",
            duration: 1000,
            delay: 1000,
            easing: "easeInOutSine"
        })
        var attrAppear = anime({
            targets: ".attribute",
            delay: 2000,
            easing: "easeInOutSine",
            translateY: ["-1rem", 0],
            opacity: [0, 1],
        });
    };




    (title = () => {
        section = createDiv("titleDiv");

        var head = document.createElement("p");
            head.textContent = "Ye Olde RPG";
            head.id = "titleTxt";
            section.appendChild(head);

        var animation = anime({
            targets: "#titleDiv",
            duration: 2500,
            delay: 500,
            easing: "easeInOutSine",
            opacity: [0, 1],
            translateX: ["-3rem", 0],
            direction: "normal"
        });
    })();
        

    (intro = () => {
        
        section = createDiv("introDiv");

        var introTxt = `Welcome adventurer to Arpege. A land of enchantment and intrigue, a great journey awaits thee here...are thoust ready to begin?`;
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

        var animation = anime({
            targets: "#introDiv",
            duration: 1000,
            delay: 4000,
            easing: "easeInOutSine",
            opacity: [0, 1],
            direction: "normal"
        });

    })();

    (reset = () => {
        var reset = document.createElement("button");
            reset.textContent = "reset";
        var srcsDiv = document.getElementById("sources");
            srcsDiv.appendChild(reset);

            reset.addEventListener("click", reset = () => {
                container.innerHTML = "";
                    title();
                    intro();
                })


            var animation = anime({ 
                targets: "#sources",
                duration: 1000,
                delay: 4000,
                opacity: [0,1],
                easing: "easeInOutSine"

            });

    })();

})()



