var quotes = [
    "expect sadness like you expect rain. both, cleanse you.",
    "if the ocean can calm itself, so can you. we are both salt water mixed with air.",
    "\"i love myself.\" the quietest. simplest. most powerful. revolution. ever.",
    "Just because someone desires you, it does not mean that they value you. Read it over. Again. Let those words resonate in your mind.",
    "i am mine. before i am ever anyone else's.",
    "\"No\" might make them angry but it will make you free.",
    "When I am afraid to speak is when i speak. That is when it is most important.",
    "where you are. is not who you are. -circumstances",
    "If someone does not want me it is not the end of the world. But if I do not want me, the world is nothing but endings.",
    "i have always been the woman of my dreams.",
    "grieve. so that you can be free to feel something else.",
    "do not choose the lesser life. do you hear me. do you hear me. Choose the life that is. yours. the life that is seducing your lungs. That is dripping down your chin.",
    "sit in the ocean. it is one of the best medicines on the planet. -the water",
    "if we must both be right. we will lose each other. -exile",
    "chemistry is you touching my arm and it setting fire to my mind",
    "i bleed every month. but do not die. how am i not magic. -the lie",
    "Desire is the kind of thing that eats you and leaves you starving.",
    "it is being honest about my pain that makes me invincible.",
    "deep down in your cells. you know the truth. you are exquisite. and yes. you are that powerful. and it scares you.",
    "you do not need others to agree with your heartbeat. to live. so then. you do not need others approval to be your own.",
    "be softer with you. you are a breathing thing. a memory to someone. a home to a life.",
    "you see your face. you see a flaw. how, if you are the only one who has this face. -the beauty construct",
    "do not put your hand in the mouth of loneliness. its teeth are soft but it will scar you for life. do not be seduced by the lonely ones",
    "there is you and you. this is a relationship. this is the most important relationship. -home",
    "fall apart. please just, fall apart. open your mouth and hurt. hurt the size of everything it is. -dam",
    "she asked 'you are in love what does it look like' to which i replied 'like everything i've ever lost come back to me.'",
    "we return to each other in waves. this is how water loves.",
    "every protest. every voice. every sound we have made. in defense of our existence. has shaken the entire universe. it is trembling.",
    "be easy. take your time. you are coming home to yourself.",
    "i will tell you, my daughter of your worth not your beauty everyday. your beauty is a given. every being is born beautiful. knowing your worth can save your life. raising you on beauty alone, you will be starved. you will be raw. you will be weak. easy stomach. always in need of someone telling you how beautiful you are.",
    "i don't think people understand that you can forgive a person and not allow them back into your life. that is possible, very possible.",
    "there is peaceful. there is wild. i am both at the same time"
    
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (32));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
