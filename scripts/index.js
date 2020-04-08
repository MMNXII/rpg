const rpg = (function () {
  const container = document.getElementById('container');
  let section;
  let name;

  const createDiv = (divClassId) => {
    section = document.createElement('div');
    section.id = divClassId;
    container.appendChild(section);

    return section;
  };

  const createBtn = (names) => {
    const btnNames = names;
    btnNames.forEach((btn) => {
      const button = document.createElement('button');
      button.textContent = btn;

      section.appendChild(button);

      return button;
    });
  };

  const removeCurrentClassElements = () => {
    if (section.id == 'classesDescriptionDiv') {
      section.innerHTML = '';
    } else if (section.hasChildNodes()) {
      container.removeChild(section);
    }
  };

  const noAlert = () => {
    alert('Be Gone Then!!');
  };

  const fadeDownAnime = (target) => {
    const animation = anime({
      targets: target,
      duration: 800,
      easing: 'easeInOutSine',
      translateY: ['-1rem', 0],
      opacity: [0, 1],
      direction: 'normal',
    });
  };

  const showNameSection = () => {
    removeCurrentClassElements();

    section = createDiv('enterNameDiv');

    const headerTxt = 'Very well, what shall thy name be?';
    const headerEl = document.createElement('p');
    headerEl.className = 'subHeadTxt';
    headerEl.id = 'enterNameTxt';
    headerEl.textContent = headerTxt;
    section.appendChild(headerEl);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    section.appendChild(nameInput);

    createBtn(['Enter Name']);
    const nameBtn = document
      .getElementById('enterNameDiv')
      .getElementsByTagName('button')[0];
    nameBtn.addEventListener(
      'click',
      (enterName = () => {
        if (nameInput.value == '') {
          return alert('please enter a name');
        }
        if (nameInput.value.length < 2 || nameInput.value.length > 10) {
          return alert('please enter a shorter name');
        }
        name = nameInput.value;

        classes();
      }),
    );

    fadeDownAnime('#enterNameDiv');
  };

  const classes = () => {
    removeCurrentClassElements();
    section = createDiv('classesDiv');

    const headerEl = document.createElement('p');
    const headerTxt = `${name}, which class will thy represent?`;
    headerEl.className = 'subHeadTxt';
    headerEl.id = 'classesHeaderTxt';
    headerEl.textContent = headerTxt;
    section.appendChild(headerEl);

    const subHeaderEl = document.createElement('p');
    const subHeaderTxt = '(click class to preview)';
    subHeaderEl.className = 'subHeadTxt';
    subHeaderEl.id = 'classesSubHeaderTxt';
    subHeaderEl.textContent = subHeaderTxt;
    section.appendChild(subHeaderEl);

    createBtn(['Warrior', 'Hunter', 'Mage', 'Cleric']);
    const classBtns = document
      .getElementById('classesDiv')
      .getElementsByTagName('button');

    classBtns[0].id = 'warriorBtn';
    classBtns[1].id = 'hunterBtn';
    classBtns[2].id = 'mageBtn';
    classBtns[3].id = 'clericBtn';

    section.addEventListener(
      'click',
      (selectClass = (btn) => {
        if (btn.target.id == 'warriorBtn') {
          showClass('warrior');
        } else if (btn.target.id == 'hunterBtn') {
          showClass('hunter');
        } else if (btn.target.id == 'mageBtn') {
          showClass('mage');
        } else if (btn.target.id == 'clericBtn') {
          showClass('cleric');
        } else if (btn.target != btn) {
        }
      }),
    );

    const classesDiv = document.getElementById('classesDiv');
    section = createDiv('classesDescriptionDiv');
    classesDiv.appendChild(section);

    fadeDownAnime('#classesDiv');
  };

  const showClass = (classSelection) => {
    const addCurrentClassElements = (
      classHeader,
      classIcon,
      classDescription,
      classCreateBtn,
    ) => {
      headerEl = document.createElement('p');
      headerEl.id = 'classesDescriptionTitle';
      headerEl.className = 'subHeadTxt';
      headerTxt = classHeader;
      headerEl.textContent = headerTxt;
      section.appendChild(headerEl);

      headerIcon = document.createElement('img');
      headerIcon.src = classIcon;
      headerIcon.className = 'classIcon';
      headerIcon.id = `${classHeader.toLowerCase()}Icon`;
      section.appendChild(headerIcon);

      descriptionEl = document.createElement('p');
      descriptionEl.id = 'classesDescriptionTxt';
      descriptionEl.className = 'subHeadTxt';
      descriptionEl.style.width = '70%';
      descriptionTxt = classDescription;
      descriptionEl.textContent = descriptionTxt;
      section.appendChild(descriptionEl);

      createBtn([classCreateBtn]);

      const classSelect = document.getElementById('classesDescriptionTxt')
        .nextSibling;
      classSelect.addEventListener('click', enterClass);

      fadeDownAnime(section);
    };

    if (classSelection == 'warrior') {
      const icon = 'images/sword.svg';
      const description = "Commonly seen on the front lines of battle, the mighty warrior is skilled in close quarters combat and brute force. Common weapons include two-handed swords, axes, and polearms. The warrior's main attribute is strength.";
      removeCurrentClassElements();
      addCurrentClassElements('Warrior', icon, description, [
        'Select Warrior Class',
      ]);
    } else if (classSelection == 'hunter') {
      const icon = 'images/bow.svg';
      const description = "Offering a wider skill set than warriors, hunters can attack from distance as well as close quarters. Common weapons include: ranged weapons, one-handed swords and daggers. The hunter's main attribute is agility.";
      removeCurrentClassElements();
      addCurrentClassElements('Hunter', icon, description, [
        'Select Hunter Class',
      ]);
    } else if (classSelection == 'mage') {
      const icon = 'images/orb.svg';
      const description = "Summoning the elements is the mage's specialty. A solely ranged attacker, the mage casts spells of various types to attack, as well as defend. Common spell types include: fire, ice, and illusion. the mage's main attribute is magic.";
      removeCurrentClassElements();
      addCurrentClassElements('Mage', icon, description, ['Select Mage Class']);
    } else if (classSelection == 'cleric') {
      const icon = 'images/book.svg';
      const description = "A follower of a deity and a support spell caster. clerics are able to enhance it's parties attributes and abilities as well as hindering it's foes'. Common spell types include: healing, defense, and light. The cleric's main attribute is intuition.";
      removeCurrentClassElements();
      addCurrentClassElements('Cleric', icon, description, [
        'Select Cleric Class',
      ]);
    }
  };

  const enterClass = () => {
    section.parentNode.remove();

    section = createDiv('classSelect');
    const headerIcon = document.createElement('img');
    headerIcon.className = 'classIcon';
    headerIcon.style.width = '70px';
    headerIcon.style.height = '70px';
    headerIcon.style.marginBottom = '1em';

    if (headerEl.textContent == 'Warrior') {
      headerIcon.src = 'images/sword.svg';
      section.appendChild(headerIcon);
      showAttr([60, 70, 20, 10, 10]);
    } else if (headerEl.textContent == 'Hunter') {
      headerIcon.src = 'images/bow.svg';
      section.appendChild(headerIcon);
      showAttr([50, 30, 70, 10, 10]);
    } else if (headerEl.textContent == 'Mage') {
      headerIcon.src = 'images/orb.svg';
      section.appendChild(headerIcon);
      showAttr([40, 10, 20, 70, 30]);
    } else if (headerEl.textContent == 'Cleric') {
      headerIcon.src = 'images/book.svg';
      section.appendChild(headerIcon);
      showAttr([40, 10, 10, 70, 40]);
    }
  };

  const showAttr = (attrValues) => {
    const classDisplay = document.createElement('div');
    classDisplay.id = 'classDisplayDiv';
    section.appendChild(classDisplay);

    const attrList = document.createElement('ul');
    classDisplay.appendChild(attrList);

    const attrNames = ['Health', 'Strength', 'Agility', 'Magic', 'Intuition'];

    for (let i = 0; i < 5; i++) {
      const attrItem = document.createElement('li');
      attrItem.className = 'attribute';
      attrItem.style.display = 'inline-block';
      attrItem.textContent = `${attrNames[i]}: ${attrValues[i]}`;

      attrList.appendChild(attrItem);

      const infoArrow = document.createElement('img');
      infoArrow.className = 'infoArrow';
      infoArrow.id = i;
      infoArrow.src = 'images/pointArrow.svg';
      attrList.appendChild(infoArrow);
    }

    (attrDescription = () => {
      const arrow = document
        .getElementById('classDisplayDiv')
        .getElementsByClassName('infoArrow');
      const arrowArray = Array.from(arrow);

      arrowArray.forEach((arr) => {
        arr.addEventListener(
          'mouseover',
          (showStats = () => {
            const arrAnime = anime({
              targets: arr,
              duration: 300,
              easing: 'easeInOutSine',
              opacity: [1, 0],
              direction: 'alternate',
            });

            statDiv = document.createElement('div');
            statDiv.id = 'statDiv';

            statDesc = document.createElement('p');
            statDesc.className = 'statDescription';

            if (arr.id == '0') {
              statDiv.style.bottom = '180px';
              statDesc.textContent = "The player's vitality, it's what keeps them alive!";
            } else if (arr.id == '1') {
              statDiv.style.bottom = '150px';
              statDesc.textContent = 'Enables the player to wield heavier weapons, and fight with fists!';
            } else if (arr.id == '2') {
              statDiv.style.bottom = '115px';
              statDesc.textContent = 'Quickness and elusiveness, especially useful in battle';
            } else if (arr.id == '3') {
              statDiv.style.bottom = '80px';
              statDesc.textContent = 'The Magic power within the player, used to cast spells';
            } else if (arr.id == '4') {
              statDiv.style.bottom = '45px';
              statDesc.textContent = 'Gives the player awareness of their surroundings, provides an advtange in battle';
            }

            attrAnime = (x) => {
              var x = window.matchMedia('(max-width: 700px)');
              x.addListener(attrAnime);

              if (x.matches) {
                const statDivAnime = anime({
                  targets: statDiv,
                  duration: 1000,
                  width: '200px',
                  translateY: [0, '12em'],
                  height: '100px',
                  direction: 'normal',
                });
                const statTxtAnime = anime({
                  targets: statDesc,
                  duration: 1000,
                  delay: 300,
                  opacity: [0, 1],
                });
              } else {
                const statDivAnime = anime({
                  targets: statDiv,
                  duration: 1000,
                  width: '200px',
                  translateX: [0, '12em'],
                  height: '100px',
                  direction: 'normal',
                });
                const statTxtAnime = anime({
                  targets: statDesc,
                  duration: 1000,
                  delay: 300,
                  opacity: [0, 1],
                });
              }
            };

            attrAnime();

            section.appendChild(statDiv);
            statDiv.appendChild(statDesc);
          }),
        );

        arr.addEventListener(
          'mouseout',
          (removeStats = () => {
            section.removeChild(statDiv);
          }),
        );
      });
    })();

    fadeDownAnime(headerIcon);

    const iconRotate = anime({
      targets: '.classIcon',
      duration: 1000,
      easing: 'easeInOutSine',
      rotate: [0, 360],
      opacity: [0, 1],
      easing: 'easeInOutSine',
    });
    const arrowAppear = anime({
      targets: '.infoArrow',
      duration: 1000,
      delay: 3000,
      easing: 'easeInOutSine',
      opacity: [0, 1],
      easing: 'easeInOutSine',
    });
    const attrdisplayCreateX = anime({
      targets: '#classDisplayDiv',
      duration: 1000,
      width: ['0px', '170px'],
      easing: 'easeInOutSine',
    });
    const attrdisplayCreateY = anime({
      targets: '#classDisplayDiv',
      height: '183px',
      duration: 1000,
      delay: 1000,
      easing: 'easeInOutSine',
    });
    const attrAppear = anime({
      targets: '.attribute',
      delay: 2000,
      easing: 'easeInOutSine',
      translateY: ['-1rem', 0],
      opacity: [0, 1],
    });
  };

  (title = () => {
    section = createDiv('titleDiv');

    const head = document.createElement('p');
    head.textContent = 'Ye Olde RPG';
    head.id = 'titleTxt';
    section.appendChild(head);

    const animation = anime({
      targets: '#titleDiv',
      duration: 2500,
      delay: 500,
      easing: 'easeInOutSine',
      opacity: [0, 1],
      translateX: ['-3rem', 0],
      direction: 'normal',
    });
  })();

  (intro = () => {
    section = createDiv('introDiv');

    const introTxt = 'Welcome adventurer to Arpege. A land of enchantment and intrigue, a great journey awaits thee here...are thoust ready to begin?';
    const introEl = document.createElement('p');
    introEl.className = 'subHeadTxt';
    introEl.id = 'introTxt';
    introEl.textContent = introTxt;
    section.appendChild(introEl);

    createBtn(['Enter The Realm!', 'Nayeth!']);
    const introBtnYes = document
      .getElementById('introDiv')
      .getElementsByTagName('button')[0];
    introBtnYes.addEventListener('click', showNameSection);

    const introBtnNo = document
      .getElementById('introDiv')
      .getElementsByTagName('button')[1];
    introBtnNo.addEventListener('click', noAlert);

    const animation = anime({
      targets: '#introDiv',
      duration: 1000,
      delay: 4000,
      easing: 'easeInOutSine',
      opacity: [0, 1],
      direction: 'normal',
    });
  })();

  (reset = () => {
    let reset = document.createElement('button');
    reset.textContent = 'reset';
    const srcsDiv = document.getElementById('sources');
    srcsDiv.appendChild(reset);

    reset.addEventListener(
      'click',
      (reset = () => {
        container.innerHTML = '';
        title();
        intro();
      }),
    );

    const animation = anime({
      targets: '#sources',
      duration: 1000,
      delay: 4000,
      opacity: [0, 1],
      easing: 'easeInOutSine',
    });
  })();
}());
