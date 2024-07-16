document.addEventListener('DOMContentLoaded', function() {
    const data = {
        fruits: [
            {
                word: 'Apple',
                meaning: 'Apel',
                description: 'Apel adalah buah yang sering dimakan mentah atau dijadikan jus.'
            },
            {
                word: 'Banana',
                meaning: 'Pisang',
                description: 'Pisang adalah buah panjang yang biasanya berwarna kuning.'
            },
            {
                word: 'Orange',
                meaning: 'Jeruk',
                description: 'Jeruk adalah buah berwarna oranye dengan daging yang mempunyai rasa asam manis.'
            },
            {
                word: 'Grapes',
                meaning: 'Anggur',
                description: 'Anggur adalah buah berbentuk bulat kecil, biasanya berwarna ungu atau hijau.'
            },
            {
                word: 'Strawberry',
                meaning: 'Stroberi',
                description: 'Stroberi adalah buah kecil berwarna merah dengan biji-biji kecil di permukaannya.'
            },
            {
                word: 'Pineapple',
                meaning: 'Nanas',
                description: 'Nanas adalah buah tropis berbentuk oval dengan kulit berduri dan rasanya manis.'
            },
            {
                word: 'Watermelon',
                meaning: 'Semangka',
                description: 'Semangka adalah buah besar berwarna hijau dengan daging merah manis dan banyak air.'
            },
            {
                word: 'Mango',
                meaning: 'Mangga',
                description: 'Mangga adalah buah tropis berdaging tebal, berwarna kuning atau hijau dengan aroma harum.'
            },
            {
                word: 'Cherry',
                meaning: 'Ceri',
                description: 'Ceri adalah buah kecil bulat berwarna merah atau hitam dengan rasa manis.'
            },
            {
                word: 'Pear',
                meaning: 'Pir',
                description: 'Pir adalah buah berbentuk bulat, biasanya berwarna hijau atau kuning dengan daging yang lembut.'
            }
        ],

        vegetables: [
            {
                word: 'Carrot',
                meaning: 'Wortel',
                description: 'Wortel adalah sayuran yang sering digunakan dalam sup dan salad.'
            },
            {
                word: 'Broccoli',
                meaning: 'Brokoli',
                description: 'Brokoli adalah sayuran yang kaya akan serat dan vitamin.'
            }
        ]
    };

// language simulator by Arum
    // memorize game later 

    const cardContainer = document.getElementById('card-container');
    const categoryButtons = document.querySelectorAll('.category-button');

    // Function to display cards based on selected category
    function displayCards(category) {
        cardContainer.innerHTML = '';

        data[category].forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${item.word}</h3>
                        <p>${item.meaning}</p>
                    </div>
                    <div class="card-back">
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            card.addEventListener('click', function() {
                card.classList.toggle('flipped');
            });
            cardContainer.appendChild(card);
        });
    }

    // Display initial cards (fruits category)
    displayCards('fruits');

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayCards(category);
        });
    });

    const buttons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            pages.forEach(page => {
                if (page.id === target) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });
});

