// import { crayonColors } from "./crayoncolors";
// const crayonColorFilePath = 'crayoncolors.json';
// async function fetchData(fileLocation){
//   let data = await fetch(fileLocation);
//   console.log(data.ok)
//   data = await data.json();
//   return data;
// }
// fetchData(crayonColorFilePath);

//setting global variables
const crayonColors = {
  "White": "#EEEEEE",
  "Black": "#000000",
  "Red": "#ED0A3F",
  "Maroon": "#C32148",
  "Scarlet": "#FD0E35",
  "Brick Red": "#C62D42",
  "English Vermilion": "#CC474B",
  "Madder Lake": "#CC3336",
  "Permanent Geranium Lake": "#E12C2C",
  "Maximum Red": "#D92121",
  "Indian Red": "#B94E48",
  "Orange-Red": "#FF5349",
  "Sunset Orange": "#FE4C40",
  "Bittersweet": "#FE6F5E",
  "Dark Venetian Red": "#B33B24",
  "Venetian Red": "#CC553D",
  "Light Venetian Red": "#E6735C",
  "Vivid Tangerine": "#FF9980",
  "Middle Red": "#E58E73",
  "Burnt Orange": "#FF7F49",
  "Red-Orange": "#FF681F",
  "Orange": "#FF8833",
  "Macaroni and Cheese": "#FFB97B",
  "Middle Yellow Red": "#ECB176",
  "Mango Tango": "#E77200",
  "Yellow-Orange": "#FFAE42",
  "Maximum Yellow Red": "#F2BA49",
  "Banana Mania": "#FBE7B2",
  "Maize": "#F2C649",
  "Orange-Yellow": "#F8D568",
  "Goldenrod": "#FCD667",
  "Dandelion": "#FED85D",
  "Yellow": "#FBE870",
  "Green-Yellow": "#F1E788",
  "Middle Yellow": "#FFEB00",
  "Olive Green": "#B5B35C",
  "Spring Green": "#ECEBBD",
  "Maximum Yellow": "#FAFA37",
  "Canary": "#FFFF99",
  "Lemon Yellow": "#FFFF9F",
  "Maximum Green Yellow": "#D9E650",
  "Middle Green Yellow": "#ACBF60",
  "Inchworm": "#AFE313",
  "Light Chrome Green": "#BEE64B",
  "Yellow-Green": "#C5E17A",
  "Maximum Green": "#5E8C31",
  "Asparagus": "#7BA05B",
  "Granny Smith Apple": "#9DE093",
  "Fern": "#63B76C",
  "Middle Green": "#4D8C57",
  "Green": "#3AA655",
  "Medium Chrome Green": "#6CA67C",
  "Forest Green": "#5FA777",
  "Sea Green": "#93DFB8",
  "Shamrock": "#33CC99",
  "Mountain Meadow": "#1AB385",
  "Jungle Green": "#29AB87",
  "Caribbean Green": "#00CC99",
  "Tropical Rain Forest": "#00755E",
  "Middle Blue Green": "#8DD9CC",
  "Pine Green": "#01786F",
  "Maximum Blue Green": "#30BFBF",
  "Robins Egg Blue": "#00CCCC",
  "Teal Blue": "#008080",
  "Light Blue": "#8FD8D8",
  "Aquamarine": "#95E0E8",
  "Turquoise Blue": "#6CDAE7",
  "Outer Space": "#2D383A",
  "Sky Blue": "#76D7EA",
  "Middle Blue": "#7ED4E6",
  "Blue-Green": "#0095B7",
  "Pacific Blue": "#009DC4",
  "Cerulean": "#02A4D3",
  "Maximum Blue": "#47ABCC",
  "Blue (I)": "#4997D0",
  "Cerulean Blue": "#339ACC",
  "Cornflower": "#93CCEA",
  "Green-Blue": "#2887C8",
  "Midnight Blue": "#00468C",
  "Navy Blue": "#0066CC",
  "Denim": "#1560BD",
  "Blue (III)": "#0066FF",
  "Cadet Blue": "#A9B2C3",
  "Periwinkle": "#C3CDE6",
  "Blue (II)": "#4570E6",
  "Wild Blue Yonder": "#7A89B8",
  "Indigo": "#4F69C6",
  "Manatee": "#8D90A1",
  "Cobalt Blue": "#8C90C8",
  "Celestial Blue": "#7070CC",
  "Blue Bell": "#9999CC",
  "Maximum Blue Purple": "#ACACE6",
  "Violet-Blue": "#766EC8",
  "Blue-Violet": "#6456B7",
  "Ultramarine Blue": "#3F26BF",
  "Middle Blue Purple": "#8B72BE",
  "Purple Heart": "#652DC1",
  "Royal Purple": "#6B3FA0",
  "Violet (II)": "#8359A3",
  "Medium Violet": "#8F47B3",
  "Wisteria": "#C9A0DC",
  "Lavender (I)": "#BF8FCC",
  "Vivid Violet": "#803790",
  "Maximum Purple": "#733380",
  "Purple Mountains Majesty": "#D6AEDD",
  "Fuchsia": "#C154C1",
  "Pink Flamingo": "#FC74FD",
  "Violet (I)": "#732E6C",
  "Brilliant Rose": "#E667CE",
  "Orchid": "#E29CD2",
  "Plum": "#8E3179",
  "Medium Rose": "#D96CBE",
  "Thistle": "#EBB0D7",
  "Mulberry": "#C8509B",
  "Red-Violet": "#BB3385",
  "Middle Purple": "#D982B5",
  "Maximum Red Purple": "#A63A79",
  "Jazzberry Jam": "#A50B5E",
  "Eggplant": "#614051",
  "Magenta": "#F653A6",
  "Cerise": "#DA3287",
  "Wild Strawberry": "#FF3399",
  "Lavender (II)": "#FBAED2",
  "Cotton Candy": "#FFB7D5",
  "Carnation Pink": "#FFA6C9",
  "Violet-Red": "#F7468A",
  "Razzmatazz": "#E30B5C",
  "Pig Pink": "#FDD7E4",
  "Carmine": "#E62E6B",
  "Blush": "#DB5079",
  "Tickle Me Pink": "#FC80A5",
  "Mauvelous": "#F091A9",
  "Salmon": "#FF91A4",
  "Middle Red Purple": "#A55353",
  "Mahogany": "#CA3435",
  "Melon": "#FEBAAD",
  "Pink Sherbert": "#F7A38E",
  "Burnt Sienna": "#E97451",
  "Brown": "#AF593E",
  "Sepia": "#9E5B40",
  "Fuzzy Wuzzy": "#87421F",
  "Beaver": "#926F5B",
  "Tumbleweed": "#DEA681",
  "Raw Sienna": "#D27D46",
  "Van Dyke Brown": "#664228",
  "Tan": "#D99A6C",
  "Desert Sand": "#EDC9AF",
  "Peach": "#FFCBA4",
  "Burnt Umber": "#805533",
  "Apricot": "#FDD5B1",
  "Almond": "#EED9C4",
  "Raw Umber": "#665233",
  "Shadow": "#837050",
  "Raw Sienna (I)": "#E6BC5C",
  "Timberwolf": "#D9D6CF",
  "Gold (I)": "#92926E",
  "Gold (II)": "#E6BE8A",
  "Silver": "#C9C0BB",
  "Copper": "#DA8A67",
  "Antique Brass": "#C88A65",
  "Charcoal Gray": "#736A62",
  "Gray": "#8B8680",
  "Blue-Gray": "#C8C8CD"
}
const howAmbitiousOpts = {
  12: 'very lazy',
  24: 'meh, but I guess I\'ll try',
  36: 'medium ambitious, could use some caffine',
  48: 'motivated, let\'s do this!',
  60: 'in the mood to make a masterpiece.'
};
const howGoodOpts = {
  0: 'bad, very, very bad.',
  12: 'o.k, but there was that one thing....',
  24: 'pretty good, though I swore a few times',
  36: 'good, not great',
  48: 'very good, I recycled and said please and thank you.',
  60: 'a perfect angel'
};
let totalColorOpts = Object.keys(crayonColors).length;
let defaultColor = '#d3d3d3';
let selectedColor = defaultColor;
let numCrayons = null;
let numGridCells = null;
let currentCrayon;
let clickHistory = [];
let colorName = document.getElementById('color-name');

