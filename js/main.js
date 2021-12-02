document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

    textbox.addEventListener('change', (e) => {
        const text = textbox.value;
        const translation = translate(text);
        display(translation, message);
    });

});

const translate = (s1) => {
    var kons = "bcdfghjklmnqprstvxzBCDFGHJKLMNQPRSTVXZ";
    var s2 = "";
    for (var i = 0; i < s1.length; i++) {
        var c = s1.charAt(i);
        s2 = s2 + c;
        if (kons.indexOf(c) >= 0) {
            s2 = s2 + "o" + c;
        }
    }
    console.log(s2);
    return s2;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