const tensesData = {
    present: {
        name: "Present Tense",
        formula: "Subject + Verb (1st form) + Object",
        examples: [
            { sentence: "I play football every day.", translation: "Saya bermain sepak bola setiap hari." },
            { sentence: "She teaches English at the university.", translation: "Dia mengajar bahasa Inggris di universitas." }
        ]
    },
    past: {
        name: "Past Tense",
        formula: "Subject + Verb (2nd form) + Object",
        examples: [
            { sentence: "They visited Paris last summer.", translation: "Mereka mengunjungi Paris musim panas lalu." },
            { sentence: "He finished his homework before dinner.", translation: "Dia menyelesaikan pekerjaan rumahnya sebelum makan malam." }
        ]
    },
    future: {
        name: "Future Tense",
        formula: "Subject + will/shall + Verb (1st form) + Object",
        examples: [
            { sentence: "I will travel to Japan next month.", translation: "Saya akan bepergian ke Jepang bulan depan." },
            { sentence: "She shall complete her project by Friday.", translation: "Dia akan menyelesaikan proyeknya pada hari Jumat." }
        ]
    },
    presentContinuous: {
        name: "Present Continuous Tense",
        formula: "Subject + am/is/are + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "I am reading a book now.", translation: "Saya sedang membaca buku sekarang." },
            { sentence: "They are playing football in the park.", translation: "Mereka sedang bermain sepak bola di taman." }
        ]
    },
    pastContinuous: {
        name: "Past Continuous Tense",
        formula: "Subject + was/were + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "She was watching TV when I called.", translation: "Dia sedang menonton TV ketika saya menelepon." },
            { sentence: "They were playing football when it started to rain.", translation: "Mereka sedang bermain sepak bola ketika mulai hujan." }
        ]
    },
    futureContinuous: {
        name: "Future Continuous Tense",
        formula: "Subject + will be + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "I will be waiting for you at the station.", translation: "Saya akan menunggu kamu di stasiun." },
            { sentence: "They will be playing football at this time tomorrow.", translation: "Mereka akan bermain sepak bola pada saat ini besok." }
        ]
    },
    presentPerfect: {
        name: "Present Perfect Tense",
        formula: "Subject + have/has + Verb (3rd form) + Object",
        examples: [
            { sentence: "I have finished my homework.", translation: "Saya telah menyelesaikan pekerjaan rumah saya." },
            { sentence: "She has visited the museum.", translation: "Dia telah mengunjungi museum." }
        ]
    },
    pastPerfect: {
        name: "Past Perfect Tense",
        formula: "Subject + had + Verb (3rd form) + Object",
        examples: [
            { sentence: "I had finished my homework before dinner.", translation: "Saya telah menyelesaikan pekerjaan rumah saya sebelum makan malam." },
            { sentence: "She had visited the museum before it closed.", translation: "Dia telah mengunjungi museum sebelum ditutup." }
        ]
    },
    futurePerfect: {
        name: "Future Perfect Tense",
        formula: "Subject + will have + Verb (3rd form) + Object",
        examples: [
            { sentence: "I will have finished my homework by 8 PM.", translation: "Saya akan menyelesaikan pekerjaan rumah saya pada pukul 8 malam." },
            { sentence: "She will have visited the museum by tomorrow.", translation: "Dia akan mengunjungi museum besok." }
        ]
    },
    presentPerfectContinuous: {
        name: "Present Perfect Continuous Tense",
        formula: "Subject + have/has been + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "I have been reading for two hours.", translation: "Saya telah membaca selama dua jam." },
            { sentence: "They have been playing football since morning.", translation: "Mereka telah bermain sepak bola sejak pagi." }
        ]
    },
    pastPerfectContinuous: {
        name: "Past Perfect Continuous Tense",
        formula: "Subject + had been + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "I had been reading for two hours before he came.", translation: "Saya telah membaca selama dua jam sebelum dia datang." },
            { sentence: "They had been playing football for an hour before it started to rain.", translation: "Mereka telah bermain sepak bola selama satu jam sebelum mulai hujan." }
        ]
    },
    futurePerfectContinuous: {
        name: "Future Perfect Continuous Tense",
        formula: "Subject + will have been + Verb (1st form) + ing + Object",
        examples: [
            { sentence: "I will have been reading for two hours by the time you arrive.", translation: "Saya akan membaca selama dua jam saat kamu tiba." },
            { sentence: "They will have been playing football for an hour by the time the match ends.", translation: "Mereka akan bermain sepak bola selama satu jam saat pertandingan berakhir." }
        ]
    }
};


// Menampilkan konten tenses berdasarkan kategori yang dipilih
function showTenses(category) {
    const categoryData = tensesData[category];

    if (!categoryData) return;

    const contentContainer = document.getElementById('tenses-content');
    contentContainer.innerHTML = `
        <h3>${categoryData.name}</h3>
        <p><strong>Formula:</strong> ${categoryData.formula}</p>
        <h4>Examples:</h4>
        <ul>
            ${categoryData.examples.map(example => `
                <li>
                    <strong>English:</strong> ${example.sentence}<br>
                    <em>Indonesia:</em> ${example.translation}
                </li>
            `).join('')}
        </ul>
    `;
}

// Mengatur event listener untuk tombol kategori tenses
    const tensesButtons = document.querySelectorAll('#tenses .category-button');
    tensesButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Menandai tombol yang aktif
            tensesButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Menampilkan konten sesuai dengan kategori yang dipilih
            const category = this.getAttribute('data-category');
            showTenses(category);
        });
    });

    // Menampilkan default kategori saat halaman dimuat
    showTenses('present'); // Menampilkan kategori present secara default


