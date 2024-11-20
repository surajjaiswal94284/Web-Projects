async function searchWord() {
    const word = document.getElementById('searchInput').value.trim();
    if (!word) return;

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (Array.isArray(data)) {
            const wordData = data[0];
            let html = `
                <div class="result-card p-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="mb-0">${wordData.word}</h2>
                        ${
                            wordData.phonetics.length > 0 && wordData.phonetics[0].audio
                                ? `<i class="bi bi-volume-up fs-4 audio-btn" onclick="playAudio('${wordData.phonetics[0].audio}')"></i>`
                                : ''
                        }
                    </div>
                   
            `;

            wordData.meanings.forEach((meaning) => {
                html += `
                    <div class="mt-3">
                        <h5 class="text-primary">${meaning.partOfSpeech}</h5>
                        <ul class="list-unstyled">
                            ${meaning.definitions
                                .map(
                                    (def) => `
                                <li class="mb-2">
                                    <p class="mb-1">• ${def.definition}</p>
                                    ${
                                        def.example
                                            ? `<p class="text-muted mb-0"><small>Example: "${def.example}"</small></p>`
                                            : ''
                                    }
                                </li>
                            `
                                )
                                .join('')}
                        </ul>
                        ${
                            meaning.synonyms.length > 0
                                ? `<p class="mb-0"><strong>Synonyms:</strong> ${meaning.synonyms.join(', ')}</p>`
                                : ''
                        }
                        ${
                            meaning.antonyms.length > 0
                                ? `<p class="mb-0"><strong>Antonyms:</strong> ${meaning.antonyms.join(', ')}</p>`
                                : ''
                        }
                    </div>
                `;
            });

            html += '</div>';
            document.getElementById('result').innerHTML = html;
        } else {
            document.getElementById('result').innerHTML = `
                <div class="alert alert-warning" role="alert">
                    No definitions found for "${word}".
                </div>
            `;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `
            <div class="alert alert-danger" role="alert">
                An error occurred while fetching the data.
            </div>
        `;
    }
}

function playAudio(audioUrl) {
    new Audio(audioUrl).play();
}

// Enable search on Enter key press
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchWord();
    }
});

// Focus search input on page load
window.onload = function () {
    document.getElementById('searchInput').focus();
};