//function to translate viewport height to px
let vwPrtHtPx = window.innerHeight;
let vwPrtWdPx = window.innerWidth;


//function to translate RGB colors to hex colors for use
function RGBToHex(r, g, b) {
  r = parseInt(r).toString(16).toUpperCase();
  g = parseInt(g).toString(16).toUpperCase();
  b = parseInt(b).toString(16).toUpperCase();
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  return "#" + r + g + b;
}

//given dimensions build a grid to the game-board.  if the function is being called by the user loading a saved game, it will accept a savedGame arguement
//the saved game argument will be an object containing key value pairs of the cell Id and the corresponding backgroundColor;
function buildGrid(dimension = 12, savedGame = false) {
  let gameBoard = document.querySelector('.game-board');
  while (gameBoard.hasChildNodes()) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
  gameBoard.style.gridTemplate = `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`;
  //create grid cells and give them ids
  for (let i = 0; i < dimension ** 2; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.id = `cell${i + 1}`;
    //add eventListener to each grid cell to change the color when clicked to the selected color
    gridCell.addEventListener('click', (event) => {
      let historyObj = {};
      historyObj[event.target.id] = event.target.style.backgroundColor;
      clickHistory.push(historyObj);
      if (clickHistory.length > 20) { clickHistory.shift() }
      event.target.style.backgroundColor = selectedColor;
      if (clickHistory.length > 0) {
        let undoBtn = document.getElementById('undo');
        undoBtn.disabled = false;
        undoBtn.classList.remove('disabled');
      }
    })
    gameBoard.appendChild(gridCell);
  }
  //if this is a saved game use the saved game object to apply background colors to the corresponding cells by way of matching ids
  if (savedGame) {
    for (let savedGridCell in savedGame) {
      document.getElementById(savedGridCell).style.backgroundColor = savedGame[savedGridCell];
    }
  }
}


