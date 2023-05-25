// PS: Do you want to quickly and easily grab the email addresses of the Connections that you made last night?

// https://dashboard.hopin.com/connections

// Here is some JavaScript for you to paste into your browser's Developer Tools console (by pressing F12 key, or right-clicking "Inspect Element")

let emails = [
  ...document.querySelectorAll(`h1.hpn-Text+div>div>div>div>div>div:nth-child(2)>p`)
]
.map(el => el.innerText);

console.log( `\n${ emails.join("\n") }\n\n` );

emails;
