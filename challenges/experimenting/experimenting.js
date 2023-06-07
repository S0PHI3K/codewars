function addTitle(embed_code, title){
 const insertTitle =  embed_code.slice(0, 7) + ` title="${title}"` + embed_code.slice(7);
 console.log("Complete iframe:", insertTitle)
}

addTitle('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.4153633197823!2d-1.5318661724540148!3d53.83119606805065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795beb7a47780f%3A0x500442250d38b574!2sEton%20Court!5e0!3m2!1sen!2suk!4v1684392718180!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', 'Google Maps of Eton Court')

// A title is included in YouTube videos, so this will only be required for Google Maps. 