//given a selection build a box of crayons
function buildCrayonBox(totalCrayons = 0, crayonsPerRow) {
  let crayonBoxContainer = document.querySelector('.crayon-box-container');
  let crayonFragment = document.createDocumentFragment();
  if (crayonBoxContainer.hasChildNodes()) {
    while (crayonBoxContainer.firstChild) {
      crayonBoxContainer.removeChild(crayonBoxContainer.firstChild)
    }
  }
  if (totalCrayons === 0) {
    crayonBoxContainer.style.height = '100px'
    crayonBoxContainer.style.width = '100px'
    crayonBoxContainer.style.margin = '10px';
    crayonBoxContainer.style.backgroundImage = "url('./coal.png')";
    crayonBoxContainer.style.backgroundSize = 'cover';
    crayonBoxContainer.style.backgroundPosition = 'center';
    crayonBoxContainer.addEventListener('click', () => {
      selectedColor = '#333333';
      colorName.textContent = 'You were bad, here is what you get to draw with, a lump of coal.';
    })
    selectedColor = '#333333';
    colorName.textContent = 'You were bad, here is what you get to draw with, a lump of coal.';
    colorName.style.color = selectedColor;
  }
  else {
    let rows = Math.round(totalCrayons / crayonsPerRow)
    let i = 0;
    while (i < rows) {
      let crayonRow = document.createElement('div');
      crayonRow.classList.add('crayon-row');
      for (let j = 0; j < crayonsPerRow; j++) {
        let crayonColor = getColor(totalCrayons, (i * crayonsPerRow + j))
        let crayonContainer = document.createElement('div');
        crayonContainer.classList.add('crayon-container');
        let crayonPoint = document.createElement('div');
        crayonPoint.classList.add('crayon-point');
        crayonPoint.style.background = ` conic-gradient(transparent 0deg, transparent 145deg, ${crayonColor} 145deg 180deg, #ddd 195deg, ${crayonColor} 215deg, transparent 215deg, transparent 360deg)`;
        let crayonBody = document.createElement('div');
        crayonBody.classList.add('crayon-body');
        crayonBody.style.backgroundColor = crayonColor;
        let crayonLogoContainer = document.createElement('div');
        crayonLogoContainer.classList.add('crayon-logo-container');
        let crayonLogo = document.createElement('div');
        crayonLogo.classList.add('crayon-logo');
        crayonLogo.textContent = 'Crayola';
        crayonLogoContainer.appendChild(crayonLogo)
        crayonBody.appendChild(crayonLogoContainer);
        let crayonBottom = document.createElement('div');
        crayonBottom.classList.add('crayon-bottom')
        crayonBottom.style.background = `linear-gradient(90deg, ${crayonColor} 15%, white, ${crayonColor} 40% )`;
        crayonContainer.appendChild(crayonPoint);
        crayonContainer.appendChild(crayonBody);
        crayonContainer.appendChild(crayonBottom);
        crayonContainer.style.borderColor = crayonColor;
        crayonRow.appendChild(crayonContainer);
        crayonRow.style.transform = `translateY(-${i * 20}vh)`
      }
      crayonFragment.appendChild(crayonRow)
      i++;
    }
    let crayonBox = document.createElement('div');
    crayonBox.classList.add('crayon-box');
    crayonBox.style.width = `${crayonsPerRow * 3.6}vh`;
    // crayonBox.style.width = `${crayonsPerRow * 30 + 10}px`;
    crayonBox.style.transform = `translateY(-${i * 19 -1}vh) `;
    // crayonBox.style.transform = `translateY(-${i * 175 - 25}px) `;
    let crayonBoxLogo = document.createElement('div');
    crayonBoxLogo.classList.add('crayon-box-logo');
    crayonBoxLogo.textContent = 'CRAYON';
    crayonBox.appendChild(crayonBoxLogo);
    crayonFragment.appendChild(crayonBox);
    crayonBoxContainer.appendChild(crayonFragment);
    // crayonBoxContainer.style.height = `${i * 50 + 250 + 25}px`
    crayonBoxContainer.style.height = `${i * 7 + 25+ 1}vh`
  }
}

