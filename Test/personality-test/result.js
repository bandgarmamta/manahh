const h1 = document.querySelector('.heading');
const personality = localStorage.getItem('personality');
h1.textContent = "Predicted Personality: " + personality;
const desc = document.querySelector(".desc");

const resultDescription = {
    serious : "You maintain a sober demeanor. You are solemn and not given to emotional expression. No pretentions. You are realistically aware of your own capabilities, but you are also aware of your own limitations and are not tempted by vanity or self-importance.",
    responsible : "You treat others fairly, are trustworthy, honor your commitments, and are environmentally aware. Responsibility infuses itself into all aspects of our lives - athletics, giving others opportunities to shine, and making the right decision.",
    dependable: "You have several characteristics whether at home, at work, or in society. You may be counted on to do what you say. You are a rock for those around you and are emotionally stable. Others may trust you will be available when you are needed",
    lively:`You have an energetic personality, are always on alert, and prefer being active as opposed to just hanging around. Note that a "lively discussion" isn't necessarily a happy discussion; it could be a spirited or even heated conversation where all parties are actively involved.`,
    extrovert: "You are often described as the life of the party. Your outgoing, vibrant nature draws people to you, and you have a hard time turning away the attention. You thrive off the interaction."
}
Object.entries(resultDescription).map(element => {
    if(element[0] === personality){
        desc.textContent = element[1];
    }
})