// game
const cardsData = {
    fruits: [
        { name: 'Apple', img: 'Apel' },
        { name: 'Banana', img: 'Pisang' },
        { name: 'Orange', img: 'Jeruk' },
        { name: 'Grapes', img: 'Anggur' },
        { name: 'Strawberry', img: 'Stroberi' },
        { name: 'Pineapple', img: 'Nanas' },
        { name: 'Apple', img: 'Apel' },
        { name: 'Banana', img: 'Pisang' },
        { name: 'Orange', img: 'Jeruk' },
        { name: 'Grapes', img: 'Anggur' },
        { name: 'Strawberry', img: 'Stroberi' },
        { name: 'Pineapple', img: 'Nanas' },
        
    ],

    letters: [
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'E', img: 'E' },
        { name: 'F', img: 'F' },
        { name: 'A', img: 'A' },
        { name: 'B', img: 'B' },
        { name: 'C', img: 'C' },
        { name: 'D', img: 'D' },
        { name: 'E', img: 'E' },
        { name: 'F', img: 'F' }
    ],
    numbers: [
        { name: '1', img: '1' },
        { name: '2', img: '2' },
        { name: '3', img: '3' },
        { name: '4', img: '4' },
        { name: '5', img: '5' },
        { name: '6', img: '6' },
        { name: '1', img: '1' },
        { name: '2', img: '2' },
        { name: '3', img: '3' },
        { name: '4', img: '4' },
        { name: '5', img: '5' },
        { name: '6', img: '6' }
    ],
    shapes: [
        { name: 'Circle', img: 'O' },
        { name: 'Square', img: '□' },
        { name: 'Triangle', img: '△' },
        { name: 'Star', img: '★' },
        { name: 'Heart', img: '♥' },
        { name: 'Diamond', img: '♦' },
        { name: 'Circle', img: 'O' },
        { name: 'Square', img: '□' },
        { name: 'Triangle', img: '△' },
        { name: 'Star', img: '★' },
        { name: 'Heart', img: '♥' },
        { name: 'Diamond', img: '♦' }
    ]
};

let chosenCategory = 'fruits';
let chosenCards = [];
let chosenCardsId = [];
let matchedCards = [];

const gameBoard = document.getElementById('game-board');

// Mengacak kartu
function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

// Membuat papan permainan
function createBoard() {
    gameBoard.innerHTML = '';
    const cardsArray = shuffle([...cardsData[chosenCategory]]);
    cardsArray.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card-game');
        cardElement.dataset.id = index;
        cardElement.dataset.card = card.name;
        cardElement.innerHTML = `
            <div class="card-game-inner">
                <div class="card-game-front"></div>
                <div class="card-game-back">${card.img}</div>
            </div>
        `;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Membalik kartu
function flipCard() {
    const cardId = this.dataset.id;
    const cardName = this.dataset.card;
    chosenCards.push(cardName);
    chosenCardsId.push(cardId);
    this.classList.add('flipped');

    console.log('chosenCards:', chosenCards);
    console.log('chosenCardsId:', chosenCardsId);

    if (chosenCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

// Memeriksa kecocokan
function checkForMatch() {
    const cards = document.querySelectorAll('.card-game');
    const [optionOneId, optionTwoId] = chosenCardsId;

    console.log('checkForMatch:', chosenCards, optionOneId, optionTwoId);

    if (chosenCards[0] === chosenCards[1] && optionOneId !== optionTwoId) {
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        matchedCards.push(chosenCards[0]);

        console.log('matchedCards:', matchedCards);
    } else {
        setTimeout(() => {
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].classList.remove('flipped');
        }, 1000);
    }

    chosenCards = [];
    chosenCardsId = [];

    if (matchedCards.length === cardsData[chosenCategory].length / 2) {
        setTimeout(showModal, 500, 'Congratulations! You found all matches!');
    }
}

// Menampilkan modal
function showModal(message) {
    const modal = document.getElementById('alert-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    modalMessage.textContent = message;
    modal.style.display = 'block';

    closeButton.onclick = function() {
        modal.style.display = 'none';
        resetGame();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            resetGame();
        }
    }
}

// Mereset game
function resetGame() {
    matchedCards = [];
    createBoard();
}

// Mengubah kategori
function changeCategory(event) {
    const selectedButton = event.target;
    chosenCategory = selectedButton.dataset.category;

    document.querySelectorAll('.category-button-game').forEach(button => {
        button.classList.remove('active');
    });

    selectedButton.classList.add('active');
    resetGame();
}

// Menambahkan event listener ke tombol kategori
document.querySelectorAll('.category-button-game').forEach(button => {
    button.addEventListener('click', changeCategory);
});

// Inisialisasi papan permainan
createBoard();