//function to return a color.  take the total color options available and divide by the number of crayons, call this number n.  given a count select the n * count color from the color options
//this will be the crayon color.  the count will increment for every crayon being populated
//ex you have 20 color options and you want 5 crayons, n will = 4 (20/5), and the colors will be those found at the the 0 index, 4 index, 8 index, 12 index and 16 index color (4*0, 4*1,4*2,4*3,4*4)
//the first two colors will always be white and black
function getColor(totalColors, count) {
  let bgColor = '';
  let colors = Object.keys(crayonColors);
  if (count === 0) {
    bgColor = crayonColors[colors[0]]
  }
  else if (count === 1) {
    bgColor = crayonColors[colors[1]]
  }
  else {
    let colorIndex = Math.floor(totalColorOpts / totalColors) * count;
    let color = colors[colorIndex]
    bgColor = crayonColors[color]
  }
  return bgColor;
}




/* ----Event listeners for control buttons----*/

//range input to deteremine grid dimensions
let gridOptions = document.getElementById('grid-options');
gridOptions.addEventListener('change', () => {
  numGridCells = parseInt(gridOptions.value);
  document.getElementById('how-ambitious-label').textContent = howAmbitiousOpts[numGridCells]
})

//range input to deteremine amount of crayon options you have to choose from
let crayonOptions = document.getElementById('crayon-options');
crayonOptions.addEventListener('change', () => {
  numCrayons = parseInt(crayonOptions.value);
  document.getElementById('how-good-label').textContent = howGoodOpts[numCrayons]
})

