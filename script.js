// ARMOR DATA DATABASE
// Add more armors to this array following the same format
const armors = [
    {
        id: "mk1",
        name: "Mark I",
        category: "prototype",
        status: "Destroyed",
        features: ["Crude Flamethrowers", "Manual Rocket Launcher", "Jet Boots (Single Use)", "Bulletproof Iron Shell"],
        description: "The very first suit built in a cave. Heavy, clunky, but the birth of a legacy.",
        image: "https://via.placeholder.com/300x400/333/fff?text=Mark+I"
    },
    {
        id: "mk3",
        name: "Mark III",
        category: "standard",
        status: "Museum Piece",
        features: ["Gold-Titanium Alloy", "Repulsor Rays", "Shoulder Mounted Guns", "Flare Deployers"],
        description: "The classic red and gold armor. Solved the icing problem and integrated full weapons systems.",
        image: "https://via.placeholder.com/300x400/7a0000/fff?text=Mark+III"
    },
    {
        id: "mk5",
        name: "Mark V (Suitcase)",
        category: "specialist",
        status: "Destroyed",
        features: ["Portable Deployment", "Lightweight Plating", "Emergency Protection", "Silver/Red Aesthetics"],
        description: "The emergency suitcase suit. Sacrifices durability for extreme portability.",
        image: "https://via.placeholder.com/300x400/550000/fff?text=Mark+V"
    },
    {
        id: "mk7",
        name: "Mark VII",
        category: "standard",
        status: "Active",
        features: ["Laser Guided Deployment", "Tri-Barrel Lasers", "Additional Thrusters", "Heavy Missile Battery"],
        description: "Deployed during the Battle of New York. Capable of wrapping around the user mid-air.",
        image: "https://via.placeholder.com/300x400/7a0000/fff?text=Mark+VII"
    },
    {
        id: "mk33",
        name: "Mark XXXIII (Silver Centurion)",
        category: "specialist",
        status: "Destroyed (Clean Slate)",
        features: ["Enhanced Energy Output", "Vibranium Daggers", "Magnetic Field Generator", "Reinforced Chest"],
        description: "A distinct energy-focus suit with the classic Silver Centurion comic look.",
        image: "https://via.placeholder.com/300x400/550000/fff?text=Mark+33"
    },
    {
        id: "mk44",
        name: "Mark XLIV (Hulkbuster)",
        category: "buster",
        status: "Active",
        features: ["Satellite Deployment (Veronica)", "Jackhammer Arm", "Cage Trap System", "Self-Repairing Parts"],
        description: "Designed specifically to restrain the Hulk. Massive, heavily armored, and modular.",
        image: "https://via.placeholder.com/300x400/330000/fff?text=Hulkbuster"
    },
    {
        id: "mk50",
        name: "Mark L",
        category: "nano",
        status: "Destroyed",
        features: ["Nanotech Deployment", "Shape-shifting Weaponry", "Self-Regeneration", "Zero-G Flight"],
        description: "The Bleeding Edge armor. Stored entirely within the Arc Reactor unit on the chest.",
        image: "https://via.placeholder.com/300x400/7a0000/fff?text=Mark+50"
    },
    {
        id: "mk85",
        name: "Mark LXXXV",
        category: "nano",
        status: "Legendary",
        features: ["Infinity Stone Integration", "Energy Shield", "Lightning Refocuser", "Maximized Durability"],
        description: "The final armor. Combines the versatility of nanotech with the strength of classic designs.",
        image: "https://via.placeholder.com/300x400/7a0000/fff?text=Mark+85"
    }
];

// DOM ELEMENTS
const grid = document.getElementById('armor-grid');
const btns = document.querySelectorAll('.btn');
const modal = document.getElementById('armor-modal');
const closeBtn = document.querySelector('.close-btn');

// INITIAL LOAD
window.addEventListener('DOMContentLoaded', () => {
    displayArmors(armors);
});

// DISPLAY FUNCTION
function displayArmors(armorList) {
    grid.innerHTML = armorList.map(armor => {
        return `
            <div class="card" onclick="openModal('${armor.id}')">
                <img src="${armor.image}" alt="${armor.name}" class="card-img">
                <div class="card-body">
                    <h3 class="card-title">${armor.name}</h3>
                    <span class="card-cat">${armor.category.toUpperCase()}</span>
                </div>
            </div>
        `;
    }).join('');
}

// FILTER FUNCTION
function filterSelection(category) {
    // Update active button
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter data
    if (category === 'all') {
        displayArmors(armors);
    } else {
        const filtered = armors.filter(armor => armor.category === category);
        displayArmors(filtered);
    }
}

// MODAL LOGIC
function openModal(id) {
    const armor = armors.find(a => a.id === id);
    
    document.getElementById('modal-title').innerText = armor.name;
    document.getElementById('modal-category').innerText = armor.category.toUpperCase();
    document.getElementById('modal-status').innerText = armor.status;
    document.getElementById('modal-img').src = armor.image;
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = armor.features.map(feature => `<li>${feature}</li>`).join('');
    
    modal.style.display = "block";
}

// CLOSE MODAL
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}