//start button event listener
let startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
  if (numCrayons === null || numGridCells === null) {
    alert('Please select a laziness and goodness level.')
  }
  else {
    document.getElementById('instructions-prompt-container').style.display = 'none';
    buildGrid(numGridCells);
    buildCrayonBox(numCrayons, 12);
    //for each crayon element add an event listener that will listen for the click event
    //on click it will move the crayon to be highlighted above the box of crayons and identified as the selected color
    //the previously selected crayon / color will return to its original position  
    let previousCrayon = null;
    let crayonContainers = document.querySelectorAll('.crayon-container');
    crayonContainers.forEach((crayonContainer) => {
      crayonContainer.addEventListener('click', () => {
        currentCrayon = crayonContainer;
        selectedColor = currentCrayon.style.borderColor;
        let curRow = currentCrayon.parentElement;
        let allRows = curRow.parentNode.children;
        let allRowsArray = Array.from(allRows);
        let curRowNum = allRowsArray.indexOf(curRow)+1;
        if (previousCrayon == null) {
          previousCrayon = currentCrayon;
        }
        previousCrayon.style.transform = "";
        let width = currentCrayon.clientWidth;
        let height = currentCrayon.clientHeight;
        let crayonsInRow = Array.from(curRow.children).length;
        let middleOfRow = crayonsInRow * width / 2;
        let positionInRow = (Array.from(curRow.children).indexOf(currentCrayon) + 1) * width;
        let xTranslation = middleOfRow - positionInRow + width / 2 - (height*.2*.5)/2; //move the difference from between the middle of the row and current position in the row, plus half the width of the crayon container, minus half the 'invisible' part of the point (which is itself half the point div - so 1/4 the point div)
        currentCrayon.style.transform = 'translateY(-' + (20+height/2+.05*vwPrtHtPx*curRowNum+8*curRowNum) + 'px) translateX(' + (xTranslation) + 'px) rotateZ(-90deg)';
        currentCrayon.style.margin
        previousCrayon = currentCrayon;
        for (let colorId in crayonColors) {
          let selectedColorArray = selectedColor.substring(4, selectedColor.length - 1).split(',')
          let selectedColorFormatted = RGBToHex(selectedColorArray[0], selectedColorArray[1], selectedColorArray[2]);
          if (crayonColors[colorId] === selectedColorFormatted) {
            colorName.textContent = colorId;
            colorName.style.color = selectedColor;
            colorName.style.textShadow = '3px 3px 5px #000, -1px 1px 1px #444, 1px -1px 1px #444,-1px -1px 1px #444';
          }
        }
      })
    })
  }
})

//clear board event listener
document.getElementById('clear-board').addEventListener('click', () => {
  let confirmation = window.confirm('Are you sure?')
  if (confirmation) {
    let gridCells = document.querySelectorAll('.grid-cell');
    let i = 0;
    gridCells.forEach(element => {
      setTimeout(() => element.style.backgroundColor = defaultColor, i * 2)
      i++
    })
  }
  clickHistory = [];
  let undoBtn = document.getElementById('undo');
        undoBtn.disabled = false;
        undoBtn.classList.remove('disabled');
})

//new board event listener
document.getElementById('new-board').addEventListener('click', () => {
  let gridSize = window.prompt('Grid size please (between 1 and 60)');
  if (gridSize === null) { return }
  gridSize = parseInt(gridSize);
  while (isNaN(gridSize) || gridSize > 60 || gridSize < 1) {
    gridSize = window.prompt('Please input a number between 1 and 60');
    if (gridSize === null) { return }
    gridSize = parseInt(gridSize);
  }
  clickHistory = [];
  let undoBtn = document.getElementById('undo');
        undoBtn.disabled = true;
        undoBtn.classList.add('disabled');
  buildGrid(gridSize)
})

//clear cell event listener
document.getElementById('clear-cell').addEventListener('click', () => {
  if (currentCrayon !== undefined) {
    currentCrayon.style.transform = '';
    colorName.style.color = '#333333';
    colorName.textContent = 'Currently Using Eraser - Select A Color To Draw';
    selectedColor = defaultColor;
  }
  else {
    selectedColor = defaultColor;
    colorName.textContent = 'Currently Using Eraser - Select A Color To Draw'
  }
})

//undo button event listener
let clickCounter = 0;
document.getElementById('undo').addEventListener('click', event => {
  let cellId = Object.keys(clickHistory[clickHistory.length - 1])[0];
  let priorColor = clickHistory[clickHistory.length - 1][cellId];
  document.getElementById(cellId).style.backgroundColor = priorColor;
  clickHistory.pop();
  if (clickHistory.length === 0) {
    event.target.disabled = true; event.target.classList.add('disabled')
  }
})


//shuffle event listener
document.getElementById('shuffle').addEventListener('click', () => {
  let confirmation = window.confirm('Are you sure?  This cannot be undone.')
  if (confirmation) {
    let gridCells = document.querySelectorAll('.grid-cell');
    let gridCellColors = [];
    let randomizedBgColorArray = []
    for (let gridCell of gridCells) {
      gridCellColors.push(gridCell.style.backgroundColor)
    }
    for (let i = gridCellColors.length; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      let color = gridCellColors.splice(index, 1);
      randomizedBgColorArray.push(color);
    }
    for (let i = 0; i < randomizedBgColorArray.length; i++) {
      gridCells[i].style.backgroundColor = randomizedBgColorArray[i]
    }
  }
  clickHistory = [];
  let undoBtn = document.getElementById('undo');
        undoBtn.disabled = true;
        undoBtn.classList.add('disabled');
})

//save event listener
let savedGames = {};
document.getElementById('save').addEventListener('click', () => {
  let name = window.prompt('Please input a name')
  let savedGameNames = Object.keys(savedGames);
  while (savedGameNames.includes(name)) {
    name = window.prompt('That name is already in use, Please input a name')
  }
  savedGames[name] = {};
  let gridCells = document.querySelectorAll('.grid-cell');
  for (let gridCell of gridCells) {
    let cellID = gridCell.id;
    let cellBgColor = gridCell.style.backgroundColor;
    savedGames[name][cellID] = cellBgColor;
  }
  console.log(savedGames)
  let savedGameListItem = document.createElement('li');
  savedGameListItem.textContent = name;
  savedGameListItem.id = name;
  document.getElementById('saved-games-list').appendChild(savedGameListItem);
   let loadBtn = document.getElementById('load');
  loadBtn.disabled = false;
  loadBtn.classList.remove('disabled');
})

//load event listener
document.getElementById('load').addEventListener('click', () => {
  document.getElementById('saved-games-list-container').style.display = 'flex';
  let savedGamesList = document.querySelectorAll('#saved-games-list li');
  savedGamesList.forEach(savedGame => {
    savedGame.addEventListener('click', () => {
      let savedGameBoard = savedGames[savedGame.id];
      let dimensions = Math.sqrt(Object.keys(savedGameBoard).length)
      buildGrid(dimensions, savedGameBoard)
      document.getElementById('saved-games-list-container').style.display = 'none';
    })
  })
  clickHistory = [];
  let undoBtn = document.getElementById('undo');
  undoBtn.disabled = true;
  undoBtn.classList.add('disabled');
})

//close load screen
document.querySelector('button.close-button').addEventListener('click', () => {
  document.getElementById('saved-games-list-container').style.display = 'none';
})

